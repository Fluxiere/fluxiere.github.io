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

  // Note: We remove e.preventDefault() so the browser natively posts to FormSubmit
  const handleSubmit = () => {
    console.log('Redirecting to FormSubmit...');
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
            {/* 1. Added Action and Method pointing to your email channel */}
            <form 
              action={`https://formsubmit.co/${contactChannels[0].labelEncripted}`} 
              method="POST"
              onSubmit={handleSubmit} 
              className={styles.form}
            >
              {/* Optional FormSubmit Configurations */}
              <input type="hidden" name="_subject" value="New Automation Inquiry!" />
              <input type="hidden" name="_replyto" value={formData.email} />
              {/* Uncomment the line below if you want to bypass the reCAPTCHA screen */}
              {/* <input type="hidden" name="_captcha" value="false" /> */}

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