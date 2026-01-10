const PersonalVPNIllustration = ({ className = "", width = 400, height = 300 }) => {
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
        <radialGradient id="vpnGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tunnelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="200" cy="150" rx="180" ry="120" fill="url(#vpnGlow)" />

      {/* VPN Tunnel - curved path */}
      <path
        d="M60 150 Q200 80 340 150"
        stroke="url(#tunnelGradient)"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M60 150 Q200 80 340 150"
        stroke="#14b8a6"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="8 4"
        opacity="0.6"
      />
      <path
        d="M60 150 Q200 220 340 150"
        stroke="url(#tunnelGradient)"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M60 150 Q200 220 340 150"
        stroke="#14b8a6"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="8 4"
        opacity="0.6"
      />

      {/* User device - left */}
      <g transform="translate(30, 120)">
        <rect x="0" y="0" width="50" height="60" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="5" y="8" width="40" height="35" rx="2" fill="#0f172a" />
        <circle cx="25" cy="52" r="4" fill="#334155" />
        {/* User icon */}
        <circle cx="25" cy="20" r="6" fill="#14b8a6" opacity="0.3" />
        <circle cx="25" cy="18" r="3" fill="#14b8a6" />
        <path d="M18 30 Q25 26 32 30" stroke="#14b8a6" strokeWidth="2" fill="none" />
      </g>

      {/* Central shield/lock */}
      <g transform="translate(170, 110)">
        <path
          d="M30 0 L55 12 L55 45 Q55 70 30 80 Q5 70 5 45 L5 12 Z"
          fill="url(#shieldGradient)"
          opacity="0.9"
        />
        <path
          d="M30 0 L55 12 L55 45 Q55 70 30 80 Q5 70 5 45 L5 12 Z"
          fill="none"
          stroke="#14b8a6"
          strokeWidth="2"
        />
        {/* Lock icon */}
        <rect x="20" y="35" width="20" height="18" rx="3" fill="#0f172a" />
        <path
          d="M24 35 L24 28 Q24 20 30 20 Q36 20 36 28 L36 35"
          stroke="#0f172a"
          strokeWidth="4"
          fill="none"
        />
        <circle cx="30" cy="44" r="3" fill="#14b8a6" />
        <rect x="29" y="44" width="2" height="5" fill="#14b8a6" />
      </g>

      {/* Server - right */}
      <g transform="translate(320, 110)">
        <rect x="0" y="0" width="50" height="80" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        {/* Server slots */}
        <rect x="8" y="10" width="34" height="12" rx="2" fill="#0f172a" />
        <circle cx="38" cy="16" r="3" fill="#14b8a6">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <rect x="8" y="28" width="34" height="12" rx="2" fill="#0f172a" />
        <circle cx="38" cy="34" r="3" fill="#14b8a6">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <rect x="8" y="46" width="34" height="12" rx="2" fill="#0f172a" />
        <circle cx="38" cy="52" r="3" fill="#14b8a6">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        {/* Ventilation */}
        <rect x="8" y="64" width="6" height="2" rx="1" fill="#334155" />
        <rect x="16" y="64" width="6" height="2" rx="1" fill="#334155" />
        <rect x="24" y="64" width="6" height="2" rx="1" fill="#334155" />
        <rect x="32" y="64" width="6" height="2" rx="1" fill="#334155" />
      </g>

      {/* Data packets flowing through tunnel */}
      <circle r="4" fill="#14b8a6">
        <animateMotion dur="3s" repeatCount="indefinite" path="M60 150 Q200 80 340 150" />
      </circle>
      <circle r="4" fill="#0d9488">
        <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M60 150 Q200 80 340 150" />
      </circle>
      <circle r="4" fill="#14b8a6">
        <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M60 150 Q200 80 340 150" />
      </circle>

      {/* Return packets */}
      <circle r="3" fill="#0d9488" opacity="0.7">
        <animateMotion dur="3s" repeatCount="indefinite" path="M340 150 Q200 220 60 150" />
      </circle>
      <circle r="3" fill="#14b8a6" opacity="0.7">
        <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M340 150 Q200 220 60 150" />
      </circle>

      {/* Labels */}
      <text x="55" y="200" fill="#64748b" fontSize="11" fontFamily="system-ui" textAnchor="middle">You</text>
      <text x="200" y="215" fill="#14b8a6" fontSize="11" fontFamily="system-ui" textAnchor="middle">Encrypted</text>
      <text x="345" y="210" fill="#64748b" fontSize="11" fontFamily="system-ui" textAnchor="middle">Your Server</text>

      {/* Encryption indicators */}
      <g transform="translate(120, 95)">
        <text fill="#14b8a6" fontSize="10" fontFamily="monospace" opacity="0.6">AES-256</text>
      </g>
      <g transform="translate(240, 95)">
        <text fill="#14b8a6" fontSize="10" fontFamily="monospace" opacity="0.6">WireGuard</text>
      </g>
    </svg>
  );
};

export default PersonalVPNIllustration;
