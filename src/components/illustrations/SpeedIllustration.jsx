const SpeedIllustration = ({ className = "", width = 300, height = 200 }) => {
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
        <radialGradient id="speedGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>

      <ellipse cx="150" cy="100" rx="140" ry="90" fill="url(#speedGlow)" />

      {/* Speedometer gauge */}
      <g transform="translate(75, 40)">
        {/* Outer ring */}
        <circle cx="75" cy="75" r="70" fill="#1e293b" stroke="#334155" strokeWidth="3" />

        {/* Speed arc background */}
        <path
          d="M 20 110 A 60 60 0 1 1 130 110"
          fill="none"
          stroke="#0f172a"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Speed arc filled */}
        <path
          d="M 20 110 A 60 60 0 1 1 130 110"
          fill="none"
          stroke="url(#speedGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray="188"
          strokeDashoffset="40"
        />

        {/* Tick marks */}
        <g stroke="#64748b" strokeWidth="2">
          <line x1="25" y1="100" x2="35" y2="95" />
          <line x1="30" y1="70" x2="40" y2="72" />
          <line x1="50" y1="45" x2="55" y2="55" />
          <line x1="75" y1="35" x2="75" y2="45" />
          <line x1="100" y1="45" x2="95" y2="55" />
          <line x1="120" y1="70" x2="110" y2="72" />
          <line x1="125" y1="100" x2="115" y2="95" />
        </g>

        {/* Needle */}
        <g transform="translate(75, 75)">
          <line x1="0" y1="0" x2="35" y2="-35" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" />
          <circle cx="0" cy="0" r="8" fill="#14b8a6" />
        </g>

        {/* Center text */}
        <text x="75" y="105" fill="#14b8a6" fontSize="16" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">FAST</text>
      </g>

      {/* Speed indicators */}
      <g transform="translate(35, 145)">
        <rect x="0" y="0" width="70" height="30" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="35" y="13" fill="#14b8a6" fontSize="9" fontFamily="system-ui" textAnchor="middle">Latency</text>
        <text x="35" y="24" fill="#22c55e" fontSize="10" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">&lt;1ms</text>
      </g>

      <g transform="translate(195, 145)">
        <rect x="0" y="0" width="70" height="30" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="35" y="13" fill="#14b8a6" fontSize="9" fontFamily="system-ui" textAnchor="middle">Throughput</text>
        <text x="35" y="24" fill="#22c55e" fontSize="10" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">10Gbps</text>
      </g>
    </svg>
  );
};

export default SpeedIllustration;
