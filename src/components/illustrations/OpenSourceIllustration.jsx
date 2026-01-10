const OpenSourceIllustration = ({ className = "", width = 300, height = 250 }) => {
  return (
    <svg
      viewBox="0 0 300 250"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="osGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="150" cy="125" rx="140" ry="110" fill="url(#osGlow)" />

      {/* Central code window */}
      <g transform="translate(75, 40)">
        <rect x="0" y="0" width="150" height="120" rx="6" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
        {/* Title bar */}
        <rect x="0" y="0" width="150" height="20" rx="6" fill="#0f172a" />
        <circle cx="15" cy="10" r="4" fill="#ef4444" />
        <circle cx="28" cy="10" r="4" fill="#fbbf24" />
        <circle cx="41" cy="10" r="4" fill="#22c55e" />
        {/* Code lines */}
        <text x="10" y="40" fill="#14b8a6" fontSize="9" fontFamily="monospace">func main() {"{"}</text>
        <text x="20" y="55" fill="#0d9488" fontSize="9" fontFamily="monospace">server := New()</text>
        <text x="20" y="70" fill="#0d9488" fontSize="9" fontFamily="monospace">server.Start()</text>
        <text x="10" y="85" fill="#14b8a6" fontSize="9" fontFamily="monospace">{"}"}</text>
        <text x="10" y="105" fill="#64748b" fontSize="9" fontFamily="monospace">// 100% auditable</text>
      </g>

      {/* GitHub-style fork icons */}
      <g transform="translate(30, 80)">
        <circle cx="15" cy="15" r="15" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        {/* Fork icon */}
        <path d="M10 8 L10 15 M20 8 L20 15 M10 15 Q10 20 15 20 Q20 20 20 15" stroke="#14b8a6" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="10" cy="8" r="2" fill="#14b8a6" />
        <circle cx="20" cy="8" r="2" fill="#14b8a6" />
        <circle cx="15" cy="22" r="2" fill="#14b8a6" />
      </g>

      <g transform="translate(255, 80)">
        <circle cx="15" cy="15" r="15" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
        {/* Star icon */}
        <polygon points="15,5 17,12 24,12 19,17 21,24 15,20 9,24 11,17 6,12 13,12" fill="#14b8a6" />
      </g>

      {/* Community connections */}
      <g transform="translate(40, 170)">
        <circle cx="15" cy="15" r="12" fill="#1e293b" stroke="#0d9488" strokeWidth="1.5" />
        <circle cx="15" cy="12" r="4" fill="#0d9488" />
        <path d="M8 22 Q15 18 22 22" stroke="#0d9488" strokeWidth="2" fill="none" />
      </g>

      <g transform="translate(100, 175)">
        <circle cx="15" cy="15" r="12" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <circle cx="15" cy="12" r="4" fill="#14b8a6" />
        <path d="M8 22 Q15 18 22 22" stroke="#14b8a6" strokeWidth="2" fill="none" />
      </g>

      <g transform="translate(160, 175)">
        <circle cx="15" cy="15" r="12" fill="#1e293b" stroke="#0d9488" strokeWidth="1.5" />
        <circle cx="15" cy="12" r="4" fill="#0d9488" />
        <path d="M8 22 Q15 18 22 22" stroke="#0d9488" strokeWidth="2" fill="none" />
      </g>

      <g transform="translate(220, 170)">
        <circle cx="15" cy="15" r="12" fill="#1e293b" stroke="#14b8a6" strokeWidth="1.5" />
        <circle cx="15" cy="12" r="4" fill="#14b8a6" />
        <path d="M8 22 Q15 18 22 22" stroke="#14b8a6" strokeWidth="2" fill="none" />
      </g>

      {/* Connection lines */}
      <line x1="70" y1="185" x2="100" y2="185" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
      <line x1="130" y1="185" x2="160" y2="185" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
      <line x1="190" y1="185" x2="220" y2="185" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />

      {/* Bottom label */}
      <g transform="translate(90, 215)">
        <rect x="0" y="0" width="120" height="25" rx="4" fill="#1e293b" stroke="#14b8a6" strokeWidth="1" />
        <text x="60" y="16" fill="#14b8a6" fontSize="10" fontFamily="system-ui" textAnchor="middle">Community Driven</text>
      </g>
    </svg>
  );
};

export default OpenSourceIllustration;
