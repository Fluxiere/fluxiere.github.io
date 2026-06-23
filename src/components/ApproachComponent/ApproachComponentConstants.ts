export interface ProcessStep {
  idx: string;
  shortNum: string;
  title: string;
  desc: string;
  deliverables: string[];
}

export const approachSectionText = {
  eyebrow: 'How We Work',
  title: 'Four stages, one accountable build',
  description: 'Every engagement follows a structured framework so you always track delivery benchmarks cleanly.',
  benchmarkHeading: 'Phase Benchmarks & Objectives'
};

export const stepsData: ProcessStep[] = [
  {
    idx: 'Ⅰ / Audit',
    shortNum: 'Ⅰ',
    title: 'Map the workflow',
    desc: 'We shadow your operations as they run today to locate exactly where time, manual errors, and accuracy are leaking out of your pipeline.',
    deliverables: ['Data friction mapping', 'Operational velocity baseline', 'Automation opportunity log']
  },
  {
    idx: 'Ⅱ / Design',
    shortNum: 'Ⅱ',
    title: 'Design the system',
    desc: 'A scoped structural plan defining the exact logic, database schemas, third-party APIs, and human-in-the-loop checkpoints before any code is deployed.',
    deliverables: ['Pipeline logic blueprints', 'Data schema configurations', 'Milestone delivery timeline']
  },
  {
    idx: 'Ⅲ / Build',
    shortNum: 'Ⅲ',
    title: 'Build & integrate',
    desc: 'We engineer against your real-world data sandboxes, staging modular features with operational demos at every single milestone build.',
    deliverables: ['Custom environment builds', 'API integrations', 'Fidelity telemetry validation']
  },
  {
    idx: 'Ⅳ / Run',
    shortNum: 'Ⅳ',
    title: 'Launch & support',
    desc: 'Your automated systems launch seamlessly with zero active production downtime. We continuously tune prompts, monitor errors, and optimize code logs.',
    deliverables: ['Production sync execution', 'Continuous prompt calibrations', 'Infrastructure log support']
  }
];
