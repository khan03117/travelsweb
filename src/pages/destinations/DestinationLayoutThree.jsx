import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { WEB_Image_URL } from '../../utils'
import './Layoutthree.css'

const DEFAULT_PRIMARY   = '#1a1a2e'
const DEFAULT_SECONDARY = '#e8c87a'
const DEFAULT_TERTIARY  = '#f0e6c8'

/* ── Inline SVG icons (no extra deps) ── */
const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="dthree-star-icon" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="dthree-btn-arrow" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" className="dthree-save-icon" aria-hidden="true">
    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
  </svg>
)

const PackageIcon = () => (
  <svg viewBox="0 0 24 24" className="dthree-pkg-icon" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
)

const FeaturedIcon = () => (
  <svg viewBox="0 0 24 24" className="dthree-tag-icon" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const OfferedIcon = () => (
  <svg viewBox="0 0 24 24" className="dthree-tag-icon" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
)

const DestinationLayoutThree = ({ data }) => {
  // Resolve dynamic colors — supports snake_case, camelCase, or plain `color`
  const primary   = data.primary_color   || data.primaryColor   || data.color        || DEFAULT_PRIMARY
  const secondary = data.secondary_color || data.secondaryColor || data.accent_color || DEFAULT_SECONDARY
  const tertiary  = data.tertiary_color  || data.tertiaryColor  || DEFAULT_TERTIARY

  const packageLabel = data.package_count > 10 ? '10+' : data.package_count

  // Strip HTML tags for safe plain-text description fallback
  const plainAbout = data.about
    ? data.about.replace(/<[^>]+>/g, '').substring(0, 120)
    : ''

  return (
    <Link
      to={'/packages/' + data.url}
      className="dthree"
      style={{
        '--dthree-primary':   primary,
        '--dthree-secondary': secondary,
        '--dthree-tertiary':  tertiary,
      }}
      aria-label={`Explore ${data.country}`}
    >
      {/* ════ Image block ════ */}
      <div className="dthree-img-wrap">
        <img
          src={`${WEB_Image_URL}assets/images/${data.image}`}
          alt={data.country}
          loading="lazy"
        />
        <div className="dthree-scrim" aria-hidden="true" />

        {/* Tags — slide in from left on hover */}
        <div className="dthree-tags">
          <span className="dthree-tag dthree-tag--featured">
            <FeaturedIcon /> Featured
          </span>
          <span className="dthree-tag dthree-tag--offered">
            <OfferedIcon /> Offered
          </span>
        </div>

        {/* Package count pill — top right */}
        <div className="dthree-pkg">
          <PackageIcon />
          <span>{packageLabel} Packages</span>
        </div>

        {/* Country + stars — fades up from bottom on hover */}
        <div className="dthree-in-text">
          <h3 className="dthree-country">{data.country}</h3>
          <div className="dthree-stars" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span className="dthree-rating">5.0 · Excellent</span>
          </div>
        </div>
      </div>

      {/* ════ Floating info card ════ */}
      <div className="dthree-card">
        {/* Animated accent bar */}
        <div className="dthree-accent" aria-hidden="true" />

        {/* Description */}
        {plainAbout && (
          <p className="dthree-desc">{plainAbout}…</p>
        )}

        {/* CTA row */}
        <div className="dthree-cta-row">
          <button className="dthree-btn" type="button">
            View Packages <ArrowIcon />
          </button>
          <div className="dthree-save" aria-label="Save destination">
            <BookmarkIcon />
          </div>
        </div>
      </div>
    </Link>
  )
}

DestinationLayoutThree.propTypes = {
  data: PropTypes.shape({
    url:             PropTypes.string.isRequired,
    image:           PropTypes.string.isRequired,
    country:         PropTypes.string.isRequired,
    about:           PropTypes.string,
    package_count:   PropTypes.number,
    // Dynamic colors from API
    primary_color:   PropTypes.string,
    primaryColor:    PropTypes.string,
    color:           PropTypes.string,
    secondary_color: PropTypes.string,
    secondaryColor:  PropTypes.string,
    accent_color:    PropTypes.string,
    tertiary_color:  PropTypes.string,
    tertiaryColor:   PropTypes.string,
  }).isRequired,
}

export default DestinationLayoutThree