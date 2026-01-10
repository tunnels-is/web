const IoTNetworkIllustration = ({ className = "", width = 400, height = 300 }) => {
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
        <radialGradient id="iotGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="iotConnection" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy="150" rx="180" ry="130" fill="url(#iotGlow)" />

      {/* Central mesh network circle */}
      <circle cx="200" cy="150" r="60" fill="none" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
      <circle cx="200" cy="150" r="100" fill="none" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />

      {/* Central hub */}
      <g transform="translate(175, 125)">
        <rect x="0" y="0" width="50" height="50" rx="25" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <circle cx="25" cy="25" r="12" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.5" />
        <circle cx="25" cy="25" r="5" fill="#14b8a6">
          <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Connection lines to devices */}
      <line x1="200" y1="125" x2="200" y2="55" stroke="url(#iotConnection)" strokeWidth="2" />
      <line x1="200" y1="175" x2="200" y2="245" stroke="url(#iotConnection)" strokeWidth="2" />
      <line x1="175" y1="150" x2="70" y2="150" stroke="url(#iotConnection)" strokeWidth="2" />
      <line x1="225" y1="150" x2="330" y2="150" stroke="url(#iotConnection)" strokeWidth="2" />
      <line x1="182" y1="132" x2="110" y2="70" stroke="url(#iotConnection)" strokeWidth="2" />
      <line x1="218" y1="132" x2="290" y2="70" stroke="url(#iotConnection)" strokeWidth="2" />
      <line x1="182" y1="168" x2="110" y2="230" stroke="url(#iotConnection)" strokeWidth="2" />
      <line x1="218" y1="168" x2="290" y2="230" stroke="url(#iotConnection)" strokeWidth="2" />

      {/* Smart thermostat - top */}
      <g transform="translate(180, 30)">
        <circle cx="20" cy="20" r="20" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="14" fill="#0f172a" />
        <text x="20" y="24" fill="#14b8a6" fontSize="12" fontFamily="system-ui" textAnchor="middle">72°</text>
      </g>

      {/* Smart light - top left */}
      <g transform="translate(85, 45)">
        <ellipse cx="20" cy="30" rx="12" ry="4" fill="#334155" />
        <path d="M10 30 L10 15 Q10 5 20 5 Q30 5 30 15 L30 30" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="20" cy="18" r="8" fill="#14b8a6" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Security camera - top right */}
      <g transform="translate(275, 50)">
        <rect x="0" y="5" width="30" height="18" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="10" cy="14" r="5" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.5" />
        <circle cx="10" cy="14" r="2" fill="#14b8a6" opacity="0.6" />
        <rect x="25" y="10" width="8" height="8" rx="2" fill="#334155" />
      </g>

      {/* Smart lock - left */}
      <g transform="translate(40, 130)">
        <rect x="0" y="0" width="30" height="40" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="8" fill="#0f172a" stroke="#14b8a6" strokeWidth="1.5" />
        <rect x="12" y="25" width="6" height="10" rx="2" fill="#14b8a6" />
      </g>

      {/* Smart speaker - right */}
      <g transform="translate(330, 130)">
        <ellipse cx="20" cy="38" rx="18" ry="5" fill="#334155" />
        <rect x="5" y="5" width="30" height="33" rx="15" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="8" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
        <circle cx="20" cy="20" r="3" fill="#14b8a6" opacity="0.6">
          <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Smart plug - bottom left */}
      <g transform="translate(85, 215)">
        <rect x="0" y="0" width="35" height="25" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" fill="#0f172a" />
        <circle cx="23" cy="12" r="4" fill="#0f172a" />
        <circle cx="27" cy="20" r="3" fill="#14b8a6">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Smart sensor - bottom right */}
      <g transform="translate(275, 215)">
        <rect x="0" y="0" width="30" height="30" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="8" fill="#0f172a" />
        {/* Motion waves */}
        <path d="M8 15 Q4 15 4 15" stroke="#14b8a6" strokeWidth="1.5" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M22 15 Q26 15 26 15" stroke="#14b8a6" strokeWidth="1.5" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Smart doorbell - bottom */}
      <g transform="translate(185, 235)">
        <rect x="0" y="0" width="30" height="40" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="8" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
        <circle cx="15" cy="15" r="3" fill="#14b8a6" opacity="0.5" />
        <rect x="8" y="28" width="14" height="6" rx="2" fill="#334155" />
      </g>

      {/* Data flow pulses */}
      <circle r="3" fill="#14b8a6" opacity="0.8">
        <animate attributeName="cx" values="200;200;200" dur="2s" repeatCount="indefinite" />
        <animate attributeName="cy" values="150;55;150" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle r="3" fill="#0d9488" opacity="0.8">
        <animate attributeName="cx" values="200;70;200" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="cy" values="150;150;150" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default IoTNetworkIllustration;
