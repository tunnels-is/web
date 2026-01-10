const TeamIllustration = ({ className = "", width = 300, height = 200 }) => {
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
        <radialGradient id="teamGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="100" rx="140" ry="90" fill="url(#teamGlow)" />

      {/* Central hub */}
      <g transform="translate(120, 65)">
        <circle cx="30" cy="30" r="25" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        <rect x="15" y="18" width="30" height="24" rx="3" fill="#0f172a" stroke="#14b8a6" strokeWidth="1" />
        <circle cx="30" cy="35" r="4" fill="#14b8a6">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Team member 1 - top left */}
      <g transform="translate(40, 30)">
        <circle cx="25" cy="25" r="22" fill="#1e293b" stroke="#0d9488" strokeWidth="1.5" />
        <circle cx="25" cy="20" r="8" fill="#0d9488" />
        <path d="M12 40 Q25 32 38 40" stroke="#0d9488" strokeWidth="2" fill="none" />
      </g>

      {/* Team member 2 - top right */}
      <g transform="translate(210, 30)">
        <circle cx="25" cy="25" r="22" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <circle cx="25" cy="20" r="8" fill="#14b8a6" />
        <path d="M12 40 Q25 32 38 40" stroke="#14b8a6" strokeWidth="2" fill="none" />
      </g>

      {/* Team member 3 - bottom left */}
      <g transform="translate(40, 120)">
        <circle cx="25" cy="25" r="22" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <circle cx="25" cy="20" r="8" fill="#14b8a6" />
        <path d="M12 40 Q25 32 38 40" stroke="#14b8a6" strokeWidth="2" fill="none" />
      </g>

      {/* Team member 4 - bottom right */}
      <g transform="translate(210, 120)">
        <circle cx="25" cy="25" r="22" fill="#1e293b" stroke="#0d9488" strokeWidth="1.5" />
        <circle cx="25" cy="20" r="8" fill="#0d9488" />
        <path d="M12 40 Q25 32 38 40" stroke="#0d9488" strokeWidth="2" fill="none" />
      </g>

      {/* Connection lines */}
      <g opacity="0.6">
        <line x1="85" y1="55" x2="120" y2="80" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4 2" />
        <line x1="215" y1="55" x2="180" y2="80" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4 2" />
        <line x1="85" y1="145" x2="120" y2="120" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4 2" />
        <line x1="215" y1="145" x2="180" y2="120" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4 2" />
      </g>

      {/* Bottom label */}
      <g transform="translate(100, 175)">
        <rect x="0" y="0" width="100" height="22" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="50" y="14" fill="#14b8a6" fontSize="10" fontFamily="system-ui" textAnchor="middle">Team Access</text>
      </g>
    </svg>
  );
};

export default TeamIllustration;
