const SecureConnectionIllustration = ({ className = "", width = 300, height = 200 }) => {
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
        <linearGradient id="secConnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* User device */}
      <g transform="translate(20, 60)">
        <rect x="0" y="0" width="60" height="45" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="5" y="8" width="50" height="30" rx="2" fill="#0f172a" />
        <rect x="20" y="45" width="20" height="5" fill="#334155" />
        <rect x="10" y="50" width="40" height="3" rx="1" fill="#334155" />
        {/* User icon */}
        <circle cx="30" cy="20" r="6" fill="#14b8a6" opacity="0.3" />
        <circle cx="30" cy="18" r="3" fill="#14b8a6" />
        <path d="M24 28 Q30 25 36 28" stroke="#14b8a6" strokeWidth="2" fill="none" />
      </g>

      {/* Encrypted tunnel */}
      <g transform="translate(80, 75)">
        <rect x="0" y="0" width="140" height="30" rx="15" fill="url(#secConnGrad)" />
        <path d="M10 15 L130 15" stroke="#14b8a6" strokeWidth="2" strokeDasharray="6 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
        </path>
        {/* Lock icon in tunnel */}
        <g transform="translate(60, 5)">
          <rect x="0" y="8" width="20" height="14" rx="2" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
          <path d="M5 8 L5 5 Q5 0 10 0 Q15 0 15 5 L15 8" stroke="#14b8a6" strokeWidth="1.5" fill="none" />
          <circle cx="10" cy="15" r="2" fill="#14b8a6" />
        </g>
      </g>

      {/* Server */}
      <g transform="translate(220, 55)">
        <rect x="0" y="0" width="60" height="70" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <rect x="8" y="10" width="44" height="12" rx="2" fill="#0f172a" />
        <circle cx="46" cy="16" r="3" fill="#14b8a6">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <rect x="8" y="28" width="44" height="12" rx="2" fill="#0f172a" />
        <circle cx="46" cy="34" r="3" fill="#0d9488">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <rect x="8" y="46" width="44" height="12" rx="2" fill="#0f172a" />
        <circle cx="46" cy="52" r="3" fill="#0d9488" />
      </g>

      {/* Labels */}
      <text x="50" y="130" fill="#64748b" fontSize="10" fontFamily="system-ui" textAnchor="middle">You</text>
      <text x="150" y="130" fill="#14b8a6" fontSize="10" fontFamily="system-ui" textAnchor="middle">AES-256</text>
      <text x="250" y="145" fill="#64748b" fontSize="10" fontFamily="system-ui" textAnchor="middle">Your Server</text>

      {/* Status indicators */}
      <g transform="translate(100, 150)">
        <rect x="0" y="0" width="100" height="25" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <circle cx="15" cy="12" r="4" fill="#22c55e">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="55" y="16" fill="#14b8a6" fontSize="9" fontFamily="system-ui" textAnchor="middle">Connected</text>
      </g>
    </svg>
  );
};

export default SecureConnectionIllustration;
