/* eslint-disable react/prop-types */
import about1 from '../../assets/about/1.jpg'
import about2 from '../../assets/about/2.jpg'
import { useUser } from '../Account/UserContext'
import HowItWorks from '../Home/HowItWorks'
import WorkSection from '../Home/WorkSection'
import AboutFour from './AboutFour'
import AboutThree from './AboutThree'
import AboutTwo from './AboutTwo'
import TestimonialLayoutThree from '../Testimonial/TestimonialLayoutThree'
import './about.css'

/* ─── SVG Icons ─────────────────────────────── */
const EyeIcon    = () => <svg viewBox="0 0 24 24" className="ab-icon"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
const StarIcon   = () => <svg viewBox="0 0 24 24" className="ab-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const ShieldIcon = () => <svg viewBox="0 0 24 24" className="ab-icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
const ClockIcon  = () => <svg viewBox="0 0 24 24" className="ab-icon"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
const TeamIcon   = () => <svg viewBox="0 0 24 24" className="ab-icon"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
const MoneyIcon  = () => <svg viewBox="0 0 24 24" className="ab-icon"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
const GlobeIcon  = () => <svg viewBox="0 0 24 24" className="ab-icon"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
const PhoneIcon  = () => <svg viewBox="0 0 24 24" className="ab-icon"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.88 1.2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
const AwardIcon  = () => <svg viewBox="0 0 24 24" className="ab-icon"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
const ThumbIcon  = () => <svg viewBox="0 0 24 24" className="ab-icon"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>
const LinkedInIcon = () => <svg viewBox="0 0 24 24" className="ab-social-icon"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>

/* ─── Scroll reveal hook ─────────────────────── */
import { useEffect } from 'react'

const useReveal = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('ab-visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.ab-reveal, .ab-reveal-left, .ab-reveal-right')
      .forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

/* ─── Section header ─────────────────────────── */
const SectionHeader = ({ eyebrow, title }) => (
  <div className="ab-section-header ab-reveal">
    <div className="ab-eyebrow">{eyebrow}</div>
    <h2 className="ab-section-title" dangerouslySetInnerHTML={{ __html: title }} />
  </div>
)

/* ─── Stats data ─────────────────────────────── */
const STATS = [
  { num: '12K', suffix: '+', label: 'Happy Clients' },
  { num: '98',  suffix: '%', label: 'Visa Success Rate' },
  { num: '85',  suffix: '+', label: 'Destinations' },
  { num: '15',  suffix: '+', label: 'Years Experience' },
]

/* ─── Why choose us data ─────────────────────── */
const WHY_ITEMS = [
  { icon: <ShieldIcon/>, title: '100% Visa Guidance',    desc: 'Expert end-to-end support for every visa type—student, work, tourist, or immigration—with a proven track record of approvals.' },
  { icon: <ClockIcon/>,  title: 'Fast Turnaround',       desc: 'Speedy processing, real-time updates, and dedicated agents who keep you informed at every step.' },
  { icon: <TeamIcon/>,   title: 'Personalised Service',  desc: 'We tailor every plan to your specific goals, timeline, and budget with a dedicated consultant by your side.' },
  { icon: <MoneyIcon/>,  title: 'Transparent Pricing',   desc: 'No hidden fees, no surprises. Clear upfront pricing with detailed breakdowns—always.' },
  { icon: <GlobeIcon/>,  title: 'Global Network',        desc: 'Partnerships across 85+ countries ensure seamless experiences wherever you go.' },
  { icon: <PhoneIcon/>,  title: '24/7 Support',          desc: 'Our team is always on call. Whether a last-minute question or an urgent issue abroad, we\'re a message away.' },
]

