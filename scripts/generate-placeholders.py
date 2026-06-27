#!/usr/bin/env python3
"""
Generate a set of themed SVG placeholder images for the RAS MUTA Foundation site.
These replace Unsplash URLs so all images load locally and reliably.

Each placeholder is a navy-gradient background with a gold icon label and
a small caption — on-brand for the memorial foundation aesthetic.
"""

from pathlib import Path

OUT = Path('/home/z/my-project/public/placeholders')
OUT.mkdir(parents=True, exist_ok=True)

# Common CSS / styling tokens
NAVY_DARK = '#061429'
NAVY = '#0a1f3d'
NAVY_LIGHT = '#1e3a5f'
GOLD = '#c9a961'
GOLD_LIGHT = '#e0c98c'
CREAM = '#faf7f0'

def svg(width: int, height: int, label: str, sublabel: str = '', icon: str = '') -> str:
    """Return an SVG string with a navy gradient, gold icon, and label."""
    icon_svg = ''
    if icon == 'mic':
        # Microphone icon
        icon_svg = f'''
        <g transform="translate({width//2 - 22}, {height//2 - 60})" fill="none" stroke="{GOLD}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="14" y="2" width="16" height="28" rx="8" />
          <path d="M6 22 a16 16 0 0 0 32 0" />
          <line x1="22" y1="38" x2="22" y2="48" />
          <line x1="14" y1="48" x2="30" y2="48" />
        </g>'''
    elif icon == 'graduation':
        icon_svg = f'''
        <g transform="translate({width//2 - 30}, {height//2 - 60})" fill="{GOLD}">
          <path d="M30 8 L60 20 L30 32 L0 20 Z" />
          <path d="M12 26 L12 38 Q30 48 48 38 L48 26 L30 34 Z" opacity="0.7"/>
          <line x1="60" y1="20" x2="60" y2="36" stroke="{GOLD}" stroke-width="2"/>
          <circle cx="60" cy="38" r="3" />
        </g>'''
    elif icon == 'users':
        icon_svg = f'''
        <g transform="translate({width//2 - 30}, {height//2 - 60})" fill="{GOLD}">
          <circle cx="15" cy="15" r="9" />
          <path d="M0 45 Q0 30 15 30 Q30 30 30 45 Z" />
          <circle cx="45" cy="15" r="9" opacity="0.7"/>
          <path d="M30 45 Q30 30 45 30 Q60 30 60 45 Z" opacity="0.7"/>
        </g>'''
    elif icon == 'heart':
        icon_svg = f'''
        <g transform="translate({width//2 - 22}, {height//2 - 55})" fill="{GOLD}">
          <path d="M22 48 C22 48 4 36 4 20 C4 12 10 6 16 6 C19 6 22 8 22 12 C22 8 25 6 28 6 C34 6 40 12 40 20 C40 36 22 48 22 48 Z"/>
        </g>'''
    elif icon == 'award':
        icon_svg = f'''
        <g transform="translate({width//2 - 24}, {height//2 - 60})" fill="none" stroke="{GOLD}" stroke-width="2.5">
          <circle cx="24" cy="20" r="16" />
          <path d="M16 32 L12 48 L24 42 L36 48 L32 32" stroke-linejoin="round"/>
          <text x="24" y="26" text-anchor="middle" fill="{GOLD}" stroke="none" font-size="16" font-family="Georgia, serif">★</text>
        </g>'''
    elif icon == 'stethoscope':
        icon_svg = f'''
        <g transform="translate({width//2 - 24}, {height//2 - 60})" fill="none" stroke="{GOLD}" stroke-width="2.5" stroke-linecap="round">
          <path d="M8 8 L8 24 Q8 36 20 36 Q32 36 32 24 L32 8" />
          <circle cx="40" cy="36" r="6" />
          <line x1="20" y1="36" x2="20" y2="46" />
        </g>'''
    elif icon == 'sparkles':
        icon_svg = f'''
        <g transform="translate({width//2 - 24}, {height//2 - 60})" fill="{GOLD}">
          <path d="M24 4 L28 18 L42 22 L28 26 L24 40 L20 26 L6 22 L20 18 Z"/>
          <circle cx="42" cy="40" r="3" opacity="0.7"/>
          <circle cx="8" cy="42" r="2" opacity="0.7"/>
        </g>'''
    elif icon == 'book':
        icon_svg = f'''
        <g transform="translate({width//2 - 26}, {height//2 - 58})" fill="{GOLD}">
          <path d="M4 8 Q4 4 8 4 L26 4 L26 44 L8 44 Q4 44 4 40 Z" opacity="0.85"/>
          <path d="M26 4 L44 4 Q48 4 48 8 L48 40 Q48 44 44 44 L26 44 Z" />
          <line x1="26" y1="4" x2="26" y2="44" stroke="{NAVY_DARK}" stroke-width="1.5"/>
        </g>'''
    elif icon == 'building':
        icon_svg = f'''
        <g transform="translate({width//2 - 28}, {height//2 - 60})" fill="none" stroke="{GOLD}" stroke-width="2.5">
          <rect x="4" y="10" width="48" height="40" />
          <line x1="4" y1="50" x2="52" y2="50"/>
          <line x1="14" y1="20" x2="20" y2="20"/>
          <line x1="28" y1="20" x2="34" y2="20"/>
          <line x1="42" y1="20" x2="48" y2="20"/>
          <line x1="14" y1="30" x2="20" y2="30"/>
          <line x1="28" y1="30" x2="34" y2="30"/>
          <line x1="42" y1="30" x2="48" y2="30"/>
          <line x1="14" y1="40" x2="20" y2="40"/>
          <line x1="28" y1="40" x2="34" y2="40"/>
          <line x1="42" y1="40" x2="48" y2="40"/>
        </g>'''
    elif icon == 'mail':
        icon_svg = f'''
        <g transform="translate({width//2 - 26}, {height//2 - 55})" fill="none" stroke="{GOLD}" stroke-width="2.5" stroke-linejoin="round">
          <rect x="2" y="8" width="48" height="32" rx="2"/>
          <path d="M2 10 L26 28 L50 10"/>
        </g>'''
    elif icon == 'radio':
        icon_svg = f'''
        <g transform="translate({width//2 - 26}, {height//2 - 60})" fill="none" stroke="{GOLD}" stroke-width="2.5" stroke-linecap="round">
          <rect x="6" y="16" width="40" height="28" rx="3"/>
          <line x1="6" y1="24" x2="46" y2="24"/>
          <circle cx="34" cy="34" r="4" fill="{GOLD}"/>
          <line x1="14" y1="32" x2="22" y2="32"/>
          <line x1="14" y1="38" x2="22" y2="38"/>
          <path d="M14 16 L34 6" />
          <circle cx="34" cy="6" r="2" fill="{GOLD}"/>
        </g>'''
    elif icon == 'document':
        icon_svg = f'''
        <g transform="translate({width//2 - 22}, {height//2 - 60})" fill="none" stroke="{GOLD}" stroke-width="2.5" stroke-linejoin="round">
          <path d="M6 4 L30 4 L40 14 L40 44 L6 44 Z"/>
          <path d="M30 4 L30 14 L40 14"/>
          <line x1="12" y1="22" x2="34" y2="22"/>
          <line x1="12" y1="30" x2="34" y2="30"/>
          <line x1="12" y1="38" x2="26" y2="38"/>
        </g>'''
    elif icon == 'hands':
        icon_svg = f'''
        <g transform="translate({width//2 - 28}, {height//2 - 58})" fill="none" stroke="{GOLD}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 30 L4 18 Q4 14 8 14 Q12 14 12 18 L12 26"/>
          <path d="M12 26 L12 12 Q12 8 16 8 Q20 8 20 12 L20 24"/>
          <path d="M20 24 L20 10 Q20 6 24 6 Q28 6 28 10 L28 22"/>
          <path d="M28 22 L28 14 Q28 10 32 10 Q36 10 36 14 L36 30"/>
          <path d="M36 30 L36 22 Q36 18 40 18 Q44 18 44 22 L44 36 Q44 48 32 48 Q20 48 16 42 L8 32"/>
        </g>'''
    elif icon == 'avatar':
        # Generic person silhouette for avatars
        icon_svg = f'''
        <g transform="translate({width//2 - 25}, {height//2 - 30})" fill="{GOLD_LIGHT}" opacity="0.9">
          <circle cx="25" cy="18" r="14"/>
          <path d="M0 60 Q0 36 25 36 Q50 36 50 60 Z"/>
        </g>'''

    label_y = height // 2 + 40
    sub_y = label_y + 26
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{NAVY}"/>
      <stop offset="100%" stop-color="{NAVY_LIGHT}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="{GOLD}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="{GOLD}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="{width}" height="{height}" fill="url(#bg)"/>
  <rect width="{width}" height="{height}" fill="url(#glow)"/>
  <rect x="0" y="0" width="{width}" height="4" fill="{GOLD}" opacity="0.6"/>
  <rect x="0" y="{height-4}" width="{width}" height="4" fill="{GOLD}" opacity="0.6"/>
  {icon_svg}
  <text x="{width//2}" y="{label_y}" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="{max(18, width//24)}" font-weight="bold"
        fill="{CREAM}" letter-spacing="0.5">{label}</text>
  {f'<text x="{width//2}" y="{sub_y}" text-anchor="middle" font-family="Arial, sans-serif" font-size="{max(11, width//48)}" fill="{GOLD_LIGHT}" opacity="0.85">{sublabel}</text>' if sublabel else ''}
</svg>'''

def write(name: str, content: str) -> None:
    (OUT / name).write_text(content, encoding='utf-8')

# --- Hero / page-hero backgrounds (wide 2400x1600) ---
write('hero-broadcaster.svg', svg(2400, 1600, 'A Broadcaster\'s Legacy', 'In Memoriam · 1979 – 2022', 'mic'))
write('hero-foundation.svg', svg(2400, 1600, 'Celebration of a Legend', 'The RAS MUTA Foundation', 'building'))
write('hero-news.svg', svg(2400, 1600, 'News & Publications', 'From the Foundation', 'document'))
write('hero-admin.svg', svg(2400, 1600, 'Admin Dashboard', 'Foundation Management Console', 'building'))
write('hero-donate.svg', svg(2400, 1600, 'Carry the Candle Forward', 'Your gift makes the work possible', 'heart'))
write('hero-contact.svg', svg(2400, 1600, 'Get in Touch', 'We would be glad to hear from you', 'mail'))
write('hero-gallery.svg', svg(2400, 1600, 'Memorial Gallery', 'Photographs · Video · Audio · Documentaries', 'mic'))
write('hero-volunteer.svg', svg(2400, 1600, 'Lend Your Hands to the Work', 'Join a community of service', 'hands'))
write('hero-programs.svg', svg(2400, 1600, 'Programmes & Projects', 'Carrying the Candle, Programme by Programme', 'sparkles'))

# --- Program images (1600x1067 landscape) ---
write('program-scholarships.svg', svg(1600, 1067, 'Educational Scholarships', 'Tuition · Stipends · Mentorship', 'graduation'))
write('program-mentorship.svg', svg(1600, 1067, 'Journalism Mentorship', 'Year-long one-to-one pairing', 'users'))
write('program-community.svg', svg(1600, 1067, 'Community Outreach', 'Grants for community radio', 'radio'))
write('program-youth.svg', svg(1600, 1067, 'Youth Empowerment', 'Digital-literacy bootcamps', 'sparkles'))
write('program-awards.svg', svg(1600, 1067, 'Media Excellence Awards', 'Annual recognition of the best', 'award'))
write('program-health.svg', svg(1600, 1067, 'Health & Social Intervention', 'Health camps · Clean water · Welfare', 'stethoscope'))

# --- Event / news / gallery images (1600x1067 landscape) ---
write('event-memorial-lecture.svg', svg(1600, 1067, 'Memorial Lecture', 'Annual convening of a leading voice', 'mic'))
write('event-fundraiser.svg', svg(1600, 1067, 'Candlelight Gala', 'An evening of dinner and giving', 'heart'))
write('event-workshop.svg', svg(1600, 1067, 'Mentorship Masterclass', 'Investigative methods', 'book'))
write('event-remembrance.svg', svg(1600, 1067, 'Remembrance Ceremony', 'Readings · Music · The Memorial Candle', 'heart'))
write('event-community.svg', svg(1600, 1067, 'Community Camp', 'Health · Clean water · Welfare', 'stethoscope'))
write('news-scholarships.svg', svg(1600, 1067, 'Scholarships Awarded', '142 scholars enrolled', 'graduation'))
write('news-lecture.svg', svg(1600, 1067, 'Memorial Lecture Announced', 'Third annual lecture', 'mic'))
write('news-annual-report.svg', svg(1600, 1067, 'Annual Report', 'A year of carrying the candle forward', 'document'))
write('news-mentorship.svg', svg(1600, 1067, 'Mentorship Applications Open', 'Fourth cohort · 60 places', 'users'))
write('news-awards.svg', svg(1600, 1067, 'Awards: Call for Entries', 'Seven categories · Submissions open', 'award'))
write('news-archive.svg', svg(1600, 1067, 'Archive Restoration', 'Voices from the Margin re-released', 'radio'))

# --- Slider / portrait-adjacent photos (1200x1500 portrait) ---
write('photo-airwaves.svg', svg(1200, 1500, 'On the Airwaves', 'Volta Region · Ghana · Togo', 'mic'))
write('photo-microphone.svg', svg(1200, 1500, 'A Life Behind the Microphone', '22 years on the air', 'mic'))
write('photo-studio.svg', svg(1200, 1500, 'In the Studio', 'A career on the air', 'radio'))

# --- Trustee / testimonial avatars (600x600 square) ---
write('avatar-1.svg', svg(600, 600, '', '', 'avatar'))
write('avatar-2.svg', svg(600, 600, '', '', 'avatar'))
write('avatar-3.svg', svg(600, 600, '', '', 'avatar'))
write('avatar-4.svg', svg(600, 600, '', '', 'avatar'))
write('avatar-5.svg', svg(600, 600, '', '', 'avatar'))
write('avatar-6.svg', svg(600, 600, '', '', 'avatar'))

print("Generated", len(list(OUT.iterdir())), "placeholder SVGs in", OUT)
