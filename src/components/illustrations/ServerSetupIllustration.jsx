const ServerSetupIllustration = ({ className = "", width = 300, height = 250 }) => {
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
        <radialGradient id="setupGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="125" rx="140" ry="110" fill="url(#setupGlow)" />

      {/* Server rack */}
      <g transform="translate(90, 30)">
        <rect x="0" y="0" width="120" height="150" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="2" />

        {/* Server unit 1 */}
        <g transform="translate(10, 15)">
          <rect x="0" y="0" width="100" height="35" rx="3" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.5" />
          <circle cx="85" cy="12" r="4" fill="#14b8a6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <rect x="10" y="20" width="40" height="3" rx="1" fill="#14b8a6" opacity="0.5" />
          <rect x="10" y="26" width="30" height="3" rx="1" fill="#0d9488" opacity="0.5" />
        </g>

        {/* Server unit 2 */}
        <g transform="translate(10, 60)">
          <rect x="0" y="0" width="100" height="35" rx="3" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
          <circle cx="85" cy="12" r="4" fill="#0d9488">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <rect x="10" y="20" width="35" height="3" rx="1" fill="#64748b" opacity="0.5" />
          <rect x="10" y="26" width="25" height="3" rx="1" fill="#64748b" opacity="0.5" />
        </g>

        {/* Server unit 3 */}
        <g transform="translate(10, 105)">
          <rect x="0" y="0" width="100" height="35" rx="3" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
          <circle cx="85" cy="12" r="4" fill="#64748b" />
          <rect x="10" y="20" width="50" height="3" rx="1" fill="#64748b" opacity="0.5" />
          <rect x="10" y="26" width="40" height="3" rx="1" fill="#64748b" opacity="0.5" />
        </g>
      </g>

      {/* Terminal/Config window */}
      <g transform="translate(30, 100)">
        <rect x="0" y="0" width="55" height="70" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <rect x="0" y="0" width="55" height="12" rx="4" fill="#0f172a" />
        <circle cx="10" cy="6" r="2" fill="#ef4444" />
        <circle cx="18" cy="6" r="2" fill="#fbbf24" />
        <circle cx="26" cy="6" r="2" fill="#22c55e" />
        {/* Terminal lines */}
        <text x="5" y="25" fill="#14b8a6" fontSize="6" fontFamily="monospace">$ tunnels</text>
        <text x="5" y="35" fill="#64748b" fontSize="6" fontFamily="monospace">Starting...</text>
        <text x="5" y="45" fill="#22c55e" fontSize="6" fontFamily="monospace">Ready!</text>
        <rect x="5" y="52" width="20" height="8" fill="#14b8a6" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Checkmark */}
      <g transform="translate(220, 120)">
        <circle cx="25" cy="25" r="25" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <path d="M15 25 L22 32 L35 18" stroke="#14b8a6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Connection lines */}
      <path d="M85 135 L90 135" stroke="#14b8a6" strokeWidth="2" strokeDasharray="3 2" />
      <path d="M210 135 L220 145" stroke="#14b8a6" strokeWidth="2" strokeDasharray="3 2" />

      {/* Bottom label */}
      <g transform="translate(100, 200)">
        <rect x="0" y="0" width="100" height="30" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="50" y="12" fill="#14b8a6" fontSize="9" fontFamily="system-ui" textAnchor="middle">5 min setup</text>
        <text x="50" y="24" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">One command install</text>
      </g>
    </svg>
  );
};

export default ServerSetupIllustration;
