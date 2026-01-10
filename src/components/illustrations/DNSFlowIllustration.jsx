const DNSFlowIllustration = ({ className = "", width = 300, height = 200 }) => {
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
        <radialGradient id="dnsFlowGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="100" rx="140" ry="90" fill="url(#dnsFlowGlow)" />

      {/* Client */}
      <g transform="translate(20, 60)">
        <rect x="0" y="0" width="50" height="40" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="5" y="5" width="40" height="25" rx="2" fill="#0f172a" />
        <rect x="18" y="40" width="14" height="5" fill="#334155" />
        <rect x="10" y="45" width="30" height="3" rx="1" fill="#334155" />
        <text x="25" y="65" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">Client</text>
      </g>

      {/* DNS Query bubble */}
      <g transform="translate(75, 45)">
        <rect x="0" y="0" width="60" height="30" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="30" y="12" fill="#64748b" fontSize="7" fontFamily="system-ui" textAnchor="middle">Query:</text>
        <text x="30" y="23" fill="#14b8a6" fontSize="8" fontFamily="monospace" textAnchor="middle">home.lan</text>
      </g>

      {/* Arrow to DNS */}
      <path d="M135 60 L155 60" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowhead)">
        <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="0.8s" repeatCount="indefinite" />
      </path>

      {/* DNS Server */}
      <g transform="translate(155, 35)">
        <rect x="0" y="0" width="60" height="50" rx="6" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <text x="30" y="18" fill="#14b8a6" fontSize="12" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">DNS</text>
        <rect x="8" y="25" width="44" height="18" rx="2" fill="#0f172a" />
        <text x="30" y="37" fill="#0d9488" fontSize="7" fontFamily="monospace" textAnchor="middle">10.0.0.5</text>
        <circle cx="50" cy="10" r="4" fill="#22c55e">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Arrow to Server */}
      <path d="M215 60 L235 60" stroke="#14b8a6" strokeWidth="2">
        <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="0.8s" repeatCount="indefinite" />
      </path>

      {/* Home Server */}
      <g transform="translate(235, 45)">
        <rect x="0" y="0" width="45" height="55" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <rect x="5" y="8" width="35" height="12" rx="2" fill="#0f172a" />
        <circle cx="35" cy="14" r="3" fill="#14b8a6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
        </circle>
        <rect x="5" y="25" width="35" height="12" rx="2" fill="#0f172a" />
        <circle cx="35" cy="31" r="3" fill="#0d9488" />
        <rect x="5" y="42" width="35" height="8" rx="2" fill="#0f172a" />
        <text x="22" y="115" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">Server</text>
      </g>

      {/* Return path */}
      <path d="M235 115 C200 140, 100 140, 70 115" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="4 2" fill="none">
        <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1.5s" repeatCount="indefinite" />
      </path>

      {/* Response bubble */}
      <g transform="translate(120, 125)">
        <rect x="0" y="0" width="60" height="25" rx="4" fill="#1e293b" stroke="#0d9488" strokeWidth="1" />
        <text x="30" y="16" fill="#22c55e" fontSize="9" fontFamily="system-ui" textAnchor="middle">Connected!</text>
      </g>

      {/* Bottom label */}
      <g transform="translate(100, 165)">
        <rect x="0" y="0" width="100" height="22" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="50" y="14" fill="#14b8a6" fontSize="9" fontFamily="system-ui" textAnchor="middle">Private DNS</text>
      </g>
    </svg>
  );
};

export default DNSFlowIllustration;
