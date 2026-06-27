'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Heart,
  Users,
  Mail,
  Newspaper,
  DollarSign,
  RefreshCw,
  Shield,
  TrendingUp,
  Inbox,
} from 'lucide-react'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/shared/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedCounter } from '@/components/shared/animated-counter'

interface AdminData {
  ok: boolean
  summary: {
    totalDonated: number
    donationCount: number
    pendingVolunteers: number
    newMessages: number
    subscriberCount: number
  }
  donations: Array<{
    id: string
    fullName: string
    email: string
    amount: number
    currency: string
    method: string
    frequency: string
    program: string | null
    status: string
    createdAt: string
  }>
  volunteers: Array<{
    id: string
    fullName: string
    email: string
    phone: string
    skills: string
    interests: string
    status: string
    createdAt: string
  }>
  messages: Array<{
    id: string
    fullName: string
    email: string
    subject: string
    message: string
    status: string
    createdAt: string
  }>
  subscribers: Array<{
    id: string
    email: string
    name: string | null
    source: string
    createdAt: string
  }>
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function AdminView() {
  const [data, setData] = React.useState<AdminData | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  const load = React.useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin')
      const json = await res.json()
      if (json.ok) {
        setData(json)
      } else {
        setError(json.error || 'Could not load data')
      }
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }, [])

  React.useEffect(() => {
    load()
  }, [load])

  const stats = data?.summary

  return (
    <>
      <PageHero
        eyebrow="Admin Dashboard"
        title="Foundation Management Console"
        description="An at-a-glance view of donations, volunteer applications, contact messages, and newsletter subscribers. A demonstration CMS for staff and trustees."
        image="/placeholders/hero-admin.svg"
      />

      <section className="memorial-pattern py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Overview"
              title="Live dashboard"
              align="left"
            />
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={load}
                disabled={loading}
              >
                <RefreshCw className={`mr-1.5 h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Shield className="h-3.5 w-3.5 text-emerald-600" /> Demo mode
              </span>
            </div>
          </div>

          {error && (
            <div className="mt-6 rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
              {error}
            </div>
          )}

          {/* Stat cards */}
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-5">
            <StatCard
              icon={DollarSign}
              label="Total Donated"
              value={stats ? `$${stats.totalDonated.toLocaleString()}` : '—'}
              accent="gold"
            />
            <StatCard
              icon={Heart}
              label="Donations"
              value={stats?.donationCount ?? 0}
            />
            <StatCard
              icon={Users}
              label="Pending Volunteers"
              value={stats?.pendingVolunteers ?? 0}
            />
            <StatCard
              icon={Inbox}
              label="New Messages"
              value={stats?.newMessages ?? 0}
            />
            <StatCard
              icon={Mail}
              label="Subscribers"
              value={stats?.subscriberCount ?? 0}
            />
          </div>

          {/* Tabs */}
          <Tabs defaultValue="donations" className="mt-10">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
              <TabsTrigger value="donations" className="gap-1.5">
                <DollarSign className="h-3.5 w-3.5" /> Donations
              </TabsTrigger>
              <TabsTrigger value="volunteers" className="gap-1.5">
                <Users className="h-3.5 w-3.5" /> Volunteers
              </TabsTrigger>
              <TabsTrigger value="messages" className="gap-1.5">
                <Inbox className="h-3.5 w-3.5" /> Messages
              </TabsTrigger>
              <TabsTrigger value="subscribers" className="gap-1.5">
                <Mail className="h-3.5 w-3.5" /> Subscribers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="donations" className="mt-6">
              <DataTable
                title="Recent donations"
                columns={['Donor', 'Amount', 'Method', 'Frequency', 'Programme', 'Status', 'Date']}
                loading={loading}
                rows={data?.donations.map((d) => ({
                  id: d.id,
                  cells: [
                    <div key="n">
                      <div className="font-medium">{d.fullName}</div>
                      <div className="text-xs text-muted-foreground">{d.email}</div>
                    </div>,
                    <span key="a" className="font-serif text-base font-bold text-navy dark:text-gold">
                      ${d.amount.toLocaleString()}
                    </span>,
                    <Badge key="m" variant="outline">{d.method}</Badge>,
                    <span key="f" className="text-sm">{d.frequency}</span>,
                    <span key="p" className="text-sm text-muted-foreground">{d.program || '—'}</span>,
                    <Badge key="s" variant="outline" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
                      {d.status}
                    </Badge>,
                    <span key="d" className="text-xs text-muted-foreground">{formatDate(d.createdAt)}</span>,
                  ],
                })) ?? []}
              />
            </TabsContent>

            <TabsContent value="volunteers" className="mt-6">
              <DataTable
                title="Volunteer applications"
                columns={['Name', 'Phone', 'Interests', 'Skills', 'Status', 'Date']}
                loading={loading}
                rows={data?.volunteers.map((v) => ({
                  id: v.id,
                  cells: [
                    <div key="n">
                      <div className="font-medium">{v.fullName}</div>
                      <div className="text-xs text-muted-foreground">{v.email}</div>
                    </div>,
                    <span key="p" className="text-sm">{v.phone}</span>,
                    <div key="i" className="flex flex-wrap gap-1 max-w-xs">
                      {(v.interests || '').split(',').filter(Boolean).slice(0, 3).map((i) => (
                        <Badge key={i} variant="secondary" className="text-[10px]">{i}</Badge>
                      ))}
                    </div>,
                    <div key="s" className="flex flex-wrap gap-1 max-w-xs">
                      {(v.skills || '').split(',').filter(Boolean).slice(0, 3).map((s) => (
                        <Badge key={s} variant="outline" className="text-[10px]">{s}</Badge>
                      ))}
                    </div>,
                    <Badge key="st" variant="outline" className={
                      v.status === 'pending' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200' :
                      v.status === 'approved' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200' :
                      ''
                    }>{v.status}</Badge>,
                    <span key="d" className="text-xs text-muted-foreground">{formatDate(v.createdAt)}</span>,
                  ],
                })) ?? []}
              />
            </TabsContent>

            <TabsContent value="messages" className="mt-6">
              <DataTable
                title="Contact messages"
                columns={['From', 'Subject', 'Message', 'Status', 'Date']}
                loading={loading}
                rows={data?.messages.map((m) => ({
                  id: m.id,
                  cells: [
                    <div key="n">
                      <div className="font-medium">{m.fullName}</div>
                      <div className="text-xs text-muted-foreground">{m.email}</div>
                    </div>,
                    <Badge key="s" variant="outline">{m.subject}</Badge>,
                    <span key="m" className="text-sm text-muted-foreground line-clamp-2 max-w-md">
                      {m.message}
                    </span>,
                    <Badge key="st" variant="outline" className={
                      m.status === 'new' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' : ''
                    }>{m.status}</Badge>,
                    <span key="d" className="text-xs text-muted-foreground">{formatDate(m.createdAt)}</span>,
                  ],
                })) ?? []}
              />
            </TabsContent>

            <TabsContent value="subscribers" className="mt-6">
              <DataTable
                title="Newsletter subscribers"
                columns={['Email', 'Name', 'Source', 'Date']}
                loading={loading}
                rows={data?.subscribers.map((s) => ({
                  id: s.id,
                  cells: [
                    <span key="e" className="font-medium">{s.email}</span>,
                    <span key="n" className="text-sm text-muted-foreground">{s.name || '—'}</span>,
                    <Badge key="so" variant="outline">{s.source}</Badge>,
                    <span key="d" className="text-xs text-muted-foreground">{formatDate(s.createdAt)}</span>,
                  ],
                })) ?? []}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: typeof Heart
  label: string
  value: number | string
  accent?: 'gold'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
    >
      <Card className="lift-on-hover border-border bg-card">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
              accent === 'gold'
                ? 'bg-gold/15 text-gold-dark dark:text-gold'
                : 'bg-navy/5 dark:bg-white/5 text-navy dark:text-gold'
            }`}>
              <Icon className="h-5 w-5" />
            </div>
            {typeof value === 'number' && value > 0 && (
              <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
            )}
          </div>
          <div className="mt-3 font-serif text-2xl font-bold text-navy dark:text-gold">
            {typeof value === 'number' ? (
              <AnimatedCounter value={value} />
            ) : (
              value
            )}
          </div>
          <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
            {label}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function DataTable({
  title,
  columns,
  rows,
  loading,
}: {
  title: string
  columns: string[]
  rows: Array<{ id: string; cells: React.ReactNode[] }>
  loading: boolean
}) {
  return (
    <Card className="border-border bg-card">
      <CardContent className="p-0">
        <div className="flex items-center justify-between border-b border-border p-4">
          <h3 className="font-serif text-base text-navy dark:text-gold">{title}</h3>
          <span className="text-xs text-muted-foreground">{rows.length} records</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                {columns.map((c) => (
                  <th
                    key={c}
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <tr key={i} className="border-b border-border">
                    {columns.map((_, j) => (
                      <td key={j} className="px-4 py-3">
                        <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="px-4 py-10 text-center text-sm text-muted-foreground">
                    No records yet.
                  </td>
                </tr>
              ) : (
                rows.map((r) => (
                  <tr key={r.id} className="border-b border-border transition-colors hover:bg-muted/40">
                    {r.cells.map((cell, idx) => (
                      <td key={idx} className="px-4 py-3 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
