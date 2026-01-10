const PrivacyShieldIllustration = ({ className = "", width = 300, height = 250 }) => {
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
        <radialGradient id="privacyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
      </defs>

      <ellipse cx="150" cy="125" rx="140" ry="110" fill="url(#privacyGlow)" />

      {/* Main shield */}
      <g transform="translate(100, 40)">
        <path
          d="M50 0 L95 15 L95 65 Q95 115 50 130 Q5 115 5 65 L5 15 Z"
          fill="url(#shieldGrad)"
          opacity="0.9"
        />
        <path
          d="M50 0 L95 15 L95 65 Q95 115 50 130 Q5 115 5 65 L5 15 Z"
          fill="none"
          stroke="#14b8a6"
          strokeWidth="2"
        />
        {/* Eye with slash - privacy */}
        <g transform="translate(25, 45)">
          <ellipse cx="25" cy="20" rx="18" ry="12" fill="none" stroke="#0f172a" strokeWidth="3" />
          <circle cx="25" cy="20" r="6" fill="#0f172a" />
          <line x1="10" y1="35" x2="40" y2="5" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>

      {/* Orbiting lock icons */}
      <g transform="translate(45, 80)">
        <rect x="0" y="8" width="20" height="16" rx="3" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <path d="M5 8 L5 5 Q5 0 10 0 Q15 0 15 5 L15 8" stroke="#14b8a6" strokeWidth="2" fill="none" />
        <circle cx="10" cy="16" r="2" fill="#14b8a6" />
      </g>

      <g transform="translate(235, 80)">
        <rect x="0" y="8" width="20" height="16" rx="3" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <path d="M5 8 L5 5 Q5 0 10 0 Q15 0 15 5 L15 8" stroke="#14b8a6" strokeWidth="2" fill="none" />
        <circle cx="10" cy="16" r="2" fill="#14b8a6" />
      </g>

      {/* Data streams being protected */}
      <g opacity="0.6">
        <path d="M50 100 Q100 90 100 105" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 2">
          <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M250 100 Q200 90 200 105" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 2">
          <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Bottom text indicators */}
      <g transform="translate(80, 195)">
        <rect x="0" y="0" width="140" height="35" rx="6" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="70" y="15" fill="#14b8a6" fontSize="10" fontFamily="system-ui" textAnchor="middle">Zero Knowledge</text>
        <text x="70" y="28" fill="#64748b" fontSize="9" fontFamily="system-ui" textAnchor="middle">Your data stays yours</text>
      </g>
    </svg>
  );
};

export default PrivacyShieldIllustration;
