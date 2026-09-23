'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Building2, Sprout } from 'lucide-react'

const reviews = [
  {
    quote: 'A group that combines ambition with genuine care. Their work speaks for itself.',
    author: 'Community partner',
  },
  {
    quote: 'Professional, dependable, and always focused on building something that lasts.',
    author: 'Business associate',
  },
  {
    quote: 'Thoughtful leadership and a clear commitment to creating lasting value.',
    author: 'Industry collaborator',
  },
]

const businesses = [
  {
    number: '01',
    name: 'Albarbarigoatfarming.com',
    label: 'Agriculture & Livestock',
    description: 'Sustainable farming rooted in care, quality, and a better tomorrow.',
    href: 'https://albarbarigoatfarming.com',
    icon: Sprout,
  },
  {
    number: '02',
    name: 'Shahzamanconstructions.com',
    label: 'Construction & Development',
    description: 'Building lasting spaces with precision, purpose, and ambition.',
    href: 'https://shahzamanconstructions.com',
    icon: Building2,
  },
]

export default function Page() {
  const [activeReview, setActiveReview] = useState(0)
  const review = reviews[activeReview]

  const showPreviousReview = () => setActiveReview((current) => (current - 1 + reviews.length) % reviews.length)
  const showNextReview = () => setActiveReview((current) => (current + 1) % reviews.length)

  return (
    <main className="group-page">
      <div className="grid-glow" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <header className="site-header animate-in">
        <a className="brand" href="/" aria-label="Shah Zaman Groups home">
          <span className="brand-mark">SZ</span>
          <span className="brand-name">SHAH ZAMAN <strong>GROUPS</strong></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <span>Our ventures</span>
        </nav>
        <span className="header-line" aria-hidden="true" />
        <span className="established">EST. 2010</span>
      </header>

      <section className="hero" aria-labelledby="welcome-title">
        <div className="eyebrow animate-in delay-1"><span /> A GROUP BUILT ON VISION</div>
        <h1 id="welcome-title" className="hero-title animate-in delay-2">
          Welcome to <em>Shah Zaman</em><br />Groups.
        </h1>
        <p className="hero-copy animate-in delay-3">
          One vision. Two distinct paths. Explore the ventures shaping a more prosperous future through responsible growth and meaningful work.
        </p>
      </section>

      <section className="businesses" aria-label="Our businesses">
        {businesses.map((business, index) => {
          const Icon = business.icon
          return (
            <a className={`business-card animate-in delay-${index + 4}`} href={business.href} target="_blank" rel="noreferrer" key={business.name}>
              <div className="card-topline"><span>{business.number}</span><span className="card-arrow"><ArrowUpRight size={19} strokeWidth={1.5} /></span></div>
              <div className="card-icon"><Icon size={25} strokeWidth={1.25} /></div>
              <div className="card-content">
                <span className="card-label">{business.label}</span>
                <h2>{business.name}</h2>
                <p>{business.description}</p>
              </div>
              <span className="visit-link">Visit website <ArrowUpRight size={15} /></span>
            </a>
          )
        })}
      </section>

      <section className="values-section animate-in delay-6" aria-labelledby="values-title">
        <div>
          <span className="eyebrow"><span /> THE WAY WE WORK</span>
          <h2 id="values-title">Progress with <em>purpose.</em></h2>
        </div>
        <p>We believe strong businesses are built on trust, thoughtful action, and a lasting commitment to the communities they serve.</p>
        <div className="value-list">
          <div><strong>01</strong><span>Integrity in every decision</span></div>
          <div><strong>02</strong><span>Quality that stands the test of time</span></div>
          <div><strong>03</strong><span>Growth that creates opportunity</span></div>
        </div>
      </section>

      <section className="reviews-section animate-in delay-6" aria-labelledby="reviews-title">
        <div className="section-heading">
          <span className="eyebrow"><span /> TRUSTED BY DESIGN</span>
          <h2 id="reviews-title">What people say</h2>
        </div>
        <div className="review-carousel" aria-roledescription="carousel" aria-label="Reviews">
          <blockquote key={review.author} className="review-slide" aria-live="polite">
            “{review.quote}”
            <cite>— {review.author}</cite>
          </blockquote>
          <div className="review-controls">
            <span className="review-count">0{activeReview + 1} / 0{reviews.length}</span>
            <div className="review-buttons">
              <button type="button" onClick={showPreviousReview} aria-label="Previous review"><ArrowLeft size={17} /></button>
              <button type="button" onClick={showNextReview} aria-label="Next review"><ArrowRight size={17} /></button>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer animate-in delay-6">
        <div className="footer-brand"><span className="brand-mark">SZ</span><span>Shah Zaman Groups</span></div>
        <span className="footer-dot" /><span>Growing with purpose</span><span className="footer-year">© 2026</span>
        <span className="footer-credit">Developed by <strong>Devntom Solutions</strong></span>
      </footer>
    </main>
  )
}

