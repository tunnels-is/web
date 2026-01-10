const CloudIllustration = ({ className = "", width = 300, height = 200 }) => {
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
        <radialGradient id="cloudGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="100" rx="140" ry="90" fill="url(#cloudGlow)" />

      {/* Main cloud shape */}
      <g transform="translate(60, 30)">
        <path
          d="M140 90 H40 C20 90 20 65 40 60 C35 30 70 20 95 35 C110 15 150 20 160 50 C185 50 185 90 165 90 Z"
          fill="#1e293b"
          stroke="#14b8a6"
          strokeWidth="2"
        />
        {/* Server icons inside cloud */}
        <g transform="translate(55, 50)">
          <rect x="0" y="0" width="30" height="20" rx="2" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
          <circle cx="24" cy="10" r="3" fill="#14b8a6">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </g>
        <g transform="translate(95, 50)">
          <rect x="0" y="0" width="30" height="20" rx="2" fill="#0f172a" stroke="#0d9488" strokeWidth="1" />
          <circle cx="24" cy="10" r="3" fill="#0d9488">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>

      {/* Upload/Download arrows */}
      <g transform="translate(90, 125)">
        <path d="M20 0 L20 25 M10 15 L20 25 L30 15" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(170, 125)">
        <path d="M20 25 L20 0 M10 10 L20 0 L30 10" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Bottom label */}
      <g transform="translate(100, 165)">
        <rect x="0" y="0" width="100" height="25" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="50" y="16" fill="#14b8a6" fontSize="10" fontFamily="system-ui" textAnchor="middle">Cloud Deploy</text>
      </g>
    </svg>
  );
};

export default CloudIllustration;
