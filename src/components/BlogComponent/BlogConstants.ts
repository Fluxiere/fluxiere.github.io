export interface BlogContentBlock {
  type: 'paragraph' | 'code' | 'subheading';
  value: string;
}

export interface ArticleItem {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  featuredImage: string;
  contentBlocks: BlogContentBlock[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  featuredImage: string; // Dynamic path for individual blog header images
  contentBlocks: BlogContentBlock[];
}

export const blogPageHeading = {
  eyebrow: 'Perspectives',
  title: 'Engineering & Automation Logs.',
  subtitle: 'Deep dives into eliminating operational friction, custom RAG architecture setups, and business velocity strategies.'
};

export const sampleBlogs: BlogPost[] = [
  {
    slug: 'eliminating-manual-data-drag',
    category: 'Automation',
    title: 'How to Identify and Kill Process Friction Points',
    excerpt: 'Before writing a line of code, you must locate where time and accuracy are actively leaking out of your business pipeline.',
    date: 'June 24, 2026',
    readingTime: '4 min read',
    featuredImage: '/assets/blog/friction-map.jpg', 
    contentBlocks: [
      {
        type: 'paragraph',
        value: 'Most operational overhead hides in plain sight. It looks like an employee copying data from an email and pasting it into a legacy CRM format manually three times a day.'
      },
      {
        type: 'subheading',
        value: 'The Staging & Sandbox Principle'
      },
      {
        type: 'paragraph',
        value: 'When we design system automation middleware, the primary goal is zero structural disruption. Running safe pipelines means establishing dedicated human-in-the-loop triggers before any database update commits.'
      }
    ]
  },
  {
    slug: 'why-you-should-own-your-code',
    category: 'Engineering',
    title: 'The Hidden Cost of SaaS Platform Lock-In',
    excerpt: 'Why building lightweight, custom-owned middleware layers saves enterprise teams thousands in recurring monthly seat licenses.',
    date: 'June 18, 2026',
    readingTime: '6 min read',
    featuredImage: '/assets/blog/code-ownership.jpg',
    contentBlocks: [
      {
        type: 'paragraph',
        value: 'Every time you buy a seat license for a standard platform, you add another layer of operational dependency. Custom software layers ensure complete long-term control over your internal IP assets.'
      }
    ]
  }
];