/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { WEB_Image_URL } from '../../../utils'
import imageone from '../../../assets/packages/9.jpeg'

/* ── Icons ── */
const CalIcon = ({ cls = '' }) => (
  <svg viewBox="0 0 24 24" className={`fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round] ${cls}`} aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)
const PinIcon = ({ cls = '' }) => (
  <svg viewBox="0 0 24 24" className={`fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round] ${cls}`} aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const PeopleIcon = ({ cls = '' }) => (
  <svg viewBox="0 0 24 24" className={`fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round] ${cls}`} aria-hidden="true">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-none stroke-white stroke-2 [stroke-linecap:round] [stroke-linejoin:round] relative z-[1] transition-transform duration-300 group-hover/card:translate-x-1" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)
const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-none stroke-white/70 stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round] transition-all duration-300 group-hover/card:stroke-white" aria-hidden="true">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
)

const PackageLayoutThree = ({ data }) => {
  const imgSrc  = data?.main_image ? `${WEB_Image_URL}assets/images/${data.main_image}` : imageone
  const locStr  = data?.cities?.map(c => c.state)?.filter(Boolean)?.join(' · ') || 'N/A'
  const price   = data?.sharing?.[0]?.amount_b2c
  const priceDisplay = price ? `₹${Number(price).toLocaleString('en-IN')}` : null
  const duration = `${data?.days ?? 0}D / ${data?.nights ?? 0}N`
  const guests  = data?.max_guests ?? data?.guests ?? 12

  return (
    <div className="group/card relative w-full rounded-[24px] overflow-hidden bg-[#0e1c2f] shadow-[0_6px_32px_rgba(0,0,0,.18)] cursor-pointer transition-all duration-500 ease-[cubic-bezier(.34,1.2,.64,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(0,0,0,.28)]">

      {/* ════ Full-bleed image ════ */}
      <div className="w-full h-[320px] overflow-hidden block">
        <img
          src={imgSrc}
          onError={(e) => { e.target.src = imageone }}
          alt={data?.package_title || 'Package'}
          loading="lazy"
          className="w-full h-full object-cover brightness-[.88] saturate-[1.1] transition-all duration-[1100ms] ease-[cubic-bezier(.25,.46,.45,.94)] group-hover/card:scale-[1.07] group-hover/card:brightness-[.65] group-hover/card:saturate-[1.25]"
        />
      </div>

      {/* Gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-[#0e1c2f]/95 pointer-events-none" aria-hidden="true" />

      {/* ════ Top badges ════ */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        {/* Duration pill */}
        <div className="flex items-center gap-[5px] px-[11px] py-1 rounded-full bg-black/35 border border-white/25 backdrop-blur-sm transition-transform duration-[400ms] ease-[cubic-bezier(.34,1.56,.64,1)] group-hover/card:-translate-y-0.5">
          <CalIcon cls="w-[11px] h-[11px] stroke-white" />
          <span className="font-sans text-[11px] font-medium text-white/90">{duration}</span>
        </div>

        {/* Price badge */}
        {priceDisplay && (
          <div className="px-[11px] py-1 rounded-full bg-secondary transition-transform duration-[400ms] ease-[cubic-bezier(.34,1.56,.64,1)] group-hover/card:-translate-y-0.5">
            <span className="font-sans text-[12px] font-bold text-[#0e1c2f]">{priceDisplay}</span>
          </div>
        )}
      </div>

      {/* ════ Slide-up panel ════ */}
      <div className="absolute bottom-0 left-0 right-0 z-[3] px-[22px] translate-y-[72px] transition-transform duration-500 ease-[cubic-bezier(.34,1.2,.64,1)] group-hover/card:translate-y-0">

        {/* Always-visible: title + location */}
        <div className="pb-4">
          <h4 className="font-serif text-[22px] text-white leading-snug mb-1.5 transition-[letter-spacing] duration-[400ms] group-hover/card:tracking-[.01em]">
            {data?.package_title ?? 'Package Title Not Available'}
          </h4>
          <div className="flex items-center gap-[5px]">
            <PinIcon cls="w-[11px] h-[11px] stroke-secondary flex-shrink-0" />
            <span className="font-sans text-[12px] text-white/60 truncate">{locStr}</span>
          </div>
        </div>

        {/* Revealed on hover: meta + CTA */}
        <div className="border-t border-white/10 pt-3.5 pb-[22px] opacity-0 translate-y-2 transition-all duration-[400ms] delay-[80ms] group-hover/card:opacity-100 group-hover/card:translate-y-0">

          {/* Meta row */}
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-1.5">
              <CalIcon cls="w-3 h-3 stroke-secondary" />
              <span className="font-sans text-[11px] text-white/55">Duration</span>
              <span className="font-sans text-[13px] font-semibold text-white">{duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <PeopleIcon cls="w-3 h-3 stroke-secondary" />
              <span className="font-sans text-[11px] text-white/55">Guests</span>
              <span className="font-sans text-[13px] font-semibold text-white">Up to {guests}</span>
            </div>
            {priceDisplay && (
              <div className="flex items-center gap-1.5">
                <span className="font-sans text-[11px] text-white/55">Per person</span>
                <span className="font-sans text-[13px] font-semibold text-white">{priceDisplay}</span>
              </div>
            )}
          </div>

          {/* CTA row */}
          <div className="flex items-center gap-2">
            {/* View package */}
            <Link
              to={`/package/show/${data?.url}`}
              className="group/btn relative flex-1 flex items-center justify-center gap-[7px] py-[11px] rounded-[12px] bg-primary text-white font-sans text-[12px] font-semibold tracking-[.07em] uppercase overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,.3)] transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,.4)]"
              aria-label={`View ${data?.package_title}`}
            >
              {/* shimmer */}
              <span className="absolute inset-0 bg-white/[.14] -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 ease-in-out" aria-hidden="true" />
              <span className="relative z-[1]">View Package</span>
              <ArrowIcon />
            </Link>

            {/* Share */}
            <button
              type="button"
              className="w-[42px] h-[42px] flex-shrink-0 flex items-center justify-center rounded-[12px] border border-white/15 bg-white/[.08] transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] hover:bg-white/[.15] hover:border-white/30 hover:rotate-[15deg] hover:scale-[1.06]"
              aria-label="Share package"
            >
              <ShareIcon />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

PackageLayoutThree.propTypes = {
  data: PropTypes.shape({
    url:           PropTypes.string,
    main_image:    PropTypes.string,
    package_title: PropTypes.string,
    days:          PropTypes.number,
    nights:        PropTypes.number,
    max_guests:    PropTypes.number,
    guests:        PropTypes.number,
    cities:  PropTypes.arrayOf(PropTypes.shape({ state: PropTypes.string })),
    sharing: PropTypes.arrayOf(PropTypes.shape({
      amount_b2c: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })),
  }),
}

export default PackageLayoutThree