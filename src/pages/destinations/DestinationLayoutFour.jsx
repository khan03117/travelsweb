import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { WEB_Image_URL } from '../../utils'
import './Layoutfour.css'

// const DEFAULT_PRIMARY   = '#0f1923'
// const DEFAULT_SECONDARY = '#d4af6e'

/* ── Reusable SVG icons ── */
const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="dfour-star-icon" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const PackageIcon = () => (
  <svg viewBox="0 0 24 24" className="dfour-outline-icon" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="dfour-btn-arrow" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="dfour-share-icon" aria-hidden="true">
    <circle cx="18" cy="5"  r="3" />
    <circle cx="6"  cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59"  y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51"  x2="8.59"  y2="10.49" />
  </svg>
)

/* Icon map for chips — add more as needed */
const CHIP_ICONS = {
  sun: (
    <svg viewBox="0 0 24 24" className="dfour-chip-icon" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1"  x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1"  y1="12" x2="3"  y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" className="dfour-chip-icon" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" className="dfour-chip-icon" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" className="dfour-chip-icon" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" className="dfour-chip-icon" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 24 24" className="dfour-chip-icon" aria-hidden="true">
      <polygon points="3 20 11 4 19 20"/>
      <polyline points="7 14 11 4 15 14"/>
    </svg>
  ),
}

const DestinationLayoutFour = ({ data }) => {
  // // Resolve dynamic colors — supports snake_case, camelCase, or plain `color`
  // const primary   = data.primary_color   || data.primaryColor   || data.color        || DEFAULT_PRIMARY
  // const secondary = data.secondary_color || data.secondaryColor || data.accent_color || DEFAULT_SECONDARY

  const packageCount = data.package_count ?? 0
  const packageLabel = packageCount > 10 ? '10+' : packageCount
  // Zero-padded number for the large decorative display
  const bigNum = String(packageCount).padStart(2, '0')

  // Chips: array of { icon: keyof CHIP_ICONS, label: string }
  // Falls back to a generic chip row if not provided
  const chips = data.chips || [
    { icon: 'map',   label: data.region   || 'Explore' },
    { icon: 'clock', label: data.duration || 'Flexible' },
  ]

  return (
    <Link
      to={'/packages/' + data.url}
      className="dfour"
      // style={{
      //   '--dfour-primary':   primary,
      //   '--dfour-secondary': secondary,
      // }}
      aria-label={`Explore packages in ${data.country}`}
    >
      {/* ════ Image panel with diagonal slice ════ */}
      <div className="dfour-img">
        <img
          src={`${WEB_Image_URL}assets/images/${data.image}`}
          alt={data.country}
          loading="lazy"
        />
      </div>

      {/* ════ Floating pills over image ════ */}
      <div className="dfour-top">
        {/* Rating pill */}
        <div className="dfour-pill dfour-pill--filled">
          <StarIcon />
          <span>5.0 Excellent</span>
        </div>

        {/* Package count pill */}
        <div className="dfour-pill dfour-pill--outline">
          <PackageIcon />
          <span>{packageLabel} pkgs</span>
        </div>
      </div>

      {/* ════ Dark body ════ */}
      <div className="dfour-body">

        {/* Country name + decorative big number */}
        <div className="dfour-head">
          <h3 className="dfour-country">{data.country}</h3>
          <span className="dfour-bignum" aria-hidden="true">{bigNum}</span>
        </div>

        {/* Animated sweep separator */}
        <div className="dfour-sep" aria-hidden="true" />

        {/* Info chips — stagger-reveal on hover */}
        <div className="dfour-chips">
          {chips.map((chip, i) => (
            <div
              key={i}
              className="dfour-chip"
              style={{ '--chip-delay': `${0.04 + i * 0.07}s` }}
            >
              {CHIP_ICONS[chip.icon] || CHIP_ICONS.map}
              <span>{chip.label}</span>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="dfour-cta">
          <button className="dfour-btn" type="button">
            Explore
            <ArrowIcon />
          </button>
          <div className="dfour-share" aria-label="Share destination">
            <ShareIcon />
          </div>
        </div>

      </div>
    </Link>
  )
}

DestinationLayoutFour.propTypes = {
  data: PropTypes.shape({
    url:           PropTypes.string.isRequired,
    image:         PropTypes.string.isRequired,
    country:       PropTypes.string.isRequired,
    package_count: PropTypes.number,
    region:        PropTypes.string,
    duration:      PropTypes.string,
    chips: PropTypes.arrayOf(PropTypes.shape({
      icon:  PropTypes.string,
      label: PropTypes.string,
    })),
    // Dynamic colors
    primary_color:   PropTypes.string,
    primaryColor:    PropTypes.string,
    color:           PropTypes.string,
    secondary_color: PropTypes.string,
    secondaryColor:  PropTypes.string,
    accent_color:    PropTypes.string,
  }).isRequired,
}

export default DestinationLayoutFour