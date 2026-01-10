const HomelabIllustration = ({ className = "", width = 400, height = 300 }) => {
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
        <radialGradient id="homelabGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy="150" rx="180" ry="130" fill="url(#homelabGlow)" />

      {/* Server Rack - Center */}
      <g transform="translate(140, 40)">
        {/* Rack frame */}
        <rect x="0" y="0" width="120" height="200" rx="4" fill="url(#rackGradient)" stroke="#334155" strokeWidth="2" />

        {/* Rack rails */}
        <rect x="5" y="5" width="4" height="190" fill="#0f172a" />
        <rect x="111" y="5" width="4" height="190" fill="#0f172a" />

        {/* Server 1 - NAS */}
        <g transform="translate(12, 10)">
          <rect x="0" y="0" width="96" height="35" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          <text x="10" y="12" fill="#14b8a6" fontSize="8" fontFamily="monospace">NAS</text>
          {/* Drive bays */}
          <rect x="8" y="16" width="18" height="14" rx="1" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
          <rect x="28" y="16" width="18" height="14" rx="1" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
          <rect x="48" y="16" width="18" height="14" rx="1" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
          <rect x="68" y="16" width="18" height="14" rx="1" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
          {/* Activity LEDs */}
          <circle cx="88" cy="10" r="3" fill="#14b8a6">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="0.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Server 2 - Proxmox/VM Host */}
        <g transform="translate(12, 50)">
          <rect x="0" y="0" width="96" height="35" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          <text x="10" y="12" fill="#14b8a6" fontSize="8" fontFamily="monospace">Proxmox</text>
          {/* CPU/RAM indicators */}
          <rect x="8" y="18" width="40" height="6" rx="1" fill="#0f172a" />
          <rect x="8" y="18" width="28" height="6" rx="1" fill="#14b8a6" opacity="0.6">
            <animate attributeName="width" values="20;35;25;28" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="52" y="18" width="40" height="6" rx="1" fill="#0f172a" />
          <rect x="52" y="18" width="24" height="6" rx="1" fill="#0d9488" opacity="0.6">
            <animate attributeName="width" values="15;30;20;24" dur="4s" repeatCount="indefinite" />
          </rect>
          <circle cx="88" cy="10" r="3" fill="#14b8a6">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Server 3 - Docker Host */}
        <g transform="translate(12, 90)">
          <rect x="0" y="0" width="96" height="35" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          <text x="10" y="12" fill="#14b8a6" fontSize="8" fontFamily="monospace">Docker</text>
          {/* Container icons */}
          <rect x="8" y="16" width="12" height="14" rx="1" fill="#14b8a6" opacity="0.3" />
          <rect x="22" y="16" width="12" height="14" rx="1" fill="#0d9488" opacity="0.3" />
          <rect x="36" y="16" width="12" height="14" rx="1" fill="#14b8a6" opacity="0.3" />
          <rect x="50" y="16" width="12" height="14" rx="1" fill="#0d9488" opacity="0.3" />
          <rect x="64" y="16" width="12" height="14" rx="1" fill="#14b8a6" opacity="0.3" />
          <circle cx="88" cy="10" r="3" fill="#14b8a6">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Network Switch */}
        <g transform="translate(12, 130)">
          <rect x="0" y="0" width="96" height="25" rx="2" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
          {/* Ports */}
          <rect x="8" y="8" width="8" height="10" rx="1" fill="#0f172a" />
          <rect x="18" y="8" width="8" height="10" rx="1" fill="#0f172a" />
          <rect x="28" y="8" width="8" height="10" rx="1" fill="#0f172a" />
          <rect x="38" y="8" width="8" height="10" rx="1" fill="#0f172a" />
          <rect x="48" y="8" width="8" height="10" rx="1" fill="#0f172a" />
          <rect x="58" y="8" width="8" height="10" rx="1" fill="#0f172a" />
          <rect x="68" y="8" width="8" height="10" rx="1" fill="#0f172a" />
          {/* Link lights */}
          <circle cx="12" cy="6" r="2" fill="#14b8a6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="22" cy="6" r="2" fill="#14b8a6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="0.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="32" cy="6" r="2" fill="#14b8a6">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="0.35s" repeatCount="indefinite" />
          </circle>
          <circle cx="42" cy="6" r="2" fill="#0d9488" />
          <circle cx="52" cy="6" r="2" fill="#0d9488" />
        </g>

        {/* UPS */}
        <g transform="translate(12, 160)">
          <rect x="0" y="0" width="96" height="30" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          <text x="10" y="12" fill="#64748b" fontSize="7" fontFamily="monospace">UPS</text>
          {/* Battery indicator */}
          <rect x="8" y="16" width="50" height="8" rx="2" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
          <rect x="10" y="18" width="44" height="4" rx="1" fill="#14b8a6" opacity="0.8" />
          <text x="70" y="22" fill="#14b8a6" fontSize="8" fontFamily="monospace">100%</text>
        </g>
      </g>

      {/* External connections */}
      {/* Internet/WAN */}
      <g transform="translate(30, 80)">
        <ellipse cx="30" cy="20" rx="25" ry="15" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
        <ellipse cx="20" cy="22" rx="12" ry="8" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
        <ellipse cx="40" cy="22" rx="12" ry="8" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
        <text x="30" y="25" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">WAN</text>
        <line x1="55" y1="20" x2="140" y2="150" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />
      </g>

      {/* Remote access */}
      <g transform="translate(310, 60)">
        <rect x="0" y="0" width="60" height="40" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
        <rect x="5" y="8" width="50" height="25" rx="2" fill="#0f172a" />
        <text x="30" y="45" fill="#64748b" fontSize="7" fontFamily="system-ui" textAnchor="middle">Remote</text>
        <line x1="0" y1="20" x2="-50" y2="100" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />
        {/* VPN indicator */}
        <circle cx="50" cy="5" r="4" fill="#14b8a6" opacity="0.8">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Services labels */}
      <g transform="translate(290, 140)">
        <rect x="0" y="0" width="80" height="100" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <text x="40" y="15" fill="#14b8a6" fontSize="8" fontFamily="system-ui" textAnchor="middle">Services</text>
        <text x="10" y="32" fill="#64748b" fontSize="7" fontFamily="system-ui">Plex</text>
        <circle cx="70" cy="29" r="3" fill="#14b8a6" />
        <text x="10" y="47" fill="#64748b" fontSize="7" fontFamily="system-ui">Home Assist</text>
        <circle cx="70" cy="44" r="3" fill="#14b8a6" />
        <text x="10" y="62" fill="#64748b" fontSize="7" fontFamily="system-ui">Pi-hole</text>
        <circle cx="70" cy="59" r="3" fill="#14b8a6" />
        <text x="10" y="77" fill="#64748b" fontSize="7" fontFamily="system-ui">Nextcloud</text>
        <circle cx="70" cy="74" r="3" fill="#14b8a6" />
        <text x="10" y="92" fill="#64748b" fontSize="7" fontFamily="system-ui">Grafana</text>
        <circle cx="70" cy="89" r="3" fill="#0d9488" />
      </g>

      {/* Connection to services panel */}
      <line x1="260" y1="150" x2="290" y2="170" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />

      {/* Bottom stats */}
      <g transform="translate(30, 260)">
        <rect x="0" y="0" width="100" height="25" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="50" y="10" fill="#14b8a6" fontSize="7" fontFamily="system-ui" textAnchor="middle">Uptime</text>
        <text x="50" y="21" fill="#14b8a6" fontSize="10" fontFamily="monospace" textAnchor="middle">42d 7h 23m</text>
      </g>

      <g transform="translate(150, 260)">
        <rect x="0" y="0" width="100" height="25" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="50" y="10" fill="#14b8a6" fontSize="7" fontFamily="system-ui" textAnchor="middle">Network</text>
        <text x="50" y="21" fill="#14b8a6" fontSize="10" fontFamily="monospace" textAnchor="middle">1.2 Gbps</text>
      </g>
    </svg>
  );
};

export default HomelabIllustration;
