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
    description: 'We map your manual operations and replace them with intelligent pipelines that run without daily intervention. This includes document extraction, approvals, and CRM workflow automation.',
    deliverables: ['Workflow automation blueprint', 'Automated data capture pipelines', 'AI-driven approval & routing systems']
  },
  {
    phase: '💬',
    badge: 'AI Chatbots & Assistants',
    title: 'Build conversational systems',
    description: 'Conversational AI that handles support, sales, and internal questions in your brand voice. We combine knowledge retrieval with automated handoffs to improve accuracy and response speed.',
    deliverables: ['RAG-enabled knowledge assistants', 'Lead qualification & support bots', 'Automated response and escalation flows']
  },
  {
    phase: '🛠️',
    badge: 'Custom Software',
    title: 'Deliver tailored ERP/CRM platforms',
    description: 'Custom internal systems built around how your team actually works, not the other way around. We connect data, workflows, and reporting into one secure operational platform.',
    deliverables: ['Integrated ERP/CRM workflows', 'Custom dashboards & reporting', 'Secure automated operations platform']
  },
  {
    phase: '📊',
    badge: 'Data & Analytics Automation',
    title: 'Turn data into actionable operations',
    description: 'We connect every system in your stack and automate reporting so your team can make better decisions without manual spreadsheet updates. Dashboards refresh automatically and alerts catch anomalies before they hurt the business.',
    deliverables: ['Automated reporting pipelines', 'KPI dashboard implementation', 'Forecasting and anomaly monitoring']
  },
  {
    phase: '🔗',
    badge: 'Systems Integration',
    title: 'Connect your tools into one workflow',
    description: 'We integrate your existing platforms, APIs, and legacy systems so data moves reliably between the tools your teams use every day. This eliminates manual copy/paste and accelerates cross-functional handoffs.',
    deliverables: ['API integration architecture', 'Legacy system modernization', 'Cross-platform data sync']
  },
  {
    phase: '📈',
    badge: 'Strategy & Audit',
    title: 'Find the highest-impact automation opportunity',
    description: 'We audit your operations and identify the automation projects that deliver the biggest ROI fastest. The result is a clear plan for what to build, and what not to build.',
    deliverables: ['Workflow and cost audit', 'Automation roadmap', 'ROI-prioritized implementation plan']
  }
];
