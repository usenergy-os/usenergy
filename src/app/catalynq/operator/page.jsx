import React from 'react';

export const dynamic = 'force-dynamic';

// Mock Data representing what Supabase will return from the 'listings' table
const mockListings = [
  {
    id: '1',
    title: 'Solar Microgrid Optimization Algorithm',
    organization: 'SunTech Analytics',
    theme: 'Energy Transitions',
    type: 'solution_offered',
    description: 'AI-driven algorithm that increases microgrid efficiency by 15% during peak load hours.',
  },
  {
    id: '2',
    title: 'Drought-Resistant Crop Analytics',
    organization: 'AgriSense Labs',
    theme: 'Food Systems',
    type: 'solution_offered',
    description: 'Soil moisture and predictive weather modeling for optimizing water usage in arid climates.',
  },
  {
    id: '3',
    title: 'Closed-Loop Material Recovery Facility',
    organization: 'EcoCycle Partners',
    theme: 'Circular Economies',
    type: 'solution_offered',
    description: 'Scalable processing facility design for recovering 90% of construction and demolition waste.',
  }
];

export default function OperatorDashboard() {
  return (
    <div className="hq-container" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Dashboard Nav */}
      <nav className="hq-nav" style={{ position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(10px)' }}>
        <div className="container nav-content">
          <div className="logo"><a href="/" className="nav-link" style={{color: 'white'}}>US Energy<span className="text-gradient">.org</span></a></div>
          <div className="nav-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span style={{ color: 'var(--color-accent)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Operator View</span>
            <a href="/catalynq" className="nav-link" style={{color: 'white'}}>Exit</a>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <main className="container" style={{ flexGrow: 1, padding: '3rem 1.5rem' }}>
        
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Discover Solutions</h1>
          <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1.1rem' }}>Browse high-impact innovations ready for deployment.</p>
        </header>

        {/* Filters and Search Bar - Scaffold */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            placeholder="Search solutions..." 
            style={{ flexGrow: 1, padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'white' }} 
          />
          <select style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'white' }}>
            <option value="">All Themes</option>
            <option value="Food Systems">Food Systems</option>
            <option value="Energy Transitions">Energy Transitions</option>
            <option value="Circular Economies">Circular Economies</option>
            <option value="Climate Adaptation">Climate Adaptation</option>
            <option value="Sustainability STEM">Sustainability STEM</option>
          </select>
        </div>

        {/* Listings Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {mockListings.map(listing => (
            <div key={listing.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-accent)', fontWeight: 600 }}>
                  {listing.theme}
                </span>
              </div>
              
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>{listing.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted-dark)', marginBottom: '1rem' }}>By {listing.organization}</p>
              
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', flexGrow: 1, marginBottom: '1.5rem' }}>
                {listing.description}
              </p>
              
              <button className="btn btn-outline" style={{ width: '100%', fontSize: '0.9rem', padding: '0.6rem' }}>
                View & Connect
              </button>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
