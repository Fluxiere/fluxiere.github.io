export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  badge?: string;
}

export const ServiceDetailList: ProcessStep[] = [
  {
    phase: '🤖',
    badge: 'AI Process Automation',
    title: 'Automate repetitive workflows',
    description: 'Automate repetitive business processes with AI Process Automation and AI-powered Workflow Automation solutions that eliminate manual tasks, streamline operations, improve operational efficiency, and help your team achieve more with greater speed and accuracy.',
    deliverables: ['Workflow automation blueprint', 'Automated data capture pipelines', 'AI-driven approval & routing systems']
  },
  {
    phase: '💬',
    badge: 'AI Chatbots & Assistants',
    title: 'Build conversational systems',
    description: 'Deploy intelligent AI Chatbots and AI Assistants that automate customer support, qualify leads, answer business queries, and deliver personalized conversational AI experiences across websites, WhatsApp, and other digital channels—24/7.',
    deliverables: ['RAG-enabled knowledge assistants', 'Lead qualification & support bots', 'Automated response and escalation flows']
  },
  {
    phase: '🛠️',
    badge: 'Custom Software',
    title: 'Deliver tailored ERP/CRM platforms',
    description: 'Build scalable Custom Software Development solutions tailored to your business, including custom ERP Development, CRM Development, enterprise software, and business applications designed to streamline operations and support long-term growth.',
    deliverables: ['Integrated ERP/CRM workflows', 'Custom dashboards & reporting', 'Secure automated operations platform']
  },
  {
    phase: '📊',
    badge: 'Data & Analytics Automation',
    title: 'Turn data into actionable operations',
    description: 'Transform business data into actionable insights with Data & Analytics Automation, AI-powered analytics, Business Intelligence dashboards, automated reporting, and real-time dashboards that enable faster, data-driven decision-making.',
    deliverables: ['Automated reporting pipelines', 'KPI dashboard implementation', 'Forecasting and anomaly monitoring']
  },
  {
    phase: '🔗',
    badge: 'Systems Integration',
    title: 'Connect your tools into one workflow',
    description: 'Connect your CRM, ERP, APIs, cloud platforms, and third-party business applications through seamless Systems Integration, API Integration, and Cloud Integration solutions that improve data flow, automate processes, and eliminate information silos.',
    deliverables: ['API integration architecture', 'Legacy system modernization', 'Cross-platform data sync']
  },
  {
    phase: '📈',
    badge: 'Strategy & Audit',
    title: 'Find the highest-impact automation opportunity',
    description: 'Start your digital transformation journey with a comprehensive AI Strategy and Automation Audit that evaluates business workflows, identifies automation opportunities, performs workflow analysis, and delivers a practical automation roadmap focused on measurable ROI.',
    deliverables: ['Workflow and cost audit', 'Automation roadmap', 'ROI-prioritized implementation plan']
  }
];
