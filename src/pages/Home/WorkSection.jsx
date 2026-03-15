import { useEffect, useRef } from 'react'
// import './WorkSection.css'

/* ── SVG icons — no external deps ── */
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="ws-icon" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)
const DocIcon = () => (
  <svg viewBox="0 0 24 24" className="ws-icon" aria-hidden="true">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="ws-icon" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="ws-connector-arrow" aria-hidden="true">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)

/* ── Step data — customise as needed ── */
const STEPS = [
  {
    num: '01',
    title: 'Discover & Plan',
    desc: 'Browse our curated packages, tours, and visa services. Tell us your destination, dates, and budget — we\'ll craft the perfect plan.',
    icon: <SearchIcon />,
  },
  {
    num: '02',
    title: 'Book & Confirm',
    desc: 'Select your package and complete a quick booking form. Our experts verify every detail and send you a personalised itinerary within 24 hours.',
    icon: <DocIcon />,
  },
  {
    num: '03',
    title: 'Travel with Confidence',
    desc: 'Receive your documents, boarding info, and 24/7 support. Sit back and enjoy — we\'re with you every step of the way.',
    icon: <PhoneIcon />,
  },
]

const WorkSection = () => {
  const cardRefs = useRef([])

  /* Scroll-triggered reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('ws-visible')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.15 }
    )
    cardRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="ws">
      <div className="container ws-inner">

        {/* ── Header ── */}
        <div className="ws-header">
          <div>
            <div className="ws-eyebrow">How It Works</div>
            <h2 className="ws-title">
              Our services,<br /><em>step by step</em>
              <span className="ws-title-dot">.</span>
            </h2>
          </div>
          <p className="ws-subtitle">
            From the moment you reach out to the day you depart, we handle every detail
            with care. Here s a clear breakdown of how our process works.
          </p>
        </div>

        {/* ── Cards + dashed connector ── */}
        <div className="ws-cards">
          {/* Dashed connector line (decorative, hidden on mobile) */}
          <div className="ws-connector" aria-hidden="true">
            <ArrowIcon />
            <ArrowIcon />
          </div>

          {STEPS.map((step, i) => (
            <div
              key={i}
              className="ws-card"
              ref={el => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="ws-card-inner">
                {/* Step number bubble */}
                <div className="ws-step" aria-label={`Step ${step.num}`}>
                  <span className="ws-step-num">{step.num}</span>
                </div>

                {/* Icon — top right */}
                <div className="ws-icon-wrap" aria-hidden="true">
                  {step.icon}
                </div>

                <h4 className="ws-card-title">{step.title}</h4>
                <p className="ws-card-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WorkSection