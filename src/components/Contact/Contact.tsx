import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { contactHeading, contactDescription, contactChannels, formFields, formSubmitButton } from './ContactConstants';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    _honey: '' // State for the honeypot field
  });

  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the browser from redirecting away

    // Honeypot check: If a bot filled out the hidden field, silently ignore or reject
    if (formData._honey) {
      setStatus({ type: 'success', message: 'Thank you! Your message has been logged.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // FormSubmit AJAX endpoint pattern uses /ajax/ before the email address
      const endpoint = `https://formsubmit.co/ajax/${contactChannels[0].labelEncripted}`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: 'New Automation Inquiry!',
          _captcha: 'false' // Disables the reCAPTCHA verification step
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been logged.' });
        setFormData({ name: '', email: '', company: '', message: '', _honey: '' }); // Clear form
      } else {
        throw new Error('Network response failed.');
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again.' });
    }
  };

  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className={styles.contactGrid}>
          {/* Left Column: Direct Links */}
          <div>
            <span className="sec-eyebrow">{contactHeading.eyebrow}</span>
            <h2 className={styles.headline}>{contactHeading.title}</h2>
            <p className={styles.subtext}>{contactDescription}</p>
            
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
              
              {/* Honeypot Field: Kept completely invisible to human users */}
              <input 
                type="text" 
                name="_honey" 
                value={formData._honey}
                onChange={handleChange}
                style={{ display: 'none' }} 
              />

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

              <button 
                type="submit" 
                className={styles.submitBtn} 
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? 'Sending...' : formSubmitButton}
              </button>

              {/* Status Notice UI */}
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
        </div>
      </div>
    </section>
  );
};