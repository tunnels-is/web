/**
 * Professional SVG Icon Library
 * Custom-designed icons for the Tunnels VPN website
 */

const Icon = ({ children, className = "w-12 h-12" }) => (
  <div className={className}>
    {children}
  </div>
);

// Security & Privacy Icons
export const LockShieldIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L12 18V30C12 42.5 20.5 54 32 56C43.5 54 52 42.5 52 30V18L32 8Z"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2"/>
    <rect x="26" y="26" width="12" height="14" rx="2"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.35"/>
    <path d="M26 30V24C26 20.7 28.7 18 32 18C35.3 18 38 20.7 38 24V30"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const NetworkGlobeIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15"/>
    <ellipse cx="32" cy="32" rx="10" ry="22" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M10 32H54M32 10C26 18 26 46 32 54M32 10C38 18 38 46 32 54"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M18 20C22 22 42 22 46 20M18 44C22 42 42 42 46 44"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ShieldCheckIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L12 18V30C12 42.5 20.5 54 32 56C43.5 54 52 42.5 52 30V18L32 8Z"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2"/>
    <path d="M22 32L28 38L42 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BoltIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 10L18 36H32L28 54L46 28H32L36 10Z"
          stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.3"/>
  </svg>
);

export const DevicesIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="32" height="24" rx="2"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.2"/>
    <path d="M16 40V44H32V40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="44" y="12" width="14" height="24" rx="2"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.25"/>
    <path d="M48 36H54" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CoinsIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="14" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="38" cy="38" r="14" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.3"/>
    <path d="M26 20V32M20 26H32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// Media & Entertainment
export const VideoIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="48" height="32" rx="3"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.2"/>
    <path d="M26 26L38 32L26 38V26Z"
          stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.4"/>
  </svg>
);

export const HomeAutomationIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 32L32 14L54 32V52C54 53.1 53.1 54 52 54H12C10.9 54 10 53.1 10 52V32Z"
          stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="32" cy="36" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.35"/>
    <path d="M32 30V36M26 36H32M38 36H32M32 42V36"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const DatabaseIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="18" rx="20" ry="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.25"/>
    <path d="M12 18V32C12 36.4 20.5 40 32 40C43.5 40 52 36.4 52 32V18"
          stroke="currentColor" strokeWidth="2.5"/>
    <path d="M12 32V46C12 50.4 20.5 54 32 54C43.5 54 52 50.4 52 46V32"
          stroke="currentColor" strokeWidth="2.5"/>
  </svg>
);

export const SettingsIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.3"/>
    <path d="M32 8V16M32 48V56M56 32H48M16 32H8M47.7 16.3L42.3 21.7M21.7 42.3L16.3 47.7M47.7 47.7L42.3 42.3M21.7 21.7L16.3 16.3"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const BlockIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M14 14L50 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const GamepadIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 24C10 24 6 28 6 34C6 40 10 44 16 44H20C22 44 24 42 24 40V28C24 26 22 24 20 24H16Z"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M48 24C54 24 58 28 58 34C58 40 54 44 48 44H44C42 44 40 42 40 40V28C40 26 42 24 44 24H48Z"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <rect x="24" y="22" width="16" height="20" rx="2"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15"/>
    <circle cx="46" cy="32" r="2" fill="currentColor"/>
    <circle cx="52" cy="36" r="2" fill="currentColor"/>
  </svg>
);

// Document & Data Icons
export const DocumentIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8H38L48 18V54C48 55.1 47.1 56 46 56H16C14.9 56 14 55.1 14 54V10C14 8.9 14.9 8 16 8Z"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M38 8V18H48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 30H42M22 38H42M22 46H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const SyncIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 22C50 22 45 10 32 10C19 10 10 19 10 32"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M14 42C14 42 19 54 32 54C45 54 54 45 54 32"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M50 22V12M50 22H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 42V52M14 42H24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const KeyIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="44" r="12" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M28 36L50 14M50 14V22M50 14H42"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="44" r="4" fill="currentColor" fillOpacity="0.3"/>
  </svg>
);

