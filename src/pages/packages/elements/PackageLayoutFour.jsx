import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { WEB_Image_URL } from '../../../utils'
import dummyimg from '../../../assets/packages/8.jpeg'
import './pkgFour.css'



/* ── SVG Icons ── */
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="pkg4-stat-icon" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8"  y1="2" x2="8"  y2="6"/>
    <line x1="3"  y1="10" x2="21" y2="10"/>
  </svg>
)

const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" className="pkg4-stat-icon" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="pkg4-loc-icon" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="pkg4-star" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="pkg4-btn-arrow" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="pkg4-share-icon" aria-hidden="true">
    <circle cx="18" cy="5"  r="3"/>
    <circle cx="6"  cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59"  y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51"  x2="8.59"  y2="10.49"/>
  </svg>
)

const PackageLayoutFour = ({ data }) => {

  const locationStr = data?.cities?.map(c => c.state)?.filter(Boolean)?.join(', ') || 'N/A'
  const guestCount  = data?.max_guests ?? data?.guests ?? 12

  const priceDisplay = data?.price
    ? `₹${Number(data.price).toLocaleString('en-IN')}`
    : null

  const rating  = data?.rating  ?? null
  const reviews = data?.reviews ?? null

  return (
    <div
      className="pkg4"
     
    >
      {/* ════ Image ════ */}
      <div className="pkg4-img">
        <img
          src={`${WEB_Image_URL}assets/images/${data?.main_image}`}
          onError={(e) => { e.target.src = dummyimg }}
          alt={data?.package_title || 'Package'}
          loading="lazy"
        />
        <div className="pkg4-scrim" aria-hidden="true" />

        {/* Location overlay — fades up on hover */}
        <div className="pkg4-location">
          <PinIcon />
          <span>{locationStr}</span>
        </div>

        {/* Badges — slide in from right on hover */}
        <div className="pkg4-badges" aria-hidden="true">
          {data?.is_offer   && <span className="pkg4-badge pkg4-badge--offer">Hot Deal</span>}
          {data?.is_featured && <span className="pkg4-badge pkg4-badge--featured">Featured</span>}
        </div>
      </div>

      {/* ════ Body ════ */}
      <div className="pkg4-body">

        {/* Title */}
        <h4 className="pkg4-title">
          {data?.package_title ?? 'Package Title Not Available'}
        </h4>

        {/* Stats strip */}
        <div className="pkg4-stats" role="list">
          <div className="pkg4-stat" role="listitem">
            <CalendarIcon />
            <span className="pkg4-stat-val">{data?.days ?? 0}D / {data?.nights ?? 0}N</span>
            <span className="pkg4-stat-lbl">Duration</span>
          </div>
          <div className="pkg4-stat" role="listitem">
            <PeopleIcon />
            <span className="pkg4-stat-val">{guestCount}</span>
            <span className="pkg4-stat-lbl">Guests</span>
          </div>
        </div>

        {/* Price + Rating row */}
        <div className="pkg4-price-row">
          {priceDisplay ? (
            <div className="pkg4-price-wrap">
              <span className="pkg4-price-lbl">Starting from</span>
              <div className="pkg4-price">
                {priceDisplay}
                <span className="pkg4-price-per"> / person</span>
              </div>
            </div>
          ) : (
            <div className="pkg4-price-wrap">
              <span className="pkg4-price-lbl">Price</span>
              <div className="pkg4-price">..</div>
            </div>
          )}

          {rating && (
            <div className="pkg4-rating" aria-label={`Rating: ${rating} out of 5`}>
              <StarIcon />
              <span className="pkg4-rating-val">{rating}</span>
              {reviews && <span className="pkg4-rating-ct">({reviews})</span>}
            </div>
          )}
        </div>

        {/* CTA row */}
        <div className="pkg4-cta">
          <Link
            to={`/package/show/${data?.url}`}
            className="pkg4-btn-book rounded-full!"
            aria-label={`Book ${data?.package_title}`}
          >
            <span className="pkg4-btn-book-lbl">Book Now</span>
            <ArrowIcon />
          </Link>

          <button
            className="pkg4-btn-share"
            type="button"
            aria-label="Share this package"
          >
            <ShareIcon />
          </button>
        </div>

      </div>
    </div>
  )
}

PackageLayoutFour.propTypes = {
  data: PropTypes.shape({
    url:           PropTypes.string,
    main_image:    PropTypes.string,
    package_title: PropTypes.string,
    days:          PropTypes.number,
    nights:        PropTypes.number,
    max_guests:    PropTypes.number,
    guests:        PropTypes.number,
    price:         PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    rating:        PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    reviews:       PropTypes.number,
    is_offer:      PropTypes.bool,
    is_featured:   PropTypes.bool,
    cities: PropTypes.arrayOf(PropTypes.shape({
      state: PropTypes.string,
    })),
    primary_color:   PropTypes.string,
    primaryColor:    PropTypes.string,
    color:           PropTypes.string,
    secondary_color: PropTypes.string,
    secondaryColor:  PropTypes.string,
    accent_color:    PropTypes.string,
    tertiary_color:  PropTypes.string,
    tertiaryColor:   PropTypes.string,
  }),
}

export default PackageLayoutFour