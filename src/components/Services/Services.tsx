import { type ServiceItem } from './types';
import styles from './Services.module.scss';

export const Services = () => {
  const servicesData: ServiceItem[] = [
    {
      num: '01',
      tag: 'Most Requested',
      title: 'AI Process Automation',
      desc: 'We map your repetitive workflows and replace them with AI-driven pipelines that run on their own.',
      features: ['Document & data extraction', 'Approval & routing workflows', 'Email, WhatsApp & CRM automation']
    },
    {
      num: '02',
      title: 'AI Chatbots & Assistants',
      desc: "Conversational systems that handle support, sales, and internal queries in your business's own voice.",
      features: ['Customer support assistants', 'RAG / knowledge-base search', 'Lead qualification bots']
    },
    {
      num: '03',
      tag: 'Most Requested',
      title: 'Custom Software (ERP/CRM)',
      desc: 'Tailored internal systems built around how your team actually works — not the other way round.',
      features: ['Custom ERP & CRM platforms', 'Internal dashboards & tools', 'Inventory & operations systems']
    },
    {
      num: '04',
      title: 'Data & Analytics Automation',
      desc: 'Live dashboards and scheduled reporting that pull from every system you already use.',
      features: ['Automated reporting pipelines', 'KPI & ops dashboards', 'Forecasting & anomaly alerts']
    },
    {
      num: '05',
      title: 'Systems Integration',
      desc: 'We connect the tools you already run — payments, accounting, marketing — into one working loop.',
      features: ['API & third-party integrations', 'Legacy system modernization', 'Cross-platform data sync']
    },
    {
      num: '06',
      title: 'Strategy & Audit',
      desc: 'A practical audit of where AI and automation will save your business the most time, before we build anything.',
      features: ['Workflow & cost audit', 'Automation roadmap', 'ROI-prioritized build plan']
    }
  ];

  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-eyebrow">Our Expertise</span>
          <h2>One partner for AI automation and the software it runs on</h2>
          <p>From a single automated workflow to a full custom platform — we scope, build, and support every layer your business needs to operate without manual drag.</p>
        </div>
      </div>
      
      <div className="wrap" style={{ padding: 0 }}>
        <div className={styles.servicesGrid}>
          {servicesData.map((svc) => (
            <div key={svc.num} className={styles.svc}>
              {svc.tag && <span className={styles.tag}>{svc.tag}</span>}
              <span className={styles.num}>{svc.num}</span>
              <h3>{svc.title}</h3>
              <p className={styles.desc}>{svc.desc}</p>
              <ul>
                {svc.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className={styles.go}>
                Explore service <span className={styles.arrow}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};