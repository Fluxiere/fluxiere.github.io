import { type TestimonialItem } from './types';

export const testimonialsCopy = {
  heading: 'Client Feedback',
  title: 'Built for teams who measure success in hours reclaimed',
  description:
    'Read how operational leaders are using our custom software and automation setups to scale output without increasing head count.',
  reviews: [
    {
      quote: "“I approached Quantum Pixel Solutions for Digital Marketing service. Their Digital Marketing services provide best results for my company to reach the right audience. Their tailored brand strategy brings colors to my brand. Excellent one 👏 ”",
      author: 'Karthik A',
      role: 'Founder',
      company: 'Manvaasam',
    //   metric: '140 hours saved/mo',
    },
    {
      quote: "“ Awesome work done by Quantum Pixel Solutions. We were struck with the issue and tried with different vendors and none provided solution. We got the perfect solution from Prasanna and his team. Kudos to them 🙌 ”",
      author: 'Dr Janani',
      role: 'Founder',
      company: 'Dr Janani\'s Homoeopathy Clinic',
    //   metric: '3.5x faster syncing',
    },
  ] as TestimonialItem[],
};