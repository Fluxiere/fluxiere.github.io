export const flowPanelCopy = {
  statusLine: "DELIVERY FRAMEWORK",
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
    subLabel: 'Analyze existing workflows, identify automation opportunities, and define measurable business objectives.'
  },
  {
    id: 'Solution Design',
    icon: '⚙️',
    label: 'Solution Design',
    subLabel: 'Create a scalable architecture and implementation roadmap aligned with your operational goals.'
  },
  {
    id: 'Development & Implementation',
    icon: '💬',
    label: 'Development & Implementation',
    subLabel: 'Build, integrate, and configure custom software and AI-powered automation solutions.'
  },
  {
    id: 'Deployment',
    icon: '💻',
    label: 'Deployment & Scaling',
    subLabel: 'Launch solutions seamlessly while ensuring teams are equipped for successful adoption.'
  },
  {
    id: 'Optimization',
    icon: '📊',
    label: 'Optimization & Scaling',
    subLabel: 'Continuously improve performance, unlock new efficiencies, and support long-term growth.'
  },
];