export interface CareerPosition {
  id: string | number;
  team: string;
  location: string;
  title: string;
  summary: string;
}

export interface CareersHeading {
  eyebrow: string;
  title: string;
  description: string;
}

export interface CareersFormField {
  key: Exclude<keyof CareersFormData, '_honey'>;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'url' | 'textarea';
}

export interface CareersFormData {
  name: string;
  email: string;
  // portfolio: string;
  mobile: string;
  domain: string;
  note: string;
  _honey: string;
}

export const INITIAL_FORM_DATA: CareersFormData = {
  name: '',
  email: '',
  // portfolio: '',
  mobile: '',
  domain: '',
  note: '',
  _honey: ''
};

export const careersHeading: CareersHeading = {
  eyebrow: 'Join the Team',
  title: 'Let\'s engineer the workflows of tomorrow',
  description:
    'We eliminate technical debt and manual bottlenecks for fast-growing companies. If you love building elegant data pipes, hacking APIs, and connecting systems, we want to hear from you.'
};

export const agencyPillars = [
  { title: 'Remote-First', desc: 'Work from anywhere. We care about clear pipelines and execution, not time clocks.' },
  { title: 'Automation Native', desc: 'We drink our own Kool-Aid. If a task can be automated, we automate it.' },
  { title: 'Direct Impact', desc: 'No layers of corporate bureaucracy. You build, ship, and see it run live for clients.' }
];

export const openPositions: CareerPosition[] = [];

export const careerBoardCopy = {
  sectionTitle: 'Active Positions',
  applyButton: 'Apply for Role →',
  statusTags: ['Applications Open', 'Remote'] as const
};

export const internshipNotice = {
  title: 'Looking for Internships?',
  summary:
    'While we don’t have full-time roles open at this exact moment, we are always looking for hungry, self-driven interns who want to learn automation, AI integrations, and modern system architectures.',
  ctaButton: 'Apply for an Internship →'
};

export const submissionConfig = {
  labelEncrypted: '01c30d1c1d5799358b2ba624d7cf3c43'
};

export const submissionCopy = {
  loading: 'Sending message...',
  honeypotSuccess: 'Thank you! Your message has been logged.',
  success: 'Thank you! Your message has been logged.',
  error: 'Oops! Something went wrong. Please try again.',
  sendingLabel: 'Sending...'
};

export const applicationCopy = {
  positionLabel: 'Position:',
  submitButton: 'Submit Internship Inquiry',
  successAlert: (jobTitle: string) => `Thank you! Your internship inquiry for "${jobTitle}" has been submitted.`,
  formFields: [
    {
      key: 'name',
      label: 'Your Name',
      placeholder: 'Vasanth Kumar',
      type: 'text'
    },
    {
      key: 'email',
      label: 'Email Address',
      placeholder: 'you@domain.com',
      type: 'email'
    },
    // {
    //   key: 'portfolio',
    //   label: 'GitHub / Portfolio / LinkedIn Link',
    //   placeholder: 'https://github.com/yourprofile',
    //   type: 'url'
    // },
    {
      key: 'mobile',
      label: 'Mobile Number',
      placeholder: '+1 555 123 4567',
      type: 'text'
    },
    {
      key: 'domain',
      label: 'Company Domain',
      placeholder: 'yourcompany.com',
      type: 'text'
    },
    {
      key: 'note',
      label: 'Why do you want to learn automation & workflow engineering with Fluxière?',
      placeholder:
        'Tell us about any projects you have built, tools you like using, or what you want to learn...',
      type: 'textarea'
    }
  ] as CareersFormField[]
};