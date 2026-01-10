const EncryptionIllustration = ({ className = "", width = 300, height = 200 }) => {
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
        <radialGradient id="encGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="100" rx="140" ry="90" fill="url(#encGlow)" />

      {/* Plain text side */}
      <g transform="translate(20, 45)">
        <rect x="0" y="0" width="80" height="80" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <text x="40" y="20" fill="#64748b" fontSize="10" fontFamily="system-ui" textAnchor="middle">Plain Text</text>
        <text x="40" y="45" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle">password123</text>
        <text x="40" y="60" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle">secret_key</text>
        <text x="40" y="75" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle">user_data</text>
      </g>

      {/* Encryption process */}
      <g transform="translate(115, 55)">
        {/* Arrow with lock */}
        <path d="M0 30 L30 30" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 2">
          <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite" />
        </path>
        <g transform="translate(30, 15)">
          <rect x="0" y="12" width="26" height="20" rx="3" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
          <path d="M5 12 L5 7 Q5 0 13 0 Q21 0 21 7 L21 12" stroke="#14b8a6" strokeWidth="2" fill="none" />
          <circle cx="13" cy="22" r="3" fill="#14b8a6">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
          </circle>
        </g>
        <path d="M56 30 L70 30" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 2">
          <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Encrypted text side */}
      <g transform="translate(200, 45)">
        <rect x="0" y="0" width="80" height="80" rx="6" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <text x="40" y="20" fill="#14b8a6" fontSize="10" fontFamily="system-ui" textAnchor="middle">Encrypted</text>
        <text x="40" y="45" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle">x7Kp2mN...</text>
        <text x="40" y="60" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle">Qw9Lz3R...</text>
        <text x="40" y="75" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle">Ft5Jh8Y...</text>
      </g>

      {/* Algorithm badge */}
      <g transform="translate(115, 140)">
        <rect x="0" y="0" width="70" height="25" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="35" y="16" fill="#14b8a6" fontSize="10" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">AES-256</text>
      </g>

      {/* Bottom indicators */}
      <g transform="translate(30, 165)">
        <circle cx="8" cy="8" r="6" fill="#ef4444" opacity="0.3" />
        <text x="22" y="12" fill="#64748b" fontSize="9" fontFamily="system-ui">Vulnerable</text>
      </g>
      <g transform="translate(210, 165)">
        <circle cx="8" cy="8" r="6" fill="#22c55e" />
        <text x="22" y="12" fill="#14b8a6" fontSize="9" fontFamily="system-ui">Secure</text>
      </g>
    </svg>
  );
};

export default EncryptionIllustration;
