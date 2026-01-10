const OfficeNetworkIllustration = ({ className = '', width = 400, height = 400 }) => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
    >
      {/* Background circle */}
      <circle cx="200" cy="200" r="180" fill="#3b82f6" fillOpacity="0.03" />
      <circle cx="200" cy="200" r="140" fill="#3b82f6" fillOpacity="0.03" />

      {/* Office Building - Center */}
      <rect x="150" y="100" width="100" height="120" rx="8" fill="#1e1e1e" stroke="#3b82f6" strokeWidth="2" />

      {/* Windows Grid */}
      <rect x="162" y="115" width="15" height="12" rx="2" fill="#3b82f6" fillOpacity="0.4" />
      <rect x="182" y="115" width="15" height="12" rx="2" fill="#3b82f6" fillOpacity="0.6" />
      <rect x="202" y="115" width="15" height="12" rx="2" fill="#3b82f6" fillOpacity="0.4" />
      <rect x="222" y="115" width="15" height="12" rx="2" fill="#3b82f6" fillOpacity="0.5" />

      <rect x="162" y="135" width="15" height="12" rx="2" fill="#3b82f6" fillOpacity="0.5" />
      <rect x="182" y="135" width="15" height="12" rx="2" fill="#3b82f6" fillOpacity="0.3" />
      <rect x="202" y="135" width="15" height="12" rx="2" fill="#3b82f6" fillOpacity="0.6" />
      <rect x="222" y="135" width="15" height="12" rx="2" fill="#3b82f6" fillOpacity="0.4" />

      <rect x="162" y="155" width="15" height="12" rx="2" fill="#3b82f6" fillOpacity="0.3" />
      <rect x="182" y="155" width="15" height="12" rx="2" fill="#3b82f6" fillOpacity="0.5" />
      <rect x="202" y="155" width="15" height="12" rx="2" fill="#3b82f6" fillOpacity="0.4" />
      <rect x="222" y="155" width="15" height="12" rx="2" fill="#3b82f6" fillOpacity="0.6" />

      {/* Door */}
      <rect x="185" y="180" width="30" height="40" rx="3" fill="#0d9488" fillOpacity="0.3" stroke="#0d9488" strokeWidth="1" />

      {/* Server inside building */}
      <rect x="165" y="185" width="15" height="25" rx="2" fill="#1e1e1e" stroke="#0d9488" strokeWidth="1" />
      <circle cx="172" cy="192" r="2" fill="#0d9488" />
      <circle cx="172" cy="200" r="2" fill="#0d9488" fillOpacity="0.6" />

      {/* Office label */}
      <text x="200" y="240" textAnchor="middle" fill="#a0a0a0" fontSize="10" fontFamily="system-ui">Office HQ</text>

      {/* Connection lines - curved */}
      <path d="M150 160 Q 100 160 80 200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.5" />
      <path d="M250 160 Q 300 160 320 200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.5" />
      <path d="M200 220 Q 200 260 140 300" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.5" />
      <path d="M200 220 Q 200 260 260 300" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.5" />

      {/* Remote Worker - Home (Left) */}
      <g transform="translate(40, 180)">
        <rect x="0" y="0" width="60" height="50" rx="6" fill="#1e1e1e" stroke="#60a5fa" strokeWidth="1.5" />
        {/* House roof */}
        <path d="M-5 0 L30 -20 L65 0" stroke="#60a5fa" strokeWidth="1.5" fill="none" />
        {/* Person icon inside */}
        <circle cx="30" cy="20" r="8" fill="#60a5fa" fillOpacity="0.3" />
        <circle cx="30" cy="16" r="4" fill="#60a5fa" fillOpacity="0.5" />
        {/* Laptop */}
        <rect x="20" y="32" width="20" height="12" rx="2" fill="#0d9488" fillOpacity="0.4" />
        <text x="30" y="65" textAnchor="middle" fill="#a0a0a0" fontSize="8" fontFamily="system-ui">Home Office</text>
      </g>

      {/* Remote Worker - Cafe (Right) */}
      <g transform="translate(300, 180)">
        <rect x="0" y="0" width="60" height="50" rx="6" fill="#1e1e1e" stroke="#60a5fa" strokeWidth="1.5" />
        {/* Coffee cup icon */}
        <ellipse cx="30" cy="15" rx="12" ry="8" fill="#60a5fa" fillOpacity="0.2" />
        <rect x="20" y="18" width="20" height="20" rx="3" fill="#60a5fa" fillOpacity="0.3" />
        {/* Steam lines */}
        <path d="M24 10 Q 26 5 24 0" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M30 10 Q 32 5 30 0" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M36 10 Q 38 5 36 0" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
        <text x="30" y="65" textAnchor="middle" fill="#a0a0a0" fontSize="8" fontFamily="system-ui">Cafe</text>
      </g>

      {/* Mobile Worker - Bottom Left */}
      <g transform="translate(100, 290)">
        <rect x="0" y="0" width="50" height="40" rx="6" fill="#1e1e1e" stroke="#0d9488" strokeWidth="1.5" />
        {/* Phone icon */}
        <rect x="15" y="8" width="20" height="30" rx="3" fill="#0d9488" fillOpacity="0.3" />
        <circle cx="25" cy="32" r="3" fill="#0d9488" fillOpacity="0.5" />
        <text x="25" y="55" textAnchor="middle" fill="#a0a0a0" fontSize="8" fontFamily="system-ui">Mobile</text>
      </g>

      {/* Travel Worker - Bottom Right */}
      <g transform="translate(250, 290)">
        <rect x="0" y="0" width="50" height="40" rx="6" fill="#1e1e1e" stroke="#0d9488" strokeWidth="1.5" />
        {/* Plane icon simplified */}
        <path d="M15 25 L35 15 L40 18 L25 27 L28 32 L22 28 L12 32 Z" fill="#0d9488" fillOpacity="0.4" />
        <text x="25" y="55" textAnchor="middle" fill="#a0a0a0" fontSize="8" fontFamily="system-ui">Travel</text>
      </g>

      {/* Security shield icon - top center */}
      <g transform="translate(185, 50)">
        <path d="M15 0 L30 5 L30 20 Q 30 30 15 35 Q 0 30 0 20 L0 5 Z" fill="#0d9488" fillOpacity="0.2" stroke="#0d9488" strokeWidth="1.5" />
        <path d="M10 17 L14 21 L22 13" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Lock icons on connection lines */}
      <g transform="translate(95, 175)">
        <circle cx="6" cy="6" r="8" fill="#1e1e1e" />
        <rect x="2" y="4" width="8" height="6" rx="1" fill="#3b82f6" />
        <path d="M4 4 L4 2 Q 6 -1 8 2 L8 4" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
      </g>

      <g transform="translate(295, 175)">
        <circle cx="6" cy="6" r="8" fill="#1e1e1e" />
        <rect x="2" y="4" width="8" height="6" rx="1" fill="#3b82f6" />
        <path d="M4 4 L4 2 Q 6 -1 8 2 L8 4" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
      </g>

      {/* Decorative dots */}
      <circle cx="50" cy="100" r="4" fill="#3b82f6" fillOpacity="0.2" />
      <circle cx="350" cy="100" r="6" fill="#0d9488" fillOpacity="0.2" />
      <circle cx="60" cy="350" r="5" fill="#60a5fa" fillOpacity="0.2" />
      <circle cx="340" cy="350" r="4" fill="#3b82f6" fillOpacity="0.2" />
    </svg>
  );
};

export default OfficeNetworkIllustration;
