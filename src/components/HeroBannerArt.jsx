import { motion } from 'framer-motion';

const HeroBannerArt = () => {
  // --- Network nodes spread across the viewport (avoid center where text lives) ---
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

  // --- Circuit-board style paths — lots of right-angle traces everywhere ---
  const circuitTraces = [
    // Top-left region
    { d: 'M 65 45 L 65 160 L 150 160', color: '#3b82f6', delay: 0, dur: 12 },
    { d: 'M 195 28 L 195 140 L 280 140 L 280 200', color: '#60a5fa', delay: 2, dur: 14 },
    { d: 'M 150 140 L 40 140 L 40 160', color: '#06b6d4', delay: 5, dur: 10 },
    { d: 'M 370 55 L 370 140 L 280 140', color: '#06b6d4', delay: 3, dur: 11 },
    { d: 'M 65 45 L 195 45 L 195 28', color: '#3b82f6', delay: 8, dur: 9 },
    { d: 'M 150 160 L 150 200 L 280 200', color: '#60a5fa', delay: 11, dur: 10 },
    // Top-right region
    { d: 'M 880 25 L 880 130 L 950 130', color: '#10b981', delay: 1, dur: 13 },
    { d: 'M 1020 52 L 1020 130 L 950 130', color: '#3b82f6', delay: 4, dur: 12 },
    { d: 'M 1150 35 L 1150 150 L 1160 150', color: '#06b6d4', delay: 6, dur: 10 },
    { d: 'M 950 130 L 1070 130 L 1070 240', color: '#60a5fa', delay: 2.5, dur: 14 },
    { d: 'M 720 48 L 720 130 L 880 130 L 880 25', color: '#60a5fa', delay: 7, dur: 16 },
    { d: 'M 1020 52 L 1150 52 L 1150 35', color: '#06b6d4', delay: 10, dur: 9 },
    // Left side vertical
    { d: 'M 40 160 L 55 160 L 55 320', color: '#06b6d4', delay: 7, dur: 15 },
    { d: 'M 55 320 L 35 320 L 35 480', color: '#3b82f6', delay: 1.5, dur: 13 },
    { d: 'M 35 480 L 50 480 L 50 640', color: '#60a5fa', delay: 4.5, dur: 11 },
    { d: 'M 50 640 L 70 640 L 70 750', color: '#06b6d4', delay: 8, dur: 12 },
    { d: 'M 130 580 L 50 580 L 50 640', color: '#60a5fa', delay: 3, dur: 10 },
    { d: 'M 55 320 L 130 320 L 130 580', color: '#3b82f6', delay: 9.5, dur: 18 },
    // Right side vertical
    { d: 'M 1160 150 L 1140 150 L 1140 310', color: '#60a5fa', delay: 0.5, dur: 14 },
    { d: 'M 1140 310 L 1165 310 L 1165 470', color: '#3b82f6', delay: 3.5, dur: 12 },
    { d: 'M 1165 470 L 1145 470 L 1145 620', color: '#06b6d4', delay: 6.5, dur: 13 },
    { d: 'M 1145 620 L 1155 620 L 1155 760', color: '#3b82f6', delay: 9, dur: 11 },
    { d: 'M 1050 580 L 1145 580 L 1145 620', color: '#3b82f6', delay: 2, dur: 10 },
    { d: 'M 1140 310 L 1050 310 L 1050 580', color: '#06b6d4', delay: 7.5, dur: 17 },
    // Bottom region
    { d: 'M 70 750 L 180 750 L 180 770', color: '#3b82f6', delay: 5.5, dur: 12 },
    { d: 'M 180 770 L 350 770 L 350 755', color: '#60a5fa', delay: 1, dur: 14 },
    { d: 'M 350 755 L 510 755 L 510 775', color: '#06b6d4', delay: 7.5, dur: 11 },
    { d: 'M 510 775 L 680 775 L 680 760', color: '#3b82f6', delay: 10.5, dur: 12 },
    { d: 'M 680 760 L 850 760 L 850 745', color: '#60a5fa', delay: 3, dur: 13 },
    { d: 'M 850 745 L 1000 745 L 1000 770', color: '#06b6d4', delay: 8.5, dur: 10 },
    { d: 'M 1000 770 L 1155 770 L 1155 760', color: '#3b82f6', delay: 4, dur: 12 },
    { d: 'M 250 680 L 350 680 L 350 755', color: '#3b82f6', delay: 6, dur: 11 },
    { d: 'M 920 700 L 850 700 L 850 745', color: '#60a5fa', delay: 2, dur: 13 },
    // Long cross traces (span larger areas)
    { d: 'M 280 200 L 280 220 L 130 220 L 130 580', color: '#06b6d4', delay: 0, dur: 18 },
    { d: 'M 1070 240 L 1070 260 L 1050 260 L 1050 580', color: '#3b82f6', delay: 5, dur: 17 },
    { d: 'M 370 55 L 540 55 L 540 32', color: '#3b82f6', delay: 6.5, dur: 8 },
    { d: 'M 540 32 L 720 32 L 720 48', color: '#60a5fa', delay: 12, dur: 9 },
    // Diagonal-ish stepped traces (staircase pattern)
    { d: 'M 150 160 L 220 160 L 220 220 L 280 220', color: '#3b82f6', delay: 4, dur: 11 },
    { d: 'M 950 130 L 1020 130 L 1020 200 L 1070 200 L 1070 240', color: '#60a5fa', delay: 1, dur: 13 },
    { d: 'M 250 680 L 180 680 L 180 750 L 70 750', color: '#06b6d4', delay: 9, dur: 14 },
    { d: 'M 920 700 L 1000 700 L 1000 745 L 1050 745 L 1050 580', color: '#3b82f6', delay: 3.5, dur: 18 },
    // Additional inner-edge traces
    { d: 'M 280 200 L 280 320 L 130 320', color: '#60a5fa', delay: 13, dur: 12 },
    { d: 'M 1070 240 L 1070 310 L 1050 310', color: '#06b6d4', delay: 11, dur: 11 },
    { d: 'M 130 580 L 250 580 L 250 680', color: '#3b82f6', delay: 14, dur: 13 },
    { d: 'M 1050 580 L 920 580 L 920 700', color: '#60a5fa', delay: 0.5, dur: 14 },
    // Short horizontal linking traces
    { d: 'M 370 140 L 540 140 L 540 55', color: '#10b981', delay: 8, dur: 10 },
    { d: 'M 720 130 L 720 48', color: '#3b82f6', delay: 5, dur: 7 },
    { d: 'M 350 680 L 510 680 L 510 775', color: '#06b6d4', delay: 7, dur: 12 },
    { d: 'M 680 760 L 680 700 L 920 700', color: '#3b82f6', delay: 11.5, dur: 15 },
    { d: 'M 850 745 L 850 700', color: '#60a5fa', delay: 6, dur: 6 },
    { d: 'M 350 755 L 250 755 L 250 680', color: '#3b82f6', delay: 2.5, dur: 10 },
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
    // Additional packets on new traces
    { x: [370, 540, 540],     y: [55, 55, 32],         dur: 5,  delay: 6.5, color: '#3b82f6' },
    { x: [540, 720, 720],     y: [32, 32, 48],         dur: 5,  delay: 12,  color: '#60a5fa' },
    { x: [720, 720, 880, 880], y: [48, 130, 130, 25],  dur: 8,  delay: 7,   color: '#60a5fa' },
    { x: [150, 220, 220, 280], y: [160, 160, 220, 220], dur: 6, delay: 4,   color: '#3b82f6' },
    { x: [55, 130, 130],      y: [320, 320, 580],      dur: 9,  delay: 9.5, color: '#3b82f6' },
    { x: [1140, 1050, 1050],  y: [310, 310, 580],      dur: 9,  delay: 7.5, color: '#06b6d4' },
    { x: [130, 250, 250],     y: [580, 580, 680],      dur: 6,  delay: 14,  color: '#3b82f6' },
    { x: [1050, 920, 920],    y: [580, 580, 700],      dur: 6,  delay: 0.5, color: '#60a5fa' },
    { x: [680, 680, 920],     y: [760, 700, 700],      dur: 7,  delay: 11.5, color: '#3b82f6' },
    { x: [350, 510, 510],     y: [755, 755, 775],      dur: 6,  delay: 7.5, color: '#06b6d4' },
    { x: [510, 680, 680],     y: [775, 775, 760],      dur: 6,  delay: 10.5, color: '#3b82f6' },
    { x: [280, 280, 130],     y: [200, 320, 320],      dur: 6,  delay: 13,  color: '#60a5fa' },
    { x: [1070, 1070, 1050],  y: [240, 310, 310],      dur: 5,  delay: 11,  color: '#06b6d4' },
    { x: [370, 540, 540],     y: [140, 140, 55],       dur: 6,  delay: 8,   color: '#10b981' },
    { x: [350, 250, 250],     y: [755, 755, 680],      dur: 6,  delay: 2.5, color: '#3b82f6' },
    { x: [850, 850],          y: [745, 700],            dur: 3,  delay: 6,   color: '#60a5fa' },
    { x: [250, 180, 180, 70], y: [680, 680, 750, 750], dur: 8,  delay: 9,   color: '#06b6d4' },
    { x: [920, 1000, 1000, 1050, 1050], y: [700, 700, 745, 745, 580], dur: 10, delay: 3.5, color: '#3b82f6' },
  ];

  // --- Moving sweep lines that traverse the full banner ---
  // Each line is a path; a short dash segment animates along it via strokeDashoffset
  const sweepLines = (() => {
    const defs = [
      // Diagonal — top-left to bottom-right
      { d: 'M-200,-50 L1400,850', dur: 8, delay: 0, color: '#3b82f6', w: 0.5 },
      { d: 'M-200,100 L1400,950', dur: 10, delay: 3, color: '#06b6d4', w: 0.4 },
      { d: 'M-200,250 L1400,1100', dur: 9, delay: 7, color: '#60a5fa', w: 0.5 },
      { d: 'M-200,-150 L1400,700', dur: 11, delay: 1.5, color: '#10b981', w: 0.3 },
      // Diagonal — top-right to bottom-left
      { d: 'M1400,-50 L-200,850', dur: 9, delay: 5, color: '#60a5fa', w: 0.5 },
      { d: 'M1400,150 L-200,1000', dur: 10, delay: 2, color: '#3b82f6', w: 0.4 },
      { d: 'M1400,-200 L-200,650', dur: 8, delay: 9, color: '#06b6d4', w: 0.5 },
      { d: 'M1400,300 L-200,1150', dur: 11, delay: 6, color: '#3b82f6', w: 0.3 },
      // Vertical — top to bottom
      { d: 'M150,-100 L150,900', dur: 7, delay: 0.5, color: '#06b6d4', w: 0.4 },
      { d: 'M450,-100 L450,900', dur: 8, delay: 4, color: '#3b82f6', w: 0.3 },
      { d: 'M750,-100 L750,900', dur: 7.5, delay: 8, color: '#60a5fa', w: 0.4 },
      { d: 'M1050,-100 L1050,900', dur: 9, delay: 2.5, color: '#06b6d4', w: 0.3 },
      // Vertical — bottom to top
      { d: 'M300,900 L300,-100', dur: 8, delay: 6, color: '#3b82f6', w: 0.3 },
      { d: 'M600,900 L600,-100', dur: 7, delay: 1, color: '#10b981', w: 0.4 },
      { d: 'M900,900 L900,-100', dur: 8.5, delay: 4.5, color: '#60a5fa', w: 0.3 },
      // Horizontal — left to right
      { d: 'M-200,200 L1400,200', dur: 6, delay: 0, color: '#3b82f6', w: 0.3 },
      { d: 'M-200,500 L1400,500', dur: 7, delay: 3.5, color: '#06b6d4', w: 0.4 },
      { d: 'M-200,700 L1400,700', dur: 6.5, delay: 7, color: '#60a5fa', w: 0.3 },
      // Horizontal — right to left
      { d: 'M1400,100 L-200,100', dur: 7, delay: 1.5, color: '#06b6d4', w: 0.3 },
      { d: 'M1400,400 L-200,400', dur: 6, delay: 5.5, color: '#3b82f6', w: 0.4 },
      { d: 'M1400,650 L-200,650', dur: 7.5, delay: 9, color: '#10b981', w: 0.3 },
      // Steep diagonals
      { d: 'M300,-100 L500,900', dur: 6, delay: 2, color: '#3b82f6', w: 0.4 },
      { d: 'M700,900 L900,-100', dur: 7, delay: 5, color: '#06b6d4', w: 0.4 },
      { d: 'M500,-100 L300,900', dur: 6.5, delay: 8, color: '#60a5fa', w: 0.3 },
      { d: 'M1000,-100 L800,900', dur: 7, delay: 0.5, color: '#3b82f6', w: 0.3 },
    ];
    // Pre-compute path lengths for dash animation
    return defs.map(l => {
      const parts = l.d.match(/-?\d+/g).map(Number);
      const dx = parts[2] - parts[0], dy = parts[3] - parts[1];
      const len = Math.sqrt(dx * dx + dy * dy);
      return { ...l, len, seg: len * 0.15 };
    });
  })();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Ambient gradient orbs — spread out, not centered */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 500, height: 500, top: '10%', left: '-5%',
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          opacity: 0.03,
        }}
        animate={{ scale: [1, 1.15, 1], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 450, height: 450, top: '60%', right: '-5%',
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
          opacity: 0.025,
        }}
        animate={{ scale: [1.1, 1, 1.1], y: [0, -25, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 400, height: 400, bottom: '5%', left: '30%',
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          opacity: 0.02,
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 350, height: 350, top: '5%', right: '25%',
          background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
          opacity: 0.018,
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

        {/* Subtle dot grid */}
        <rect width="1200" height="800" fill="url(#dotGrid)" opacity="0.25" />

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
              opacity: [0, 0.18, 0.18, 0],
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
            <motion.circle
              cx={node.x} cy={node.y}
              r={node.r * 3}
              fill="none"
              stroke={node.color}
              strokeWidth="0.4"
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              animate={{
                scale: [0.5, 1.7, 0.5],
                opacity: [0.25, 0, 0.25],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: 'easeOut',
                delay: i * 0.4,
              }}
            />
            <motion.circle
              cx={node.x} cy={node.y}
              r={node.r}
              fill={node.color}
              filter="url(#glow)"
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              animate={{
                opacity: [0.35, 0.7, 0.35],
                scale: [0.8, 1.15, 0.8],
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
              times: pkt.x.length <= 3
                ? [0, 0.1, 0.9, 1]
                : [0, 0.08, 0.92, 1],
            }}
            style={{ filter: `drop-shadow(0 0 3px ${pkt.color})` }}
          />
        ))}

        {/* === Moving sweep lines across the entire banner === */}
        {sweepLines.map((sl, i) => (
          <motion.path
            key={`sweep_${i}`}
            d={sl.d}
            fill="none"
            stroke={sl.color}
            strokeWidth={sl.w}
            strokeLinecap="round"
            opacity={0.15}
            strokeDasharray={`${sl.seg} ${sl.len}`}
            animate={{ strokeDashoffset: [sl.len + sl.seg, -(sl.len + sl.seg)] }}
            transition={{
              duration: sl.dur,
              repeat: Infinity,
              ease: 'linear',
              delay: sl.delay,
            }}
          />
        ))}

        {/* === Junction crosshairs at intersections === */}
        {[
          { x: 150, y: 160 }, { x: 280, y: 140 }, { x: 280, y: 200 },
          { x: 950, y: 130 }, { x: 1070, y: 240 }, { x: 130, y: 580 },
          { x: 1050, y: 580 }, { x: 350, y: 755 }, { x: 850, y: 745 },
          { x: 1000, y: 770 }, { x: 180, y: 770 }, { x: 280, y: 320 },
          { x: 1050, y: 310 }, { x: 250, y: 680 }, { x: 920, y: 700 },
          { x: 510, y: 775 }, { x: 680, y: 760 }, { x: 540, y: 55 },
          { x: 720, y: 130 }, { x: 370, y: 140 },
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

        {/* === Tiny blinking status dots === */}
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
            style={{ transformOrigin: `${dot.x}px ${dot.y}px` }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 2 + (i % 4) * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.35,
            }}
          />
        ))}

        {/* === Dashed arcs in corners === */}
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
