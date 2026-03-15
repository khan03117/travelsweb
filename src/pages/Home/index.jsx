/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { WEB_API_URL, WEB_SANCTUM_KEY } from '../../utils'
import { useUser } from '../Account/UserContext'

// Banners
import SingleScreenBanner from './banners/SingleScreenBanner'
import Bannertwo          from './banners/Bannertwo'
import BannerThree        from './banners/BannerThree'
import BannerFour         from './banners/BannerFour'
import BannerFive         from './banners/BannerFive'

// Packages
import PackageLayoutOne   from '../packages/elements/PackageLayoutOne'
import PackageLayoutTwo   from '../packages/elements/PackageLayoutTwo'
import PackageLayoutThree from '../packages/elements/PackageLayoutThree'
import PackageLayoutFour  from '../packages/elements/PackageLayoutFour'
import PackageLayoutFive  from '../packages/elements/PackageLayoutFive'

// Sections
import Destinations           from '../destinations'
import CtaLayoutTwo           from '../cta/CtaLayoutTwo'
import HowItWorks             from './HowItWorks'
import TestimonialLayoutThree from '../Testimonial/TestimonialLayoutThree'
import Loading                from '../../components/Loading'

/* ─────────────────────────────────────────────────
   Scroll-reveal hook
───────────────────────────────────────────────── */
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll('.hr')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('hr-vis'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  })
}

