const TerminalIllustration = ({ className = "", width = 300, height = 200 }) => {
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
        <radialGradient id="termGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="100" rx="140" ry="90" fill="url(#termGlow)" />

      {/* Terminal window */}
      <g transform="translate(40, 25)">
        <rect x="0" y="0" width="220" height="140" rx="8" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />

        {/* Title bar */}
        <rect x="0" y="0" width="220" height="24" rx="8" fill="#0f172a" />
        <circle cx="18" cy="12" r="5" fill="#ef4444" />
        <circle cx="36" cy="12" r="5" fill="#fbbf24" />
        <circle cx="54" cy="12" r="5" fill="#22c55e" />
        <text x="110" y="16" fill="#64748b" fontSize="10" fontFamily="system-ui" textAnchor="middle">Terminal</text>

        {/* Terminal content */}
        <text x="15" y="50" fill="#64748b" fontSize="11" fontFamily="monospace">$</text>
        <text x="28" y="50" fill="#14b8a6" fontSize="11" fontFamily="monospace">curl -fsSL install.sh | sh</text>

        <text x="15" y="70" fill="#22c55e" fontSize="10" fontFamily="monospace">Installing tunnels...</text>

        <text x="15" y="90" fill="#22c55e" fontSize="10" fontFamily="monospace">✓ Binary downloaded</text>
        <text x="15" y="105" fill="#22c55e" fontSize="10" fontFamily="monospace">✓ Config created</text>
        <text x="15" y="120" fill="#22c55e" fontSize="10" fontFamily="monospace">✓ Service started</text>

        {/* Cursor */}
        <rect x="15" y="128" width="8" height="2" fill="#14b8a6">
          <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Bottom label */}
      <g transform="translate(100, 170)">
        <rect x="0" y="0" width="100" height="22" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="50" y="14" fill="#14b8a6" fontSize="9" fontFamily="system-ui" textAnchor="middle">One-liner install</text>
      </g>
    </svg>
  );
};

export default TerminalIllustration;
