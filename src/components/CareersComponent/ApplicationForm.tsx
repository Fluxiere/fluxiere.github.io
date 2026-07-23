import React from 'react';
import styles from './CareersComponent.module.scss';
import { applicationCopy, submissionCopy } from './CareersComponentConstants';
import type { CareersFormData } from './CareersComponentConstants';
import { useFormSubmit } from './useFormSubmit.ts';

export const ApplicationForm: React.FC = () => {
  const { formData, status, handleChange, handleSubmit } = useFormSubmit();

  return (
    <div id="apply-form" className={styles.formWrapper}>
      <h3>Apply for Internship</h3>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Honeypot Field */}
        <input
          type="text"
          name="_honey"
          value={formData._honey}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          style={{ position: 'absolute', opacity: 0, height: 0, width: 0, zIndex: -1 }}
        />

        {/* Dynamic Fields */}
        {applicationCopy.formFields.map(field => {
          const fieldValue = formData[field.key as keyof CareersFormData];

          return (
            <div key={field.key} className={styles.field}>
              <label htmlFor={field.key}>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.key}
                  name={field.key}
                  rows={4}
                  required
                  placeholder={field.placeholder}
                  value={fieldValue}
                  onChange={handleChange}
                />
              ) : (
                <input
                  id={field.key}
                  name={field.key}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={fieldValue}
                  onChange={handleChange}
                />
              )}
            </div>
          );
        })}

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={status.type === 'loading'}
        >
          {status.type === 'loading' ? submissionCopy.sendingLabel : applicationCopy.submitButton}
        </button>

        {status.type !== 'idle' && (
          <p className={status.type === 'error' ? styles.errorMsg : styles.successMsg}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};