// Hardware Icons
export const RaspberryPiIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="14" width="36" height="36" rx="2"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.05"/>
    <circle cx="24" cy="24" r="3" fill="currentColor" fillOpacity="0.4"/>
    <circle cx="40" cy="24" r="3" fill="currentColor" fillOpacity="0.4"/>
    <circle cx="24" cy="40" r="3" fill="currentColor" fillOpacity="0.4"/>
    <circle cx="40" cy="40" r="3" fill="currentColor" fillOpacity="0.4"/>
    <rect x="28" y="28" width="8" height="8" rx="1"
          stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
  </svg>
);

export const ServerIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="14" width="40" height="12" rx="2"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <rect x="12" y="32" width="40" height="12" rx="2"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15"/>
    <rect x="12" y="50" width="40" height="12" rx="2"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="20" cy="20" r="2" fill="currentColor"/>
    <circle cx="20" cy="38" r="2" fill="currentColor"/>
    <circle cx="20" cy="56" r="2" fill="currentColor"/>
  </svg>
);

export const ContainerIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="16" width="40" height="32" rx="2"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M22 16V48M32 16V48M42 16V48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 28H52M12 38H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Action Icons
export const DownloadIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12V42M32 42L20 30M32 42L44 30"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 46V50C12 52.2 13.8 54 16 54H48C50.2 54 52 52.2 52 50V46"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const BookIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 12H22C26 12 30 14 32 16C34 14 38 12 42 12H50V46H42C38 46 34 48 32 50C30 48 26 46 22 46H14V12Z"
          stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    <path d="M32 16V50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const BuildingIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="18" width="40" height="38"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M12 56H52M26 56V44H38V56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="20" y="26" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
    <rect x="38" y="26" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
    <rect x="29" y="26" width="6" height="6" fill="currentColor" fillOpacity="0.3"/>
  </svg>
);

export const LayersIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 14L10 26L32 38L54 26L32 14Z"
          stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    <path d="M10 32L32 44L54 32"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 44L32 56L54 44"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LightbulbIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 10C22 10 14 18 14 28C14 34 17 39 22 42V46C22 48.2 23.8 50 26 50H38C40.2 50 42 48.2 42 46V42C47 39 50 34 50 28C50 18 42 10 32 10Z"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M26 50V52C26 54.2 27.8 56 30 56H34C36.2 56 38 54.2 38 52V50"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M32 24V28M28 30L32 28M36 30L32 28"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const QuestionIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M26 26C26 22.7 28.7 20 32 20C35.3 20 38 22.7 38 26C38 28.5 36.5 30.5 34.5 31.5C33 32.2 32 33.5 32 35V37"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="32" cy="44" r="2.5" fill="currentColor"/>
  </svg>
);

// Additional Icons
export const EyeShieldIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 22C20 22 12 32 12 32C12 32 20 42 32 42C44 42 52 32 52 32C52 32 44 22 32 22Z"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.2"/>
    <path d="M14 14L50 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const CoffeeIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 26H42V46C42 50.4 38.4 54 34 54H22C17.6 54 14 50.4 14 46V26Z"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M42 30H46C50.4 30 54 33.6 54 38C54 42.4 50.4 46 46 46H42"
          stroke="currentColor" strokeWidth="2.5"/>
    <path d="M20 18V22M28 14V22M36 18V22"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const SearchIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="16" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M40 40L54 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const PlaneIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54 14L10 32L22 36L26 50L32 38L46 42L54 14Z"
          stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"/>
    <path d="M26 50L32 38L46 42" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
  </svg>
);

export const BriefcaseIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="22" width="48" height="30" rx="3"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M22 22V18C22 15.8 23.8 14 26 14H38C40.2 14 42 15.8 42 18V22"
          stroke="currentColor" strokeWidth="2.5"/>
    <path d="M8 32H56" stroke="currentColor" strokeWidth="2.5"/>
  </svg>
);

