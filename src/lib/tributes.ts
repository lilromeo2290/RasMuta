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
  /** Optional portrait image shown alongside the tribute. */
  image?: string
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
    image: '/tribute-wife.png',
    body: [
      '"He will wipe away every tear from their eyes and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away." — Revelation 21:4',
      'It is with a grieving heart that I stand here to pay homage and bid a final FAREWELL to my DEAR EDEM. I wish it were a dream, a nightmare from which I would wake up to see my EDEM physically in front of me with his charming and captivating smile. But sadly, no! It cannot be.',
      'I simply and affectionately call my husband EDEM, who I met for the first time at his usual charming element, capturing the airwaves with his booming and melodious voice which I found irresistible. That was when it began.',
      'We got attracted to each other and this attraction metamorphosed into courtship. It was a whirlwind development laced with love, romance — a Romeo and Juliet type of relationship. We were always there for each other, through thick or thin. Our marriage was blessed at St. James AME Zion Church on 1st April 2012. The merciful God has favored and blessed us with four lovely children, two boys and two girls. As a God-fearing couple, Edem, the children and I would go to church every Sunday, all things being normal. On occasions like Christmas festivities, Easter picnics and public holidays, the family would go to places like the beach, resorts and others for relaxation and fun.',
      'Yes, just as the beautiful Rose Flower has thorns, our marriage has not been always smooth sailing. We had challenges, disagreements and obstacles which we overcame. We survived toxic rumors and idle gossip meant to break us apart. We were careful with subtle interferences from friends, family members and other relatives. However, we took pieces of advice on board which could help us nourish our marriage.',
      'Not too long ago, I lost my DEAR MOTHER, who happened to be an auntie of EDEM. I still mourn her, and the tears have not dried from my eyes. Sadly, another calamity has befallen me. Late in 2020, my husband Edem\'s health started failing; it was around the same time my mother also got sick. Everything was done to help Edem regain his health. He went from one hospital to the other. The family offered prayers, and the church also interceded. Edem\'s junior brother took him to Trafalgar Regional Hospital at Ho for specialist medical care, whilst I stayed behind at home to attend to the four children, to go to school and see to their daily needs. I commuted with my husband on a daily basis, likewise the children. Edem would assure us that he would soon be home to be with us. He was always cheerful and lively anytime we spoke. His brother assured us that he would be fine.',
      'But alas, on 16th September 2022 I had the sad and unfortunate call from my brother-in-law that my husband Edem had succumbed to his sickness. Edem had died.',
      'Another tragedy. I have lost not only a husband, but a companion. My children have lost a dear father who they loved a lot. Tears have welled into my eyes again so soon after my mother\'s death. My heart bleeds, my four children are devastated and in grief.',
      'Our Edem is gone. God knows best. He will cater for us. The pain, we shall survive by God\'s grace. We have the hope and belief that Edem will Rest in Perfect Peace in the arms of the Lord.',
      'Edem, xɛ de nyuie eye na deidzor le mutifafa me.',
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
