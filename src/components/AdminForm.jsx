'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitAdminForm } from '../../lib/actions/submitAdmin';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      className="btn btn-primary" 
      style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Join CatalynQ'}
    </button>
  );
}

const initialState = {
  success: false,
  message: '',
};

export default function AdminForm() {
  const [state, formAction] = useFormState(submitAdminForm, initialState);

  if (state?.success) {
    return (
      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', border: '1px solid var(--color-success)' }}>
        <h3 style={{ color: 'var(--color-success)', fontSize: '1.5rem', marginBottom: '1rem' }}>Success!</h3>
        <p style={{ color: 'rgba(255,255,255,0.8)' }}>{state.message}</p>
        <a href="/catalynq" className="btn btn-outline" style={{ marginTop: '2rem' }}>Back to Marketplace</a>
      </div>
    );
  }

  return (
    <div className="glass-panel" style={{ padding: '2.5rem', maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Innovator Registration</h2>
      <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: '2rem', fontSize: '0.9rem' }}>
        Submit your solution to the CatalynQ marketplace.
      </p>

      {state?.message && !state?.success && (
        <div style={{ padding: '1rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--color-error)', borderRadius: '0.5rem', color: 'var(--color-error)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          {state.message}
        </div>
      )}

      <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="name" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} 
            placeholder="Jane Doe"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Work Email *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} 
            placeholder="jane@startup.com"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="startupName" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Organization Name</label>
          <input 
            type="text" 
            id="startupName" 
            name="startupName" 
            style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white' }} 
            placeholder="EcoTech Solutions"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="description" style={{ fontSize: '0.875rem', fontWeight: 500 }}>Solution Description</label>
          <textarea 
            id="description" 
            name="description" 
            rows="4"
            style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: 'white', resize: 'vertical' }} 
            placeholder="Describe your technology or service..."
          ></textarea>
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
