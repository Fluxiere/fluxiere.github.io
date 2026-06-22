import React, { useState } from 'react';
import styles from './Contact.module.scss';

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
            <span className="sec-eyebrow">Get in Touch</span>
            <h2 className={styles.headline}>Let’s discuss what we can automate for your team</h2>
            <p className={styles.subtext}>
              Book an audit call or shoot over a quick description of the bottleneck you're running into. 
              We'll respond within 24 business hours with a clear, direct answer on whether we can help.
            </p>
            
            <div className={styles.channels}>
              <div className={styles.channel}>
                <div className={styles.chTitle}>Direct Email</div>
                <a href="mailto:hello@fluxiere.com">hello@fluxiere.com</a>
              </div>
              <div className={styles.channel}>
                <div className={styles.chTitle}>Calendar Link</div>
                <a href="#">book a 30-min call</a>
              </div>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Vasan" 
                  required 
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Work Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com" 
                  required 
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="company">Company Name</label>
                <input 
                  type="text" 
                  id="company"
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd" 
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">What process or workflow needs fixing?</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe the steps, software involved, or time spent..." 
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};