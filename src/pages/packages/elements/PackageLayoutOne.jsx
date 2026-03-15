import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { WEB_Image_URL } from '../../../utils'
import dummyimg from '../../../assets/packages/8.jpeg'
import './pkgone.css'


/* ── SVG Icons (no ant-design dep needed) ── */
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="pkg1-info-icon" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8"  y1="2" x2="8"  y2="6"/>
    <line x1="3"  y1="10" x2="21" y2="10"/>
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="pkg1-info-icon" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="pkg1-btn-arrow" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" className="pkg1-bookmark-icon" aria-hidden="true">
    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
  </svg>
)

const PackageLayoutOne = ({ data }) => {
  // Dynamic colors from API

  // Location: join city states or fallback
  const locationStr = data?.cities?.map(c => c.state)?.filter(Boolean)?.join(', ') || 'N/A'

  // Duration
  const duration = `${data?.days ?? 0}D / ${data?.nights ?? 0}N`

  // Price display — show if available
  const priceDisplay = data?.price
    ? `₹${Number(data.price).toLocaleString('en-IN')}`
    : null

  return (
    <div
      className="pkg1"
    >
      {/* ════ Image ════ */}
      <div className="pkg1-img">
        <img
          src={`${WEB_Image_URL}assets/images/${data?.main_image}`}
          onError={(e) => { e.target.src = dummyimg }}
          alt={data?.package_title || 'Package'}
          loading="lazy"
        />
        <div className="pkg1-scrim" aria-hidden="true" />

        {/* Category tag — fades in on hover */}
        {data?.tag && (
          <span className="pkg1-tag">{data.tag}</span>
        )}

        {/* Price badge */}
        {priceDisplay && (
          <div className="pkg1-price" aria-label={`Price: ${priceDisplay}`}>
            {priceDisplay}
          </div>
        )}
      </div>

      {/* ════ Body ════ */}
      <div className="pkg1-body">
        <h4 className="pkg1-title">
          {data?.package_title ?? 'Package Title Not Available'}
        </h4>

        {/* Duration + Location row */}
        <div className="pkg1-info" role="list">
          <div className="pkg1-info-item" role="listitem">
            <span className="pkg1-info-label">
              <CalendarIcon /> Duration
            </span>
            <span className="pkg1-info-val">{duration}</span>
          </div>

          <div className="pkg1-info-item pkg1-info-item--bordered" role="listitem">
            <span className="pkg1-info-label">
              <PinIcon /> Location
            </span>
            <span className="pkg1-info-val pkg1-info-val--truncate" title={locationStr}>
              {locationStr}
            </span>
          </div>
        </div>

        {/* CTA row */}
        <div className="pkg1-cta">
          <Link
            to={`/package/show/${data?.url}`}
            className="pkg1-btn-primary"
            aria-label={`View details for ${data?.package_title}`}
          >
            <span className="pkg1-btn-label">View Detail</span>
            <ArrowIcon />
          </Link>

          <button
            className="pkg1-btn-secondary"
            type="button"
            aria-label="Save package"
          >
            <BookmarkIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

PackageLayoutOne.propTypes = {
  data: PropTypes.shape({
    url:           PropTypes.string,
    main_image:    PropTypes.string,
    package_title: PropTypes.string,
    days:          PropTypes.number,
    nights:        PropTypes.number,
    price:         PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    tag:           PropTypes.string,
    cities: PropTypes.arrayOf(PropTypes.shape({
      state: PropTypes.string,
    })),
    // Dynamic colors
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

export default PackageLayoutOne