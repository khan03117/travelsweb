/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from 'react'
import profile1 from '../../assets/profile/men1.jpg'
import profile2 from '../../assets/profile/men2.jpg'
import profile3 from '../../assets/profile/men3.jpg'

/* ── Icons ── */
const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-secondary" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)
const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[10px] h-[10px] fill-none stroke-secondary stroke-2 [stroke-linecap:round] [stroke-linejoin:round] flex-shrink-0" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const PrevIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round] stroke-[#555] transition-all duration-300 group-hover:stroke-white" aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
  </svg>
)
const NextIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round] stroke-[#555] transition-all duration-300 group-hover:stroke-white" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

/* ── Testimonial data ── */
const TESTIMONIALS = [
  {
    profile: profile1,
    name: 'Emma James',
    location: 'Kerala, India',
    desc: 'Our trip to Bali was absolutely incredible! From seamless bookings to well-planned itineraries, everything was perfect. The guides were friendly, knowledgeable, and made sure we had the best experience. Can\'t wait to book our next adventure!',
  },
  {
    profile: profile2,
    name: 'Rahul Mehta',
    location: 'Gujarat, India',
    desc: 'I had the best vacation ever! Their attention to detail, personalised services, and top-notch accommodations made our European tour unforgettable. Highly recommended for anyone looking for a stress-free and exciting travel experience.',
  },
  {
    profile: profile3,
    name: 'Sophie Martin',
    location: 'Madrid, Spain',
    desc: 'From start to finish, they made our dream trip to Japan a reality. The itinerary was well-balanced, and we got to explore hidden gems along with famous landmarks. Great service, amazing value, and wonderful memories!',
  },
]

/* ── Single Card ── */
const TestimonialCard = ({ item, isActive }) => (
  <div
    className={`
      relative overflow-hidden bg-white rounded-[24px] p-8 border
      transition-all duration-500 ease-[cubic-bezier(.34,1.2,.64,1)]
      ${isActive
        ? 'opacity-100 scale-[1.02] shadow-[0_16px_48px_rgba(0,0,0,.12)] border-secondary/30'
        : 'opacity-50 scale-100 shadow-[0_4px_24px_rgba(0,0,0,.07)] border-black/[.06]'
      }
    `}
  >
    {/* Top gold bar — sweeps in on active */}
    <span
      className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-secondary transition-transform duration-500 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
      aria-hidden="true"
    />

    {/* Large quote mark */}
    <div className="font-serif text-[84px] font-bold text-secondary/[.15] leading-[.7] mb-2 select-none" aria-hidden="true">
      &quote;
    </div>

    {/* Stars */}
    <div className="flex gap-[3px] mb-3.5" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
    </div>

    {/* Review text */}
    <p className="text-[13.5px] font-light text-gray-500 leading-[1.82] mb-5 line-clamp-4">
      {item.desc}
    </p>

    {/* Profile row */}
    <div className="flex items-center gap-3 border-t border-black/[.06] pt-4">
      <img
        src={item.profile}
        alt={item.name}
        loading="lazy"
        className="w-11 h-11 rounded-full object-cover object-top border-2 border-secondary/30 flex-shrink-0"
      />
      <div>
        <div className="font-serif text-[17px] font-bold text-primary leading-none">{item.name}</div>
        <div className="flex items-center gap-1 mt-1">
          <PinIcon />
          <span className="text-[11px] text-gray-400 tracking-[.04em]">{item.location}</span>
        </div>
      </div>
    </div>
  </div>
)

/* ════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════ */
const TestimonialLayoutThree = () => {
  const total = TESTIMONIALS.length
  const [active, setActive] = useState(1) // middle card starts active

  const prev = useCallback(() => setActive(a => (a - 1 + total) % total), [total])
  const next = useCallback(() => setActive(a => (a + 1) % total), [total])

  /* Auto-play */
  useEffect(() => {
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [next])

  /* Visible indices: left, centre (active), right */
  const indices = [
    (active - 1 + total) % total,
    active,
    (active + 1) % total,
  ]

  return (
    <section className="py-20 bg-[#fdfaf6] overflow-hidden">
      <div className="container">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] uppercase text-secondary mb-3">
            <span className="block w-5 h-px bg-secondary" />
            Testimonials
            <span className="block w-5 h-px bg-secondary" />
          </div>
          <h2 className="font-serif text-[clamp(28px,4.5vw,48px)] font-bold text-primary leading-[1.05]">
            Overheard from Our <em className="italic text-secondary">Travellers</em>
          </h2>
        </div>

        {/* ── Rating summary pill ── */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-black/[.07] shadow-[0_2px_12px_rgba(0,0,0,.06)]">
            <div className="flex gap-[2px]" aria-label="4.9 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className="font-sans text-[13px] font-semibold text-primary">4.9 out of 5</span>
            <span className="text-[12px] text-gray-400">· 2,400+ reviews</span>
          </div>
        </div>

        {/* ── Cards — 3-visible slider ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {indices.map((idx, pos) => (
            <TestimonialCard
              key={`${idx}-${pos}`}
              item={TESTIMONIALS[idx]}
              isActive={pos === 1}
            />
          ))}
        </div>

        {/* ── Controls: prev · dots · next ── */}
        <div className="flex items-center justify-center gap-4 mt-10">

          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="group w-11 h-11 rounded-full flex items-center justify-center border-[1.5px] border-black/10 bg-white transition-all duration-300 ease-[cubic-bezier(.34,1.3,.64,1)] hover:bg-primary hover:border-primary hover:scale-110"
          >
            <PrevIcon />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Testimonial navigation">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`
                  h-2 rounded-full transition-all duration-[350ms] ease-[cubic-bezier(.34,1.56,.64,1)]
                  ${i === active ? 'w-6 bg-primary' : 'w-2 bg-black/[.12] hover:bg-black/25'}
                `}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="group w-11 h-11 rounded-full flex items-center justify-center border-[1.5px] border-black/10 bg-white transition-all duration-300 ease-[cubic-bezier(.34,1.3,.64,1)] hover:bg-primary hover:border-primary hover:scale-110"
          >
            <NextIcon />
          </button>

        </div>

      </div>
    </section>
  )
}

export default TestimonialLayoutThree