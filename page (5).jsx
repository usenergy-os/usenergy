import React from 'react';

export const dynamic = 'force-dynamic';


export default function CatalynQPage() {
  return (
    <div className="hq-container">
      <nav className="hq-nav">
        <div className="container nav-content">
          <div className="logo"><a href="/" className="nav-link">US Energy<span className="text-gradient">.org</span></a></div>
          <div className="nav-links">
            <a href="/summit" className="nav-link">The Summit</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-glow" style={{ background: 'radial-gradient(circle, rgba(255, 122, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }}></div>
        <div className="container hero-content">
          <div className="badge" style={{ color: 'var(--color-secondary)', borderColor: 'rgba(255, 122, 0, 0.2)', background: 'rgba(255, 122, 0, 0.1)' }}>The Engine</div>
          <h1 className="hero-title">
            <span style={{ color: 'var(--color-secondary)'}}>CatalynQ</span> Marketplace
          </h1>
          <p className="hero-subtitle">
            The double-sided marketplace connecting sustainable solution Innovators directly with Operators.
          </p>
          
          <div className="action-cards">
            {/* Innovator */}
            <div className="glass-panel action-card">
              <div className="card-icon">💡</div>
              <h3>I am an Innovator</h3>
              <p>I have a sustainable solution, technology, or service to offer.</p>
              <button className="btn btn-outline" style={{width: '100%', marginTop: '1rem'}}>
                Post a Solution
              </button>
            </div>

            {/* Operator */}
            <div className="glass-panel action-card">
              <div className="card-icon">🏭</div>
              <h3>I am an Operator</h3>
              <p>I am looking for sustainable solutions to implement in my organization.</p>
              <button className="btn btn-secondary" style={{width: '100%', marginTop: '1rem'}}>
                Find Solutions
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

