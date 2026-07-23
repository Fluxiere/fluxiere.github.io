export interface ProcessStep {
  idx: string;
  shortNum: string;
  title: string;
  desc: string;
  deliverables: string[];
}

export const approachSectionText = {
  eyebrow: 'HOW WE DELIVER AI AUTOMATION',
  title: 'From Strategy to Scale—A Proven AI Delivery Process',
  description: "Every AI automation and custom software project follows a structured framework that minimizes risk, ensures transparency, and delivers measurable business outcomes.",
  benchmarkHeading: 'Phase Benchmarks & Objectives'
};

export const stepsData: ProcessStep[] = [
  {
    idx: 'Ⅰ / Discover & Audit',
    shortNum: 'Ⅰ',
    title: 'Understand Before We Automate ',
    desc: 'We analyze your business processes, identify repetitive tasks, evaluate your technology stack, and uncover the highest-impact automation opportunities.',
    deliverables: ['Business process assessment',
                   'Workflow mapping',
                   'Automation opportunity report',
                   'Technology & integration audit',
                    'ROI estimation']
  },
  {
    idx: 'Ⅱ / Solution Design',
    shortNum: 'Ⅱ',
    title: 'Design Intelligent Workflows',
    desc: 'Our team designs AI-powered workflows, system architecture, integrations, and implementation strategies tailored to your business goals.',
    deliverables: ['AI automation blueprint',
                   'System architecture',
                   'API & integration strategy',
                   'User journey mapping',
                   'Project roadmap']
  },
  {
    idx: 'Ⅲ / Build & Integrate',
    shortNum: 'Ⅲ',
    title: 'Build, Test & Deploy',
    desc: 'We develop custom software, AI agents, automations, and integrations while ensuring security, scalability, and performance.',
    deliverables: ['AI workflow implementation',
                   'Custom software development',
                   'CRM & ERP integrations',
                   'Quality assurance',
                   'User acceptance testing']
  },
  {
    idx: 'Ⅳ / Optimize & Scale',
    shortNum: 'Ⅳ',
    title: 'Measure. Improve. Grow.',
    desc: "After deployment, we monitor performance, optimize workflows, and continuously improve your automation to maximize ROI.",
    deliverables: ['Performance dashboards',
                   'KPI tracking',
                   'Workflow optimization',
                   'Ongoing support',
                   'Continuous improvements']
  }
];
