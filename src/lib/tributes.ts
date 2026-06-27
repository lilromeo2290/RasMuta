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
    image: '/tribute-children.png',
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
    image: '/tribute-siblings.png',
    body: [
      '"For I know my Redeemer lives, and He shall stand at last on the earth; and after my skin is destroyed, this I know, that in my flesh I shall see God, whom I shall see for myself, and my eyes shall behold, and not another. How my heart yearns within me!" — Job 19:25-27',
      'Gone but not forgotten. We don\'t think of you as gone away — your journey just begun; life holds so many facets.',
      'MUTA, as we affectionately called you, your sudden demise is still unexplainable. You have left a huge vacuum that will be difficult to fill in the family.',
      'This is indeed a sad time for all of us. We have lost such a loving and generous brother.',
      'Edem, you left a hole in our hearts. Day by day we think of you — how can this be true? We say, if tears could build a stairway, and our memories were a lane, we would gladly come straight up to heaven just to bring you back. Muta was a model of compassion and generosity until his very last minute. He was well-known and admired in his communities.',
      'Indeed, this earth is passing through. You fought a good fight, and you did finish your race with panache.',
      'If it has pleased your Maker to call you home currently, who are we to question Him? His will and not ours be done.',
      'We know you are resting, from the sorrows and tears of this world, in a place of warmth and comfort. We know that those sleeping in the Lord will rise. So, sleep on MUTA, sleep on.',
      'For now, with you, the sky is night, but after night daybreak will come — therefore, we wait to hope to see you again.',
      'May the good Lord grant you eternal rest till we meet again.',
      'Fare thee well, Muta hede nyuie!!!',
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
    byline: 'Directors, Management and Staff of Jubilee Radio 106.9 MHz, Keta',
    relationship: 'In honour and memory of our late former Programmes Manager',
    body: [
      'The life of one we love is never lost. Its influence goes through all the lives it ever touched.',
      'Edem Divine Nyasorgbor — Ras Muta. You were the longest-serving Programmes Manager of Jubilee Radio in Keta and an icon in radio and television broadcasting in the Volta Region and Eweland.',
      'You were an all-round, multi-talented Disc-Jockey, Presenter, Talk Show Host, Reporter, Analyst, Editor, Events Manager, Programmes Manager, General Manager, Television Personality, Communications Expert, etc. Ei Ras Muta, you were so much impactful.',
      'Edem, you were disciplined with passion, ethics, human resource management and time management in your work, and at the same time an interesting social mixer.',
      'Gyege Gyege, you also expressed your belief in the adage that "All work without play makes Jack a dull boy," Edem Divine Nyasorgbor — Ras Muta.',
      'You commanded great respect among your colleagues and subordinates as you helped train a lot of broadcasters in the Volta and Oti Regions and beyond.',
      'Muta, it is with a heavy heart that we present this tribute to you, as it is very difficult to accept the reality that you are gone so soon. Life is indeed so short. But you were so smart that you outlived your age and played your part very quickly well.',
      'We shall continue to admire you for your love for Jubilee Radio that kept you in constant touch with your usual and regular words of advice and guidance for the very last days of your life. Divine, we appreciate you and shall continue to remember you for who you were, as was expressed by many of your former colleagues who we interviewed on air.',
      'And with a common voice we assure you that your image will remain largely imprinted in the hearts and minds of those of us who worked with you.',
      'R.I.P Ras Muta. Adieu.',
    ],
  },
  {
    id: 'ketaman',
    navLabel: 'Tribute by Ketaman',
    title: 'Tribute by Ketaman',
    byline: 'Emmanuel Ketaman Evortepe',
    relationship: 'Executive President, Duamenefa Foundation & Chief Executive Officer, Fafaa 100.3 FM, Dzodze',
    body: [
      'When the palpitation of the heart ceases and all traces of life is absent, when all efforts to resuscitate are lost, then Father, grant your wearied one, EDEM DIVINE NYASORGBOR (RAS MUTA) an eternal rest.',
      'After my lonely heartaches and my silent tears, I will always have beautiful memories of your working relationship with me way back in Jubilee Radio, 15 years ago, where you have displayed the qualities of humility, respect, hard work and discipline under my supervision. Your commitment and dedication to work have earned you many accolades such as, the Ras, Dzegedzege, the chairman of the airwaves etc.',
      'Ras Muta, your skills in radio program production, investigations and presentation were unparalleled. This placed Jubilee Radio above other radio stations in the Volta Region at the time. Your significant roles during the formative stages of the Duamenefa Foundation cannot go unmentioned. Above all, you possess good characteristics of rendering an unreserved apology whenever there is an infraction on your part.',
      'Muta, ever since your baritone presentation voice filled with humor and free flow of diction on evening drive time programs disappeared from the airwaves, Volta Region has known no quality presenter of your kind. I took time to listen to most radio stations in the Volta Region and realized your type of quality is nowhere to be found now. Indeed, you have left a track record which would require someone who is a gifted radio presenter by birth to fill.',
      'Ras Muta, Dzegedzege, the chairman of the airways, where are you? Hmmmm, I could recall when you\'ve called to tell me of your unforeseen affliction. We took the challenge through prayers and supplications to the throne room of grace. The good Lord responded to our intercession prayers; the reflection was your positive response to recovery. This necessitated planning for a foreign scholarship for you to pursue your MBA in the USA when you fully recover, but alas, little did we know you will depart this world unexpectedly. Your sudden departure remains a mystery. Life indeed is vanity, vanity of vanities, all is vanity.',
      'We have no power to prevent your exit, even though we did intervene in your total restoration but the good Lord who knows it all beckoned you to come back home. It is painful, yes! We thought you have a lot to do on earth, but to the One you\'re accountable to, you\'ve been invited for accountability, may the eternal Father give you fair judgement.',
      'Ras Muta, your sudden departure has painfully reminded us that "this world is not our home, we are just passing through, our treasures are laid down somewhere beyond the blue, the angels beckon you, from heaven\'s open door, and you cannot feel at home in this world anymore."',
      'Hmmmm! Agbemenyawoe loo! Xede Nyuie, Ras Muta, Dzegedzege.',
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
