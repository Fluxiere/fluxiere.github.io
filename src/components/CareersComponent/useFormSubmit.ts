import React, { useState } from 'react';
import { INITIAL_FORM_DATA, submissionConfig, submissionCopy } from './CareersComponentConstants';
import type { CareersFormData } from './CareersComponentConstants';

type SubmissionStatus = {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

export const useFormSubmit = () => {
  const [formData, setFormData] = useState<CareersFormData>(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<SubmissionStatus>({ type: 'idle', message: '' });

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
          ...formData,
          _subject: `New Internship Inquiry from ${formData.name || 'Applicant'}`,
          _captcha: 'false'
        })
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus({ type: 'success', message: submissionCopy.success });
      setFormData(INITIAL_FORM_DATA); // Clears inputs but leaves success message visible
    } catch {
      setStatus({ type: 'error', message: submissionCopy.error });
    }
  };

  return { formData, status, handleChange, handleSubmit };
};