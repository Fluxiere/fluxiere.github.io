import { type ServiceItem } from './types';

export const servicesHeading = {
  eyebrow: 'AI AUTOMATION & SOFTWARE SOLUTIONS',
  title: 'Everything You Need to Automate, Integrate, and Scale',
};
export const  EXPLORE_SERVICE_CTA = 'Explore service';

export const servicesDescription =
  'From AI-powered automation to custom business software, Fluxière designs and delivers solutions that eliminate manual work, connect your systems, and help your organization scale efficiently.';

export const servicesData: ServiceItem[] = [
  {
    num: '🤖',
    tag: 'Most Requested',
    title: 'AI Process Automation',
    desc: 'Replace repetitive tasks with intelligent workflows that operate automatically across your business.',
    features: ['Document & data processing', 'Approval workflows', 'Email, WhatsApp & CRM automation']
  },
  {
    num: '💬',
    title: 'AI Chatbots & Assistants',
    desc: "Deploy AI assistants that support customers, qualify leads, and provide instant answers around the clock.",
    features: ['Customer support automation', 'Knowledge-base search', 'Lead qualification assistants']
  },
  {
    num: '💻',
    tag: 'Most Requested',
    title: 'Custom Software (ERP/CRM)',
    desc: 'Build business software designed around your processes, teams, and growth objectives.',
    features: ['Custom ERP & CRM platforms', 'Internal Business tools', 'Inventory & operations systems']
  },
  {
    num: '📊',
    title: 'Data & Analytics Automation',
    desc: 'Turn business data into actionable insights with automated reporting and real-time dashboards.',
    features: ['KPI dashboards', 'Automated reporting', 'Forecasting & alerts']
  },
  {
    num: '🔗',
    title: 'Systems Integration',
    desc: 'Connect your existing tools, applications, and data into one seamless ecosystem.',
    features: ['API integrations', 'Cross-platform synchronization', 'Legacy system modernization']
  },
  {
    num: '♞',
    title: 'Strategy & Audit',
    desc: 'Identify high-impact automation opportunities before investing in technology.',
    features: ['Workflow assessment', 'Automation roadmap', 'ROI-focused planning']
  }
];
