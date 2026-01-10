const LANOverWANIllustration = ({ className = "", width = 400, height = 300 }) => {
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
        <radialGradient id="lanGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="lanGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0d9488" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tunnelLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#14b8a6" stopOpacity="1" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Location A glow */}
      <ellipse cx="80" cy="150" rx="80" ry="100" fill="url(#lanGlow1)" />
      {/* Location B glow */}
      <ellipse cx="320" cy="150" rx="80" ry="100" fill="url(#lanGlow2)" />

      {/* VPN Tunnel connecting both */}
      <path
        d="M130 150 Q200 100 270 150"
        stroke="url(#tunnelLine)"
        strokeWidth="30"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M130 150 Q200 100 270 150"
        stroke="#14b8a6"
        strokeWidth="2"
        fill="none"
        strokeDasharray="8 4"
      />
      <path
        d="M130 150 Q200 200 270 150"
        stroke="url(#tunnelLine)"
        strokeWidth="30"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M130 150 Q200 200 270 150"
        stroke="#14b8a6"
        strokeWidth="2"
        fill="none"
        strokeDasharray="8 4"
      />

      {/* WAN/Internet cloud in center */}
      <g transform="translate(165, 130)">
        <ellipse cx="35" cy="20" rx="30" ry="18" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
        <ellipse cx="20" cy="25" rx="18" ry="12" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
        <ellipse cx="50" cy="25" rx="18" ry="12" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
        <text x="35" y="28" fill="#64748b" fontSize="9" fontFamily="system-ui" textAnchor="middle">WAN</text>
      </g>

      {/* Location A - Home/Office */}
      <g transform="translate(20, 60)">
        {/* Location label */}
        <rect x="20" y="0" width="80" height="20" rx="4" fill="#14b8a6" />
        <text x="60" y="14" fill="#0f172a" fontSize="10" fontFamily="system-ui" fontWeight="bold" textAnchor="middle">Location A</text>

        {/* Router/Gateway */}
        <g transform="translate(40, 70)">
          <rect x="0" y="0" width="40" height="30" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
          <circle cx="20" cy="10" r="4" fill="#14b8a6">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <rect x="8" y="18" width="24" height="3" rx="1" fill="#0d9488" />
        </g>

        {/* Device 1 */}
        <g transform="translate(10, 130)">
          <rect x="0" y="0" width="35" height="25" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          <rect x="3" y="3" width="29" height="16" rx="1" fill="#0f172a" />
        </g>

        {/* Device 2 */}
        <g transform="translate(55, 130)">
          <rect x="0" y="0" width="35" height="25" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          <rect x="3" y="3" width="29" height="16" rx="1" fill="#0f172a" />
        </g>

        {/* Local connections */}
        <line x1="27" y1="130" x2="50" y2="100" stroke="#14b8a6" strokeWidth="1" opacity="0.5" />
        <line x1="72" y1="130" x2="70" y2="100" stroke="#14b8a6" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Location B - Remote */}
      <g transform="translate(280, 60)">
        {/* Location label */}
        <rect x="10" y="0" width="80" height="20" rx="4" fill="#0d9488" />
        <text x="50" y="14" fill="#0f172a" fontSize="10" fontFamily="system-ui" fontWeight="bold" textAnchor="middle">Location B</text>

        {/* Router/Gateway */}
        <g transform="translate(30, 70)">
          <rect x="0" y="0" width="40" height="30" rx="4" fill="#1e293b" stroke="#0d9488" strokeWidth="2" />
          <circle cx="20" cy="10" r="4" fill="#0d9488">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          <rect x="8" y="18" width="24" height="3" rx="1" fill="#14b8a6" />
        </g>

        {/* Server */}
        <g transform="translate(20, 120)">
          <rect x="0" y="0" width="60" height="45" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          <rect x="5" y="6" width="50" height="10" rx="2" fill="#0f172a" />
          <circle cx="50" cy="11" r="3" fill="#0d9488">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <rect x="5" y="20" width="50" height="10" rx="2" fill="#0f172a" />
          <circle cx="50" cy="25" r="3" fill="#0d9488">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </circle>
          <rect x="5" y="34" width="8" height="2" rx="1" fill="#334155" />
          <rect x="15" y="34" width="8" height="2" rx="1" fill="#334155" />
        </g>

        {/* Local connection */}
        <line x1="50" y1="120" x2="50" y2="100" stroke="#0d9488" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Data packets flowing through tunnel */}
      <circle r="4" fill="#14b8a6">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M130 150 Q200 100 270 150" />
      </circle>
      <circle r="3" fill="#0d9488">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.8s" path="M130 150 Q200 100 270 150" />
      </circle>
      <circle r="4" fill="#0d9488">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M270 150 Q200 200 130 150" />
      </circle>
      <circle r="3" fill="#14b8a6">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.8s" path="M270 150 Q200 200 130 150" />
      </circle>

      {/* Same network indicator */}
      <g transform="translate(140, 250)">
        <rect x="0" y="0" width="120" height="30" rx="6" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="60" y="12" fill="#14b8a6" fontSize="8" fontFamily="system-ui" textAnchor="middle">Same Local Network</text>
        <text x="60" y="24" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">192.168.1.0/24</text>
      </g>

      {/* Latency indicator */}
      <g transform="translate(175, 85)">
        <rect x="0" y="0" width="50" height="18" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="25" y="12" fill="#14b8a6" fontSize="8" fontFamily="system-ui" textAnchor="middle">~5ms</text>
      </g>
    </svg>
  );
};

export default LANOverWANIllustration;