export const SignalIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 32C34.2 32 36 30.2 36 28C36 25.8 34.2 24 32 24C29.8 24 28 25.8 28 28C28 30.2 29.8 32 32 32Z"
          fill="currentColor"/>
    <path d="M24 36C20 32 20 26 24 22M40 36C44 32 44 26 40 22"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M18 42C12 36 12 20 18 14M46 42C52 36 52 20 46 14"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const UsersIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="22" r="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M8 50C8 42 14 36 24 36C34 36 40 42 40 50"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="44" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15"/>
    <path d="M42 36C48 36 52 40 52 46"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const RocketIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 10C32 10 46 14 50 28C54 42 50 50 50 50L38 54L26 54L14 50C14 50 10 42 14 28C18 14 32 10 32 10Z"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="32" cy="28" r="4" fill="currentColor" fillOpacity="0.4"/>
    <path d="M14 50L10 54M50 50L54 54"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M22 46L18 54M42 46L46 54"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const MonitorIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="48" height="32" rx="2"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M22 44V50H42V44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 50H48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M18 20H38M18 26H30"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CodeIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 22L8 32L20 42M44 22L56 32L44 42"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38 16L26 48"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const GlobeIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.05"/>
    <path d="M32 8C32 8 22 18 22 32C22 46 32 56 32 56M32 8C32 8 42 18 42 32C42 46 32 56 32 56"
          stroke="currentColor" strokeWidth="2.5"/>
    <path d="M8 32H56" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M12 20H52M12 44H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ChartIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 50L20 35L30 40L42 20L54 28"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="35" r="3" fill="currentColor"/>
    <circle cx="30" cy="40" r="3" fill="currentColor"/>
    <circle cx="42" cy="20" r="3" fill="currentColor"/>
    <circle cx="54" cy="28" r="3" fill="currentColor"/>
    <path d="M8 54H56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const TargetIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.05"/>
    <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="32" cy="32" r="6" fill="currentColor" fillOpacity="0.3"/>
    <circle cx="32" cy="32" r="2" fill="currentColor"/>
  </svg>
);

export const LinkIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 36L36 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M22 30L18 34C14 38 14 44 18 48C22 52 28 52 32 48L36 44"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M42 34L46 30C50 26 50 20 46 16C42 12 36 12 32 16L28 20"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const WrenchIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 14C50 14 45 15 42 18L24 36L28 40L46 22C49 19 50 14 50 14Z"
          stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="18" cy="46" r="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15"/>
    <path d="M46 14L50 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const ClockIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M32 18V32L42 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const UnlockIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="28" width="28" height="24" rx="2"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="32" cy="40" r="3" fill="currentColor"/>
    <path d="M18 28V22C18 16 22 12 28 12C34 12 38 16 38 22"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const ChatIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14H52C54.2 14 56 15.8 56 18V38C56 40.2 54.2 42 52 42H20L12 50V14C12 14 12 14 12 14Z"
          stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    <path d="M22 26H42M22 32H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const BirdIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M48 16C48 16 40 18 36 22C32 18 20 16 12 24C12 24 16 28 20 28C20 28 18 36 24 40C24 40 28 48 40 48C52 48 54 38 54 32C54 26 52 22 52 22L48 16Z"
          stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="40" cy="26" r="2" fill="currentColor"/>
  </svg>
);

export const PhoneIcon = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="8" width="24" height="48" rx="3"
          stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M28 50H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="24" y="14" width="16" height="28" rx="1" fill="currentColor" fillOpacity="0.1"/>
  </svg>
);

// Wrapper component for consistent sizing
export const IconWrapper = ({ icon: IconComponent, size = "default", className = "" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16",
    xlarge: "w-20 h-20"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <IconComponent className="w-full h-full text-current" />
    </div>
  );
};

export default {
  LockShieldIcon,
  NetworkGlobeIcon,
  ShieldCheckIcon,
  BoltIcon,
  DevicesIcon,
  CoinsIcon,
  VideoIcon,
  HomeAutomationIcon,
  DatabaseIcon,
  SettingsIcon,
  BlockIcon,
  GamepadIcon,
  DocumentIcon,
  SyncIcon,
  KeyIcon,
  RaspberryPiIcon,
  ServerIcon,
  ContainerIcon,
  DownloadIcon,
  BookIcon,
  BuildingIcon,
  LayersIcon,
  LightbulbIcon,
  QuestionIcon,
  EyeShieldIcon,
  CoffeeIcon,
  SearchIcon,
  PlaneIcon,
  BriefcaseIcon,
  SignalIcon,
  UsersIcon,
  RocketIcon,
  MonitorIcon,
  CodeIcon,
  GlobeIcon,
  ChartIcon,
  TargetIcon,
  LinkIcon,
  WrenchIcon,
  ClockIcon,
  UnlockIcon,
  ChatIcon,
  BirdIcon,
  PhoneIcon,
  IconWrapper
};
