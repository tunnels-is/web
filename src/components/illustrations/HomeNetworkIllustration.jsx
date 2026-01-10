const HomeNetworkIllustration = ({ className = "", width = 400, height = 300 }) => {
  return (
    <svg
      viewBox="0 0 400 300"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background glow */}
      <defs>
        <radialGradient id="homeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="connectionLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy="150" rx="180" ry="120" fill="url(#homeGlow)" />

      {/* Central hub/router */}
      <g transform="translate(175, 125)">
        <rect x="0" y="0" width="50" height="50" rx="8" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <circle cx="25" cy="15" r="4" fill="#14b8a6" />
        <rect x="10" y="28" width="30" height="3" rx="1.5" fill="#0d9488" />
        <rect x="10" y="35" width="30" height="3" rx="1.5" fill="#0d9488" />
      </g>

      {/* Connection lines */}
      <path d="M200 125 L200 80" stroke="url(#connectionLine)" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M200 175 L200 220" stroke="url(#connectionLine)" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M175 150 L100 150" stroke="url(#connectionLine)" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M225 150 L300 150" stroke="url(#connectionLine)" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M180 130 L120 80" stroke="url(#connectionLine)" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M220 130 L280 80" stroke="url(#connectionLine)" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M180 170 L120 220" stroke="url(#connectionLine)" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M220 170 L280 220" stroke="url(#connectionLine)" strokeWidth="2" strokeDasharray="4 2" />

      {/* Laptop - top */}
      <g transform="translate(180, 45)">
        <rect x="0" y="0" width="40" height="28" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="3" y="3" width="34" height="20" rx="1" fill="#0f172a" />
        <rect x="5" y="28" width="30" height="4" rx="1" fill="#334155" />
      </g>

      {/* Desktop - bottom */}
      <g transform="translate(175, 220)">
        <rect x="0" y="0" width="50" height="35" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="3" y="3" width="44" height="26" rx="1" fill="#0f172a" />
        <rect x="20" y="35" width="10" height="8" fill="#334155" />
        <rect x="12" y="43" width="26" height="3" rx="1" fill="#334155" />
      </g>

      {/* Phone - left */}
      <g transform="translate(65, 135)">
        <rect x="0" y="0" width="24" height="40" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="3" y="6" width="18" height="28" rx="1" fill="#0f172a" />
        <circle cx="12" cy="37" r="2" fill="#334155" />
      </g>

      {/* Tablet - right */}
      <g transform="translate(300, 130)">
        <rect x="0" y="0" width="35" height="45" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="3" y="5" width="29" height="35" rx="1" fill="#0f172a" />
        <circle cx="17.5" cy="43" r="2" fill="#334155" />
      </g>

      {/* Smart TV - top left */}
      <g transform="translate(90, 55)">
        <rect x="0" y="0" width="45" height="30" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="3" y="3" width="39" height="22" rx="1" fill="#0f172a" />
        <rect x="18" y="30" width="9" height="6" fill="#334155" />
        <rect x="12" y="36" width="21" height="2" rx="1" fill="#334155" />
      </g>

      {/* Gaming console - top right */}
      <g transform="translate(265, 55)">
        <rect x="0" y="5" width="40" height="25" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="5" fill="#0f172a" stroke="#334155" strokeWidth="1" />
        <circle cx="28" cy="17" r="5" fill="#0f172a" stroke="#334155" strokeWidth="1" />
      </g>

      {/* Smart speaker - bottom left */}
      <g transform="translate(95, 205)">
        <ellipse cx="15" cy="30" rx="15" ry="5" fill="#334155" />
        <rect x="5" y="5" width="20" height="25" rx="10" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
      </g>

      {/* Camera - bottom right */}
      <g transform="translate(290, 210)">
        <rect x="0" y="5" width="30" height="20" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="6" fill="#0f172a" stroke="#14b8a6" strokeWidth="2" />
        <circle cx="15" cy="15" r="3" fill="#14b8a6" fillOpacity="0.3" />
      </g>

      {/* Data flow dots */}
      <circle cx="200" cy="100" r="3" fill="#14b8a6" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="140" cy="150" r="3" fill="#14b8a6" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="260" cy="150" r="3" fill="#14b8a6" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="200" r="3" fill="#14b8a6" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.9s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default HomeNetworkIllustration;
