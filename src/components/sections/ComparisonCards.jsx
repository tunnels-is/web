import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// --- Icon primitives ---

const IconX = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const IconMinus = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
    <path d="M5 12h14" />
  </svg>
);

const IconArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const IconCheck = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const IconPlus = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const LEFT_ICONS = {
  x: IconX,
  minus: IconMinus,
  arrow: IconArrowRight,
};

const RIGHT_ICONS = {
  check: IconCheck,
  plus: IconPlus,
  arrow: IconArrowRight,
};

// Subtle background glow on the right card
const ACCENT_BG = {
  blue: 'bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.07)_0%,transparent_60%)]',
  teal: 'bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.07)_0%,transparent_60%)]',
  green: 'bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.07)_0%,transparent_60%)]',
};

const spring = [0.16, 1, 0.3, 1];

// --- Sub-components ---

function CardItem({ IconComponent, iconClass, textClass, item, index, isVisible, directionX }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: directionX }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.35, delay: 0.1 + index * 0.03, ease: spring }}
      className="flex items-center gap-2.5"
    >
      <span className={`flex items-center justify-center w-[18px] h-[18px] flex-shrink-0 rounded-[4px] ${iconClass}`}>
        <IconComponent className="w-[11px] h-[11px]" />
      </span>
      <span className={`text-sm leading-relaxed ${textClass}`}>{item}</span>
    </motion.li>
  );
}

// --- Main component ---

const ComparisonCards = ({
  leftCard,
  rightCard,
  leftIcon = 'x',
  rightIcon = 'check',
  dividerLabel,
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const LeftIcon = LEFT_ICONS[leftIcon] ?? IconX;
  const RightIcon = RIGHT_ICONS[rightIcon] ?? IconCheck;

  const rightAccent = rightCard?.accent ?? 'blue';
  const bgGlow = ACCENT_BG[rightAccent] ?? ACCENT_BG.blue;

  return (
    <div ref={ref} className="flex flex-col sm:flex-row items-stretch">

      {/* ---- Left card ---- */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.45, ease: spring }}
        className="flex-1 flex flex-col p-6 min-w-0"
      >
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-base font-bold text-[#94a3b8] tracking-tight leading-snug m-0">
            {leftCard?.title}
          </h3>
          {leftCard?.subtitle && (
            <p className="mt-1 text-[0.8125rem] text-[#64748b] leading-relaxed">
              {leftCard.subtitle}
            </p>
          )}
        </div>

        {/* Items */}
        <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
          {(leftCard?.items ?? []).map((item, index) => (
            <CardItem
              key={index}
              IconComponent={LeftIcon}
              iconClass="bg-[rgba(239,68,68,0.1)] text-[#ef4444]"
              textClass="text-[#64748b]"
              item={item}
              index={index}
              isVisible={isVisible}
              directionX={-8}
            />
          ))}
        </ul>
      </motion.div>

      {/* ---- Divider ---- */}
      <div className="relative flex sm:flex-col items-center flex-shrink-0 z-10">
        {/* Line */}
        <div className="
          w-full h-px sm:w-px sm:h-full sm:flex-1
          bg-gradient-to-r sm:bg-gradient-to-b
          from-transparent via-[#1e293b] to-transparent
        " />

        {/* Optional badge */}
        {dividerLabel && (
          <div className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[30px] h-[30px] rounded-full
            flex items-center justify-center
            text-[0.5625rem] font-bold text-[#94a3b8] uppercase tracking-wide
            select-none
          ">
            {dividerLabel}
          </div>
        )}
      </div>

      {/* ---- Right card ---- */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.45, ease: spring }}
        className={`flex-1 flex flex-col p-6 min-w-0 relative overflow-hidden ${bgGlow}`}
      >

        {/* Header */}
        <div className="mb-5">
          <h3 className="text-base font-bold text-[#e2e8f0] tracking-tight leading-snug m-0">
            {rightCard?.title}
          </h3>
          {rightCard?.subtitle && (
            <p className="mt-1 text-[0.8125rem] text-[#94a3b8] leading-relaxed">
              {rightCard.subtitle}
            </p>
          )}
        </div>

        {/* Items */}
        <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
          {(rightCard?.items ?? []).map((item, index) => (
            <CardItem
              key={index}
              IconComponent={RightIcon}
              iconClass="bg-[rgba(16,185,129,0.12)] text-[#10b981]"
              textClass="text-[#e2e8f0]"
              item={item}
              index={index}
              isVisible={isVisible}
              directionX={8}
            />
          ))}
        </ul>
      </motion.div>

    </div>
  );
};

export default ComparisonCards;
