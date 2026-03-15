/* eslint-disable react/prop-types */
/**
 * PaginationBar — two variants:
 *   variant="pill"    → Prev/Next pill buttons + dot indicators + View All  (Variant A)
 *   variant="compact" → Card bar with icon buttons + page number + View All  (Variant B, default)
 *
 * Props:
 *   page        {number}   current page  (controlled)
 *   totalPages  {number}   total page count
 *   onPageChange {fn}      called with new page number
 *   viewAllHref {string}   href for View All link
 *   variant     {string}   "compact" | "pill"
 */

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './PaginationBar.css'

/* ── Icons ── */
const LeftArrow = () => (
  <svg viewBox="0 0 24 24" className="pgn-arrow-icon" aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)
const RightArrow = () => (
  <svg viewBox="0 0 24 24" className="pgn-arrow-icon" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

/* ════════════════════════════
   VARIANT A — Pill + Dots
════════════════════════════ */
const PillVariant = ({ page, totalPages, onPageChange }) => (
  <div className="pgn-row">
    <button
      className="pgn-pill-btn"
      onClick={() => onPageChange(page - 1)}
      disabled={page <= 1}
      aria-label="Previous page"
    >
      <LeftArrow />
      Prev
    </button>

    {/* Dot indicators */}
    <div className="pgn-dots" role="tablist" aria-label="Pages">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          role="tab"
          aria-selected={i + 1 === page}
          aria-label={`Page ${i + 1}`}
          className={`pgn-dot ${i + 1 === page ? 'pgn-dot--active' : ''}`}
          onClick={() => onPageChange(i + 1)}
        />
      ))}
    </div>

    <button
      className="pgn-pill-btn"
      onClick={() => onPageChange(page + 1)}
      disabled={page >= totalPages}
      aria-label="Next page"
    >
      Next
      <RightArrow />
    </button>
  </div>
)

/* ════════════════════════════
   VARIANT B — Compact Card Bar
════════════════════════════ */
const CompactVariant = ({ page, totalPages, onPageChange, viewAllHref }) => (
  <div className="pgn-bar">
    {/* Left: icon buttons + animated page number */}
    <div className="pgn-bar-left">
      <button
        className="pgn-icon-btn"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        <LeftArrow />
      </button>

      <div className="pgn-page-display" aria-live="polite" aria-atomic="true">
        <span className="pgn-page-label">Page</span>
        <span className="pgn-page-num" key={page}>{page}</span>
      </div>

      <button
        className="pgn-icon-btn"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="Next page"
      >
        <RightArrow />
      </button>
    </div>

    {/* Right: total + view all */}
    <div className="pgn-bar-right">
      <span className="pgn-total">of {totalPages} pages</span>
      <Link to={viewAllHref} className="pgn-view-all">
        <span>View All</span>
        <RightArrow />
      </Link>
    </div>
  </div>
)

/* ════════════════════════════
   MAIN EXPORT
════════════════════════════ */
const PaginationBar = ({
  page = 1,
  totalPages = 8,
  onPageChange,
  viewAllHref = '/destinations',
  variant = 'compact',
}) => {
  const change = (n) => {
    if (n < 1 || n > totalPages) return
    onPageChange?.(n)
  }

  const props = { page, totalPages, onPageChange: change, viewAllHref }

  return variant === 'pill'
    ? <PillVariant   {...props} />
    : <CompactVariant {...props} />
}

PaginationBar.propTypes = {
  page:         PropTypes.number,
  totalPages:   PropTypes.number,
  onPageChange: PropTypes.func,
  viewAllHref:  PropTypes.string,
  variant:      PropTypes.oneOf(['compact', 'pill']),
}

export default PaginationBar