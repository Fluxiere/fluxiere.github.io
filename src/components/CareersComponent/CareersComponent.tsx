// src/components/Careers/Careers.tsx
import React, { useState } from 'react';
import styles from './CareersComponent.module.scss';
import {
  agencyPillars,
  applicationCopy,
  careersHeading,
  careerBoardCopy,
  INITIAL_FORM_DATA,
  internshipNotice,
  openPositions,
  submissionConfig,
  submissionCopy
} from './CareersComponentConstants';

export const CareersComponent = () => {
  const [selectedJob, setSelectedJob] = useState('');
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setTimeout(() => {
      document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData._honey) {
      setStatus({ type: 'success', message: submissionCopy.honeypotSuccess });
      return;
    }

    setStatus({ type: 'loading', message: submissionCopy.loading });

    try {
      const endpoint = `https://formsubmit.co/ajax/${submissionConfig.labelEncrypted}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          domain: formData.domain,
          note: formData.note,
          job: selectedJob,
          _subject: `New Internship Inquiry for ${selectedJob}`,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: submissionCopy.success });
        setFormData(INITIAL_FORM_DATA);
        setSelectedJob('');
      } else {
        throw new Error('Network response failed.');
      }
    } catch (error) {
      setStatus({ type: 'error', message: submissionCopy.error });
    }
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
          <h2 className={styles.boardTitle}>{careerBoardCopy.sectionTitle}</h2>

          {openPositions.length > 0 ? (
            <div className={styles.listings}>
              {openPositions.map(job => (
                <div key={job.id} className={styles.jobCard}>
                  <div className={styles.meta}>
                    <span className={styles.tag}>{job.team}</span>
                    <span className={styles.tag}>{job.location}</span>
                  </div>
                  <h3>{job.title}</h3>
                  <p>{job.summary}</p>
                  <button onClick={() => handleApplyClick(job.title)} className={styles.applyBtn}>
                    {careerBoardCopy.applyButton}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.internBox}>
              <div className={styles.internNoticeMeta}>
                <span className={styles.tag}>{careerBoardCopy.statusTags[0]}</span>
                <span className={styles.tag}>{careerBoardCopy.statusTags[1]}</span>
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
            <h3>
              {applicationCopy.positionLabel} <span className={styles.highlight}>{selectedJob}</span>
            </h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={handleChange}
                style={{ display: 'none' }}
                autoComplete="off"
              />

              {applicationCopy.formFields.map(field => (
                <div key={field.key} className={styles.field}>
                  <label>{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      rows={4}
                      required
                      placeholder={field.placeholder}
                      name={field.key}
                      value={formData[field.key]}
                      onChange={handleChange}
                    />
                  ) : (
                    <input
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      name={field.key}
                      value={formData[field.key]}
                      onChange={handleChange}
                    />
                  )}
                </div>
              ))}
              <button type="submit" className={styles.submitBtn}>
                {applicationCopy.submitButton}
              </button>

              {status.type !== 'idle' && (
                <p style={{
                  fontSize: '14px',
                  marginTop: '10px',
                  color: status.type === 'error' ? '#ff3333' : '#2e7d32'
                }}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
};