/* ─────────────────────────────────────────────────
   Section Header
───────────────────────────────────────────────── */
const SectionHeader = ({ eyebrow, title, subtitle, light = false }) => (
  <div className="text-center mb-12 hr">
    <span className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] uppercase mb-3
      ${light ? 'text-secondary' : 'text-secondary'}`}>
      <span className="block w-5 h-px bg-secondary" />
      {eyebrow}
      <span className="block w-5 h-px bg-secondary" />
    </span>
    <h2 className={`font-serif text-[clamp(28px,4vw,46px)] font-bold leading-[1.05] mb-4
      ${light ? 'text-white' : 'text-primary'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-[15px] font-light max-w-2xl mx-auto leading-relaxed
        ${light ? 'text-white/65' : 'text-gray-500'}`}>
        {subtitle}
      </p>
    )}
  </div>
)



/* ─────────────────────────────────────────────────
   Why Choose Us Section
───────────────────────────────────────────────── */
const WHY = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-secondary stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Visa Guaranteed',
    desc: 'Expert guidance across all visa types with a proven 98% approval record.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-secondary stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Fast Processing',
    desc: 'Real-time tracking and rapid turnaround so you never miss your travel window.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-secondary stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: 'Global Network',
    desc: 'Partnerships in 85+ countries for seamless hotel, flight and activity bookings.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-secondary stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Personal Expert',
    desc: 'A dedicated consultant walks you through every step, tailored to your goals.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-secondary stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'No Hidden Fees',
    desc: 'Fully transparent pricing with itemised breakdowns — what you see is what you pay.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-secondary stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    title: '24/7 Support',
    desc: 'Our team is always on call — day, night, or anywhere in the world.',
  },
]

const WhyUsSection = () => (
  <section className="py-20 bg-[#fdfaf6]">
    <div className="container">
      <SectionHeader
        eyebrow="Why Choose Us"
        title={<>What Makes Us <em className="italic text-secondary">Different</em></>}
        subtitle="More than just a travel agency — we are your trusted partner from first enquiry to safe return."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY.map((w, i) => (
          <div
            key={i}
            className="group hr relative p-7 rounded-[20px] bg-white border border-black/[.06] shadow-[0_2px_16px_rgba(0,0,0,.06)] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,.1)] hover:border-secondary/30"
            style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
          >
            {/* Gold underline sweep */}
            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary to-secondary/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" aria-hidden="true" />

            <div className="w-11 h-11 rounded-[12px] bg-secondary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-[1.06]">
              {w.icon}
            </div>
            <h4 className="font-serif text-[19px] font-bold text-primary mb-2">{w.title}</h4>
            <p className="text-[13px] font-light text-gray-500 leading-relaxed">{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─────────────────────────────────────────────────
   Travel Tips / Blog Strip
───────────────────────────────────────────────── */
const TIPS = [
  { tag: 'Visa Tips', title: 'How to Maximise Your Schengen Visa Approval Chances',
    img: 'https://images.unsplash.com/photo-1543310465-a76f4b14a0a6?w=600&q=80', read: '4 min' },
  { tag: 'Packing', title: 'The Ultimate Carry-On Packing List for Long-Haul Flights',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80', read: '6 min' },
  { tag: 'Destination', title: 'Top 10 Hidden Gems in Southeast Asia for 2025',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', read: '8 min' },
]

const TravelTipsSection = () => (
  <section className="py-20 hidden bg-white">
    <div className="container">
      <SectionHeader
        eyebrow="Travel Journal"
        title={<>Tips & <em className="italic text-secondary">Inspiration</em></>}
        subtitle="Expert advice, destination guides, and insider knowledge to help you travel smarter."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TIPS.map((t, i) => (
          <div
            key={i}
            className="group hr cursor-pointer rounded-[20px] overflow-hidden border border-black/[.06] shadow-[0_2px_16px_rgba(0,0,0,.06)] bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(0,0,0,.12)]"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="relative h-[200px] overflow-hidden">
              <img
                src={t.img} alt={t.title} loading="lazy"
                className="w-full h-full object-cover brightness-90 transition-all duration-[900ms] group-hover:scale-[1.07] group-hover:brightness-75"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-semibold tracking-[.08em] uppercase">
                {t.tag}
              </span>
            </div>
            <div className="p-5">
              <h4 className="font-serif text-[17px] font-bold text-gray-900 leading-snug mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-primary">
                {t.title}
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-light">{t.read} read</span>
                <span className="text-[11px] font-semibold text-secondary tracking-[.06em] uppercase flex items-center gap-1">
                  Read more
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-secondary stroke-2 [stroke-linecap:round] [stroke-linejoin:round] transition-transform duration-300 group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─────────────────────────────────────────────────
   Popular Destinations ticker band
───────────────────────────────────────────────── */
const TickerBand = () => {
  const items = ['Maldives', 'Bali', 'Paris', 'Dubai', 'Santorini', 'Tokyo', 'New York', 'Cape Town', 'Iceland', 'Peru']
  return (
    <div className="bg-primary py-3.5 overflow-hidden select-none">
      <div className="flex gap-0 animate-[ticker_18s_linear_infinite] whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 text-[13px] font-medium text-white/80 tracking-[.06em] uppercase shrink-0">
            {item}
            <span className="w-1 h-1 rounded-full bg-secondary inline-block" />
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </div>
  )
}

/* ─────────────────────────────────────────────────
   Newsletter Section
───────────────────────────────────────────────── */
const NewsletterSection = () => (
  <section className="py-20 bg-primary relative overflow-hidden">
    {/* Decorative arc */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/[.04] -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-secondary/[.08] translate-y-1/2 -translate-x-1/3 pointer-events-none" aria-hidden="true" />

    <div className="container relative z-10">
      <div className="max-w-2xl mx-auto text-center hr">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] uppercase text-secondary mb-3">
          <span className="block w-5 h-px bg-secondary" />Newsletter<span className="block w-5 h-px bg-secondary" />
        </span>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-bold text-white leading-[1.05] mb-4">
          Get Exclusive <em className="italic text-secondary">Deals</em> First
        </h2>
        <p className="text-[15px] font-light text-white/60 leading-relaxed mb-8">
          Join 10,000+ travellers receiving hand-picked offers, visa tips, and destination guides every week.
        </p>
        <form
          className="flex gap-3 max-w-md mx-auto"
          onSubmit={e => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-3 rounded-[12px] bg-white/10 border border-white/20 text-white placeholder-white/40 text-[14px] font-light outline-none focus:border-secondary transition-colors duration-300"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-[12px] bg-secondary text-primary font-semibold text-[13px] tracking-[.06em] uppercase whitespace-nowrap transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(0,0,0,.3)]"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[11px] text-white/35 mt-3">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  </section>
)

/* ─────────────────────────────────────────────────
   Package grid helper
───────────────────────────────────────────────── */
const PackageGrid = ({ packages, id }) => {
  const spanMap = { 5: 'lg:col-span-6', default: 'lg:col-span-4' }
  const span = spanMap[id] ?? spanMap.default

  const LayoutMap = {
    1: PackageLayoutOne,
    2: PackageLayoutTwo,
    3: PackageLayoutThree,
    4: PackageLayoutFour,
    5: PackageLayoutFive,
  }
  const Layout = LayoutMap[id] ?? PackageLayoutOne

  return (
    <>
      {packages.map((itm, i) => (
        <div key={itm.url ?? i} className={`col-span-12 ${span}`}>
          <Link to={`/package/show/${itm.url}`} className="block h-full w-full p-2">
            <Layout data={itm} />
          </Link>
        </div>
      ))}
    </>
  )
}

/* ═══════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════ */
const Home = () => {
  const { web_theme } = useUser()
  const id = web_theme ?? 1

  const [packages, setPackages] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`${WEB_API_URL}all-packages`, {
        headers: { Authorization: WEB_SANCTUM_KEY },
        params:  { limit: 6 },
      })
      .then(r => setPackages(r.data.data))
      .catch(console.error)
  }, [])

  useReveal()

  if (!web_theme) return <Loading fullscreen />

  const BannerMap = { 1: SingleScreenBanner, 2: Bannertwo, 3: BannerThree, 4: BannerFour, 5: BannerFive }
  const Banner    = BannerMap[id] ?? SingleScreenBanner

  return (
    <>
      {/* ── Hero Banner ── */}
      <Banner />


      {/* ── Destinations ── */}
      <section className="py-16 bg-[#fdfaf6]">
        <div className="container">
          <SectionHeader
            eyebrow="Explore"
            title={<>Popular <em className="italic text-secondary">Destinations</em></>}
            subtitle="Handpicked locations loved by thousands of travellers — find your next adventure."
          />
        </div>
        <Destinations />
      </section>

      {/* ── Destination ticker ── */}
      <TickerBand />

      {/* ── Packages ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="Featured Packages"
            title={<>Plan the Trip of a <em className="italic text-secondary">Lifetime</em></>}
            subtitle="Whether you crave a romantic getaway, a family adventure, or a solo expedition — we have the perfect package waiting for you."
          />
          <div className="grid grid-cols-12 gap-4">
            <PackageGrid packages={packages} id={id} />

            {/* View all */}
            <div className="col-span-12 mt-6 flex justify-center">
              <Link
                to="/destinations"
                className="group inline-flex items-center gap-2 px-10 py-3 rounded-full bg-primary text-white text-sm font-semibold tracking-[.07em] uppercase shadow-[0_4px_16px_rgba(0,0,0,.15)] transition-all duration-400 hover:shadow-[0_8px_28px_rgba(0,0,0,.22)] hover:-translate-y-0.5"
              >
                View All Packages
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white stroke-2 [stroke-linecap:round] [stroke-linejoin:round] transition-transform duration-300 group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <WhyUsSection />

      {/* ── CTA ── */}
      <CtaLayoutTwo />

      {/* ── Testimonials ── */}
      <TestimonialLayoutThree />

     
      <TravelTipsSection />

      {/* ── Newsletter ── */}
      <NewsletterSection />

      {/* ── How it works ── */}
      <HowItWorks />

      {/* ── Bottom padding ── */}
      <div className="py-8" />

      {/* Scroll reveal styles */}
      <style>{`
        .hr { opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease; }
        .hr-vis { opacity:1; transform:translateY(0); }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>
    </>
  )
}

export default Home