import PropTypes from 'prop-types'


const WorkFlow = ({ num, label, title, desc, icon, img, imgLabel, isOdd, delayMs }) => {

  const Panel = () => (
    <div
      className={`
        hiw-panel relative overflow-hidden bg-white rounded-[22px] p-7
        border border-black/[.06] shadow-[0_4px_24px_rgba(0,0,0,.07)]
        transition-all duration-500
        hover:-translate-y-1.5 hover:shadow-[0_18px_52px_rgba(0,0,0,.12)]
        hover:border-secondary/30
        ${isOdd ? 'hiw-nub-r' : 'hiw-nub-l'}
        hiw-reveal-panel
      `}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {/* Gold underline sweep — needs tiny CSS class */}
      <span className="hiw-underline-sweep" aria-hidden="true" />

      {/* Top row: label + icon */}
      <div className="flex items-center justify-between mb-3.5">
        <span className="text-[10px] font-semibold tracking-[.14em] uppercase text-secondary">
          {label}
        </span>
        <div className="hiw-icon-box w-[42px] h-[42px] rounded-xl bg-secondary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
          {icon}
        </div>
      </div>

      <h3 className="font-serif text-[22px] font-bold text-primary leading-snug mb-2.5">
        {title}
      </h3>
      <p className="text-[13.5px] font-light text-gray-500 leading-relaxed">
        {desc}
      </p>
    </div>
  )

  const ImageCard = () => (
    <div
      className={`
        hiw-img-wrap hidden lg:flex items-center
        ${isOdd ? 'justify-end pr-9' : 'justify-start pl-9'}
      `}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="hiw-img-card relative w-full max-w-[340px] rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,.14)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_64px_rgba(0,0,0,.2)]">
        <div className="overflow-hidden h-[220px]">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover brightness-[.88] saturate-[1.1] transition-all duration-[900ms] ease-[cubic-bezier(.25,.46,.45,.94)] hover:scale-[1.07] hover:brightness-[.72] hover:saturate-[1.25]"
          />
        </div>
        {/* scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(14,28,47,.65)]" aria-hidden="true" />
        <p className="absolute bottom-3.5 left-4 right-4 text-[13px] font-medium text-white tracking-[.04em]">
          {imgLabel}
        </p>
      </div>
    </div>
  )

  return (
    <div className="hiw-row group relative z-10 grid items-center py-11"
      style={{ gridTemplateColumns: '1fr 80px 1fr' }}
    >
      {/* Left col */}
      {isOdd ? <ImageCard /> : <Panel />}

      {/* Centre spine dot */}
      <div
        className="hiw-dot justify-self-center z-[2] relative w-14 h-14 rounded-full bg-primary border-[3px] border-[#fdfaf6] flex items-center justify-center shadow-[0_0_0_6px_rgba(212,175,110,.18)] transition-all duration-[400ms] ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:bg-secondary group-hover:scale-110"
        style={{ transitionDelay: `${delayMs + 70}ms` }}
      >
        <span className="font-serif text-xl font-bold text-white leading-none transition-colors duration-300 group-hover:text-primary">
          {num}
        </span>
      </div>

      {/* Right col */}
      {isOdd ? <Panel /> : <ImageCard />}
    </div>
  )
}

WorkFlow.propTypes = {
  num:      PropTypes.string.isRequired,
  label:    PropTypes.string.isRequired,
  title:    PropTypes.string.isRequired,
  desc:     PropTypes.string.isRequired,
  icon:     PropTypes.node.isRequired,
  img:      PropTypes.string.isRequired,
  imgLabel: PropTypes.string,
  isOdd:    PropTypes.bool,
  delayMs:  PropTypes.number,
}

WorkFlow.defaultProps = {
  imgLabel: '',
  isOdd: false,
  delayMs: 0,
}

export default WorkFlow