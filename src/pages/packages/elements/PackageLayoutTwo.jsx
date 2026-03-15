import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { WEB_Image_URL } from '../../../utils'
import dummyimg from '../../../assets/packages/8.jpeg'

/* ── Icons ── */
const CalIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] stroke-white fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8"  y1="2" x2="8"  y2="6"/>
    <line x1="3"  y1="10" x2="21" y2="10"/>
  </svg>
)
const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-secondary stroke-2 [stroke-linecap:round] [stroke-linejoin:round] flex-shrink-0" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-white stroke-2 [stroke-linecap:round] [stroke-linejoin:round] relative z-[1] transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-none stroke-[#bbb] stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round] transition-all duration-300 group-hover/wish:stroke-secondary" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
)

const PackageLayoutTwo = ({ data }) => {
  const imgSrc  = data?.main_image ? `${WEB_Image_URL}assets/images/${data.main_image}` : dummyimg
  const price   = data?.sharing?.[0]?.amount_b2c
  const locStr  = data?.cities?.map(c => c.state)?.filter(Boolean)?.join(', ') || 'N/A'
  const duration = `${data?.days ?? 0}D / ${data?.nights ?? 0}N`

  return (
    <div className="group w-full bg-white rounded-[20px] overflow-hidden border border-black/[.05] shadow-[0_2px_16px_rgba(0,0,0,.07)] transition-all duration-[450ms] ease-[cubic-bezier(.34,1.2,.64,1)] hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(0,0,0,.13)] cursor-pointer">

      {/* ════ Image ════ */}
      <div className="relative h-[185px] overflow-hidden">
        <img
          src={imgSrc}
          onError={(e) => { e.target.src = dummyimg }}
          alt={data?.package_title || 'Package'}
          loading="lazy"
          className="w-full h-full object-cover brightness-90 transition-all duration-[1000ms] ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-[1.08] group-hover:brightness-75"
        />

        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" aria-hidden="true" />

        {/* Price — bottom left */}
        <div className="absolute bottom-3 left-3.5 flex flex-col">
          {price && (
            <>
              <span className="font-serif text-[22px] font-bold text-white leading-none">
                ₹{Number(price).toLocaleString('en-IN')}
              </span>
              <span className="font-sans text-[10px] text-white/65 tracking-[.06em] mt-0.5">
                avg per person
              </span>
            </>
          )}
        </div>

        {/* Duration pill — top right */}
        <div className="absolute top-3 right-3 flex items-center gap-[5px] px-2.5 py-1 rounded-full bg-black/35 border border-white/25 backdrop-blur-sm transition-transform duration-[400ms] ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:-translate-y-0.5">
          <CalIcon />
          <span className="font-sans text-[11px] font-medium text-white/90">{duration}</span>
        </div>
      </div>

      {/* ════ Body ════ */}
      <div className="px-[18px] pt-4 pb-[18px]">

        {/* Title */}
        <h4 className="font-serif text-[18px] font-bold text-gray-900 leading-snug mb-2.5 line-clamp-2 transition-colors duration-300 group-hover:text-primary">
          {data?.package_title ?? 'Package Title Not Available'}
        </h4>

        {/* Location */}
        <div className="flex items-center gap-[5px] mb-3.5 text-[12px] text-gray-400 font-light">
          <PinIcon />
          <span className="truncate">{locStr}</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/[.06] mb-3.5" />

        {/* CTA row */}
        <div className="flex items-center gap-2">

          {/* View Package button */}
          <Link
            to={`/package/show/${data?.url}`}
            className="group/btn relative flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-[10px] bg-primary text-white font-sans text-[11px] font-semibold tracking-[.07em] uppercase overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,.15)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,.22)]"
            aria-label={`View package: ${data?.package_title}`}
          >
            {/* shimmer sweep */}
            <span className="absolute inset-0 bg-white/[.14] -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[450ms] ease-in-out" aria-hidden="true" />
            <span className="relative z-[1]">View Package</span>
            <ArrowIcon />
          </Link>

          {/* Wishlist button */}
          <button
            type="button"
            className="group/wish w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-[10px] border border-black/10 bg-white transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] hover:border-secondary hover:bg-[#fdf6ea] hover:scale-[1.08]"
            aria-label="Save to wishlist"
          >
            <HeartIcon />
          </button>

        </div>
      </div>
    </div>
  )
}

PackageLayoutTwo.propTypes = {
  data: PropTypes.shape({
    url:           PropTypes.string,
    main_image:    PropTypes.string,
    package_title: PropTypes.string,
    days:          PropTypes.number,
    nights:        PropTypes.number,
    cities: PropTypes.arrayOf(PropTypes.shape({ state: PropTypes.string })),
    sharing: PropTypes.arrayOf(PropTypes.shape({ amount_b2c: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) })),
  }),
}

export default PackageLayoutTwo