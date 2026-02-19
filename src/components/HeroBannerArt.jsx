import { motion } from 'framer-motion';

const HeroBannerArt = () => {
  // --- Network nodes spread across the entire viewport (avoid center where text lives) ---
  const nodes = [
    // Top edge
    { x: 65,   y: 45,   r: 2.5, color: '#3b82f6' },
    { x: 195,  y: 28,   r: 2,   color: '#60a5fa' },
    { x: 370,  y: 55,   r: 3,   color: '#06b6d4' },
    { x: 540,  y: 32,   r: 2,   color: '#3b82f6' },
    { x: 720,  y: 48,   r: 2.5, color: '#60a5fa' },
    { x: 880,  y: 25,   r: 2,   color: '#10b981' },
    { x: 1020, y: 52,   r: 3,   color: '#3b82f6' },
    { x: 1150, y: 35,   r: 2,   color: '#06b6d4' },
    // Left edge
    { x: 40,   y: 160,  r: 3,   color: '#06b6d4' },
    { x: 55,   y: 320,  r: 2,   color: '#3b82f6' },
    { x: 35,   y: 480,  r: 2.5, color: '#60a5fa' },
    { x: 50,   y: 640,  r: 2,   color: '#06b6d4' },
    { x: 70,   y: 750,  r: 3,   color: '#3b82f6' },
    // Right edge
    { x: 1160, y: 150,  r: 2.5, color: '#60a5fa' },
    { x: 1140, y: 310,  r: 2,   color: '#3b82f6' },
    { x: 1165, y: 470,  r: 3,   color: '#06b6d4' },
    { x: 1145, y: 620,  r: 2,   color: '#10b981' },
    { x: 1155, y: 760,  r: 2.5, color: '#3b82f6' },
    // Bottom edge
    { x: 180,  y: 770,  r: 2,   color: '#60a5fa' },
    { x: 350,  y: 755,  r: 2.5, color: '#06b6d4' },
    { x: 510,  y: 775,  r: 2,   color: '#3b82f6' },
    { x: 680,  y: 760,  r: 3,   color: '#60a5fa' },
    { x: 850,  y: 745,  r: 2,   color: '#06b6d4' },
    { x: 1000, y: 770,  r: 2.5, color: '#3b82f6' },
    // Scattered in corners / edges (not center)
    { x: 150,  y: 140,  r: 2,   color: '#3b82f6' },
    { x: 280,  y: 200,  r: 2.5, color: '#06b6d4' },
    { x: 130,  y: 580,  r: 2,   color: '#60a5fa' },
    { x: 250,  y: 680,  r: 3,   color: '#3b82f6' },
    { x: 950,  y: 130,  r: 2.5, color: '#60a5fa' },
    { x: 1070, y: 240,  r: 2,   color: '#06b6d4' },
    { x: 1050, y: 580,  r: 2.5, color: '#3b82f6' },
    { x: 920,  y: 700,  r: 2,   color: '#60a5fa' },
  ];

  // --- Circuit-board style paths (right-angle L-shaped and Z-shaped traces) ---
  // Each path connects two nodes via orthogonal segments
  const circuitTraces = [
    // Top-left region
    { d: 'M 65 45 L 65 160 L 150 160', color: '#3b82f6', delay: 0, dur: 12 },
    { d: 'M 195 28 L 195 140 L 280 140 L 280 200', color: '#60a5fa', delay: 2, dur: 14 },
    { d: 'M 150 140 L 40 140 L 40 160', color: '#06b6d4', delay: 5, dur: 10 },
    { d: 'M 370 55 L 370 140 L 280 140', color: '#06b6d4', delay: 3, dur: 11 },
    // Top-right region
    { d: 'M 880 25 L 880 130 L 950 130', color: '#10b981', delay: 1, dur: 13 },
    { d: 'M 1020 52 L 1020 130 L 950 130', color: '#3b82f6', delay: 4, dur: 12 },
    { d: 'M 1150 35 L 1150 150 L 1160 150', color: '#06b6d4', delay: 6, dur: 10 },
    { d: 'M 950 130 L 1070 130 L 1070 240', color: '#60a5fa', delay: 2.5, dur: 14 },
    // Left side vertical
    { d: 'M 40 160 L 55 160 L 55 320', color: '#06b6d4', delay: 7, dur: 15 },
    { d: 'M 55 320 L 35 320 L 35 480', color: '#3b82f6', delay: 1.5, dur: 13 },
    { d: 'M 35 480 L 50 480 L 50 640', color: '#60a5fa', delay: 4.5, dur: 11 },
    { d: 'M 50 640 L 70 640 L 70 750', color: '#06b6d4', delay: 8, dur: 12 },
    { d: 'M 130 580 L 50 580 L 50 640', color: '#60a5fa', delay: 3, dur: 10 },
    // Right side vertical
    { d: 'M 1160 150 L 1140 150 L 1140 310', color: '#60a5fa', delay: 0.5, dur: 14 },
    { d: 'M 1140 310 L 1165 310 L 1165 470', color: '#3b82f6', delay: 3.5, dur: 12 },
    { d: 'M 1165 470 L 1145 470 L 1145 620', color: '#06b6d4', delay: 6.5, dur: 13 },
    { d: 'M 1145 620 L 1155 620 L 1155 760', color: '#3b82f6', delay: 9, dur: 11 },
    { d: 'M 1050 580 L 1145 580 L 1145 620', color: '#3b82f6', delay: 2, dur: 10 },
    // Bottom region
    { d: 'M 70 750 L 180 750 L 180 770', color: '#3b82f6', delay: 5.5, dur: 12 },
    { d: 'M 180 770 L 350 770 L 350 755', color: '#60a5fa', delay: 1, dur: 14 },
    { d: 'M 350 755 L 510 755 L 510 775', color: '#06b6d4', delay: 7.5, dur: 11 },
    { d: 'M 680 760 L 850 760 L 850 745', color: '#60a5fa', delay: 3, dur: 13 },
    { d: 'M 850 745 L 1000 745 L 1000 770', color: '#06b6d4', delay: 8.5, dur: 10 },
    { d: 'M 1000 770 L 1155 770 L 1155 760', color: '#3b82f6', delay: 4, dur: 12 },
    { d: 'M 250 680 L 350 680 L 350 755', color: '#3b82f6', delay: 6, dur: 11 },
    { d: 'M 920 700 L 850 700 L 850 745', color: '#60a5fa', delay: 2, dur: 13 },
    // Cross traces (horizontal spanning)
    { d: 'M 280 200 L 280 220 L 130 220 L 130 580', color: '#06b6d4', delay: 0, dur: 18 },
    { d: 'M 1070 240 L 1070 260 L 1050 260 L 1050 580', color: '#3b82f6', delay: 5, dur: 17 },
  ];

  // --- Data packets that travel along traces ---
  const packets = [
    { x: [65, 65, 150],       y: [45, 160, 160],      dur: 6,  delay: 0,   color: '#3b82f6' },
    { x: [195, 195, 280, 280], y: [28, 140, 140, 200], dur: 7,  delay: 2,   color: '#60a5fa' },
    { x: [880, 880, 950],     y: [25, 130, 130],       dur: 5,  delay: 1,   color: '#10b981' },
    { x: [1020, 1020, 950],   y: [52, 130, 130],       dur: 5,  delay: 4,   color: '#3b82f6' },
    { x: [40, 55, 55],        y: [160, 160, 320],      dur: 8,  delay: 3,   color: '#06b6d4' },
    { x: [55, 35, 35],        y: [320, 320, 480],      dur: 7,  delay: 6,   color: '#3b82f6' },
    { x: [1160, 1140, 1140],  y: [150, 150, 310],      dur: 8,  delay: 1.5, color: '#60a5fa' },
    { x: [1140, 1165, 1165],  y: [310, 310, 470],      dur: 7,  delay: 5,   color: '#3b82f6' },
    { x: [70, 180, 180],      y: [750, 750, 770],      dur: 6,  delay: 2.5, color: '#3b82f6' },
    { x: [180, 350, 350],     y: [770, 770, 755],      dur: 6,  delay: 7,   color: '#60a5fa' },
    { x: [850, 1000, 1000],   y: [745, 745, 770],      dur: 6,  delay: 4.5, color: '#06b6d4' },
    { x: [950, 1070, 1070],   y: [130, 130, 240],      dur: 7,  delay: 8,   color: '#60a5fa' },
    // Return trips
    { x: [150, 65, 65],       y: [160, 160, 45],       dur: 6,  delay: 9,   color: '#3b82f6' },
    { x: [35, 35, 50, 50],    y: [480, 480, 640, 640], dur: 8,  delay: 10,  color: '#60a5fa' },
    { x: [1165, 1165, 1145, 1145], y: [470, 470, 620, 620], dur: 8, delay: 11, color: '#06b6d4' },
    { x: [1000, 1155, 1155],  y: [770, 770, 760],      dur: 6,  delay: 3,   color: '#3b82f6' },
  ];

  // --- Floating geometric shapes (scattered, no center) ---
  const shapes = [
    // Hexagons
    { type: 'hex', x: 120, y: 100, size: 22, opacity: 0.06, dur: 20, drift: -8 },
    { type: 'hex', x: 1080, y: 170, size: 28, opacity: 0.05, dur: 24, drift: 10 },
    { type: 'hex', x: 200, y: 700, size: 18, opacity: 0.07, dur: 18, drift: -6 },
    { type: 'hex', x: 980, y: 680, size: 24, opacity: 0.05, dur: 22, drift: 8 },
    // Diamonds (rotated squares)
    { type: 'diamond', x: 300, y: 120, size: 16, opacity: 0.08, dur: 16, drift: -10 },
    { type: 'diamond', x: 900, y: 80, size: 20, opacity: 0.06, dur: 19, drift: 7 },
    { type: 'diamond', x: 80, y: 450, size: 14, opacity: 0.07, dur: 21, drift: -5 },
    { type: 'diamond', x: 1120, y: 500, size: 18, opacity: 0.06, dur: 17, drift: 9 },
    { type: 'diamond', x: 160, y: 650, size: 12, opacity: 0.08, dur: 15, drift: -7 },
    { type: 'diamond', x: 1040, y: 700, size: 15, opacity: 0.06, dur: 23, drift: 6 },
    // Small circles
    { type: 'ring', x: 220, y: 350, size: 12, opacity: 0.06, dur: 14, drift: -4 },
    { type: 'ring', x: 980, y: 400, size: 16, opacity: 0.05, dur: 18, drift: 6 },
    { type: 'ring', x: 100, y: 250, size: 10, opacity: 0.07, dur: 12, drift: -8 },
    { type: 'ring', x: 1100, y: 350, size: 14, opacity: 0.06, dur: 16, drift: 5 },
    // Brackets / tech shapes
    { type: 'bracket', x: 340, y: 680, size: 20, opacity: 0.06, dur: 20, drift: -6 },
    { type: 'bracket', x: 860, y: 100, size: 24, opacity: 0.05, dur: 22, drift: 8 },
  ];

  // --- Horizontal scan lines ---
  const scanLines = [
    { y: 120, delay: 0,  dur: 18, color: '#3b82f6' },
    { y: 340, delay: 6,  dur: 22, color: '#06b6d4' },
    { y: 560, delay: 3,  dur: 20, color: '#60a5fa' },
    { y: 710, delay: 10, dur: 16, color: '#3b82f6' },
  ];

  const hexPath = (cx, cy, r) => {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 180) * (60 * i - 30);
      pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
    }
    return `M ${pts.join(' L ')} Z`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Ambient gradient orbs — spread out, not centered */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 500, height: 500, top: '10%', left: '-5%',
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          opacity: 0.04,
        }}
        animate={{ scale: [1, 1.15, 1], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 450, height: 450, top: '60%', right: '-5%',
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
          opacity: 0.035,
        }}
        animate={{ scale: [1.1, 1, 1.1], y: [0, -25, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 400, height: 400, bottom: '5%', left: '30%',
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          opacity: 0.03,
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 350, height: 350, top: '5%', right: '25%',
          background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
          opacity: 0.025,
        }}
        animate={{ scale: [1.1, 1, 1.1], y: [0, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <pattern id="dotGrid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="24" cy="24" r="0.6" fill="#3b82f6" opacity="0.15" />
          </pattern>
        </defs>

        {/* Subtle dot grid across entire viewport */}
        <rect width="1200" height="800" fill="url(#dotGrid)" opacity="0.35" />

        {/* === Circuit board traces === */}
        {circuitTraces.map((trace, i) => (
          <motion.path
            key={`trace_${i}`}
            d={trace.d}
            fill="none"
            stroke={trace.color}
            strokeWidth="0.7"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.25, 0.25, 0],
            }}
            transition={{
              duration: trace.dur,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: trace.delay,
              times: [0, 0.3, 0.7, 1],
            }}
          />
        ))}

        {/* === Network nodes with pulse rings === */}
        {nodes.map((node, i) => (
          <g key={`node_${i}`}>
            {/* Sonar pulse */}
            <motion.circle
              cx={node.x} cy={node.y}
              r={node.r * 2}
              fill="none"
              stroke={node.color}
              strokeWidth="0.4"
              animate={{
                r: [node.r * 1.5, node.r * 5, node.r * 1.5],
                opacity: [0.25, 0, 0.25],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: 'easeOut',
                delay: i * 0.4,
              }}
            />
            {/* Core dot */}
            <motion.circle
              cx={node.x} cy={node.y}
              r={node.r}
              fill={node.color}
              filter="url(#glow)"
              animate={{
                opacity: [0.35, 0.7, 0.35],
                r: [node.r * 0.8, node.r * 1.15, node.r * 0.8],
              }}
              transition={{
                duration: 3 + (i % 4),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          </g>
        ))}

        {/* === Data packets traveling along traces === */}
        {packets.map((pkt, i) => (
          <motion.circle
            key={`pkt_${i}`}
            r={1.8}
            fill={pkt.color}
            filter="url(#glow)"
            animate={{
              x: pkt.x,
              y: pkt.y,
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: pkt.dur,
              repeat: Infinity,
              ease: 'linear',
              delay: pkt.delay,
              times: pkt.x.length === 3
                ? [0, 0.1, 0.9, 1]
                : [0, 0.08, 0.92, 1],
            }}
            style={{ filter: `drop-shadow(0 0 3px ${pkt.color})` }}
          />
        ))}

        {/* === Floating geometric shapes === */}
        {shapes.map((s, i) => {
          if (s.type === 'hex') {
            return (
              <motion.path
                key={`shape_${i}`}
                d={hexPath(s.x, s.y, s.size)}
                fill="none"
                stroke="#60a5fa"
                strokeWidth="0.8"
                opacity={s.opacity}
                animate={{
                  y: [0, s.drift, 0],
                  opacity: [s.opacity, s.opacity * 1.5, s.opacity],
                }}
                transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut' }}
              />
            );
          }
          if (s.type === 'diamond') {
            return (
              <motion.rect
                key={`shape_${i}`}
                x={s.x - s.size / 2}
                y={s.y - s.size / 2}
                width={s.size}
                height={s.size}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="0.7"
                opacity={s.opacity}
                transform={`rotate(45 ${s.x} ${s.y})`}
                animate={{
                  y: [0, s.drift, 0],
                  opacity: [s.opacity, s.opacity * 1.4, s.opacity],
                }}
                transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut' }}
              />
            );
          }
          if (s.type === 'ring') {
            return (
              <motion.circle
                key={`shape_${i}`}
                cx={s.x}
                cy={s.y}
                r={s.size}
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.7"
                opacity={s.opacity}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [s.opacity, s.opacity * 1.6, s.opacity],
                }}
                transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut' }}
              />
            );
          }
          if (s.type === 'bracket') {
            // Tech bracket shape: ⌐ or ⌐¬
            const half = s.size / 2;
            return (
              <motion.path
                key={`shape_${i}`}
                d={`M ${s.x - half} ${s.y + half} L ${s.x - half} ${s.y - half} L ${s.x + half} ${s.y - half}`}
                fill="none"
                stroke="#60a5fa"
                strokeWidth="0.8"
                strokeLinecap="round"
                opacity={s.opacity}
                animate={{
                  y: [0, s.drift, 0],
                  opacity: [s.opacity, s.opacity * 1.5, s.opacity],
                }}
                transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut' }}
              />
            );
          }
          return null;
        })}

        {/* === Horizontal scan lines === */}
        {scanLines.map((sl, i) => (
          <motion.line
            key={`scan_${i}`}
            x1={0} y1={sl.y}
            x2={1200} y2={sl.y}
            stroke={sl.color}
            strokeWidth="0.4"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.12, 0.12, 0],
            }}
            transition={{
              duration: sl.dur,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: sl.delay,
              times: [0, 0.1, 0.9, 1],
            }}
          />
        ))}

        {/* === Small junction crosshairs at some intersections === */}
        {[
          { x: 150, y: 160 }, { x: 280, y: 140 }, { x: 280, y: 200 },
          { x: 950, y: 130 }, { x: 1070, y: 240 }, { x: 130, y: 580 },
          { x: 1050, y: 580 }, { x: 350, y: 755 }, { x: 850, y: 745 },
          { x: 1000, y: 770 }, { x: 180, y: 770 },
        ].map((jn, i) => (
          <motion.g
            key={`jn_${i}`}
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          >
            <line x1={jn.x - 4} y1={jn.y} x2={jn.x + 4} y2={jn.y} stroke="#3b82f6" strokeWidth="0.6" />
            <line x1={jn.x} y1={jn.y - 4} x2={jn.x} y2={jn.y + 4} stroke="#3b82f6" strokeWidth="0.6" />
          </motion.g>
        ))}

        {/* === Tiny blinking status dots scattered everywhere === */}
        {[
          { x: 110, y: 78, c: '#10b981' }, { x: 310, y: 90, c: '#3b82f6' },
          { x: 800, y: 65, c: '#06b6d4' }, { x: 1090, y: 95, c: '#10b981' },
          { x: 45, y: 400, c: '#3b82f6' }, { x: 1155, y: 390, c: '#06b6d4' },
          { x: 90, y: 680, c: '#60a5fa' }, { x: 1100, y: 660, c: '#10b981' },
          { x: 430, y: 750, c: '#3b82f6' }, { x: 760, y: 770, c: '#06b6d4' },
          { x: 160, y: 270, c: '#06b6d4' }, { x: 1020, y: 340, c: '#3b82f6' },
          { x: 200, y: 500, c: '#10b981' }, { x: 1000, y: 520, c: '#60a5fa' },
          { x: 340, y: 160, c: '#3b82f6' }, { x: 870, y: 180, c: '#06b6d4' },
        ].map((dot, i) => (
          <motion.circle
            key={`blink_${i}`}
            cx={dot.x} cy={dot.y}
            r={1}
            fill={dot.c}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              r: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 2 + (i % 4) * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.35,
            }}
          />
        ))}

        {/* === Dashed orbit arcs in corners === */}
        <motion.path
          d="M 40 40 Q 200 10 360 60"
          fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 6"
          animate={{ opacity: [0.08, 0.18, 0.08], strokeDashoffset: [0, -20, -40] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M 840 20 Q 1020 60 1170 40"
          fill="none" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="4 6"
          animate={{ opacity: [0.08, 0.18, 0.08], strokeDashoffset: [0, -20, -40] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M 30 700 Q 180 780 380 740"
          fill="none" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="4 6"
          animate={{ opacity: [0.06, 0.15, 0.06], strokeDashoffset: [0, -20, -40] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M 820 760 Q 1020 720 1180 770"
          fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 6"
          animate={{ opacity: [0.06, 0.15, 0.06], strokeDashoffset: [0, -20, -40] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />

      </svg>
    </div>
  );
};

export default HeroBannerArt;
