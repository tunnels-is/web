const GlobalNetworkIllustration = ({ className = "", width = 300, height = 250 }) => {
  return (
    <svg
      viewBox="0 0 300 250"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="connLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <ellipse cx="150" cy="125" rx="140" ry="110" fill="url(#globeGlow)" />

      {/* Globe */}
      <g transform="translate(100, 50)">
        <circle cx="50" cy="50" r="50" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        {/* Globe lines */}
        <ellipse cx="50" cy="50" rx="50" ry="20" fill="none" stroke="#14b8a6" strokeWidth="1" opacity="0.3" />
        <ellipse cx="50" cy="50" rx="35" ry="50" fill="none" stroke="#14b8a6" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="#14b8a6" strokeWidth="1" opacity="0.3" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="#14b8a6" strokeWidth="1" opacity="0.3" />

        {/* Connection points on globe */}
        <circle cx="25" cy="30" r="5" fill="#14b8a6">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="40" r="5" fill="#0d9488">
          <animate attributeName="r" values="4;6;4" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="75" r="5" fill="#14b8a6">
          <animate attributeName="r" values="4;6;4" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Server nodes around globe */}
      <g transform="translate(30, 40)">
        <rect x="0" y="0" width="40" height="30" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <rect x="5" y="8" width="30" height="6" rx="1" fill="#0f172a" />
        <rect x="5" y="18" width="30" height="6" rx="1" fill="#0f172a" />
        <circle cx="32" cy="11" r="2" fill="#14b8a6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>

      <g transform="translate(230, 40)">
        <rect x="0" y="0" width="40" height="30" rx="4" fill="#1e293b" stroke="#0d9488" strokeWidth="1.5" />
        <rect x="5" y="8" width="30" height="6" rx="1" fill="#0f172a" />
        <rect x="5" y="18" width="30" height="6" rx="1" fill="#0f172a" />
        <circle cx="32" cy="11" r="2" fill="#0d9488">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" begin="0.3s" repeatCount="indefinite" />
        </circle>
      </g>

      <g transform="translate(30, 160)">
        <rect x="0" y="0" width="40" height="30" rx="4" fill="#1e293b" stroke="#0d9488" strokeWidth="1.5" />
        <rect x="5" y="8" width="30" height="6" rx="1" fill="#0f172a" />
        <rect x="5" y="18" width="30" height="6" rx="1" fill="#0f172a" />
        <circle cx="32" cy="11" r="2" fill="#0d9488">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" begin="0.6s" repeatCount="indefinite" />
        </circle>
      </g>

      <g transform="translate(230, 160)">
        <rect x="0" y="0" width="40" height="30" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <rect x="5" y="8" width="30" height="6" rx="1" fill="#0f172a" />
        <rect x="5" y="18" width="30" height="6" rx="1" fill="#0f172a" />
        <circle cx="32" cy="11" r="2" fill="#14b8a6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" begin="0.9s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Connection lines to globe */}
      <line x1="70" y1="55" x2="100" y2="80" stroke="url(#connLine)" strokeWidth="2" strokeDasharray="4 2" />
      <line x1="230" y1="55" x2="200" y2="80" stroke="url(#connLine)" strokeWidth="2" strokeDasharray="4 2" />
      <line x1="70" y1="175" x2="100" y2="150" stroke="url(#connLine)" strokeWidth="2" strokeDasharray="4 2" />
      <line x1="230" y1="175" x2="200" y2="150" stroke="url(#connLine)" strokeWidth="2" strokeDasharray="4 2" />

      {/* Region labels */}
      <text x="50" y="85" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">US-East</text>
      <text x="250" y="85" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">EU-West</text>
      <text x="50" y="205" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">Asia</text>
      <text x="250" y="205" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">AU</text>

      {/* Bottom stats */}
      <g transform="translate(100, 210)">
        <rect x="0" y="0" width="100" height="25" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="50" y="16" fill="#14b8a6" fontSize="10" fontFamily="system-ui" textAnchor="middle">Global Coverage</text>
      </g>
    </svg>
  );
};

export default GlobalNetworkIllustration;
