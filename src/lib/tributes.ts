// Tributes to Edem Divine Nyasorgbor, organised under the "Celebration of a Legend" page.
// Each tribute is presented as a submenu item and rendered in full on the page.

export interface Tribute {
  id: string
  /** Short label shown in the navigation submenu. */
  navLabel: string
  /** Title shown at the top of the tribute reader. */
  title: string
  /** The person or body offering the tribute. */
  byline: string
  /** Optional relationship / role line shown under the byline. */
  relationship?: string
  /** The full tribute text, broken into paragraphs. */
  body: string[]
}

export const tributes: Tribute[] = [
  {
    id: 'wife',
    navLabel: 'Tribute by Wife',
    title: 'Tribute by Wife',
    byline: 'Mrs. Yvonne Edinam Nyasorgbor (née Klutsey)',
    relationship: 'Wife of Edem Divine Nyasorgbor',
    body: [
      'To the love of my life, my soulmate, and the father of our children — words will never be enough to capture the depth of the loss I feel. Eighteen years of marriage, and still I wake each morning reaching for you beside me. You were my home, my anchor, and my safest place.',
      'You taught me what it means to be loved without condition. You taught our children — Desmond, Delphine, Enyonam, Darlington, and Desire — what it means to be a father who is present, gentle, and sure. Every bedtime story, every prayer at the table, every quiet word of counsel — these are the threads of the legacy you have left woven into our home.',
      'The world remembers your voice on the airwaves. I remember your voice in the kitchen at dawn, humming the songs of your youth. I remember your voice reading Scripture to the children. I remember your voice telling me, again and again, that everything would be alright. And it will be — because you raised us to be strong, and because the God you feared and loved is the same God who holds us now.',
      'Rest well, my love. The microphone is silent now, but the candle you lit in our home will never go out. Until we meet again.',
    ],
  },
  {
    id: 'children',
    navLabel: 'Tribute by Children',
    title: 'Tribute by Children',
    byline: 'Desmond, Delphine, Enyonam, Darlington & Desire Nyasorgbor',
    relationship: 'Children of Edem Divine Nyasorgbor',
    body: [
      'Daddy, you were our first hero — long before the airwaves ever knew your name. You were the one who taught us to ride bicycles, to say our prayers, to stand up straight, and to treat every person with the same respect regardless of who they were. You did not just tell us how to live; you showed us, every single day.',
      'You called us your five blessings. You prayed over each of us by name. You sat through school open-days even when your shift had started at dawn. You believed in us before we believed in ourselves, and you corrected us with a firmness that never once made us doubt your love.',
      'We will carry your name with the dignity it deserves. We will finish the education you cared so much about. We will look after Mummy the way you would have. And we will remember — always — that the only legacy you asked us to keep was God and education, the very legacy your own parents left you.',
      'Sleep well, Daddy. The studio is quiet now, but your voice will echo in our hearts for as long as we live.',
    ],
  },
  {
    id: 'siblings',
    navLabel: 'Tribute by Siblings',
    title: 'Tribute by Siblings',
    byline: 'The Nyasorgbor Family',
    relationship: 'Brothers and sisters of Edem Divine Nyasorgbor',
    body: [
      'Edem was the ninth of us eleven — and from the very beginning, he was the one who made the room brighter. He was gentle even as a boy, quick to laugh, slow to anger, and always the first to share whatever he had. Our parents raised us to fear the Lord and to value education, and Edem took those two lessons more to heart than perhaps any of us.',
      'When our parents passed, Edem became one of the pillars that held the family together. He checked in. He showed up. He remembered every birthday, every funeral, every small milestone. He carried the name of the Nyasorgbor family with a quiet pride that never crossed into arrogance.',
      'We have lost a brother, but we have not lost the values he stood for. We pledge to one another — and to his wife and children — that the home our parents built, and the home Edem carried forward, will not be allowed to fall. We are still eleven, even if one of us now answers from the other side.',
      'Rest in peace, little brother. The Living Sheep Society and the A.M.E. Zion Church that shaped us both will keep your memory in their prayers.',
    ],
  },
  {
    id: 'globalfest',
    navLabel: 'Tribute by Globafest Ltd',
    title: 'Tribute by Globafest Ltd',
    byline: 'Management and Staff of Global FM / V1 TV',
    relationship: 'Globafest Ltd — Employers of Edem, 2017–2020',
    body: [
      'Edem Divine Nyasorgbor joined Globafest Ltd in 2017 as Head of Operations and Morning Show Host on Global FM, and soon extended his reach to V1 TV as a TV show host. From his very first day, it was clear that we had not just hired a broadcaster — we had welcomed a craftsman.',
      'He brought to our newsroom a discipline that younger staff members immediately tried to imitate. He prepared for every show as though it were his first. He treated every caller, every guest, and every intern with the same unhurried courtesy. He believed that the morning show was a public trust — that the first voice a family heard at the start of their day carried a responsibility no rating could measure.',
      'Beyond the studio, Edem was a mentor. He took junior presenters under his wing, walked them through their scripts line by line, and quietly covered their mistakes on air without ever embarrassing them. More than one career at Global FM and V1 TV was launched by his patient, behind-the-scenes coaching.',
      'The Management and Staff of Globafest Ltd extend our deepest condolences to his wife Yvonne, his five children, and the entire Nyasorgbor family. The microphone he held so well is silent now, but the standard he set in our newsroom will shape our work for years to come. May his soul rest in perfect peace.',
    ],
  },
  {
    id: 'jubilee-radio',
    navLabel: 'Tribute by Jubilee Radio',
    title: 'Tribute by Jubilee Radio',
    byline: 'Management and Staff of Radio Jubilee 106.9 FM, Keta',
    relationship: 'Home of Edem\'s decade-long tenure as Programs Director and Presenter, 2007–2017',
    body: [
      'For ten years — from 2007 to June 2017 — Edem Divine Nyasorgbor called Radio Jubilee 106.9 FM his professional home. He came to us already a respected name across the Volta Region and into Togo, and he chose to settle at Jubilee because, as he put it, he wanted to belong to one station and one listening family.',
      'As Programs Director, he reshaped our schedule with care and patience. He believed a community station should sound like the community it served — and so he made room on our airwaves for local music, for school debates, for church and mosque notices, for the small announcements that bind a town together. Our listeners did not just hear him; they trusted him.',
      'As a presenter, Edem was unmatched. His baritone, his preparation, his instinct for the right word at the right moment — these were gifts that could not be taught. But what his colleagues will remember most is his kindness. He greeted the cleaner and the manager with the same warmth. He shared his food. He stayed late to help a junior presenter fix a script. He was, in the truest sense, a gentleman of the airwaves.',
      'Radio Jubilee 106.9 FM mourns a son of the airwaves. The studio he sat in for a decade feels emptier today. We extend our heartfelt condolences to his wife, his children, his siblings, and all who loved him. May the candle he lit on our frequency never flicker.',
    ],
  },
  {
    id: 'ketaman',
    navLabel: 'Tribute by Ketaman',
    title: 'Tribute by Ketaman',
    byline: 'The Ketaman Community',
    relationship: 'In loving memory of a son of Ketu',
    body: [
      'Edem Divine Nyasorgbor was, above all else, a son of this land. Born at Denu, raised in the Volta Region, and shaped by the churches, schools, and airwaves of Ketu South — he carried us with him wherever his voice travelled. He never forgot where he came from, and he never stopped giving back.',
      'When the music played on his show, you could hear the rhythm of our markets in it. When he spoke of public affairs, he spoke with the wisdom of the elders who raised him. When he crossed into Togo and charmed listeners across the border, he did so as an ambassador of our community — and we were proud of him in a way that is hard to put into words.',
      'He was gentle, he was sociable, and his kindness was unmistakable. Every encounter with him left a long-lasting sense of warmth. He lit up every room he entered and every airwave he touched. The young people of Ketu looked up to him as proof that a child from here could grow up to be heard across two nations.',
      'Ketaman mourns today. We mourn a brother, a neighbour, a voice that has fallen silent too soon. But we also celebrate — because a son of this soil lived a life worthy of celebration, and because his name will be spoken in our homes and on our airwaves for generations to come. Rest well, Edem. You made us proud.',
    ],
  },
  {
    id: 'amazing-love',
    navLabel: 'Tribute by Amazing Love',
    title: 'Tribute by Amazing Love',
    byline: 'Amazing Love Schools — Class of 1994',
    relationship: 'Edem\'s alma mater, 1986–1994',
    body: [
      'Edem Divine Nyasorgbor walked through the gates of Amazing Love Schools in 1986 and left in 1994 — but in truth, he never really left. He carried the values of this school with him for the rest of his life: diligence, faith, courtesy, and the quiet confidence of a young person who has been well raised.',
      'Even as his voice carried across the Volta Region and into Togo, he remained a proud alumnus. He spoke of his teachers by name. He remembered the classrooms, the chapel, the football pitch. He believed — as our founders believed — that the only legacy a child could be given was God and education, and he lived that conviction to the end.',
      'To the Class of 1994, Edem was more than a classmate. He was a reminder of what an Amazing Love education could produce: a young person of integrity, of warmth, and of purpose. We watched his career with pride, we celebrated his marriage in 2004, and we mourned his passing as we would mourn a brother.',
      'The Amazing Love Schools Class of 1994 extends our deepest condolences to his wife Yvonne, his five children, his siblings, and the entire Nyasorgbor family. May the candle he lit in our classrooms and on our airwaves continue to burn bright. Rest in peace, dear Edem.',
    ],
  },
]
