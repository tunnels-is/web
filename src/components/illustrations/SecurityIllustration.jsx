const SecurityIllustration = ({ className = "", width = 400, height = 300 }) => {
  return (
    <svg
      viewBox="0 0 400 300"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="securityGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="shieldFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="200" cy="150" rx="180" ry="130" fill="url(#securityGlow)" />

      {/* Central shield */}
      <g transform="translate(140, 60)" filter="url(#glow)">
        <path
          d="M60 0 L115 20 L115 80 Q115 140 60 160 Q5 140 5 80 L5 20 Z"
          fill="url(#shieldFill)"
          opacity="0.9"
        />
        <path
          d="M60 0 L115 20 L115 80 Q115 140 60 160 Q5 140 5 80 L5 20 Z"
          fill="none"
          stroke="#14b8a6"
          strokeWidth="2"
        />
        {/* Checkmark */}
        <path
          d="M35 80 L55 100 L90 55"
          stroke="#0f172a"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Encryption rings around shield */}
      <ellipse cx="200" cy="140" rx="90" ry="30" fill="none" stroke="#14b8a6" strokeWidth="1" opacity="0.3" strokeDasharray="6 3">
        <animateTransform attributeName="transform" type="rotate" from="0 200 140" to="360 200 140" dur="20s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="200" cy="140" rx="100" ry="35" fill="none" stroke="#0d9488" strokeWidth="1" opacity="0.2" strokeDasharray="4 4">
        <animateTransform attributeName="transform" type="rotate" from="360 200 140" to="0 200 140" dur="25s" repeatCount="indefinite" />
      </ellipse>

      {/* Blocked threats - left side */}
      <g transform="translate(30, 80)">
        {/* Malware icon */}
        <circle cx="20" cy="20" r="18" fill="#1e293b" stroke="#ef4444" strokeWidth="2" opacity="0.6" />
        <path d="M10 10 L30 30 M30 10 L10 30" stroke="#ef4444" strokeWidth="2" opacity="0.8" />
        <text x="20" y="50" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">Blocked</text>
      </g>

      <g transform="translate(30, 160)">
        {/* Hacker icon */}
        <circle cx="20" cy="20" r="18" fill="#1e293b" stroke="#ef4444" strokeWidth="2" opacity="0.6" />
        <path d="M10 10 L30 30 M30 10 L10 30" stroke="#ef4444" strokeWidth="2" opacity="0.8" />
      </g>

      {/* Blocked threats - right side */}
      <g transform="translate(350, 80)">
        {/* Spy icon */}
        <circle cx="20" cy="20" r="18" fill="#1e293b" stroke="#ef4444" strokeWidth="2" opacity="0.6" />
        <path d="M10 10 L30 30 M30 10 L10 30" stroke="#ef4444" strokeWidth="2" opacity="0.8" />
        <text x="20" y="50" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">Blocked</text>
      </g>

      <g transform="translate(350, 160)">
        {/* Tracker icon */}
        <circle cx="20" cy="20" r="18" fill="#1e293b" stroke="#ef4444" strokeWidth="2" opacity="0.6" />
        <path d="M10 10 L30 30 M30 10 L10 30" stroke="#ef4444" strokeWidth="2" opacity="0.8" />
      </g>

      {/* Bouncing threat arrows */}
      <g>
        <path d="M70 100 L130 120" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </path>
      </g>
      <g>
        <path d="M330 100 L270 120" stroke="#ef4444" strokeWidth="2" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Secure connection below */}
      <g transform="translate(150, 240)">
        <rect x="0" y="0" width="100" height="35" rx="6" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <circle cx="20" cy="17" r="8" fill="#0f172a" />
        <path d="M16 17 L19 20 L24 14" stroke="#14b8a6" strokeWidth="2" fill="none" />
        <text x="55" y="14" fill="#14b8a6" fontSize="9" fontFamily="system-ui">SECURE</text>
        <text x="55" y="26" fill="#64748b" fontSize="8" fontFamily="system-ui">256-bit</text>
      </g>

      {/* Key icon - bottom left */}
      <g transform="translate(80, 240)">
        <circle cx="15" cy="15" r="12" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <circle cx="15" cy="12" r="5" fill="none" stroke="#14b8a6" strokeWidth="2" />
        <rect x="13" y="15" width="4" height="12" rx="1" fill="#14b8a6" />
        <rect x="15" y="22" width="6" height="2" fill="#14b8a6" />
      </g>

      {/* Lock icon - bottom right */}
      <g transform="translate(290, 240)">
        <rect x="5" y="15" width="20" height="16" rx="3" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <path d="M10 15 L10 10 Q10 3 15 3 Q20 3 20 10 L20 15" stroke="#14b8a6" strokeWidth="2" fill="none" />
        <circle cx="15" cy="23" r="2" fill="#14b8a6" />
      </g>

      {/* Status indicators */}
      <g transform="translate(160, 30)">
        <rect x="0" y="0" width="80" height="20" rx="10" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <circle cx="15" cy="10" r="4" fill="#14b8a6">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="45" y="14" fill="#14b8a6" fontSize="9" fontFamily="system-ui" textAnchor="middle">Protected</text>
      </g>
    </svg>
  );
};

export default SecurityIllustration;
