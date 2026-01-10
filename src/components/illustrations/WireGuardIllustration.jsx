const WireGuardIllustration = ({ className = "", width = 300, height = 200 }) => {
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
        <radialGradient id="wgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tunnelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <ellipse cx="150" cy="100" rx="140" ry="90" fill="url(#wgGlow)" />

      {/* Left peer */}
      <g transform="translate(25, 55)">
        <rect x="0" y="0" width="60" height="70" rx="6" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <text x="30" y="18" fill="#14b8a6" fontSize="9" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">Peer A</text>
        <rect x="8" y="25" width="44" height="35" rx="3" fill="#0f172a" />
        <text x="30" y="40" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">PublicKey:</text>
        <text x="30" y="52" fill="#14b8a6" fontSize="7" fontFamily="monospace" textAnchor="middle">xTIBA5rbo...</text>
      </g>

      {/* WireGuard tunnel */}
      <g transform="translate(90, 70)">
        <rect x="0" y="0" width="120" height="40" rx="20" fill="url(#tunnelGrad)" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4 2" />

        {/* WireGuard logo placeholder */}
        <g transform="translate(45, 8)">
          <circle cx="15" cy="12" r="12" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
          <text x="15" y="16" fill="#14b8a6" fontSize="10" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">WG</text>
        </g>

        {/* Data packets */}
        <rect x="15" y="16" width="8" height="8" rx="1" fill="#14b8a6" opacity="0.8">
          <animate attributeName="x" values="15;95" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
        </rect>
        <rect x="95" y="16" width="8" height="8" rx="1" fill="#0d9488" opacity="0.8">
          <animate attributeName="x" values="95;15" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Right peer */}
      <g transform="translate(215, 55)">
        <rect x="0" y="0" width="60" height="70" rx="6" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <text x="30" y="18" fill="#14b8a6" fontSize="9" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">Peer B</text>
        <rect x="8" y="25" width="44" height="35" rx="3" fill="#0f172a" />
        <text x="30" y="40" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">PublicKey:</text>
        <text x="30" y="52" fill="#14b8a6" fontSize="7" fontFamily="monospace" textAnchor="middle">HIgo9xNzi...</text>
      </g>

      {/* Protocol stats */}
      <g transform="translate(50, 140)">
        <rect x="0" y="0" width="60" height="35" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="30" y="14" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">Latency</text>
        <text x="30" y="28" fill="#22c55e" fontSize="11" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">&lt;1ms</text>
      </g>

      <g transform="translate(120, 140)">
        <rect x="0" y="0" width="60" height="35" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="30" y="14" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">Crypto</text>
        <text x="30" y="28" fill="#14b8a6" fontSize="9" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">ChaCha20</text>
      </g>

      <g transform="translate(190, 140)">
        <rect x="0" y="0" width="60" height="35" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="30" y="14" fill="#64748b" fontSize="8" fontFamily="system-ui" textAnchor="middle">Code</text>
        <text x="30" y="28" fill="#14b8a6" fontSize="9" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">4K lines</text>
      </g>
    </svg>
  );
};

export default WireGuardIllustration;
