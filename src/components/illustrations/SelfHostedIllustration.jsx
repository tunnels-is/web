const SelfHostedIllustration = ({ className = "", width = 300, height = 200 }) => {
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
        <radialGradient id="selfHostGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="100" rx="140" ry="90" fill="url(#selfHostGlow)" />

      {/* Home/Building */}
      <g transform="translate(110, 30)">
        {/* Roof */}
        <path d="M40 0 L80 35 L0 35 Z" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        {/* House body */}
        <rect x="5" y="35" width="70" height="55" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        {/* Door */}
        <rect x="30" y="55" width="20" height="35" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
        <circle cx="45" cy="75" r="2" fill="#14b8a6" />
        {/* Window */}
        <rect x="12" y="50" width="14" height="14" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
        <rect x="54" y="50" width="14" height="14" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
        {/* Server inside window glow */}
        <rect x="14" y="52" width="10" height="10" fill="#14b8a6" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Server rack icon */}
      <g transform="translate(20, 60)">
        <rect x="0" y="0" width="50" height="70" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <rect x="5" y="8" width="40" height="15" rx="2" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
        <circle cx="40" cy="15" r="3" fill="#14b8a6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <rect x="5" y="28" width="40" height="15" rx="2" fill="#0f172a" stroke="#0d9488" strokeWidth="1" />
        <circle cx="40" cy="35" r="3" fill="#0d9488">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <rect x="5" y="48" width="40" height="15" rx="2" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
        <circle cx="40" cy="55" r="3" fill="#64748b" />
      </g>

      {/* Connection from server to home */}
      <path d="M70 95 L110 95" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 2">
        <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite" />
      </path>

      {/* Cloud with X (no cloud dependency) */}
      <g transform="translate(220, 50)">
        <path
          d="M40 50 H15 C5 50 5 35 15 32 C12 15 35 8 48 20 C55 10 75 12 80 28 C92 28 92 50 82 50 Z"
          fill="#1e293b"
          stroke="#64748b"
          strokeWidth="1.5"
          opacity="0.5"
        />
        {/* X mark */}
        <g transform="translate(35, 25)">
          <line x1="0" y1="0" x2="20" y2="20" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="0" x2="0" y2="20" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>

      {/* Labels */}
      <text x="45" y="145" fill="#14b8a6" fontSize="9" fontFamily="system-ui" textAnchor="middle">Your Server</text>
      <text x="150" y="145" fill="#14b8a6" fontSize="9" fontFamily="system-ui" textAnchor="middle">Your Network</text>
      <text x="255" y="110" fill="#64748b" fontSize="9" fontFamily="system-ui" textAnchor="middle">No Cloud</text>

      {/* Bottom label */}
      <g transform="translate(90, 160)">
        <rect x="0" y="0" width="120" height="25" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="60" y="16" fill="#14b8a6" fontSize="10" fontFamily="system-ui" textAnchor="middle">100% Self-Hosted</text>
      </g>
    </svg>
  );
};

export default SelfHostedIllustration;
