import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { contactHeading, contactDescription, contactChannels, formFields, formSubmitButton } from './ContactConstants';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ready for integration with n8n, Zapier, or email endpoint
    console.log('Form submission data:', formData);
    alert('Thank you! Your message has been logged.');
  };

  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className={styles.contactGrid}>
          {/* Left Column: Direct Links */}
          <div>
            <span className="sec-eyebrow">{contactHeading.eyebrow}</span>
            <h2 className={styles.headline}>{contactHeading.title}</h2>
            <p className={styles.subtext}>
              {contactDescription}
            </p>
            
            <div className={styles.channels}>
              {contactChannels.map((channel, index) => (
                <div key={index} className={styles.channel}>
                  <div className={styles.chTitle}>{channel.title}</div>
                  <a href={channel.href}>{channel.label}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">{formFields.name.label}</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={formFields.name.placeholder} 
                  required 
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">{formFields.email.label}</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={formFields.email.placeholder} 
                  required 
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="company">{formFields.company.label}</label>
                <input 
                  type="text" 
                  id="company"
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={formFields.company.placeholder} 
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">{formFields.message.label}</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={formFields.message.placeholder} 
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                {formSubmitButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};