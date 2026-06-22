import { type TestimonialItem } from './types';

export const testimonialsCopy = {
  heading: 'Client Feedback',
  title: 'Built for teams who measure success in hours reclaimed',
  description:
    'Read how operational leaders are using our custom software and automation setups to scale output without increasing head count.',
  reviews: [
    {
      quote: "“Fluxière didn't just write code; they completely re-engineered how we process client intakes. We went from spending hours manually routing files every morning to a pipeline that runs in minutes with zero errors.”",
      author: 'Rohan Mehta',
      role: 'Operations Director',
      company: 'Vanguard Logistics',
    //   metric: '140 hours saved/mo',
    },
    {
      quote: "“The custom ERP dashboard they built seamlessly tied our legacy inventory database into our payment systems. Our field teams now have real-time sync, which completely cut down on manual cross-checking headaches.”",
      author: 'Elena Rostova',
      role: 'Managing Partner',
      company: 'Apex Distribution',
    //   metric: '3.5x faster syncing',
    },
  ] as TestimonialItem[],
};
