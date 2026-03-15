/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { WEB_Image_URL } from '../../utils'
import './Layouttwo.css'

// Fallback colors if API doesn't supply them
const DEFAULT_PRIMARY   = '#C9A96E'
const DEFAULT_SECONDARY = '#E8D5B0'

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="dtwo-star-icon" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const ArrowIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={`dtwo-arrow-icon ${className}`} aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const PackageIcon = () => (
  <svg viewBox="0 0 24 24" className="dtwo-badge-icon" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const DestinationLayoutTwo = ({ data }) => {
  // Resolve dynamic colors — supports snake_case, camelCase, or plain `color`
  const primary   = data.primary_color   || data.primaryColor   || data.color        || DEFAULT_PRIMARY
  const secondary = data.secondary_color || data.secondaryColor || data.accent_color || DEFAULT_SECONDARY

  const packageLabel = data.package_count > 10 ? '10+ Packages' : `${data.package_count} Packages`

  return (
    <Link
      to={'/packages/' + data.url}
      className="dtwo"
      style={{ '--dtwo-primary': primary, '--dtwo-secondary': secondary }}
      aria-label={`Explore ${data.country}`}
    >
      {/* ── Image ── */}
      <div className="dtwo-img">
        <img
          src={`${WEB_Image_URL}assets/images/${data.image}`}
          alt={data.country}
          loading="lazy"
        />
        <div className="dtwo-scrim" aria-hidden="true" />
      </div>

      {/* ── Hover shimmer sweep ── */}
      <div className="dtwo-shimmer" aria-hidden="true" />

      {/* ── Package count badge (top-left) ── */}
      <div className="dtwo-badge">
        <PackageIcon />
        <span>{packageLabel}</span>
      </div>

      {/* ── Arrow button (top-right) ── */}
      <div className="dtwo-arrow" aria-hidden="true">
        <ArrowIcon />
      </div>

      {/* ── Bottom info panel ── */}
      <div className="dtwo-info">
        <h3 className="dtwo-country">{data.country}</h3>
        <div className="dtwo-divider" aria-hidden="true" />

        <div className="dtwo-meta">
          {/* Stars + rating */}
          <div className="dtwo-stars" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span className="dtwo-rating">5.0 · Excellent</span>
          </div>

          {/* Explore CTA */}
          <div className="dtwo-cta" aria-hidden="true">
            Explore <ArrowIcon className="dtwo-cta-arrow" />
          </div>
        </div>
      </div>
    </Link>
  )
}

DestinationLayoutTwo.propTypes = {
  data: PropTypes.shape({
    url:             PropTypes.string.isRequired,
    image:           PropTypes.string.isRequired,
    country:         PropTypes.string.isRequired,
    package_count:   PropTypes.number,
    // Dynamic colors from API
    primary_color:   PropTypes.string,
    primaryColor:    PropTypes.string,
    color:           PropTypes.string,
    secondary_color: PropTypes.string,
    secondaryColor:  PropTypes.string,
    accent_color:    PropTypes.string,
  }).isRequired,
}

export default DestinationLayoutTwo