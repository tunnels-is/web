const AccessControlIllustration = ({ className = "", width = 300, height = 200 }) => {
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
        <radialGradient id="aclGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="100" rx="140" ry="90" fill="url(#aclGlow)" />

      {/* Central Gateway */}
      <g transform="translate(115, 50)">
        <rect x="0" y="0" width="70" height="80" rx="6" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <text x="35" y="20" fill="#14b8a6" fontSize="10" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">Gateway</text>

        {/* Rules display */}
        <rect x="8" y="30" width="54" height="40" rx="3" fill="#0f172a" />
        <text x="35" y="45" fill="#22c55e" fontSize="8" fontFamily="monospace" textAnchor="middle">✓ Allow: Admin</text>
        <text x="35" y="57" fill="#22c55e" fontSize="8" fontFamily="monospace" textAnchor="middle">✓ Allow: Dev</text>
        <text x="35" y="69" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="middle">✗ Deny: Guest</text>
      </g>

      {/* Admin user - allowed */}
      <g transform="translate(20, 35)">
        <circle cx="25" cy="25" r="22" fill="#1e293b" stroke="#22c55e" strokeWidth="2" />
        <circle cx="25" cy="20" r="7" fill="#22c55e" />
        <path d="M14 38 Q25 32 36 38" stroke="#22c55e" strokeWidth="2" fill="none" />
        <text x="25" y="60" fill="#22c55e" fontSize="8" fontFamily="system-ui" textAnchor="middle">Admin</text>
      </g>

      {/* Arrow allowed */}
      <path d="M67 55 L115 75" stroke="#22c55e" strokeWidth="2">
        <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="0.8s" repeatCount="indefinite" />
      </path>

      {/* Dev user - allowed */}
      <g transform="translate(20, 115)">
        <circle cx="25" cy="25" r="22" fill="#1e293b" stroke="#22c55e" strokeWidth="2" />
        <circle cx="25" cy="20" r="7" fill="#22c55e" />
        <path d="M14 38 Q25 32 36 38" stroke="#22c55e" strokeWidth="2" fill="none" />
        <text x="25" y="60" fill="#22c55e" fontSize="8" fontFamily="system-ui" textAnchor="middle">Dev</text>
      </g>

      {/* Arrow allowed */}
      <path d="M67 135 L115 105" stroke="#22c55e" strokeWidth="2">
        <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="0.8s" repeatCount="indefinite" />
      </path>

      {/* Guest user - denied */}
      <g transform="translate(230, 75)">
        <circle cx="25" cy="25" r="22" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
        <circle cx="25" cy="20" r="7" fill="#ef4444" opacity="0.6" />
        <path d="M14 38 Q25 32 36 38" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.6" />
        <text x="25" y="60" fill="#ef4444" fontSize="8" fontFamily="system-ui" textAnchor="middle">Guest</text>
      </g>

      {/* Arrow blocked */}
      <path d="M230 95 L185 95" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
      {/* X mark */}
      <g transform="translate(195, 87)">
        <line x1="0" y1="0" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="0" x2="0" y2="12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Protected resources */}
      <g transform="translate(100, 140)">
        <rect x="0" y="0" width="100" height="30" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="50" y="12" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">Protected Resources</text>
        <g transform="translate(20, 15)">
          <rect x="0" y="0" width="15" height="12" rx="2" fill="#0f172a" stroke="#14b8a6" strokeWidth="0.5" />
          <rect x="20" y="0" width="15" height="12" rx="2" fill="#0f172a" stroke="#14b8a6" strokeWidth="0.5" />
          <rect x="40" y="0" width="15" height="12" rx="2" fill="#0f172a" stroke="#14b8a6" strokeWidth="0.5" />
        </g>
      </g>
    </svg>
  );
};

export default AccessControlIllustration;
