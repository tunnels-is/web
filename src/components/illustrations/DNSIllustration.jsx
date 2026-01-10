const DNSIllustration = ({ className = "", width = 400, height = 300 }) => {
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
        <radialGradient id="dnsGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dnsFlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy="150" rx="180" ry="120" fill="url(#dnsGlow)" />

      {/* Browser/Device - left */}
      <g transform="translate(30, 100)">
        <rect x="0" y="0" width="70" height="55" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="4" y="12" width="62" height="38" rx="2" fill="#0f172a" />
        {/* URL bar */}
        <rect x="4" y="4" width="50" height="6" rx="2" fill="#334155" />
        <circle cx="60" cy="7" r="2" fill="#14b8a6" />
        {/* Website content */}
        <rect x="8" y="18" width="30" height="3" rx="1" fill="#64748b" opacity="0.5" />
        <rect x="8" y="24" width="50" height="2" rx="1" fill="#64748b" opacity="0.3" />
        <rect x="8" y="28" width="45" height="2" rx="1" fill="#64748b" opacity="0.3" />
      </g>

      {/* Query label */}
      <text x="65" y="170" fill="#64748b" fontSize="9" fontFamily="system-ui" textAnchor="middle">example.com</text>

      {/* DNS Server - center */}
      <g transform="translate(160, 80)">
        <rect x="0" y="0" width="80" height="100" rx="6" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        {/* DNS label */}
        <rect x="15" y="8" width="50" height="16" rx="3" fill="#14b8a6" />
        <text x="40" y="20" fill="#0f172a" fontSize="10" fontFamily="system-ui" fontWeight="bold" textAnchor="middle">DNS</text>
        {/* Records visualization */}
        <rect x="10" y="32" width="60" height="12" rx="2" fill="#0f172a" />
        <text x="40" y="42" fill="#14b8a6" fontSize="7" fontFamily="monospace" textAnchor="middle">A Record</text>
        <rect x="10" y="48" width="60" height="12" rx="2" fill="#0f172a" />
        <text x="40" y="58" fill="#14b8a6" fontSize="7" fontFamily="monospace" textAnchor="middle">AAAA Record</text>
        <rect x="10" y="64" width="60" height="12" rx="2" fill="#0f172a" />
        <text x="40" y="74" fill="#14b8a6" fontSize="7" fontFamily="monospace" textAnchor="middle">CNAME</text>
        {/* Status lights */}
        <circle cx="20" cy="88" r="4" fill="#14b8a6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="35" cy="88" r="4" fill="#14b8a6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="88" r="4" fill="#14b8a6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Web Server - right */}
      <g transform="translate(300, 100)">
        <rect x="0" y="0" width="70" height="80" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        {/* Server slots */}
        <rect x="8" y="10" width="54" height="14" rx="2" fill="#0f172a" />
        <circle cx="55" cy="17" r="3" fill="#14b8a6">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <rect x="8" y="28" width="54" height="14" rx="2" fill="#0f172a" />
        <circle cx="55" cy="35" r="3" fill="#14b8a6">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <rect x="8" y="46" width="54" height="14" rx="2" fill="#0f172a" />
        <circle cx="55" cy="53" r="3" fill="#0d9488" />
        {/* Vents */}
        <rect x="8" y="66" width="8" height="2" rx="1" fill="#334155" />
        <rect x="18" y="66" width="8" height="2" rx="1" fill="#334155" />
        <rect x="28" y="66" width="8" height="2" rx="1" fill="#334155" />
      </g>

      {/* IP address label */}
      <text x="335" y="195" fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="middle">192.168.1.1</text>

      {/* Connection arrows - Query */}
      <g>
        <path d="M100 127 L155 127" stroke="url(#dnsFlow)" strokeWidth="3" />
        <polygon points="155,127 148,123 148,131" fill="#14b8a6" />
        <text x="127" y="120" fill="#14b8a6" fontSize="8" fontFamily="system-ui" textAnchor="middle">Query</text>
      </g>

      {/* Connection arrows - Response */}
      <g>
        <path d="M155 145 L100 145" stroke="url(#dnsFlow)" strokeWidth="3" />
        <polygon points="100,145 107,141 107,149" fill="#14b8a6" />
        <text x="127" y="160" fill="#0d9488" fontSize="8" fontFamily="system-ui" textAnchor="middle">IP</text>
      </g>

      {/* Connection arrows - Connect */}
      <g>
        <path d="M245 130 L295 130" stroke="url(#dnsFlow)" strokeWidth="3" />
        <polygon points="295,130 288,126 288,134" fill="#14b8a6" />
        <text x="270" y="120" fill="#14b8a6" fontSize="8" fontFamily="system-ui" textAnchor="middle">Connect</text>
      </g>

      {/* Blocked ads/trackers - bottom */}
      <g transform="translate(140, 210)">
        <rect x="0" y="0" width="120" height="50" rx="6" fill="#1e293b" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" opacity="0.6" />
        <text x="60" y="18" fill="#ef4444" fontSize="10" fontFamily="system-ui" textAnchor="middle" opacity="0.8">Blocked</text>

        {/* Blocked items */}
        <g transform="translate(10, 25)">
          <circle cx="8" cy="8" r="6" fill="#0f172a" stroke="#ef4444" strokeWidth="1" opacity="0.6" />
          <path d="M5 5 L11 11 M11 5 L5 11" stroke="#ef4444" strokeWidth="1" />
          <text x="22" y="11" fill="#64748b" fontSize="7" fontFamily="system-ui">ads.tracker.com</text>
        </g>
        <g transform="translate(65, 25)">
          <circle cx="8" cy="8" r="6" fill="#0f172a" stroke="#ef4444" strokeWidth="1" opacity="0.6" />
          <path d="M5 5 L11 11 M11 5 L5 11" stroke="#ef4444" strokeWidth="1" />
          <text x="22" y="11" fill="#64748b" fontSize="7" fontFamily="system-ui">malware.bad</text>
        </g>
      </g>

      {/* Pi-hole style stats */}
      <g transform="translate(30, 210)">
        <rect x="0" y="0" width="90" height="50" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="45" y="16" fill="#14b8a6" fontSize="9" fontFamily="system-ui" textAnchor="middle">Queries Today</text>
        <text x="45" y="38" fill="#14b8a6" fontSize="16" fontFamily="system-ui" fontWeight="bold" textAnchor="middle">12,847</text>
      </g>

      <g transform="translate(280, 210)">
        <rect x="0" y="0" width="90" height="50" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="45" y="16" fill="#14b8a6" fontSize="9" fontFamily="system-ui" textAnchor="middle">Blocked</text>
        <text x="45" y="38" fill="#ef4444" fontSize="16" fontFamily="system-ui" fontWeight="bold" textAnchor="middle">23%</text>
      </g>

      {/* Data flow animation */}
      <circle r="4" fill="#14b8a6">
        <animate attributeName="cx" values="100;155;155;100" dur="2s" repeatCount="indefinite" />
        <animate attributeName="cy" values="127;127;145;145" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default DNSIllustration;
