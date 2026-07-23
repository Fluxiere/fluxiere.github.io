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
  eyebrow: 'ABOUT FLUXIÈRE',
  title: 'Building Intelligent Systems That Help Businesses Scale.',
  subtitle: 'Fluxière is an AI automation and custom software company helping businesses streamline operations, eliminate repetitive work, and accelerate growth through intelligent technology solutions. We combine automation, software engineering, and AI to build systems that create measurable business value.'
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

export const teamCopy = {
   title: 'The Team Behind Fluxière',};

export const historyTrail = {
   title: 'How We Started',};

export const teamRoster: TeamMember[] = [
  {
    name: 'Prasanna Venkatesh',
    role: 'Co-Founder & CEO',
    bio: 'Leads Fluxière with a forward-thinking vision, combining strategic leadership, business acumen, and a customer-first mindset to build lasting partnerships and empower businesses through AI automation, custom software, and continuous innovation.',
    imgSrc: '/assets/team/PV.jpeg' 
    
  },
  {
    name: 'Vasanth Kumar',
    role: 'Co-Founder & CTO',
    bio: 'Leads the entire technology vision at Fluxière, overseeing software architecture, AI innovation, engineering excellence, cloud infrastructure, and systems integration to deliver secure, scalable, and future-ready business solutions',
    imgSrc: '/assets/team/Vasanth.png' // Path to Vasan's individual photo
  },
  {
    name: 'Sarvesh',
    role: 'Co-Founder & Head of Engineering',
    bio: 'Leads the automation practice by designing and delivering AI-powered automation, API integrations, and custom software solutions that improve operational efficiency and drive business growth',
    imgSrc: '/assets/team/Vasanth.jpg' // Path to Vasan's individual photo
  },
  // {
  //   name: 'Join the Mix',
  //   role: 'Core Engineering',
  //   bio: 'Looking for builders obsessed with optimization, edge cases, and deterministic execution structures.',
  //   imgSrc: '/assets/team/placeholder-join.jpg' // Path to an invite/placeholder graphic or asset
  // }
];