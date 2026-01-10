const DevicesIllustration = ({ className = "", width = 300, height = 200 }) => {
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
        <radialGradient id="devicesGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="100" rx="140" ry="90" fill="url(#devicesGlow)" />

      {/* Desktop Monitor */}
      <g transform="translate(100, 30)">
        <rect x="0" y="0" width="100" height="70" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <rect x="5" y="5" width="90" height="55" rx="2" fill="#0f172a" />
        {/* Screen content */}
        <rect x="10" y="12" width="40" height="4" rx="1" fill="#14b8a6" opacity="0.6" />
        <rect x="10" y="20" width="70" height="3" rx="1" fill="#64748b" opacity="0.4" />
        <rect x="10" y="26" width="60" height="3" rx="1" fill="#64748b" opacity="0.4" />
        <rect x="10" y="38" width="35" height="15" rx="2" fill="#14b8a6" opacity="0.2" />
        <rect x="50" y="38" width="35" height="15" rx="2" fill="#0d9488" opacity="0.2" />
        {/* Stand */}
        <rect x="40" y="70" width="20" height="12" fill="#334155" />
        <rect x="30" y="82" width="40" height="4" rx="2" fill="#334155" />
        {/* Status light */}
        <circle cx="50" cy="65" r="2" fill="#14b8a6">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Laptop */}
      <g transform="translate(20, 90)">
        <rect x="0" y="0" width="70" height="45" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="4" y="4" width="62" height="34" rx="1" fill="#0f172a" />
        {/* Screen content */}
        <rect x="8" y="10" width="25" height="3" rx="1" fill="#14b8a6" opacity="0.5" />
        <rect x="8" y="16" width="50" height="2" rx="1" fill="#64748b" opacity="0.3" />
        <rect x="8" y="21" width="45" height="2" rx="1" fill="#64748b" opacity="0.3" />
        {/* Keyboard base */}
        <rect x="0" y="45" width="70" height="8" rx="2" fill="#334155" />
        <ellipse cx="35" cy="49" rx="15" ry="2" fill="#1e293b" />
      </g>

      {/* Phone */}
      <g transform="translate(230, 80)">
        <rect x="0" y="0" width="35" height="60" rx="5" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="4" y="8" width="27" height="44" rx="2" fill="#0f172a" />
        {/* Screen content */}
        <rect x="8" y="15" width="15" height="2" rx="1" fill="#14b8a6" opacity="0.5" />
        <rect x="8" y="20" width="19" height="2" rx="1" fill="#64748b" opacity="0.3" />
        <rect x="8" y="28" width="19" height="12" rx="1" fill="#14b8a6" opacity="0.2" />
        {/* Home button */}
        <circle cx="17.5" cy="55" r="3" fill="#334155" />
      </g>

      {/* Connection lines to center */}
      <g opacity="0.5">
        <line x1="90" y1="110" x2="150" y2="130" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4 2" />
        <line x1="200" y1="85" x2="150" y2="130" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4 2" />
        <line x1="230" y1="110" x2="150" y2="130" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4 2" />
      </g>

      {/* Central hub indicator */}
      <g transform="translate(135, 115)">
        <circle cx="15" cy="15" r="15" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <circle cx="15" cy="15" r="6" fill="#14b8a6">
          <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Bottom label */}
      <g transform="translate(90, 165)">
        <rect x="0" y="0" width="120" height="25" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="60" y="16" fill="#14b8a6" fontSize="10" fontFamily="system-ui" textAnchor="middle">Multi-Device Support</text>
      </g>
    </svg>
  );
};

export default DevicesIllustration;
