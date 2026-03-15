import { useEffect, useRef } from 'react'
import WorkFlow from './WorkFlow'
// import icon1 from '../../assets/icon/p1.png'
// import icon2 from '../../assets/icon/p2.png'
// import icon3 from '../../assets/icon/p3.png'
// import icon4 from '../../assets/icon/p4.png'
import img1 from '../../assets/about/1.jpg'
import img2 from '../../assets/about/2.jpg'
import img3 from '../../assets/about/1.jpg'
import img4 from '../../assets/about/2.jpg'

/* ── Inline SVG icons — no external deps ── */
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-secondary stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round] transition-all duration-300 group-hover:stroke-secondary" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)
const EditIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-secondary stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)
const LockIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-secondary stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
)
const SendIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-secondary stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
    <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/>
  </svg>
)

const STEPS = [
  {
    num: '01', label: 'Step One', isOdd: true,
    title: 'Search Your Dream Getaway',
    desc: 'Enter your destination, travel dates, and preferences. Our smart engine instantly surfaces the best-matched packages available for your journey.',
    icon: <SearchIcon />, img: img1, imgLabel: 'Find your destination',
  },
  {
    num: '02', label: 'Step Two', isOdd: false,
    title: 'Explore & Customise',
    desc: 'Compare curated packages side by side, adjust dates, add activities, and tailor every detail to fit your style and budget — no compromise needed.',
    icon: <EditIcon />, img: img2, imgLabel: 'Personalise your trip',
  },
  {
    num: '03', label: 'Step Three', isOdd: true,
    title: 'Book Securely',
    desc: 'Lock in your booking with our fast, encrypted payment system. Receive instant confirmation and a detailed receipt — no waiting, no stress.',
    icon: <LockIcon />, img: img3, imgLabel: 'Secure your spot',
  },
  {
    num: '04', label: 'Step Four', isOdd: false,
    title: 'Get Ready to Travel',
    desc: 'Receive your e-tickets, hotel vouchers, and a full itinerary in your inbox. Pack your bags — your adventure begins now.',
    icon: <SendIcon />, img: img4, imgLabel: 'Adventure awaits',
  },
]

const HowItWorks = () => {
  const sectionRef = useRef(null)

  /* ── Scroll reveal using IntersectionObserver ── */
  useEffect(() => {
    const targets = sectionRef.current?.querySelectorAll('.hiw-animate') ?? []
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.remove('opacity-0', 'translate-y-8', '-translate-x-8', 'translate-x-8')
          e.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    targets.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-10  overflow-hidden">
      <div className="container">

        {/* ══ Section header ══ */}
        <div className="hiw-animate opacity-0 translate-y-8 transition-all duration-700 text-center mb-[72px]">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] uppercase text-secondary mb-3">
            <span className="block w-5 h-px bg-secondary" />
            Process
            <span className="block w-5 h-px bg-secondary" />
          </div>
          <h2 className="ab-section-title">
            How It <em className="italic text-secondary">Works</em>
          </h2>
        </div>

        {/* ══ Vertical timeline ══ */}
        <div className="relative flex flex-col
          before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-px
          before:-translate-x-1/2 before:z-0
          before:[background:repeating-linear-gradient(180deg,var(--secondary)_0,var(--secondary)_8px,transparent_8px,transparent_18px)]
          max-lg:before:left-7
        ">
          {STEPS.map((step, i) => (
            <WorkFlow
              key={i}
              {...step}
              delayMs={i * 120}
            />
          ))}
        </div>

      </div>

      {/* ══ Micro-styles for panel underline sweep + nub arrows + icon hover ══
           These 4 rules can't be expressed in pure Tailwind utilities,
           so we use a single scoped <style> block — everything else is Tailwind.
      ══ */}
      <style>{`
        /* Gold underline sweep on panel hover */
        .hiw-panel::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--secondary), #f0d090);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .4s ease;
        }
        .hiw-row:hover .hiw-panel::after { transform: scaleX(1); }

        /* CSS triangle nubs pointing toward spine */
        .hiw-nub-l::before {
          content: '';
          position: absolute; top: 50%; right: -18px;
          transform: translateY(-50%);
          border: 10px solid transparent;
          border-left-color: #fff;
        }
        .hiw-nub-r::before {
          content: '';
          position: absolute; top: 50%; left: -18px;
          transform: translateY(-50%);
          border: 10px solid transparent;
          border-right-color: #fff;
        }

        /* Icon box dark fill on row hover */
        .hiw-row:hover .hiw-icon-box { background: var(--primary); }

        /* Mobile: hide triangle nubs, full-width single column */
        @media (max-width: 1024px) {
          .hiw-nub-l::before,
          .hiw-nub-r::before { display: none; }
        }
      `}</style>
    </section>
  )
}

export default HowItWorks