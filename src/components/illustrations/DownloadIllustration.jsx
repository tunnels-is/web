const DownloadIllustration = ({ className = "", width = 300, height = 200 }) => {
  return (
    <svg
      viewBox="0 0 300 200"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="dlGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="100" rx="140" ry="90" fill="url(#dlGlow)" />

      {/* Platform icons */}
      {/* Linux */}
      <g transform="translate(40, 50)">
        <circle cx="30" cy="30" r="30" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <text x="30" y="38" fill="#14b8a6" fontSize="28" fontFamily="system-ui" textAnchor="middle">🐧</text>
      </g>

      {/* macOS */}
      <g transform="translate(120, 40)">
        <circle cx="30" cy="30" r="35" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <text x="30" y="38" fill="#14b8a6" fontSize="32" fontFamily="system-ui" textAnchor="middle">🍎</text>
      </g>

      {/* Windows */}
      <g transform="translate(200, 50)">
        <circle cx="30" cy="30" r="30" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <g transform="translate(15, 15)">
          <rect x="0" y="0" width="13" height="13" fill="#14b8a6" />
          <rect x="15" y="0" width="13" height="13" fill="#14b8a6" />
          <rect x="0" y="15" width="13" height="13" fill="#14b8a6" />
          <rect x="15" y="15" width="13" height="13" fill="#14b8a6" />
        </g>
      </g>

      {/* Download arrow */}
      <g transform="translate(125, 115)">
        <rect x="0" y="0" width="50" height="45" rx="6" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <path d="M25 10 L25 28 M17 20 L25 28 L33 20" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="15" y1="35" x2="35" y2="35" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Bottom label */}
      <g transform="translate(90, 170)">
        <rect x="0" y="0" width="120" height="25" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="60" y="16" fill="#14b8a6" fontSize="10" fontFamily="system-ui" textAnchor="middle">All Platforms</text>
      </g>
    </svg>
  );
};

export default DownloadIllustration;
