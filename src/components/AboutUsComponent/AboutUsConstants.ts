export interface HistoryMilestone {
  year: string;
  title: string;
  desc: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imgSrc: string; // Absolute or relative asset path for each person
}

export const aboutHeading = {
  eyebrow: 'Our Story',
  title: 'Built to engineer leverage.',
  subtitle: 'We started by fixing broken data loops. Today, we design the software engines that keep scaling enterprises clear of operational friction.'
};

export const historyTimeline: HistoryMilestone[] = [
  {
    year: '2024',
    title: 'The Friction Problem',
    desc: 'Began as a lean workflow audit squad, mapping hidden operational drag for high-volume logistics and tech teams.'
  },
  {
    year: '2025',
    title: 'Productizing Logic',
    desc: 'Shifted from consulting into deep technical execution—building custom middleware and private RAG layers that companies own completely.'
  }
];

export const teamRoster: TeamMember[] = [
  {
    name: 'PRASANNA VENKATESH 𓂀',
    role: '✨ 𝕊𝕠𝕚𝕤 𝕦𝕟𝕖 𝕧𝕠𝕚𝕩, 𝕡𝕒𝕤 𝕦𝕟 é𝕔𝕙𝕠 ✨',
    bio: 'ᴍʏ ɪɴᴠᴏᴄᴀᴛɪᴏɴ ꜱᴜᴍᴍᴏɴ ᴀɴ ᴏᴄᴄᴜʟᴛ & ᴀʀᴄᴀɴᴇ 🪄🔮',
    imgSrc: '/assets/team/PV.jpeg' 
    
  },
  {
    name: 'Vasanth Kumar AM',
    role: 'Founder, Systems Architect & Wizard',
    bio: 'Specializes in mapping complex workflow choke points into streamlined, high-velocity automation pipelines.',
    imgSrc: '/assets/team/Vasanth.png' // Path to Vasan's individual photo
  },
  {
    name: 'Vasanth Kumar AM',
    role: 'Founder, Systems Architect & Wizard',
    bio: 'Specializes in mapping complex workflow choke points into streamlined, high-velocity automation pipelines.',
    imgSrc: '/assets/team/Vasanth.jpg' // Path to Vasan's individual photo
  },
  // {
  //   name: 'Join the Mix',
  //   role: 'Core Engineering',
  //   bio: 'Looking for builders obsessed with optimization, edge cases, and deterministic execution structures.',
  //   imgSrc: '/assets/team/placeholder-join.jpg' // Path to an invite/placeholder graphic or asset
  // }
];