import React from 'react';
import AdminForm from '../../../components/AdminForm';

export const dynamic = 'force-dynamic';


export default function CatalynQAdminPage() {
  return (
    <div className="hq-container" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav className="hq-nav" style={{ position: 'relative', zIndex: 10, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container nav-content">
          <div className="logo"><a href="/" className="nav-link" style={{color: 'white'}}>US Energy<span className="text-gradient">.org</span></a></div>
          <div className="nav-links">
            <a href="/catalynq" className="nav-link" style={{color: 'white'}}>Back to Marketplace</a>
          </div>
        </div>
      </nav>

      <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 118, 168, 0.15) 0%, rgba(0, 0, 0, 0) 70%)', pointerEvents: 'none', zIndex: 0 }} />
        
        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '600px' }}>
          <AdminForm />
        </div>
      </main>
    </div>
  );
}

