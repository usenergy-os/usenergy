import React from 'react';

export const dynamic = 'force-dynamic';
export default function Home() {
  return (
    <div className="hq-container">
      {/* Navigation */}
      <nav className="hq-nav">
        <div className="container nav-content">
          <div className="logo">US Energy<span className="text-gradient">.org</span></div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About the 501c3</a>
            <a href="/summit" className="nav-link">The Summit</a>
            <a href="/catalynq" className="nav-link">CatalynQ Marketplace</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-glow"></div>
        <div className="container hero-content">
          <div className="badge" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>The Mind HQ</div>
          <h1 className="hero-title" style={{ maxWidth: '1000px', fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
            Engineering <span className="text-gradient-primary">Strategic Energy Resilience</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', fontSize: '1.25rem' }}>
            Facilitating the activation of next-generation power infrastructure through institutional co-creation and scalable market engines.
          </p>
          
          <div className="action-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', width: '100%', maxWidth: '1200px' }}>
            {/* Operators (Demand) */}
            <div className="glass-panel action-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="card-icon">🏗️</div>
              <h3>Operators (Demand)</h3>
              <p style={{ flexGrow: 1, fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>Secure early access to verified resilience protocols and grid-ready solutions.</p>
              <a href="/catalynq/operator" className="btn btn-outline" style={{width: '100%', marginTop: '1.5rem', fontSize: '0.9rem'}}>
                Join the Operator Intake
              </a>
            </div>

            {/* Innovators (Supply) */}
            <div className="glass-panel action-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="card-icon">💡</div>
              <h3>Innovators (Supply)</h3>
              <p style={{ flexGrow: 1, fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>Beta-test your tech against the needs of our 180+ industrial partners.</p>
              <a href="/catalynq/admin" className="btn btn-primary" style={{width: '100%', marginTop: '1.5rem', fontSize: '0.9rem'}}>
                Apply as an Innovator
              </a>
            </div>

            {/* Investors (Finance) */}
            <div className="glass-panel action-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="card-icon">📈</div>
              <h3>Investors (Finance)</h3>
              <p style={{ flexGrow: 1, fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>Get the first look at the "De-risked" projects emerging from the DPP program.</p>
              <a href="#finance" className="btn btn-outline" style={{width: '100%', marginTop: '1.5rem', fontSize: '0.9rem', borderColor: 'var(--color-accent)', color: 'var(--color-accent)'}}>
                Join the Strategic Finance Circle
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Validation Section */}
      <section style={{ padding: '6rem 0', backgroundColor: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, color: 'white' }}>Trusted by Leaders in Energy</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            <div style={{ padding: '2.5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
                "US Energy has positioned themselves as a leader in Sustainability. If they can bridge the gap between conventional and renewable energy they can change the world."
              </p>
              <p style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>— John Hickenlooper</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted-dark)' }}>Former CO Governor</p>
            </div>

            <div style={{ padding: '2.5rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
                "US Energy has been a real asset to the Williston Basin. From bringing in platinum artists to working on the tough challenges... We look forward to what's to come."
              </p>
              <p style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>— Lane O'Neill</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted-dark)' }}>Marketing Director, Nova Energy</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
