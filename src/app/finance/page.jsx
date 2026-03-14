import React from 'react';
import { TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export default function FinanceCirclePage() {
  return (
    <div className="hq-container" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navigation */}
      <nav className="hq-nav" style={{ position: 'relative', zIndex: 10, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container nav-content">
          <div className="logo"><a href="/" className="nav-link" style={{color: 'white'}}>US Energy<span className="text-gradient">.org</span></a></div>
          <div className="nav-links">
            <a href="/" className="nav-link" style={{color: 'white'}}>Back to Mind HQ</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flexGrow: 1, position: 'relative' }}>
        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '600px', background: 'radial-gradient(ellipse at top, rgba(255, 122, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%)', pointerEvents: 'none', zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '6rem' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
            <p style={{ color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: 600 }}>Strategic Finance Circle</p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Capital Activation for <br/>Energy Resilience
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              Get the first look at "De-risked" projects emerging from the DPP program. Institutional funding for next-generation power infrastructure.
            </p>
          </div>

          {/* Value Propositions */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
            
            <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '1.25rem', borderRadius: '50%', backgroundColor: 'rgba(255, 122, 0, 0.1)', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                <ShieldCheck size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>De-risked Projects</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Invest in solutions that have been institutionally co-created and beta-tested against the needs of our 180+ industrial partners.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '1.25rem', borderRadius: '50%', backgroundColor: 'rgba(255, 122, 0, 0.1)', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                <Zap size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Speed of Demand</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Bypass traditional friction. We facilitate the rapid activation of capital into scalable market engines and grid-ready infrastructure.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '1.25rem', borderRadius: '50%', backgroundColor: 'rgba(255, 122, 0, 0.1)', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                <TrendingUp size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Exclusive Deal Flow</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Members of the Strategic Finance Circle receive priority access to deployment partnerships and energy transition investments.
              </p>
            </div>

          </div>

          {/* Intake CTA */}
          <div className="glass-panel" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem', textAlign: 'center', border: '1px solid rgba(255, 122, 0, 0.3)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Request Access</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem' }}>
              Join the institutional network funding the future of US energy infrastructure.
            </p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)' }}>Institution / Fund Name</label>
                <input type="text" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(0,0,0,0.5)', color: 'white' }} placeholder="Acme Capital" required />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)' }}>Contact Email</label>
                <input type="email" style={{ width: '100%', padding: '0.875rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(0,0,0,0.5)', color: 'white' }} placeholder="director@acmecapital.com" required />
              </div>
              <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'var(--color-secondary)', color: 'white', border: 'none' }}>
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}
