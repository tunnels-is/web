const EnterpriseIllustration = ({ className = "", width = 400, height = 300 }) => {
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
        <radialGradient id="enterpriseGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="meshLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy="150" rx="190" ry="130" fill="url(#enterpriseGlow)" />

      {/* Mesh network lines connecting all nodes */}
      <g opacity="0.4">
        <line x1="200" y1="80" x2="80" y2="130" stroke="url(#meshLine)" strokeWidth="1.5" />
        <line x1="200" y1="80" x2="320" y2="130" stroke="url(#meshLine)" strokeWidth="1.5" />
        <line x1="200" y1="80" x2="200" y2="200" stroke="url(#meshLine)" strokeWidth="1.5" />
        <line x1="80" y1="130" x2="80" y2="220" stroke="url(#meshLine)" strokeWidth="1.5" />
        <line x1="320" y1="130" x2="320" y2="220" stroke="url(#meshLine)" strokeWidth="1.5" />
        <line x1="80" y1="220" x2="200" y2="200" stroke="url(#meshLine)" strokeWidth="1.5" />
        <line x1="320" y1="220" x2="200" y2="200" stroke="url(#meshLine)" strokeWidth="1.5" />
        <line x1="80" y1="130" x2="320" y2="130" stroke="url(#meshLine)" strokeWidth="1.5" />
        <line x1="80" y1="220" x2="320" y2="220" stroke="url(#meshLine)" strokeWidth="1.5" />
      </g>

      {/* HQ - Top center */}
      <g transform="translate(160, 35)">
        <rect x="0" y="0" width="80" height="55" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <rect x="5" y="25" width="70" height="25" rx="2" fill="#0f172a" />
        {/* Building icon */}
        <rect x="30" y="5" width="20" height="18" fill="#14b8a6" opacity="0.3" />
        <rect x="33" y="8" width="4" height="4" fill="#0f172a" />
        <rect x="40" y="8" width="4" height="4" fill="#0f172a" />
        <rect x="33" y="14" width="4" height="4" fill="#0f172a" />
        <rect x="40" y="14" width="4" height="4" fill="#0f172a" />
        {/* Status */}
        <circle cx="15" cy="37" r="4" fill="#14b8a6">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="50" y="42" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">HQ</text>
      </g>

      {/* Branch Office 1 - Left */}
      <g transform="translate(35, 100)">
        <rect x="0" y="0" width="70" height="50" rx="4" fill="#1e293b" stroke="#0d9488" strokeWidth="1.5" />
        <rect x="5" y="22" width="60" height="23" rx="2" fill="#0f172a" />
        {/* Office icon */}
        <rect x="25" y="5" width="20" height="14" fill="#0d9488" opacity="0.3" />
        <rect x="28" y="8" width="5" height="5" fill="#0f172a" />
        <rect x="37" y="8" width="5" height="5" fill="#0f172a" />
        <circle cx="15" cy="33" r="3" fill="#0d9488">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <text x="42" y="37" fill="#64748b" fontSize="7" fontFamily="system-ui" textAnchor="middle">Branch 1</text>
      </g>

      {/* Branch Office 2 - Right */}
      <g transform="translate(295, 100)">
        <rect x="0" y="0" width="70" height="50" rx="4" fill="#1e293b" stroke="#0d9488" strokeWidth="1.5" />
        <rect x="5" y="22" width="60" height="23" rx="2" fill="#0f172a" />
        <rect x="25" y="5" width="20" height="14" fill="#0d9488" opacity="0.3" />
        <rect x="28" y="8" width="5" height="5" fill="#0f172a" />
        <rect x="37" y="8" width="5" height="5" fill="#0f172a" />
        <circle cx="15" cy="33" r="3" fill="#0d9488">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <text x="42" y="37" fill="#64748b" fontSize="7" fontFamily="system-ui" textAnchor="middle">Branch 2</text>
      </g>

      {/* Central Controller/Server */}
      <g transform="translate(170, 165)">
        <rect x="0" y="0" width="60" height="50" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <rect x="5" y="8" width="50" height="12" rx="2" fill="#0f172a" />
        <circle cx="50" cy="14" r="3" fill="#14b8a6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
        </circle>
        <rect x="5" y="24" width="50" height="12" rx="2" fill="#0f172a" />
        <circle cx="50" cy="30" r="3" fill="#14b8a6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <text x="30" y="46" fill="#14b8a6" fontSize="7" fontFamily="system-ui" textAnchor="middle">Controller</text>
      </g>

      {/* Remote Workers - Bottom left */}
      <g transform="translate(35, 195)">
        <rect x="0" y="0" width="70" height="45" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        {/* Laptop icons */}
        <g transform="translate(8, 8)">
          <rect x="0" y="0" width="20" height="14" rx="2" fill="#0f172a" stroke="#64748b" strokeWidth="0.5" />
          <rect x="2" y="14" width="16" height="2" rx="1" fill="#334155" />
        </g>
        <g transform="translate(35, 8)">
          <rect x="0" y="0" width="20" height="14" rx="2" fill="#0f172a" stroke="#64748b" strokeWidth="0.5" />
          <rect x="2" y="14" width="16" height="2" rx="1" fill="#334155" />
        </g>
        <circle cx="15" cy="35" r="3" fill="#0d9488">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.9s" repeatCount="indefinite" />
        </circle>
        <text x="42" y="38" fill="#64748b" fontSize="7" fontFamily="system-ui" textAnchor="middle">Remote</text>
      </g>

      {/* Cloud/Data Center - Bottom right */}
      <g transform="translate(295, 195)">
        <rect x="0" y="0" width="70" height="45" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        {/* Server rack icons */}
        <rect x="8" y="8" width="22" height="28" rx="2" fill="#0f172a" />
        <rect x="10" y="10" width="18" height="6" rx="1" fill="#1e293b" />
        <rect x="10" y="18" width="18" height="6" rx="1" fill="#1e293b" />
        <rect x="10" y="26" width="18" height="6" rx="1" fill="#1e293b" />
        <rect x="38" y="8" width="22" height="28" rx="2" fill="#0f172a" />
        <rect x="40" y="10" width="18" height="6" rx="1" fill="#1e293b" />
        <rect x="40" y="18" width="18" height="6" rx="1" fill="#1e293b" />
        <rect x="40" y="26" width="18" height="6" rx="1" fill="#1e293b" />
        <circle cx="55" cy="13" r="2" fill="#14b8a6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="55" cy="21" r="2" fill="#14b8a6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Data flow animation dots */}
      <circle r="3" fill="#14b8a6">
        <animateMotion dur="3s" repeatCount="indefinite" path="M200 90 L80 130 L80 220 L200 200 L320 220 L320 130 L200 90" />
      </circle>
      <circle r="3" fill="#0d9488">
        <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M200 90 L320 130 L320 220 L200 200 L80 220 L80 130 L200 90" />
      </circle>

      {/* Network stats */}
      <g transform="translate(155, 260)">
        <rect x="0" y="0" width="90" height="25" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="45" y="10" fill="#14b8a6" fontSize="7" fontFamily="system-ui" textAnchor="middle">Nodes Connected</text>
        <text x="45" y="21" fill="#14b8a6" fontSize="11" fontFamily="system-ui" fontWeight="bold" textAnchor="middle">6 / 6</text>
      </g>
    </svg>
  );
};

export default EnterpriseIllustration;
