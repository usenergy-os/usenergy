import React from 'react';
import {
  Leaf,
  Lightbulb,
  Rocket,
  FlaskConical,
  Handshake,
  Route,
  ArrowUpRight,
  Building2,
  GraduationCap,
  Users,
  Landmark,
  Palette,
  Microscope
} from "lucide-react";

export default function SummitPage() {
  return (
    <div className="hq-container" style={{backgroundColor: '#020617'}}>
      {/* Navigation */}
      <nav className="hq-nav" style={{ position: 'absolute', top: 0, width: '100%', zIndex: 50, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container nav-content">
          <div className="logo"><a href="/" className="nav-link" style={{color: 'white'}}>US Energy<span className="text-gradient">.org</span></a></div>
          <div className="nav-links">
            <a href="/catalynq" className="nav-link" style={{color: 'white'}}>CatalynQ Marketplace</a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <header className="relative min-h-[92vh] w-full overflow-hidden flex items-center" style={{paddingTop: '80px', minHeight: '90vh'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/95" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95))'}} />
          <div className="hero-glow" style={{ background: 'radial-gradient(circle, rgba(255, 198, 39, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }}></div>

          <div className="container relative z-10 flex flex-col justify-center px-6 py-16 text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.24em] text-white/70" style={{ letterSpacing: '0.24em', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem'}}>
              US Energy Summit 2027
            </p>

            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              The Future of Energy
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', marginBottom: '1.5rem'}}>
              Where innovation, infrastructure, and community converge to shape Arizona's energy future.
            </p>

            <p className="mt-6 max-w-2xl text-sm uppercase tracking-[0.22em]" style={{ color: '#FFC627', letterSpacing: '0.22em', fontSize: '0.875rem', marginBottom: '2.5rem' }}>
              Arizona as a living laboratory for coordinated energy innovation.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row" style={{ display: 'flex', gap: '1rem' }}>
              <a href="#partner" className="inline-flex items-center justify-center rounded-full border border-[#FFC627]/70 px-6 py-3 text-sm font-medium text-white transition hover:bg-[#FFC627] hover:text-black" style={{ border: '1px solid #FFC627', padding: '0.75rem 1.5rem', borderRadius: '9999px', textDecoration: 'none', color: 'white' }}>
                Partner
              </a>
              <a href="#attend" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '0.75rem 1.5rem', borderRadius: '9999px', textDecoration: 'none', color: 'white', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                Attend
              </a>
            </div>

            <div className="mt-12 max-w-3xl border-t border-white/10 pt-6 text-sm text-white/60" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', marginTop: '3rem', color: 'rgba(255,255,255,0.6)', maxWidth: '800px'}}>
              A continuation of the Carbon Summit foundation, oriented toward applied coordination and program development inside the Thunderbird School of Management.
            </div>
          </div>
        </header>

        {/* MISSION STRIP */}
        <section className="py-20" style={{ padding: '5rem 0', backgroundColor: '#0B0B0B' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
               <p style={{ color: '#FFC627', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.875rem', marginBottom: '1rem' }}>Mission</p>
               <p style={{ fontSize: '1.5rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}>
                 Facilitating the activation of next-generation power infrastructure through institutional co-creation and scalable market engines.
               </p>
            </div>
          </div>
        </section>

        {/* THREE FORCES */}
        <section className="py-20" style={{ padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <p style={{ color: '#FFC627', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.875rem', marginBottom: '1rem' }}>Three Forces</p>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 300 }}>Converging Toward Impact</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', padding: '1.5rem', borderRadius: '50%', border: '1px solid rgba(255, 198, 39, 0.25)', marginBottom: '1.5rem', boxShadow: '0 0 20px rgba(255, 198, 39, 0.1)' }}>
                  <Leaf size={32} color="#FFC627" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sustainability</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Building energy systems that respect ecological boundaries while meeting the needs of growing communities across Arizona.</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', padding: '1.5rem', borderRadius: '50%', border: '1px solid rgba(255, 198, 39, 0.25)', marginBottom: '1.5rem', boxShadow: '0 0 20px rgba(255, 198, 39, 0.1)' }}>
                  <Lightbulb size={32} color="#FFC627" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Innovation</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Translating breakthrough research into deployable solutions — from next-generation solar to grid-scale storage and smart infrastructure.</p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', padding: '1.5rem', borderRadius: '50%', border: '1px solid rgba(255, 198, 39, 0.25)', marginBottom: '1.5rem', boxShadow: '0 0 20px rgba(255, 198, 39, 0.1)' }}>
                  <Rocket size={32} color="#FFC627" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Entrepreneurship</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Creating pathways for ventures and startups to accelerate the commercialization of clean energy technologies at scale.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
