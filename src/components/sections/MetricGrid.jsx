import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// Accent color map → Tailwind-compatible inline style values
const ACCENT_COLORS = {
  blue: '#3b82f6',
  teal: '#06b6d4',
  green: '#10b981',
};

// Trend arrow SVG icons
function TrendArrow({ trend }) {
  if (trend === 'up') {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-label="Trending up"
        role="img"
      >
        <path
          d="M3 10L7 4L11 10"
          stroke="#10b981"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (trend === 'down') {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-label="Trending down"
        role="img"
      >
        <path
          d="M3 4L7 10L11 4"
          stroke="#ef4444"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // neutral
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-label="No change"
      role="img"
    >
      <path
        d="M3 7H11"
        stroke="#475569"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Individual metric card
function MetricCard({ metric, index, isVisible, variant }) {
  const accentColor = ACCENT_COLORS[metric.accent] || ACCENT_COLORS.blue;
  const isCompact = variant === 'compact';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.38,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative group transition-all duration-200"
    >
      {/* Inner padding wrapper */}
      <div className={isCompact ? 'p-4' : 'p-5'}>
        {/* Top row: trend indicator anchored top-right */}
        {metric.trend && (
          <div className="absolute top-3.5 right-3.5">
            <TrendArrow trend={metric.trend} />
          </div>
        )}

        {/* Metric value */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.4,
            delay: index * 0.04 + 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ color: accentColor }}
          className={`${isCompact ? 'text-2xl' : 'text-3xl'} font-bold leading-none mb-2 tracking-tight`}
        >
          {metric.value}
        </motion.div>

        {/* Label */}
        <div className="text-sm font-semibold text-[#e2e8f0] mb-1 leading-snug pr-4">
          {metric.label}
        </div>

        {/* Description — default variant only */}
        {!isCompact && metric.description && (
          <p className="text-xs text-[#64748b] leading-relaxed">
            {metric.description}
          </p>
        )}

        {/* Bottom accent line — default variant only */}
        {!isCompact && (
          <div
            className="mt-4"
            style={{
              width: 40,
              height: 2,
              borderRadius: 1,
              backgroundColor: accentColor,
              opacity: 0.7,
            }}
            aria-hidden="true"
          />
        )}
      </div>
    </motion.div>
  );
}

// Column count → Tailwind grid class
const COLUMN_CLASS = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
};

const MetricGrid = ({
  metrics = [],
  columns = 3,
  variant = 'default',
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const colClass = COLUMN_CLASS[columns] || COLUMN_CLASS[3];

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 ${colClass} gap-3`}
    >
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          metric={metric}
          index={index}
          isVisible={isVisible}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default MetricGrid;
