'use client'

import * as React from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

interface CounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 2,
  className,
}: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    if (latest >= 1000) {
      return Math.round(latest).toLocaleString()
    }
    return Math.round(latest).toString()
  })

  React.useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, {
      duration,
      ease: 'easeOut',
    })
    return controls.stop
  }, [inView, value, duration, count])

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
