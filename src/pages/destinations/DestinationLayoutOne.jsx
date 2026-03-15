import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { WEB_Image_URL } from '../../utils'
import './Layoutone.css';

// SVG icon paths
const ICONS = {
  map:     <><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></>,
  camera:  <><rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3"/><path d="M8.5 7V5.5A1.5 1.5 0 0110 4h4a1.5 1.5 0 011.5 1.5V7"/></>,
  heart:   <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>,
  compass: <><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></>,
}

// Fallback colors if API doesn't provide them
const DEFAULT_PRIMARY   = '#C9A96E'
const DEFAULT_SECONDARY = '#E8D5B0'

const DestinationLayoutOne = ({ data }) => {
  const quickIcons = ['map', 'camera', 'heart']

  // Resolve colors — supports common API field names
  const primary   = data.primary_color   || data.primaryColor   || data.color        || DEFAULT_PRIMARY
  const secondary = data.secondary_color || data.secondaryColor || data.accent_color || DEFAULT_SECONDARY

  // Inject as CSS custom properties so all CSS rules pick them up automatically
  const colorVars = {
    '--dest-primary':   primary,
    '--dest-secondary': secondary,
  }

  return (
    <Link
      to={'/packages/' + data.url}
      className="dest-card"
      style={colorVars}
      aria-label={`Explore ${data.country}`}
    >
      {/* Circular image ring */}
      <div className="dest-ring">
        {/* Dashed orbit ring (revealed on hover) */}
        <svg className="ring-svg" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="96" className="ring-dash" />
          <circle cx="100" cy="100" r="90" className="ring-solid" />
        </svg>

        {/* Orbiting dot */}
        <span className="orbit-dot" aria-hidden="true" />

        {/* Image */}
        <div className="dest-img-wrap">
          <img
            src={`${WEB_Image_URL}assets/images/${data.image}`}
            alt={data.country}
            loading="lazy"
          />
          <div className="dest-overlay" />
        </div>

        {/* Country label + hover icons */}
        <div className="dest-label">
          <span className="dest-country">{data.country}</span>

          <div className="dest-icons" aria-label="Quick actions">
            {quickIcons.map(ic => (
              <span key={ic} className="icon-pill" title={ic}>
                <svg
                  viewBox="0 0 24 24"
                  width="12" height="12"
                  stroke="white"
                  fill="none"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[ic]}
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Name tag below circle */}
      <div className="dest-name-tag">
        <span className="dest-name">{data.country}</span>
        {data.tagline && <span className="dest-tagline">{data.tagline}</span>}
        <span className="dest-underline" />
      </div>
    </Link>
  )
}

DestinationLayoutOne.propTypes = {
  data: PropTypes.shape({
    url:             PropTypes.string.isRequired,
    image:           PropTypes.string.isRequired,
    country:         PropTypes.string.isRequired,
    tagline:         PropTypes.string,
    // Dynamic colors from API — any of these field names are accepted
    primary_color:   PropTypes.string,
    primaryColor:    PropTypes.string,
    color:           PropTypes.string,
    secondary_color: PropTypes.string,
    secondaryColor:  PropTypes.string,
    accent_color:    PropTypes.string,
  }).isRequired,
}

export default DestinationLayoutOne