const MultiServerIllustration = ({ className = '', width = 400, height = 400 }) => {
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
      <circle cx="200" cy="200" r="180" fill="#0d9488" fillOpacity="0.05" />
      <circle cx="200" cy="200" r="140" fill="#0d9488" fillOpacity="0.05" />

      {/* Central Control Server */}
      <rect x="155" y="80" width="90" height="60" rx="8" fill="#1e1e1e" stroke="#3b82f6" strokeWidth="2" />
      <rect x="165" y="92" width="70" height="6" rx="2" fill="#3b82f6" fillOpacity="0.6" />
      <rect x="165" y="104" width="50" height="6" rx="2" fill="#3b82f6" fillOpacity="0.4" />
      <rect x="165" y="116" width="30" height="6" rx="2" fill="#3b82f6" fillOpacity="0.3" />
      <circle cx="220" cy="125" r="4" fill="#3b82f6" />

      {/* Control Server Label */}
      <text x="200" y="160" textAnchor="middle" fill="#a0a0a0" fontSize="10" fontFamily="system-ui">Control Server</text>

      {/* Connection lines from control to VPN servers */}
      <path d="M175 140 L100 200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.5" />
      <path d="M200 140 L200 200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.5" />
      <path d="M225 140 L300 200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.5" />

      {/* VPN Server 1 - Left */}
      <rect x="55" y="200" width="90" height="50" rx="6" fill="#1e1e1e" stroke="#0d9488" strokeWidth="2" />
      <rect x="65" y="212" width="70" height="5" rx="2" fill="#0d9488" fillOpacity="0.6" />
      <rect x="65" y="222" width="50" height="5" rx="2" fill="#0d9488" fillOpacity="0.4" />
      <rect x="65" y="232" width="30" height="5" rx="2" fill="#0d9488" fillOpacity="0.3" />
      <circle cx="125" cy="237" r="3" fill="#0d9488" />

      {/* VPN Server 2 - Center */}
      <rect x="155" y="200" width="90" height="50" rx="6" fill="#1e1e1e" stroke="#0d9488" strokeWidth="2" />
      <rect x="165" y="212" width="70" height="5" rx="2" fill="#0d9488" fillOpacity="0.6" />
      <rect x="165" y="222" width="50" height="5" rx="2" fill="#0d9488" fillOpacity="0.4" />
      <rect x="165" y="232" width="30" height="5" rx="2" fill="#0d9488" fillOpacity="0.3" />
      <circle cx="225" cy="237" r="3" fill="#0d9488" />

      {/* VPN Server 3 - Right */}
      <rect x="255" y="200" width="90" height="50" rx="6" fill="#1e1e1e" stroke="#0d9488" strokeWidth="2" />
      <rect x="265" y="212" width="70" height="5" rx="2" fill="#0d9488" fillOpacity="0.6" />
      <rect x="265" y="222" width="50" height="5" rx="2" fill="#0d9488" fillOpacity="0.4" />
      <rect x="265" y="232" width="30" height="5" rx="2" fill="#0d9488" fillOpacity="0.3" />
      <circle cx="325" cy="237" r="3" fill="#0d9488" />

      {/* VPN Server Labels */}
      <text x="100" y="270" textAnchor="middle" fill="#a0a0a0" fontSize="9" fontFamily="system-ui">US-East</text>
      <text x="200" y="270" textAnchor="middle" fill="#a0a0a0" fontSize="9" fontFamily="system-ui">EU-West</text>
      <text x="300" y="270" textAnchor="middle" fill="#a0a0a0" fontSize="9" fontFamily="system-ui">Asia-Pacific</text>

      {/* Connection lines to clients */}
      <path d="M80 250 L60 300" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M120 250 L140 300" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M180 250 L170 300" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M220 250 L230 300" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M280 250 L260 300" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M320 250 L340 300" stroke="#0d9488" strokeWidth="1.5" strokeOpacity="0.4" />

      {/* Client devices */}
      {/* Laptop 1 */}
      <rect x="45" y="305" width="30" height="20" rx="3" fill="#1e1e1e" stroke="#60a5fa" strokeWidth="1.5" />
      <rect x="40" y="325" width="40" height="5" rx="2" fill="#2a2a2a" />

      {/* Phone 1 */}
      <rect x="125" y="305" width="14" height="25" rx="2" fill="#1e1e1e" stroke="#60a5fa" strokeWidth="1.5" />

      {/* Desktop 1 */}
      <rect x="160" y="305" width="25" height="18" rx="2" fill="#1e1e1e" stroke="#60a5fa" strokeWidth="1.5" />
      <rect x="168" y="323" width="10" height="7" fill="#2a2a2a" />

      {/* Tablet */}
      <rect x="218" y="305" width="24" height="18" rx="3" fill="#1e1e1e" stroke="#60a5fa" strokeWidth="1.5" />

      {/* Laptop 2 */}
      <rect x="250" y="305" width="30" height="20" rx="3" fill="#1e1e1e" stroke="#60a5fa" strokeWidth="1.5" />
      <rect x="245" y="325" width="40" height="5" rx="2" fill="#2a2a2a" />

      {/* Server/Device */}
      <rect x="325" y="305" width="30" height="25" rx="3" fill="#1e1e1e" stroke="#60a5fa" strokeWidth="1.5" />
      <circle cx="340" cy="312" r="2" fill="#60a5fa" />
      <circle cx="340" cy="320" r="2" fill="#60a5fa" fillOpacity="0.6" />

      {/* Decorative elements */}
      <circle cx="50" cy="150" r="8" fill="#3b82f6" fillOpacity="0.1" />
      <circle cx="350" cy="150" r="12" fill="#0d9488" fillOpacity="0.1" />
      <circle cx="80" cy="350" r="6" fill="#60a5fa" fillOpacity="0.1" />
      <circle cx="320" cy="350" r="10" fill="#3b82f6" fillOpacity="0.1" />
    </svg>
  );
};

export default MultiServerIllustration;
