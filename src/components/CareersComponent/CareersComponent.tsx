// src/components/Careers/Careers.tsx
import React, { useState } from 'react';
import styles from './CareersComponent.module.scss';
import { careersHeading, agencyPillars, openPositions, internshipNotice } from './CareersComponentConstants';

export const CareersComponent = () => {
  const [selectedJob, setSelectedJob] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', portfolio: '', note: '' });

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setTimeout(() => {
      document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application Payload:', { job: selectedJob, ...formData });
    alert(`Thank you! Your internship inquiry for "${selectedJob}" has been submitted.`);
    setFormData({ name: '', email: '', portfolio: '', note: '' });
    setSelectedJob('');
  };

  return (
    <section className="sec" id="careers">
      <div className="wrap">
        {/* Header Block */}
        <div className={styles.header}>
          <span className="sec-eyebrow">{careersHeading.eyebrow}</span>
          <h1 className={styles.headline}>{careersHeading.title}</h1>
          <p className={styles.subtext}>{careersHeading.description}</p>
        </div>

        {/* Culture Pillars Grid */}
        <div className={styles.pillarsGrid}>
          {agencyPillars.map((pillar, i) => (
            <div key={i} className={styles.pillarCard}>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        {/* Job Listings / Intern Board */}
        <div className={styles.jobBoard}>
          <h2 className={styles.boardTitle}>Active Positions</h2>
          
          {openPositions.length > 0 ? (
            <div className={styles.listings}>
              {openPositions.map((job: any) => (
                <div key={job.id} className={styles.jobCard}>
                  <div className={styles.meta}>
                    <span className={styles.tag}>{job.team}</span>
                    <span className={styles.tag}>{job.location}</span>
                  </div>
                  <h3>{job.title}</h3>
                  <p>{job.summary}</p>
                  <button onClick={() => handleApplyClick(job.title)} className={styles.applyBtn}>
                    Apply for Role →
                  </button>
                </div>
              ))}
            </div>
          ) : (
            /* No Full-Time Roles Notice -> Intern CTA Box */
            <div className={styles.internBox}>
              <div className={styles.internNoticeMeta}>
                <span className={styles.tag}>Applications Open</span>
                <span className={styles.tag}>Remote</span>
              </div>
              <h3>{internshipNotice.title}</h3>
              <p>{internshipNotice.summary}</p>
              <button onClick={() => handleApplyClick('Automation & Systems Intern')} className={styles.internApplyBtn}>
                {internshipNotice.ctaButton}
              </button>
            </div>
          )}
        </div>

        {/* Application Submission Form Block */}
        {selectedJob && (
          <div id="apply-form" className={styles.formWrapper}>
            <h3>Position: <span className={styles.highlight}>{selectedJob}</span></h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label>Your Name</label>
                <input 
                  type="text" required 
                  placeholder="Vasanth Kumar"
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                />
              </div>
              <div className={styles.field}>
                <label>Email Address</label>
                <input 
                  type="email" required 
                  placeholder="you@domain.com"
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})} 
                />
              </div>
              <div className={styles.field}>
                <label>GitHub / Portfolio / LinkedIn Link</label>
                <input 
                  type="url" required 
                  placeholder="https://github.com/yourprofile"
                  value={formData.portfolio} 
                  onChange={e => setFormData({...formData, portfolio: e.target.value})} 
                />
              </div>
              <div className={styles.field}>
                <label>Why do you want to learn automation & workflow engineering with Fluxière?</label>
                <textarea 
                  rows={4} required
                  placeholder="Tell us about any projects you have built, tools you like using, or what you want to learn..."
                  value={formData.note} 
                  onChange={e => setFormData({...formData, note: e.target.value})}
                />
              </div>
              <button type="submit" className={styles.submitBtn}>Submit Internship Inquiry</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};