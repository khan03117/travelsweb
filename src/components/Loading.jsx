/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

/* ─────────────────────────────────────────────
   SVG Plane — drawn with primary + secondary
───────────────────────────────────────────── */
const Plane = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 drop-shadow-[0_3px_6px_rgba(0,0,0,.2)]" aria-hidden="true">
    {/* fuselage */}
    <path d="M8 32 Q20 22 40 28 L56 26 Q60 26 58 30 L40 36 Q24 44 8 36 Z" className="fill-primary" />
    {/* main wing */}
    <path d="M22 29 L38 18 L42 22 L28 33Z" className="fill-secondary" />
    {/* tail fin */}
    <path d="M10 32 L8 24 L14 27Z" className="fill-secondary" />
    {/* windows */}
    <circle cx="36" cy="30" r="2.5" fill="white" fillOpacity=".85" />
    <circle cx="30" cy="31" r="2"   fill="white" fillOpacity=".6"  />
    {/* engine */}
    <ellipse cx="34" cy="36" rx="5" ry="2.5" className="fill-primary" fillOpacity=".7" />
  </svg>
)


/* ─────────────────────────────────────────────
   Loading dot
───────────────────────────────────────────── */
const Dot = ({ delay }) => (
  <span
    className="block w-1.5 h-1.5 rounded-full bg-secondary animate-bounce"
    style={{ animationDelay: delay, animationDuration: '1.4s' }}
  />
)

/* ═════════════════════════════════════════════
   LOADING COMPONENT
   Props:
     height     – Tailwind height class e.g. "h-full" (default: "h-full")
     fullscreen – true → fixed inset-0 overlay; false → absolute within parent
     message    – primary loading message
     sub        – secondary message
═════════════════════════════════════════════ */
const Loading = ({
  height     = 'h-full',
  fullscreen = false,
  message    = 'Planning your journey',
  sub        = 'Finding the best routes for you',
}) => {

  const posClass = fullscreen
    ? 'fixed inset-0 z-50'
    : `absolute top-0 end-0 w-full z-50 ${height}`

  return (
    <section className={`${posClass} overflow-hidden`} role="status" aria-live="polite" aria-label="Loading">

      {/* ── Sky gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f4fd] via-[#f0f8ff] to-[#fdfaf6]" />

      {/* ── Frosted glass layer ── */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

      {/* ── Clouds ── */}
      {/* cloud 1 */}
      <div
        className="absolute z-[1] top-[10%] bg-white rounded-full opacity-80"
        style={{ width: 70, height: 22, animation: 'ld-cloud-l 7s linear infinite' }}
        aria-hidden="true"
      />
      {/* cloud 2 — smaller, slower */}
      <div
        className="absolute z-[1] top-[18%] bg-white rounded-full opacity-50"
        style={{ width: 50, height: 16, animation: 'ld-cloud-l 11s linear infinite', animationDelay: '-4s' }}
        aria-hidden="true"
      />
      {/* cloud 3 — drifts right to left */}
      <div
        className="absolute z-[1] top-[8%] right-0 bg-white rounded-full opacity-70"
        style={{ width: 60, height: 18, animation: 'ld-cloud-r 9s linear infinite' }}
        aria-hidden="true"
      />

      {/* ── Runway dashed line ── */}
      <div
        className="absolute bottom-[18%] left-0 right-0 h-px z-[2] opacity-20"
        style={{ background: 'repeating-linear-gradient(90deg, #0e1c2f 0, #0e1c2f 20px, transparent 20px, transparent 40px)' }}
        aria-hidden="true"
      />

      {/* ── Dotted flight path (SVG arc) ── */}
      <div className="absolute left-0 right-0 bottom-[20%] h-16 z-[2] overflow-hidden pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 480 60" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0 55 Q120 50 200 35 Q300 18 480 5"
            fill="none"
            stroke="rgba(212,175,110,.4)"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />
        </svg>
      </div>

      {/* ── Animated plane ── */}
      <div
        className="absolute bottom-[18%] z-[3]"
        style={{ animation: 'ld-plane 2.4s cubic-bezier(.4,0,.2,1) infinite' }}
        aria-hidden="true"
      >
        <Plane />
      </div>

      {/* ── Centre content ── */}
      <div className="relative z-[4] h-full flex flex-col items-center justify-center gap-3 px-6 text-center">
        {/* Title */}
        <p className="font-serif text-[clamp(18px,4vw,24px)] font-semibold text-primary leading-snug">
          {message.split(' ').map((word, i, arr) =>
            i === arr.length - 1
              ? <em key={i} className="not-italic text-secondary"> {word}</em>
              : <span key={i}>{word} </span>
          )}
        </p>

        {/* Subtitle */}
        <p className="font-sans text-[12px] font-light text-gray-400 tracking-[.06em]">{sub}</p>

        {/* Progress bar */}
        <div className="w-48 h-[3px] bg-black/[.07] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
              animation: 'ld-progress 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* Bouncing dots */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <Dot delay="0s"    />
          <Dot delay="0.2s"  />
          <Dot delay="0.4s"  />
        </div>
      </div>

      {/* ── Keyframe definitions (scoped inline) ── */}
      <style>{`
        @keyframes ld-cloud-l {
          from { transform: translateX(-90px); }
          to   { transform: translateX(110vw);  }
        }
        @keyframes ld-cloud-r {
          from { transform: translateX(90px);  }
          to   { transform: translateX(-110vw); }
        }
        @keyframes ld-plane {
          0%   { left: 6%;   transform: translateY(0)    rotate(0deg);  }
          38%  { left: 6%;   transform: translateY(0)    rotate(0deg);  }
          55%  { left: 28%;  transform: translateY(-6px) rotate(-3deg); }
          72%  { left: 55%;  transform: translateY(-22px) rotate(-6deg);}
          100% { left: 112%; transform: translateY(-52px) rotate(-8deg);}
        }
        @keyframes ld-progress {
          0%   { width: 0%;   }
          60%  { width: 82%;  }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  )
}

Loading.propTypes = {
  height:     PropTypes.string,
  fullscreen: PropTypes.bool,
  message:    PropTypes.string,
  sub:        PropTypes.string,
}

export default Loading