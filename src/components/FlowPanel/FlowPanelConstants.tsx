export const flowPanelCopy = {
  statusLine: "fluxiere · automation-pipeline · live",
  throughput: "1,840 tasks/day",
  errorRate: "0.2%",
  statusMessage: "build passed ✓"
};

export interface FlowStep {
  id: string;
  icon: string;
  label: string;
  subLabel: string;
  variantClass?: 'active' | 'gold';
  delayClass?: 'delay' | 'delay2';
}

export const flowSteps: FlowStep[] = [
  {
    id: 'Discovery & Assessment',
    icon: '📋',
    label: 'Discovery & Assessment',
    subLabel: 'Workflow & cost audit · Automation roadmap · Tech stack evaluation'
  },
  {
    id: 'Solution Design',
    icon: '⚙️',
    label: 'Solution Design',
    subLabel: 'Architecture mapping · API & data strategy · ROI-prioritized build plan'
  },
  {
    id: 'Development & Implementation',
    icon: '💬',
    label: 'Development & Implementation',
    subLabel: 'Custom ERP/CRM setups · Bot & assistant training · Cross-platform data sync'
  },
  {
    id: 'Deployment',
    icon: '💻',
    label: 'Deployment & Scaling',
    subLabel: 'Live environment release · Team onboarding · Production pipeline launch'
  },
  {
    id: 'Optimization',
    icon: '📊',
    label: 'Optimization & Scaling',
    subLabel: 'Automated reporting · KPI dashboards · Forecasting & anomaly alerts'
  },
];