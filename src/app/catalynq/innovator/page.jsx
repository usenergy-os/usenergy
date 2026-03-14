import React from 'react';

// Mock Data representing an Innovator's active listings
const mockMyListings = [
  {
    id: '1',
    title: 'Solar Microgrid Optimization Algorithm',
    theme: 'Energy Transitions',
    status: 'published',
    views: 142,
    connectionRequests: 3
  },
  {
    id: '2',
    title: 'EV Fleet Management AI',
    theme: 'Circular Economies',
    status: 'draft',
    views: 0,
    connectionRequests: 0
  }
];

export default function InnovatorDashboard() {
  return (
    <div className="hq-container" style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Dashboard Nav */}
      <nav className="hq-nav" style={{ position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(10px)' }}>
        <div className="container nav-content">
          <div className="logo"><a href="/" className="nav-link" style={{color: 'white'}}>US Energy<span className="text-gradient">.org</span></a></div>
          <div className="nav-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Innovator View</span>
            <a href="/catalynq" className="nav-link" style={{color: 'white'}}>Exit</a>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <main className="container" style={{ flexGrow: 1, padding: '3rem 1.5rem' }}>
        
        <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>My Solutions</h1>
            <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1.1rem' }}>Manage your active listings and connection requests.</p>
          </div>
          <button className="btn btn-primary">
            + Create New Listing
          </button>
        </header>

        {/* Dashboard Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          
          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted-dark)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Active Listings</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 300, color: 'white' }}>1</p>
          </div>
          
          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted-dark)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Total Profile Views</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 300, color: 'white' }}>142</p>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', border: '1px solid rgba(255, 198, 39, 0.3)' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', fontWeight: 600 }}>Connection Requests</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 300, color: 'white' }}>3</p>
          </div>

        </div>

        {/* Listings Table */}
        <div className="glass-panel" style={{ overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-muted-dark)' }}>Title</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-muted-dark)' }}>Theme</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-muted-dark)' }}>Status</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-muted-dark)', textAlign: 'center' }}>Connections</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-muted-dark)', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockMyListings.map(listing => (
                  <tr key={listing.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1.25rem 1.5rem', color: 'white', fontWeight: 500 }}>{listing.title}</td>
                    <td style={{ padding: '1.25rem 1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{listing.theme}</td>
                    <td style={{ padding: '1.25rem 1.5rem' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '9999px', 
                        fontSize: '0.75rem', 
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        backgroundColor: listing.status === 'published' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                        color: listing.status === 'published' ? '#4ade80' : 'rgba(255,255,255,0.6)',
                        border: `1px solid ${listing.status === 'published' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.2)'}`
                      }}>
                        {listing.status}
                      </span>
                    </td>
                    <td style={{ padding: '1.25rem 1.5rem', textAlign: 'center' }}>
                      {listing.connectionRequests > 0 ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-accent)', color: 'black', width: '24px', height: '24px', borderRadius: '50%', fontSize: '0.75rem', fontWeight: 700 }}>
                          {listing.connectionRequests}
                        </span>
                      ) : (
                        <span style={{ color: 'rgba(255,255,255,0.3)' }}>-</span>
                      )}
                    </td>
                    <td style={{ padding: '1.25rem 1.5rem', textAlign: 'right' }}>
                      <button style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: '0.875rem', textDecoration: 'underline' }}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
