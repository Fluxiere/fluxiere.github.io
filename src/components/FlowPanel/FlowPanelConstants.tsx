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
    id: 'inputs',
    icon: 'IN',
    label: 'Manual Inputs',
    subLabel: 'Emails, forms, sheets'
  },
  {
    id: 'engine',
    icon: 'AI',
    label: 'Fluxière Engine',
    subLabel: 'Routing · extraction · logic',
    variantClass: 'active',
    delayClass: 'delay' // Controls animation sync for the line following this node
  },
  {
    id: 'systems',
    icon: '↻',
    label: 'Your Systems',
    subLabel: 'CRM · ERP · DB',
    variantClass: 'gold',
    delayClass: 'delay2'
  },
  {
    id: 'outcomes',
    icon: 'OUT',
    label: 'Outcomes',
    subLabel: 'Reports, alerts, actions'
  }
];