/* ─── Team data ──────────────────────────────── */
const TEAM = [
  { name: 'Arjun Sharma',  role: 'CEO & Founder',      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Priya Mehta',   role: 'Head of Visas',       img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
  { name: 'Rahul Verma',   role: 'Travel Director',     img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' },
  { name: 'Sneha Patel',   role: 'Immigration Lead',    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
]

/* ─── Awards data ────────────────────────────── */
const AWARDS = [
  { icon: <AwardIcon/>, title: 'Best Travel Agency 2023',  sub: 'Travel & Tourism Awards' },
  { icon: <StarIcon/>,  title: 'IATA Accredited Member',   sub: 'Since 2012' },
  { icon: <ShieldIcon/>,title: 'ISO 9001 Certified',       sub: 'Quality Management' },
  { icon: <ThumbIcon/>, title: 'Top Rated on Google',      sub: '4.9 ★ · 2,400+ reviews' },
]

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════ */
const About = () => {
  const { user } = useUser()
  const id = user.admin?.web_theme
  useReveal()

  return (
    <>
      {/* ── Theme-specific hero sections ── */}
      {id == 3 && (
        <section className="ab-hero">
          <div className="ab-hero-grid container">
            <div className="ab-reveal-left">
              <div className="ab-hero-eyebrow">About Us</div>
              <h1 className="ab-hero-title">
                Turning Dreams Into <em>Journeys</em>
              </h1>
              <p className="ab-hero-desc">{user.admin?.about_us}</p>
            </div>
            <div className="ab-reveal-right">
              <div className="ab-hero-imgs">
                <div className="ab-img-main"><img src={about1} alt="About us"/></div>
                <div className="ab-img-sec"><img src={about2} alt="Our team"/></div>
                <div className="ab-hero-stat">
                  <div className="ab-hero-stat-num">15+</div>
                  <div className="ab-hero-stat-lbl">Years of Trust</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {id == 2 && <AboutTwo />}
      {id == 1 && <AboutThree />}
      {id == 4 && <AboutFour />}

      {/* ══════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════ */}
      <section className="ab-stats">
        <div className="container ab-stats-inner">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="ab-stat-card ab-reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="ab-stat-num">{s.num}<span>{s.suffix}</span></div>
              <div className="ab-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          VISION / MISSION
      ══════════════════════════════════════ */}
      <section className="ab-vision">
        <div className="container ab-vision-inner">
          <div className="ab-vision-card  bg-white ab-reveal-left">
            <div className="ab-vc-icon ab-vc-icon--vision"><EyeIcon /></div>
            <div className="ab-vc-label">Our Vision</div>
            <h3 className="ab-vc-title">See the World,<br />Shape the Future</h3>
            <p className="ab-vc-desc">
              To be a globally recognized leader in visa, immigration, tours, and travel consultancy—
              helping people build successful futures abroad and explore the world with ease. We aim
              to create a world where opportunities are accessible, migration is hassle-free, and
              travel experiences are enriching.
            </p>
          </div>
          <div className="ab-vision-card ab-vision-card--mission ab-reveal-right">
            <div className="ab-vc-icon ab-vc-icon--mission text-black!"><StarIcon /></div>
            <div className="ab-vc-label">Our Mission</div>
            <h3 className="ab-vc-title">Simplify,<br />Empower, Deliver</h3>
            <p className="ab-vc-desc">
              To provide seamless and reliable visa, immigration, and travel solutions—empowering
              individuals, families, and businesses to achieve their global dreams with trust,
              transparency, and professionalism. We strive to simplify complex processes while
              delivering exceptional service and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WORK SECTION (original)
      ══════════════════════════════════════ */}
      <WorkSection />

      {/* ══════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════ */}
      <section className="ab-why">
        <div className="container ab-why-inner">
          <SectionHeader eyebrow="Why Choose Us" title="What Sets Us Apart" />
          <div className="ab-why-grid">
            {WHY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="ab-why-card ab-reveal"
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="ab-why-icon">{item.icon}</div>
                <h4 className="ab-why-title">{item.title}</h4>
                <p className="ab-why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TEAM SECTION
      ══════════════════════════════════════ */}
      <section className="ab-team">
        <div className="container ab-team-inner">
          <SectionHeader eyebrow="Our People" title="The Experts Behind<br/>Every Journey" />
          <div className="ab-team-grid">
            {TEAM.map((member, i) => (
              <div
                key={i}
                className="ab-team-card ab-reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="ab-team-img">
                  <img src={member.img} alt={member.name} loading="lazy" />
                  <div className="ab-team-overlay" />
                  <div className="ab-team-social">
                    <a href="#" aria-label={`${member.name} LinkedIn`}><LinkedInIcon /></a>
                  </div>
                </div>
                <div className="ab-team-info">
                  <div className="ab-team-name">{member.name}</div>
                  <div className="ab-team-role">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AWARDS & ACCREDITATIONS
      ══════════════════════════════════════ */}
      <section className="ab-awards">
        <div className="container ab-awards-inner">
          <div className="ab-awards-lhs ab-reveal-left">
            <div className="ab-eyebrow ab-eyebrow--gold">Recognition</div>
            <h2 className="ab-awards-title">Awards &amp;<br />Accreditations</h2>
          </div>
          <div className="ab-awards-grid ab-reveal-right">
            {AWARDS.map((a, i) => (
              <div key={i} className="ab-award-item">
                <div className="ab-award-icon">{a.icon}</div>
                <div>
                  <div className="ab-award-title">{a.title}</div>
                  <div className="ab-award-year">{a.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials (theme 3) ── */}
      {id == 3 && <TestimonialLayoutThree />}

      {/* ── How it works (original) ── */}
      <HowItWorks />

      <section className="py-10" />
    </>
  )
}

export default About