import { motion } from 'framer-motion';

/**
 * NetworkLines - Subtle animated network connection lines
 * Creates minimal moving lines suggesting data flow and connectivity
 */
const NetworkLines = ({ opacity = 0.08 }) => {
  // Define a few connection points
  const nodes = [
    { x: '15%', y: '20%' },
    { x: '85%', y: '25%' },
    { x: '25%', y: '75%' },
    { x: '75%', y: '80%' },
    { x: '50%', y: '50%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for primary lines (blue) */}
          <linearGradient id="line-gradient-primary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity={opacity * 4} />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>

          {/* Gradient for secondary lines (cyan) */}
          <linearGradient id="line-gradient-secondary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity={opacity * 4} />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>

          {/* Gradient for accent lines (purple) */}
          <linearGradient id="line-gradient-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity={opacity * 4} />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Connection lines with different colors */}
        <g>
          {/* Line 1: Top diagonal (blue) */}
          <motion.line
            x1="15%" y1="20%"
            x2="85%" y2="25%"
            stroke="url(#line-gradient-primary)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.3, 0.7, 1]
            }}
          />

          {/* Line 2: Bottom diagonal (cyan) */}
          <motion.line
            x1="25%" y1="75%"
            x2="75%" y2="80%"
            stroke="url(#line-gradient-secondary)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
              times: [0, 0.3, 0.7, 1]
            }}
          />

          {/* Line 3: Vertical left (purple) */}
          <motion.line
            x1="15%" y1="20%"
            x2="25%" y2="75%"
            stroke="url(#line-gradient-accent)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 4,
              times: [0, 0.3, 0.7, 1]
            }}
          />

          {/* Line 4: Vertical right (blue) */}
          <motion.line
            x1="85%" y1="25%"
            x2="75%" y2="80%"
            stroke="url(#line-gradient-primary)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 6,
              times: [0, 0.3, 0.7, 1]
            }}
          />
        </g>

        {/* Small nodes at connection points */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="2"
            className="text-dark-accent-primary"
            fill="currentColor"
            opacity={opacity * 4}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [opacity * 3, opacity * 6, opacity * 3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </svg>

      {/* Data packets traveling along the lines */}
      {/* Packet 1: Following Line 1 (15%,20% to 85%,25%) */}
      <motion.div
        className="absolute w-2 h-2 rounded-full"
        style={{
          left: '15%',
          top: '20%',
          background: 'radial-gradient(circle, #3b82f6 0%, #3b82f6 50%, transparent 100%)',
          boxShadow: '0 0 6px #3b82f6'
        }}
        animate={{
          left: ['15%', '85%'],
          top: ['20%', '25%'],
          opacity: [0, opacity * 10, opacity * 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1]
        }}
      />

      {/* Packet 2: Following Line 2 (25%,75% to 75%,80%) */}
      <motion.div
        className="absolute w-2 h-2 rounded-full"
        style={{
          left: '25%',
          top: '75%',
          background: 'radial-gradient(circle, #06b6d4 0%, #06b6d4 50%, transparent 100%)',
          boxShadow: '0 0 6px #06b6d4'
        }}
        animate={{
          left: ['25%', '75%'],
          top: ['75%', '80%'],
          opacity: [0, opacity * 10, opacity * 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
          times: [0, 0.1, 0.9, 1]
        }}
      />

      {/* Packet 3: Following Line 3 (15%,20% to 25%,75%) */}
      <motion.div
        className="absolute w-2 h-2 rounded-full"
        style={{
          left: '15%',
          top: '20%',
          background: 'radial-gradient(circle, #8b5cf6 0%, #8b5cf6 50%, transparent 100%)',
          boxShadow: '0 0 6px #8b5cf6'
        }}
        animate={{
          left: ['15%', '25%'],
          top: ['20%', '75%'],
          opacity: [0, opacity * 10, opacity * 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
          times: [0, 0.1, 0.9, 1]
        }}
      />
    </div>
  );
};

export default NetworkLines;
