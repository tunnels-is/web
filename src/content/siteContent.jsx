/**
 * Centralized Content Management for Tunnels VPN Website
 *
 * This file contains all text content, feature lists, and data arrays
 * used across the website. Organized by page/section for easy maintenance.
 */

import {
  LockShieldIcon, NetworkGlobeIcon, ShieldCheckIcon, BoltIcon, DevicesIcon,
  CoinsIcon, VideoIcon, HomeAutomationIcon, DatabaseIcon, SettingsIcon,
  BlockIcon, GamepadIcon, DocumentIcon, SyncIcon, KeyIcon, RaspberryPiIcon,
  ServerIcon, ContainerIcon, DownloadIcon, BookIcon, LightbulbIcon,
  EyeShieldIcon, CoffeeIcon, SearchIcon, PlaneIcon, BriefcaseIcon,
  SignalIcon, UsersIcon, RocketIcon, MonitorIcon, CodeIcon,
  GlobeIcon, ChartIcon, TargetIcon, LinkIcon, WrenchIcon,
  ClockIcon, UnlockIcon, ChatIcon, BirdIcon, PhoneIcon, BuildingIcon, LayersIcon
} from '../components/ui/Icons';
import { GitHubIcon, DiscordIcon, TwitterIcon, RedditIcon } from '../components/SocialIcons';

// ============================================================================
// HOME PAGE CONTENT
// ============================================================================

export const homeContent = {
  tempContent: {
    img: "https://raw.githubusercontent.com/tunnels-is/media/master/new-website/banner-grid/1.png"
  },
  hero: {
    title: "Tunnels",
    subtitle: "VPN, LAN, NAT, Routing, DNS blocking, DNS routing and more!",
    description: "A modern networking solution that connects you to multiple networks at once, with built-in security and privacy features",
    buttons: [
      { text: "Download Now", href: "/download", primary: true },
      { text: "Explore Features", href: "/features" }
    ]
  },

  topicsSection: {
    title: "Explore Use Cases",
    subtitle: "Discover how Tunnels can solve your networking challenges across different environments",
    topics: [
      { label: 'Free & Open Source', path: '/free-and-opensource' },
      { label: 'Security', path: 'https://docs.tunnels.is/docs/topics/security', external: true },
      { label: 'Public VPN', path: '/public' },
      { label: 'Homelab', path: '/homelab' },
      { label: 'Cloud & Baremetal', path: '/cloud' },
      { label: 'IoT Networks', path: '/iot' },
      { label: 'Office Networks', path: '/office' },
      { label: 'LAN over WAN', path: '/lan-over-wan' },
      { label: 'Personal VPN', path: '/personal-vpn' },
      { label: 'DNS Security', path: '/dns' },
    ]
  },

  featuresSection: {
    title: "Why Choose Tunnels",
    subtitle: "Advanced networking made simple, secure, and scalable"
  },

  features: [
    {
      title: 'VPN & LAN',
      description: 'Connect to multiple networks simultaneously with advanced routing',
      icon: <NetworkGlobeIcon />,
    },
    {
      title: 'DNS Security',
      description: 'Built-in DNS protection with daily threat list updates',
      icon: <ShieldCheckIcon />,
    },
    {
      title: 'Portable',
      description: 'Download and run - minimal setup required',
      icon: <LayersIcon />,
    },
    {
      title: 'Scalable',
      description: 'Deploy for personal use or team environments',
      icon: <BuildingIcon />,
    },
  ],

  cta: {
    title: "Ready to Get Started?",
    description: "Try Tunnels free for 24 hours. No credit card required.",
    buttons: [
      { text: "Download Free", href: "/download", primary: true },
      { text: "View Pricing", href: "/pricing", primary: false }
    ]
  },

  useCaseCards: [
    {
      title: 'Personal VPN',
      description: 'Secure your internet connection and access your home network from anywhere.',
      path: '/personal-vpn',
    },
    {
      title: 'Homelab',
      description: 'Self-host your VPN and securely access your homelab from anywhere in the world.',
      path: '/homelab',
    },
    {
      title: 'Enterprise',
      description: 'Scale across teams and offices with centralized management and access control.',
      path: '/enterprise',
    },
  ],

  highlights: [
    { title: 'Multi-Network', desc: 'Connect to multiple networks simultaneously' },
    { title: 'DNS Security', desc: 'Built-in threat blocking with daily updates' },
    { title: 'Open Source', desc: 'Fully transparent, auditable code' },
    { title: 'Self-Hosted', desc: 'Run on your own infrastructure' },
    { title: 'Cross-Platform', desc: 'Windows, macOS, Linux, and more' },
    { title: 'Encrypted', desc: 'End-to-end encrypted tunnels by default' },
  ],

  environmentHeader: {
    title: "Built for Every Environment",
    subtitle: "From personal devices to enterprise infrastructure",
  },

  illustratedSecurity: {
    subtitle: "End-to-End Security",
    title: "Encrypted by Default",
    description: "Every connection is protected with modern cryptography. Your data travels through encrypted tunnels with zero-knowledge architecture.",
    features: [
      "AES-256 and ChaCha20 encryption options",
      "Perfect forward secrecy",
      "No tracking, no metadata collection",
      "Audited open-source code",
    ],
  },

  openSourceBadge: {
    title: "Open Source",
    subtitle: "Licensed",
  },

  statsBanner: [
    { label: "Encryption", value: "256-bit" },
    { label: "Protocol", value: "Custom UDP" },
    { label: "License", value: "Open Source" },
    { label: "Self-Host", value: "Free" },
  ],

  illustratedOpenSource: {
    subtitle: "Open Source",
    title: "100% Open Source",
    description: "Every line of code is open for inspection. No hidden backdoors, no proprietary black boxes. You can audit, fork, and self-host with full confidence.",
    features: [
      "Open source — free to self-host",
      "Active community development",
      "Self-host or use managed service",
      "Regular security reviews",
    ],
  },
};

// ============================================================================
// HOMELAB PAGE CONTENT
// ============================================================================

export const homelabContent = {
  hero: {
    badge: "Ideal for Self-Hosters",
    title: "Homelab VPN",
    subtitle: "Self-Hosted VPN for Your Home Network",
    description: "Deploy a single server and securely access your homelab from anywhere. Built-in DNS management, ad blocking, and straightforward setup.",
    buttons: [
      { text: "Download Free", href: "/download", primary: true },
      { text: "View Documentation", href: "/", primary: false }
    ],
    quickStats: [
      { label: "Setup Time", value: "~15 min" },
      { label: "Cost", value: "$0" },
      { label: "Complexity", value: "Low" }
    ]
  },

  benefitsSection: {
    title: "Why Choose Tunnels for Your Homelab",
    subtitle: "Everything you need to securely access and manage your home network from anywhere"
  },

  benefits: [
    {
      title: "Self-Hosted Privacy",
      description: "Your network, your data, your rules. No third-party services or privacy concerns.",
      icon: <LockShieldIcon />
    },
    {
      title: "Remote Access",
      description: "Securely access your homelab from anywhere in the world with VPN connectivity.",
      icon: <NetworkGlobeIcon />
    },
    {
      title: "DNS Security & Blocking",
      description: "Built-in DNS blocking for ads, trackers, and malware protection for your entire home.",
      icon: <ShieldCheckIcon />
    },
    {
      title: "Simple Installation",
      description: "Single server setup with no complex configuration. Get running in minutes.",
      icon: <BoltIcon />
    },
    {
      title: "Desktop Support",
      description: "Connect Windows, macOS, and Linux computers with a single server.",
      icon: <MonitorIcon />
    },
    {
      title: "Cost Effective",
      description: "Run on existing hardware - Raspberry Pi, old PC, or VM. No expensive infrastructure needed.",
      icon: <CoinsIcon />
    }
  ],

  setupSection: {
    title: "Quick Setup Guide",
    subtitle: "Get your homelab VPN running in four simple steps"
  },

  setupSteps: [
    {
      step: "1",
      title: "Install the Server",
      description: "Deploy Tunnels server on your homelab machine - supports any Linux system.",
      command: "wget https://tunnels.is/install.sh && sudo bash install.sh",
      details: "Works on Raspberry Pi, Ubuntu, Debian, or any Linux distribution"
    },
    {
      step: "2",
      title: "Configure Server Settings",
      description: "Set up basic configuration for authentication and VPN access.",
      command: "Edit /etc/tunnels/config.json",
      details: "Configure APIIP, APIPort, and network settings"
    },
    {
      step: "3",
      title: "Install the Client",
      description: "Download and install the Tunnels client on your devices.",
      command: "Download from tunnels.is/download",
      details: "Available for Windows, macOS, and Linux"
    },
    {
      step: "4",
      title: "Connect & Configure",
      description: "Add your server to the client and connect to your homelab network.",
      command: "Click + to add server, enter your APIIP and APIPort",
      details: "Create a user account and device token for authentication"
    }
  ],

  useCasesSection: {
    title: "Common Homelab Uses",
    subtitle: "Whatever you're running in your homelab, Tunnels makes it accessible"
  },

  useCases: [
    {
      title: "Media Server Access",
      description: "Stream your Plex, Jellyfin, or Emby content from anywhere through your secure VPN tunnel.",
      icon: <VideoIcon />
    },
    {
      title: "Home Automation",
      description: "Securely access Home Assistant, openHAB, or other smart home systems remotely.",
      icon: <HomeAutomationIcon />
    },
    {
      title: "NAS & File Access",
      description: "Connect to your Synology, TrueNAS, or file server without complex VPN configurations.",
      icon: <DatabaseIcon />
    },
    {
      title: "Development Environment",
      description: "Access your local dev servers, databases, and tools from anywhere you work.",
      icon: <SettingsIcon />
    },
    {
      title: "Network-Wide Ad Blocking",
      description: "Deploy DNS-level ad and tracker blocking for all devices on your network.",
      icon: <BlockIcon />
    },
    {
      title: "Game Servers",
      description: "Host Minecraft, Valheim, or other game servers accessible to friends anywhere.",
      icon: <GamepadIcon />
    }
  ],

  dnsSection: {
    title: "Powerful DNS Management",
    subtitle: "Built-in DNS server with custom records, blocking, and advanced routing",
    infoBox: {
      title: "Network-Wide Protection",
      description: "All devices connected through your Tunnels homelab server automatically benefit from DNS blocking and custom DNS records - no per-device configuration needed. Your laptop and desktop get ad-blocking anywhere in the world."
    }
  },

  dnsFeatures: [
    {
      title: "Custom DNS Records",
      description: "Define internal DNS records for your homelab services with easy-to-remember names.",
      icon: <DocumentIcon />
    },
    {
      title: "DNS Blocking Lists",
      description: "Automatic daily updates of malware, ad, and tracker domains to protect your network.",
      icon: <ShieldCheckIcon />
    },
    {
      title: "Split DNS",
      description: "Route specific domains through your homelab DNS while using public DNS for everything else.",
      icon: <SyncIcon />
    },
    {
      title: "DNS Over VPN",
      description: "All connected clients automatically use your homelab DNS with security and blocking.",
      icon: <LockShieldIcon />
    }
  ],

  technicalSection: {
    title: "Technical Highlights",
    subtitle: "Modern technology stack designed for simplicity and security"
  },

  technicalHighlights: [
    {
      title: "Simple Port Forwarding",
      description: "Forward API and VPN ports to your server for remote access",
      icon: <SyncIcon />
    },
    {
      title: "Custom UDP Protocol",
      description: "Lightweight VPN protocol with ChaCha20-Poly1305, AES-256-GCM, or AES-128-GCM encryption",
      icon: <BoltIcon />
    },
    {
      title: "IPv4 VPN Tunneling",
      description: "VPN data plane uses IPv4 for reliable connectivity",
      icon: <NetworkGlobeIcon />
    },
    {
      title: "TLS Certificate Support",
      description: "Configure your own certificates for secure HTTPS connections",
      icon: <KeyIcon />
    }
  ],

  hardwareSection: {
    title: "Hardware Requirements",
    subtitle: "Run on almost any hardware you have available",
    proTip: "Start with what you have - Tunnels runs on minimal hardware. A Raspberry Pi or small VPS is enough to get started.",
    proTipTitle: "Pro Tip",
  },

  hardwareOptions: [
    {
      title: "Raspberry Pi",
      description: "Perfect for basic homelab VPN",
      icon: <RaspberryPiIcon />
    },
    {
      title: "Old PC / Thin Client",
      description: "Great for growing homelabs",
      icon: <ServerIcon />
    },
    {
      title: "VM / Container",
      description: "Integrate with existing infrastructure",
      icon: <ContainerIcon />
    }
  ],

  ctaSection: {
    title: "Get Started Today",
    description: "Get started with Tunnels for secure remote access to your homelab",
    layout: "split"
  },

  ctaCards: [
    {
      icon: <DownloadIcon />,
      title: "Download & Install",
      description: "Get the Tunnels server and client applications. Free for 24 hours trial, then affordable pricing for continued use.",
      features: [
        "Server for Linux only (requires root privileges)",
        "Clients for Windows, macOS, and Linux",
        "Installation guides and documentation",
        "Community support"
      ],
      button: { text: "Download Free", href: "/download", primary: true },
      highlighted: true
    },
    {
      icon: <BookIcon />,
      title: "Read Documentation",
      description: "Comprehensive guides covering every aspect of setting up and managing your homelab VPN server.",
      features: [
        "Single server setup guide",
        "DNS configuration and blocking",
        "Linux system configuration",
        "Client setup and troubleshooting"
      ],
      button: { text: "View Documentation", href: "/", primary: false },
      highlighted: false
    }
  ],

  statsBanner: [
    { value: "~15 min", label: "Setup Time" },
    { value: "$0", label: "Cost" },
    { value: "1", label: "Server Needed" },
    { value: "3+", label: "Platforms Supported" },
  ],

  bentoFeatures: [
    "Zero cloud dependencies",
    "No recurring subscription costs",
    "Complete data ownership",
    "Full control over your server",
  ],
  bentoHighlight: "True digital sovereignty",

  illustratedSelfHosted: {
    subtitle: "Complete Ownership",
    title: "Your Infrastructure, Your Rules",
    description: "Run everything on your own hardware. No cloud dependencies, no subscription fees, no data leaving your network. True digital sovereignty for your homelab.",
    features: [
      "Zero cloud dependencies",
      "No recurring subscription costs",
      "Complete data ownership",
      "Full control over your server",
    ],
  },

  terminalPreview: {
    title: "Up and Running in Minutes",
    description: "A single command installs everything. No complex configuration, no networking expertise required. Just run the installer and your homelab is connected.",
    features: [
      "One-line installation script",
      "Supports ARM and x86 architectures",
      "Systemd service integration",
      "Configurable logging levels",
    ],
    lines: [
      { type: 'comment', text: 'Download and run the installer' },
      { type: 'command', text: 'wget https://tunnels.is/install.sh && sudo bash install.sh' },
      { type: 'output', text: 'Detecting system architecture...' },
      { type: 'output', text: 'Found: linux/amd64' },
      { type: 'success', text: 'Tunnels server installed successfully' },
      { type: 'empty', text: '' },
      { type: 'comment', text: 'Start and enable the service' },
      { type: 'command', text: 'sudo systemctl enable --now tunnels' },
      { type: 'success', text: 'Service started: tunnels.service' },
      { type: 'empty', text: '' },
      { type: 'comment', text: 'Check server status' },
      { type: 'command', text: 'sudo systemctl status tunnels' },
      { type: 'info', text: '● tunnels.service - Tunnels VPN Server' },
      { type: 'success', text: '   Active: active (running)' },
    ],
  },

  illustratedDNS: {
    subtitle: "Local Resolution",
    title: "Private DNS for Your Network",
    description: "Access your services by name instead of IP addresses. Tunnels provides DNS resolution for your connected devices and services.",
    features: [
      "Custom DNS records for local services",
      "DNS routing across connections",
      "Built-in DNS blocking lists",
      "Wildcard domain support",
    ],
  },

  hardwareFeatures: [
    "Runs on ARM and x86 architectures",
    "As little as 512 MB RAM required",
    "Minimal CPU overhead",
    "Works inside Docker and VMs",
  ],

  relatedPages: [
    { title: "Personal VPN", description: "Secure your internet and access your network from anywhere.", path: "/personal-vpn" },
    { title: "DNS Security", description: "Built-in DNS protection with daily threat list updates.", path: "/dns" },
    { title: "LAN over WAN", description: "Connect devices across locations as if on the same network.", path: "/lan-over-wan" },
  ],
};

// ============================================================================
// PERSONAL VPN PAGE CONTENT
// ============================================================================

export const personalVPNContent = {
  hero: {
    badge: "Your VPN, Your Rules",
    title: "Personal VPN",
    subtitle: "Skip the Middleman",
    description: "Why trust a VPN company when you can run your own? Spin up a server, connect your devices, and browse privately. It's easier than you think.",
    buttons: [
      { text: "Get Started Free", href: "/download", primary: true },
      { text: "See How It Compares", href: "#comparison", primary: false }
    ],
    quickStats: [
      { value: "$5", label: "Per Month" },
      { value: "15 min", label: "Setup" },
      { value: "Multi", label: "Devices" },
      { value: "Zero", label: "Logs" }
    ]
  },

  benefitsSection: {
    title: "Why Run Your Own VPN?",
    subtitle: "Commercial VPNs ask you to trust them. With your own server, trust isn't necessary."
  },

  benefits: [
    {
      title: "Complete Privacy",
      description: "Your VPN server, your rules. No third parties, no logging policies to trust - just code you control.",
      icon: <KeyIcon />,
      gradient: "from-dark-accent-primary to-dark-accent-secondary"
    },
    {
      title: "Own Your Data",
      description: "All traffic flows through infrastructure you own. No metadata collection, no analytics, no tracking.",
      icon: <ShieldCheckIcon />,
      gradient: "from-dark-accent-secondary to-dark-accent-tertiary"
    },
    {
      title: "Cost Effective",
      description: "Deploy on a $5/month VPS with configurable bandwidth allocation. One server handles your whole family.",
      icon: <CoinsIcon />,
      gradient: "from-dark-accent-tertiary to-dark-accent-primary"
    },
    {
      title: "No Speed Limits",
      description: "Full bandwidth from your cloud provider. No throttling, no artificial limits, no peak hour slowdowns.",
      icon: <BoltIcon />,
      gradient: "from-dark-accent-primary to-dark-accent-tertiary"
    },
    {
      title: "Full Transparency",
      description: "Open source code means you can audit every line. Know exactly what's running on your server.",
      icon: <EyeShieldIcon />,
      gradient: "from-dark-accent-secondary to-dark-accent-primary"
    },
    {
      title: "Desktop Platforms",
      description: "Connect your Windows, macOS, and Linux computers. Multiple simultaneous connections per user.",
      icon: <MonitorIcon />,
      gradient: "from-dark-accent-tertiary to-dark-accent-secondary"
    }
  ],

  useCasesSection: {
    title: "Common Scenarios",
    subtitle: "From coffee shops to corporate networks, your personal VPN has you covered"
  },

  useCases: [
    {
      title: "Secure Public WiFi",
      description: "Coffee shop, airport, hotel - encrypt all your traffic when using untrusted networks.",
      icon: <CoffeeIcon />,
      scenario: "Your banking app traffic is encrypted end-to-end through your personal server"
    },
    {
      title: "ISP Privacy",
      description: "Prevent your internet provider from tracking and analyzing your browsing habits.",
      icon: <SearchIcon />,
      scenario: "Your ISP only sees encrypted traffic to your VPN server, not your actual destinations"
    },
    {
      title: "Travel Abroad",
      description: "Access your home services and content when traveling internationally.",
      icon: <PlaneIcon />,
      scenario: "Connect through your home country to access regional content and services"
    },
    {
      title: "Remote Work",
      description: "Secure connection to your home network from anywhere in the world.",
      icon: <BriefcaseIcon />,
      scenario: "Access your home lab, NAS, and local services as if you were at home"
    },
    {
      title: "Network Privacy",
      description: "Protect your internet connection on any network everywhere you go.",
      icon: <SignalIcon />,
      scenario: "All traffic encrypted through your server, not visible to network operators"
    },
    {
      title: "Family Protection",
      description: "Single VPN server with DNS blocking protects all family computers automatically.",
      icon: <UsersIcon />,
      scenario: "Family computers get automatic ad-blocking and content filtering through your VPN"
    }
  ],

  technicalSection: {
    title: "Secure Technology Stack",
    subtitle: "Built with modern cryptography and security best practices"
  },

  technicalFeatures: [
    {
      category: "Security",
      features: [
        { name: "Custom UDP Protocol", detail: "VPN protocol with X25519 + ML-KEM-1024 key exchange and multiple encryption options (ChaCha20-Poly1305, AES-256-GCM, AES-128-GCM)" },
        { name: "ChaCha20 Encryption", detail: "Modern, strong encryption for all your traffic" },
        { name: "Perfect Forward Secrecy", detail: "Each session has unique keys - past traffic stays secure" },
        { name: "No Logs, Guaranteed", detail: "Your server doesn't log because you configured it not to" }
      ]
    },
    {
      category: "DNS & Privacy",
      features: [
        { name: "Built-in DNS Security", detail: "Integrated DNS resolver with blocking capabilities" },
        { name: "Daily Threat Updates", detail: "Automatic malware and phishing domain blocking" },
        { name: "Custom DNS Records", detail: "Define your own DNS entries for private services" },
        { name: "DNS Over VPN", detail: "All DNS queries encrypted through the tunnel" }
      ]
    },
    {
      category: "Performance",
      features: [
        { name: "Low Latency", detail: "Minimal protocol overhead for fast connections" },
        { name: "Full Bandwidth", detail: "Utilize your server's full network bandwidth without artificial limits" },
        { name: "Automatic Reconnect", detail: "Automatic reconnection within 45 seconds when network changes" },
        { name: "Lightweight Protocol", detail: "Minimal overhead with efficient connection handling" }
      ]
    },
    {
      category: "Management",
      features: [
        { name: "Multi-Device Support", detail: "Multiple devices per account (configurable limit)" },
        { name: "User Management", detail: "Create accounts for family members with individual policies" },
        { name: "Traffic Monitoring", detail: "Optional bandwidth and connection monitoring" },
        { name: "Easy Client Setup", detail: "Simple config file deployment and 2FA QR codes" }
      ]
    }
  ],

  setupSection: {
    title: "Setup in 5 Easy Steps",
    subtitle: "From zero to encrypted in 15 minutes"
  },

  setupSteps: [
    {
      step: "01",
      title: "Choose Your Cloud Provider",
      description: "Deploy on any cloud platform - we recommend starting with a small VPS for $5-10/month.",
      providers: ["DigitalOcean", "Vultr", "Linode", "AWS Lightsail", "Hetzner"],
      specs: "1 CPU, 1GB RAM, 25GB SSD is plenty"
    },
    {
      step: "02",
      title: "Install Tunnels Server",
      description: "One command installs everything needed for your personal VPN server.",
      command: "curl -sSL https://tunnels.is/install.sh | sudo bash",
      specs: "Works on Ubuntu, Debian, CentOS, Fedora, and more"
    },
    {
      step: "03",
      title: "Configure Your Server",
      description: "Set up authentication, network settings, and DNS configuration.",
      command: "sudo nano /etc/tunnels/config.json",
      specs: "Configure API port, VPN network range, DNS settings"
    },
    {
      step: "04",
      title: "Install Client Apps",
      description: "Download the Tunnels client for your devices from the official website.",
      command: "Desktop clients only (no mobile apps)",
      specs: "Windows, macOS, and Linux desktop applications"
    },
    {
      step: "05",
      title: "Connect & Enjoy",
      description: "Add your server to the client app and connect. Your personal VPN is ready!",
      command: "Enter your server IP and port, login with your credentials",
      specs: "Automatic DNS configuration and routing"
    }
  ],

  comparisonSection: {
    title: "Personal vs Commercial VPNs",
    subtitle: "See how your own server stacks up against commercial providers",
    bottomLine: {
      title: "The Bottom Line",
      description: "Commercial VPNs are convenient but require trust. Your personal VPN gives you complete control and transparency at a lower cost. The choice depends on your priorities: convenience vs. control, trust vs. verification, multiple locations vs. ownership."
    }
  },

  comparison: [
    {
      feature: "Privacy",
      commercial: "Trust their no-log policy",
      personal: "Guaranteed - you control the server",
      winner: "personal"
    },
    {
      feature: "Cost (Annual)",
      commercial: "$60-120/year per user",
      personal: "$60-120/year for multiple users",
      winner: "personal"
    },
    {
      feature: "Speed",
      commercial: "Shared infrastructure, variable",
      personal: "Full server bandwidth, consistent",
      winner: "personal"
    },
    {
      feature: "Device Limit",
      commercial: "5-10 devices typical",
      personal: "Multiple devices (configurable)",
      winner: "personal"
    },
    {
      feature: "Server Locations",
      commercial: "100+ countries available",
      personal: "Deploy where you need",
      winner: "commercial"
    },
    {
      feature: "Setup",
      commercial: "Download and click",
      personal: "20 minutes initial setup",
      winner: "commercial"
    },
    {
      feature: "Transparency",
      commercial: "Closed source, audited",
      personal: "Open source, fully auditable",
      winner: "personal"
    },
    {
      feature: "DNS Blocking",
      commercial: "Some providers include it",
      personal: "Built-in ad & malware blocking with daily updates",
      winner: "personal"
    }
  ],

  privacyHighlight: {
    title: "Your Server. Your Rules.",
    titleLine2: "Your Privacy.",
    description: "With your own server, you don't need to trust a privacy policy.",
    descriptionBold: "You control everything.",
    highlights: [
      {
        title: "No Logging",
        description: "Your server doesn't log because you configured it not to. Not a promise - a fact."
      },
      {
        title: "Open Source",
        description: "Audit every line of code. Know exactly what's running on your infrastructure."
      },
      {
        title: "Your Keys",
        description: "Encryption keys generated fresh for each session using secure key exchange."
      }
    ]
  },

  cloudProvidersSection: {
    title: "Where to Deploy",
    subtitle: "Choose your cloud provider based on location, price, and features",
    proTip: "Start with any provider's smallest plan. You can always upgrade if needed, but a basic VPS handles personal VPN traffic easily for most users."
  },

  cloudProviders: [
    {
      name: "DigitalOcean",
      price: "$6/month",
      specs: "1 vCPU, 1GB RAM, 25GB SSD, 1TB transfer",
      locations: "15+ regions worldwide",
      recommended: true,
      pros: ["Simple setup", "Great docs", "Predictable pricing", "Excellent network"]
    },
    {
      name: "Vultr",
      price: "$5/month",
      specs: "1 vCPU, 1GB RAM, 25GB SSD, 1TB transfer",
      locations: "25+ regions worldwide",
      recommended: true,
      pros: ["Lowest cost", "Many locations", "Good performance", "Easy deployment"]
    },
    {
      name: "AWS Lightsail",
      price: "$5/month",
      specs: "1 vCPU, 1GB RAM, 40GB SSD, 2TB transfer",
      locations: "AWS regions globally",
      recommended: false,
      pros: ["AWS ecosystem", "Great reliability", "Generous bandwidth", "Easy scaling"]
    },
    {
      name: "Hetzner",
      price: "€4.15/month",
      specs: "1 vCPU, 2GB RAM, 20GB SSD, 20TB transfer",
      locations: "EU and US locations",
      recommended: true,
      pros: ["Best value", "Huge bandwidth", "Great EU coverage", "Excellent performance"]
    },
    {
      name: "Linode",
      price: "$5/month",
      specs: "1 vCPU, 1GB RAM, 25GB SSD, 1TB transfer",
      locations: "11 regions globally",
      recommended: false,
      pros: ["Reliable", "Good support", "Simple pricing", "Quality network"]
    },
    {
      name: "Oracle Cloud",
      price: "Free tier available",
      specs: "1-4 vCPU, 1-24GB RAM (ARM), 200GB storage",
      locations: "Multiple regions",
      recommended: false,
      pros: ["Free forever tier", "Generous specs", "ARM instances", "Good for testing"]
    }
  ],

  faqSection: {
    title: "Common Questions",
    subtitle: "Everything you need to know before getting started"
  },

  faqs: [
    {
      q: "Do I need technical knowledge to set this up?",
      a: "Basic Linux command-line knowledge helps, but our guided setup process makes it straightforward. If you can SSH into a server and copy-paste commands, you can set up your personal VPN."
    },
    {
      q: "How does this compare to commercial VPN providers in terms of speed?",
      a: "Your personal VPN is typically faster because you're not sharing bandwidth with thousands of other users. You get the full speed of your cloud server's network connection."
    },
    {
      q: "What if I need to access multiple countries?",
      a: "You can deploy multiple VPN servers in different regions and switch between them using the Tunnels client. Each server costs $5-10/month."
    },
    {
      q: "Is this legal?",
      a: "Yes, running your own VPN server is completely legal in most countries. You're simply encrypting your own internet traffic through your own server."
    },
    {
      q: "How many devices can connect simultaneously?",
      a: "A basic $5/month server can handle 10-20 simultaneous connections for typical use, though performance depends on traffic patterns. For larger groups, consider a $10-20/month server with more resources."
    },
    {
      q: "What happens if my server goes down?",
      a: "Your internet connection will continue working normally - you just won't have the VPN protection until the server is back up. Cloud providers typically have 99.9%+ uptime."
    }
  ],

  finalCTA: {
    title: "Ready to Take Control?",
    description: "Take control of your privacy with your own VPN server",
    layout: "split"
  },

  ctaCards: [
    {
      icon: <RocketIcon />,
      title: "Get Started Now",
      description: "Download the Tunnels server and client. Free 24-hour trial to test everything. After that, just $5-10/month for your cloud server.",
      features: [
        "Server for Linux only",
        "Desktop clients (no mobile apps)",
        "Complete setup documentation",
        "Community support via Discord",
        "Free forever updates"
      ],
      button: { text: "Download Free", href: "/download", primary: true },
      highlighted: true
    },
    {
      icon: <BookIcon />,
      title: "Read the Docs",
      description: "Comprehensive guides covering every aspect of deploying and managing your personal VPN server.",
      features: [
        "Single server setup guide",
        "Cloud provider tutorials",
        "Client configuration",
        "DNS blocking setup",
        "Troubleshooting guide"
      ],
      button: { text: "View Documentation", href: "/", primary: false },
      highlighted: false
    }
  ],

  illustratedPrivacy: {
    subtitle: "Zero Trust Architecture",
    title: "Your Privacy, Protected",
    description: "Unlike commercial VPNs, your data never touches third-party servers. Every packet is encrypted end-to-end, and only you hold the keys.",
    features: [
      "Self-hosted means you control all logging",
      "You control the encryption keys",
      "No third-party data access",
      "Open-source and auditable"
    ]
  },

  accessSection: {
    title: "Access Your Network Anywhere",
    subtitle: "Worldwide Connectivity",
    dividerLabel: "vs",
    leftCard: {
      title: "Without Tunnels",
      items: [
        "Exposed on public WiFi",
        "Geo-blocked from your own content",
        "ISP monitors your traffic",
        "Complex port forwarding"
      ]
    },
    rightCard: {
      title: "With Tunnels",
      accent: "teal",
      items: [
        "Encrypted on any network",
        "Access your content anywhere",
        "Zero visibility to ISP",
        "Zero-config remote access"
      ]
    }
  },

  quoteHighlight: {
    quote: "Run your own VPN server on a $5/month VPS. You get full control over your traffic, built-in DNS blocking, and the ability to audit every line of code.",
    author: "Self-Hosted Approach",
    role: "How it works"
  },

  proTipLabel: "Pro Tip:",

  relatedPages: [
    { title: "Public VPN", description: "Access managed VPN servers with no setup required.", path: "/public" },
    { title: "Homelab", description: "Self-host your VPN and access your homelab remotely.", path: "/homelab" },
  ],
};

// ============================================================================
// FEATURES PAGE CONTENT
// ============================================================================

export const featuresContent = {
  hero: {
    title: "Features",
    subtitle: "Complete Networking & Security Suite",
    description: "Tunnels provides a comprehensive suite of networking and security features designed for individuals and enterprises alike.",
    buttons: [
      { text: "Download Now", href: "/download", primary: true },
      { text: "View Pricing", href: "/pricing" }
    ]
  },

  basicFeatures: {
    title: "Basic Features",
    subtitle: "Core features available to all users, focusing on privacy, security, and ease of use.",
    features: [
      {
        title: "No Logging",
        content: "User actions are not logged in our public VPN network",
      },
      {
        title: "No Tracking",
        content: "User actions are not tracked in any way in our public network",
      },
      {
        title: "No Persistence",
        content: "Configuration stays where you place it. Windows requires WinTUN driver for networking.",
      },
      {
        title: "Portable",
        content: "Just download Tunnels and place it wherever you like, even on a USB. Minimal setup required.",
      },
      {
        title: "Anonymity",
        content: "Accounts can be created using usernames or UUIDs",
      },
      {
        title: "Account Top-Ups",
        content: "Tunnels offers anonymous license keys which can be used to top-up your account",
      },
      {
        title: "Custom DNS",
        content: "Register custom A and TXT records for any domain with wildcard support",
      },
      {
        title: "DNS to DoH",
        content: "Our in-built DNS server can translate your normal DNS to DNS over HTTPS",
      },
      {
        title: "WHOIS With A Click",
        content: "Get WHOIS information for any resolved domain with the click of a button",
      },
      {
        title: "Custom Block Lists",
        content: "Use your own block lists to block domains",
      },
      {
        title: "DNS Leak Prevention",
        content: "Use our built-in DNS proxy to completely prevent DNS leaks, even without a Tunnels account",
      },
      {
        title: "IPv6 Blocking",
        content: "Tunnels can be configured to deny connections if IPv6 is enabled",
      },
      {
        title: "DNS Analytics",
        content: "Get real time DNS analytics",
      },
      {
        title: "DNS Protection",
        content: "Tunnels has a built in DNS blocking mechanisms, available for free",
      },
      {
        title: "Daily Updates",
        content: "Tunnels creates combined DNS blocklists from popular sources, everyday",
      },
    ]
  },

  advancedFeatures: {
    title: "Advanced Features",
    subtitle: "Advanced capabilities for power users, technical professionals, and organizations requiring scale and support.",
    features: [
      {
        title: "Open Source",
        content: "Our server and client source code is publicly available on GitHub",
      },
      {
        title: "Linux-Based Systems",
        content: "Runs on any Linux system including embedded devices and servers",
      },
      {
        title: "Modern Language",
        content: "Tunnels is built from the ground up using Golang, a multi-threaded modern programming language",
      },
      {
        title: "Kill Switch",
        content: "Prevent IP leaks during accidental disconnects",
      },
      {
        title: "User Management",
        content: "Manage users, groups and devices in the application UI with group-based access control",
      },
      {
        title: "Invite Friends",
        content: "Invite friends to join your tunnels server with simple user/password registration",
      },
      {
        title: "Custom Integrations",
        content: "We are always open to creating custom integration when the need arises",
      },
      {
        title: "24/7 Support",
        content: "Enterprise clients receive 24/7 support via all of our support platforms",
      },
      {
        title: "On Premise",
        content: "Tunnels supports full on-premise deployments which are essential for passing security audits",
      },
      {
        title: "Scales With Growth",
        content: "Scale from small teams to large organizations with multi-server deployments",
      },
      {
        title: "No Hardware",
        content: "No need to buy expensive hardware, our platform runs on whatever you have available, as long as it runs Linux",
      },
      {
        title: "No Vendor Lock",
        content: "Our platform can be deployed on any network without extensive configurations. This means you will not be vendor locked",
      },
    ]
  },

  cta: {
    title: "Ready to get started?",
    description: "Download Tunnels today and experience secure, private networking.",
    buttons: [
      { text: "Download Now", href: "/download", primary: true },
      { text: "View Pricing", href: "/pricing", primary: false }
    ]
  },

  performanceStats: [
    { value: 'High', label: 'Throughput' },
    { value: 'Low', label: 'Latency' },
    { value: 'Minimal', label: 'CPU Usage' },
    { value: 'All', label: 'Platforms' },
  ],

  terminalPreview: {
    title: "Simple, Powerful CLI",
    description: "Get connected in seconds with an intuitive command-line interface. No complex configuration files, no manual key exchange — just connect and go.",
    features: [
      "Single binary, zero dependencies",
      "Built-in DNS resolution",
      "Built-in DNS security",
      "Real-time connection monitoring",
    ],
    lines: [
      { type: 'comment', text: 'Connect to your private network' },
      { type: 'command', text: 'tunnels connect --network mycompany' },
      { type: 'success', text: 'Connected to mycompany (3 peers)' },
      { type: 'empty' },
      { type: 'comment', text: 'Check connection status' },
      { type: 'command', text: 'tunnels status' },
      { type: 'info', text: 'Network: mycompany' },
      { type: 'info', text: 'Peers: 3 connected' },
      { type: 'info', text: 'Latency: 0.8ms avg' },
      { type: 'output', text: 'DNS: secure (1.2M domains blocked)' },
    ],
  },

  bentoExtraFeatures: {
    features: ['Multi-network simultaneous connections', 'Automatic failover', 'Load balancing'],
    highlight: 'Core Feature',
  },

  illustratedSecurity: {
    subtitle: "Modern Encryption",
    title: "Secure by Design",
    description: "Tunnels uses modern cryptographic primitives and a minimal codebase to deliver strong security with exceptional performance.",
    features: [
      "End-to-end encrypted tunnels",
      "Lightweight, auditable codebase",
      "Zero-knowledge architecture",
      "Cross-platform support",
    ],
  },

  openSourceBadge: {
    title: "Open Source",
    subtitle: "Licensed",
  },

  illustratedOpenSource: {
    subtitle: "Open Source",
    title: "100% Open Source",
    description: "Every line of Tunnels is open for inspection, audit, and contribution. No black boxes, no hidden telemetry. Fork it, self-host it, trust it.",
    features: [
      "Open source — free to self-host",
      "Active community on GitHub",
      "Community security reviews",
      "Self-host or use managed service",
    ],
  },

  relatedPages: [
    { title: "Technical Details", description: "Deep dive into protocols, encryption, and architecture.", path: "/technical" },
    { title: "Download", description: "Get Tunnels for your platform.", path: "/download" },
  ],
};

// ============================================================================
// DOWNLOAD PAGE CONTENT
// ============================================================================

export const downloadContent = {
  version: "2.0.7",

  hero: {
    title: "Download Tunnels",
    subtitle: "Download, extract, and run. Desktop clients for Windows, macOS, and Linux. No mobile apps. Windows requires WinTUN driver."
  },

  platforms: [
    {
      name: "Windows",
      fileType: ".zip",
    },
    {
      name: "macOS",
      fileType: ".tar.gz",
    },
    {
      name: "Linux",
      fileType: ".tar.gz",
    },
  ],

  allReleasesSection: {
    description: "Looking for a different version or architecture?",
    buttonText: "View All Releases on GitHub",
    url: "https://github.com/tunnels-is/tunnels/releases/latest"
  },

  quickStart: {
    title: "Quick Start",
    steps: [
      {
        number: "1",
        title: "Download",
        description: "Choose your platform and download the latest release"
      },
      {
        number: "2",
        title: "Extract",
        description: "Extract the archive to your preferred location"
      },
      {
        number: "3",
        title: "Run",
        description: "Launch Tunnels and configure your connection"
      }
    ]
  },

  whatsIncluded: {
    title: "What's Included",
    features: [
      {
        title: "✓ No Installation",
        description: "Portable executable - Windows installs WinTUN driver for networking"
      },
      {
        title: "✓ Free DNS Protection",
        description: "Built-in DNS blocking available without an account"
      },
      {
        title: "✓ Private Servers",
        description: "Create unlimited private servers at no cost"
      },
      {
        title: "✓ 24h Free Trial",
        description: "Test public VPN features with no credit card required"
      }
    ]
  },

  helpSection: {
    title: "Need Help?",
    description: "Check out our documentation for detailed setup guides and troubleshooting.",
    buttons: [
      { text: "Contact Support", href: "mailto:support@tunnels.is", primary: true },
      { text: "View on GitHub", href: "https://github.com/tunnels-is", primary: false }
    ]
  },

  illustratedPlatforms: {
    subtitle: "Universal Support",
    title: "Run Anywhere",
    description: "Desktop applications for Windows, macOS, and Linux. No mobile apps currently. Tunnels runs natively without emulation or compatibility layers.",
    features: [
      "Native Windows, macOS, Linux apps",
      "Desktop only — no mobile clients",
      "Server runs on any Linux system",
      "ARM and x86 architecture support",
    ],
  },
};

// ============================================================================
// PRICING PAGE CONTENT
// ============================================================================

export const pricingContent = {
  zeroCostBadge: {
    value: "$0",
    label: "Self-host cost",
  },

  hero: {
    title: "Simple Pricing",
    description: "Choose the plan that works best for you. All plans include access to our public VPN network.",
    tagline: "24-hour free trial • No credit card required"
  },

  subscriptions: [
    {
      title: "1 Month",
      price: "$8",
      period: "/month",
      url: "https://tunnels.lemonsqueezy.com/buy/6f75871d-ea8d-46e3-927b-f62dc2453ad3",
      features: [
        "Public VPN Network Access",
        "Money Back Guarantee",
        "Community Support",
        "All Basic Features",
      ],
      popular: false,
    },
    {
      title: "6 Months",
      price: "$6",
      period: "/month",
      url: "https://tunnels.lemonsqueezy.com/buy/214e7bee-3e9c-4d14-8e3d-0a96a1b48361",
      features: [
        "Public VPN Network Access",
        "Money Back Guarantee",
        "Priority Support",
        "All Basic Features",
        "25% Savings",
      ],
      popular: true,
    },
    {
      title: "12 Months",
      price: "$4",
      period: "/month",
      url: "https://tunnels.lemonsqueezy.com/buy/71bb1dd8-8fac-4d56-bfbf-63cfd6081c5a",
      features: [
        "Public VPN Network Access",
        "Money Back Guarantee",
        "Priority Support",
        "All Basic Features",
        "50% Savings",
      ],
      popular: false,
    },
  ],

  anonymousKey: {
    title: "Anonymous License",
    price: "$8",
    period: "/month",
    url: "https://tunnels.lemonsqueezy.com/buy/e8cbc47c-c19b-4ef7-9f8a-c8e2b94597dd",
    description: "Top up your account anonymously with license keys",
  },

  freeFeatures: {
    title: "Always Free",
    description: "These features are available to everyone, no subscription required.",
    features: [
      {
        title: "✓ Private Servers",
        description: "Create unlimited private VPN servers at no cost. Perfect for personal use or small teams."
      },
      {
        title: "✓ DNS Protection",
        description: "Full DNS threat protection with daily blocklist updates, available without an account."
      },
      {
        title: "✓ Custom DNS Records",
        description: "Register custom A and TXT records with wildcard support in your configuration."
      },
      {
        title: "✓ Flexible Limits",
        description: "Configure device and user limits to match your needs on private servers."
      }
    ]
  },

  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "What's the difference between plans?",
        answer: "All plans provide the same features and access to the public VPN network. Longer subscriptions offer better value with discounted monthly rates."
      },
      {
        question: "Can I create an account anonymously?",
        answer: "Yes! You can create accounts using usernames or UUIDs, and top up using anonymous license keys purchased separately."
      },
      {
        question: "Do you offer refunds?",
        answer: "Yes, we offer a money-back guarantee on all subscriptions. Contact support if you're not satisfied."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards through our secure payment processor. Anonymous license keys can be purchased separately."
      }
    ]
  },

  comparisonSection: {
    title: "Why Pay More?",
    subtitle: "Compare Tunnels to commercial VPN services",
  },

  comparisonCards: {
    dividerLabel: "vs",
    leftCard: {
      title: "Commercial VPNs",
      subtitle: "$5-15/month",
      items: [
        "Monthly subscription required",
        "Limited device connections",
        "Their servers, their rules",
        "Closed-source software",
        "Trust their no-logs claims",
      ],
    },
    rightCard: {
      title: "Tunnels (Self-Hosted)",
      subtitle: "Free to self-host",
      accent: "green",
      items: [
        "No fees for self-hosted servers",
        "Configurable device limits",
        "Your server, your control",
        "Open source code",
        "Verify — don't trust",
      ],
    },
  },

  illustratedSelfHosted: {
    subtitle: "Self-Hosted",
    title: "Own Your Infrastructure",
    description: "Deploy on your own servers and pay nothing to us. Full control over your data, your network, and your costs.",
    features: [
      "Run on your own hardware",
      "No recurring fees for self-hosting",
      "Full data sovereignty",
      "Personal and internal use included",
    ],
  },

  cta: {
    title: "Ready to get started?",
    description: "Try Tunnels free for 24 hours. No credit card required.",
    buttons: [
      { text: "Download Now", href: "/download", primary: true },
      { text: "Contact Sales", href: "mailto:support@tunnels.is", primary: false }
    ]
  },

  relatedPages: [
    { title: "Download", description: "Get Tunnels for your platform.", path: "/download" },
    { title: "Features", description: "Explore the full feature set.", path: "/features" },
  ],
};

// ============================================================================
// TECHNICAL PAGE CONTENT
// ============================================================================

export const technicalContent = {
  hero: {
    title: "Technical Overview",
    description: "Deep dive into the architecture and technical capabilities of Tunnels VPN."
  },

  sections: [
    {
      title: "Public Routable VPN Network",
      description: "The Tunnels VPN application can apply dynamic routes to the public network tunnels, allowing for split route tunneling across multiple VPN servers."
    },
    {
      title: "Encryption and Security",
      description: "Tunnels implements modern cryptographic protocols and handshaking procedures.",
      details: "Authentication and Authorization use a combination of user/password and certificates. Every step of the encryption and handshake process is handled by Golang standard library methods - we do not hand-roll our own encryption schemes or functions.",
      encryptionTypes: [
        "AES-128-GCM",
        "AES-256-GCM",
        "ChaCha20-Poly1305"
      ],
      handshakeTypes: [
        "X25519 + ML-KEM-1024 (post-quantum hybrid)",
        "Elliptic Curve P521"
      ]
    },
    {
      title: "LAN Networks",
      description: "Tunnels LAN networks connect individual devices through an abstract network layer that exists on a single server. The LAN network is perfect for IoT devices, file servers, databases, and other services that require stricter access controls."
    },
    {
      title: "Advanced Routing",
      description: "Defining custom routes in Tunnels is simple - it can be done server-side or in the device config. Routing configurations are abstracted from the underlying networks, which enables routing of any IP address to any VPN or LAN network."
    },
    {
      title: "Abstract NAT",
      description: "Tunnels NAT is completely abstracted from the underlying networks, much like the routing. Any IP Address can be translated to any other IP Address. This feature can resolve networking problems that happen in large environments."
    }
  ],

  cta: {
    title: "Ready to explore more?",
    description: "Check out our comprehensive documentation for detailed technical guides and examples.",
    buttons: [
      { text: "Download Tunnels", href: "/download", primary: true },
      { text: "View All Features", href: "/features", primary: false }
    ]
  },

  performanceStats: [
    { value: 'Custom UDP', label: 'Protocol', description: 'Lightweight custom VPN protocol built in Go' },
    { value: '3', label: 'Cipher Suites', description: 'AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305' },
    { value: 'Post-Quantum', label: 'Key Exchange', description: 'X25519 + ML-KEM-1024 hybrid support' },
    { value: 'Any→Any', label: 'IP Routing', description: 'Fully abstracted from underlying networks' },
  ],

  encryptionTable: {
    headers: ['Algorithm', 'Type', 'Key Size', 'Use Case'],
    rows: [
      ['AES-128-GCM', 'AEAD Cipher', '128-bit', 'High-throughput environments'],
      ['AES-256-GCM', 'AEAD Cipher', '256-bit', 'Maximum security workloads'],
      ['ChaCha20-Poly1305', 'AEAD Cipher', '256-bit', 'Mobile and low-power devices'],
      ['X25519 + ML-KEM-1024', 'Hybrid Handshake', '255-bit + post-quantum', 'Future-proof key exchange'],
      ['Elliptic Curve P521', 'ECDH Handshake', '521-bit', 'FIPS-compatible deployments'],
    ],
  },

  terminalPreview: {
    title: 'Simple, Powerful CLI',
    description: 'Connect to servers, define routes, manage LAN networks, and apply NAT rules — all from a single unified interface. Server-side configurations are pushed to devices automatically on connect.',
    features: [
      'Connect to multiple VPN servers simultaneously',
      'Add and remove routes at runtime',
      'Apply NAT translations between any IPs',
      'Inspect live tunnel throughput per interface',
    ],
    lines: [
      { type: 'comment', text: 'Connect to a VPN server and apply split routes' },
      { type: 'command', text: 'tunnels connect --server us-east-1.example.com' },
      { type: 'success', text: 'Connected. Handshake complete (X25519 + ML-KEM-1024)' },
      { type: 'empty' },
      { type: 'comment', text: 'Add a custom route for a specific subnet' },
      { type: 'command', text: 'tunnels route add 192.168.10.0/24 --via vpn0' },
      { type: 'success', text: 'Route 192.168.10.0/24 → vpn0 added' },
      { type: 'empty' },
      { type: 'comment', text: 'List active tunnels and their status' },
      { type: 'command', text: 'tunnels list' },
      { type: 'output', text: 'vpn0   us-east-1   ↑ 12.4 MB  ↓ 38.1 MB   active' },
      { type: 'output', text: 'lan0   office-net  ↑  2.1 MB  ↓  9.8 MB   active' },
      { type: 'empty' },
      { type: 'comment', text: 'Apply a NAT translation rule' },
      { type: 'command', text: 'tunnels nat add --src 10.0.0.5 --dst 172.16.0.5' },
      { type: 'success', text: 'NAT rule created: 10.0.0.5 → 172.16.0.5' },
    ],
  },

  lanBentoItems: [
    {
      title: 'Isolated LAN Networks',
      description: 'Create virtual LAN segments that span the internet. Each LAN lives on a single server and is fully isolated from other networks — perfect for IoT devices, file servers, databases, and services requiring strict access controls.',
      features: [
        'Layer 3 IP-based networking',
        'Per-network isolation',
        'Group-based access controls',
        'No cross-network IP conflicts',
      ],
      highlight: 'Ideal for IoT and internal services',
    },
    {
      title: 'Advanced Routing',
      description: 'Define custom routes server-side or directly in the device config. Routes are abstracted from the underlying network — any IP can be forwarded to any VPN or LAN.',
    },
    {
      title: 'Split Tunneling',
      description: 'Route only specific subnets through Tunnels while leaving other traffic on the default path. Apply different rules per interface or per connection.',
    },
    {
      title: 'Dynamic Route Application',
      description: 'Routes can be pushed from the server automatically when a device connects, removing the need for per-device manual configuration.',
    },
  ],

  illustratedVPN: {
    subtitle: 'Public Routable VPN',
    features: [
      'Direct public IP routing',
      'No NAT traversal needed',
      'Global server deployment',
      'Multi-server support',
      'Split route tunneling across multiple servers',
    ],
  },

  illustratedEncryption: {
    subtitle: 'Modern Cryptography',
    title: 'Strong Encryption',
    description: 'All traffic is encrypted using modern cryptographic primitives. ChaCha20-Poly1305 provides authenticated encryption with excellent performance on all platforms, including embedded devices.',
    features: [
      'ChaCha20-Poly1305 AEAD',
      'X25519 key exchange',
      'HKDF-SHA512 key derivation',
      'Perfect forward secrecy',
      'Post-quantum hybrid option (ML-KEM-1024)',
    ],
  },

  cliTerminal: {
    title: 'Simple, Powerful CLI',
    description: 'Connect to servers, define routes, manage LAN networks, and apply NAT rules — all from a single unified interface. Server-side configurations are pushed to devices automatically on connect.',
    features: [
      'Connect to multiple VPN servers simultaneously',
      'Add and remove routes at runtime',
      'Apply NAT translations between any IPs',
      'Inspect live tunnel throughput per interface',
    ],
  },

  natCalloutFeatures: [
    'Translate any IP to any other IP',
    'Fully abstracted from underlying networks',
    'Works across VPN and LAN simultaneously',
    'Resolves IP conflicts in large environments',
    'Server-side or device-side configuration',
    'No kernel-level changes required',
  ],

  sectionLabels: {
    encryption: 'Encryption and Security',
    lan: 'LAN Networks',
    routing: 'Advanced Routing',
  },

  relatedPages: [
    { title: "Features", description: "See the full feature overview.", path: "/features" },
    { title: "Security", description: "Learn about our security architecture.", path: "/security" },
  ],
};

// ============================================================================
// DNS PAGE CONTENT
// ============================================================================

export const dnsContent = {
  hero: {
    title: "Routable DNS",
    subtitle: "With Security and Daily Threat List Updates",
    description: "Tunnels offers a built-in DNS Server/Proxy which comes with extensive blacklisting features, daily block list updates and the ability to define custom DNS records. Tunnels DNS server also facilitates DNS Routing to ensure proper DNS resolution when connected to multiple networks.",
    showNetworkLines: true,
    showScrollIndicator: false,
    buttons: [
      { text: "Download Free", href: "/download", primary: true },
      { text: "Learn More", href: "#features" }
    ]
  },

  images: {
    serverDNS: "https://raw.githubusercontent.com/tunnels-is/media/master/new-website/banner-grid/1.png",
    deviceDNS: "https://raw.githubusercontent.com/tunnels-is/media/master/new-website/banner-grid/1.png"
  },

  dnsFeatures: [
    {
      title: "DNS Threat Protection",
      description: "Block malicious domains before they can harm your network with daily updated threat lists from trusted sources.",
      icon: <ShieldCheckIcon />
    },
    {
      title: "Custom DNS Records",
      description: "Register custom A and TXT records with wildcard support directly in your configuration.",
      icon: <DocumentIcon />
    },
    {
      title: "DNS Routing",
      description: "Forward specific domains to designated networks, enabling proper resolution across multiple VPN connections.",
      icon: <LinkIcon />
    },
    {
      title: "DNS Analytics",
      description: "Real-time insights into DNS queries with detailed logging and WHOIS information at your fingertips.",
      icon: <ChartIcon />
    },
    {
      title: "DNS to DoH",
      description: "Automatically translate standard DNS queries to DNS over HTTPS for enhanced privacy.",
      icon: <LockShieldIcon />
    },
    {
      title: "Daily Updates",
      description: "Combined blocklists from popular sources, automatically updated every day to stay ahead of threats.",
      icon: <SyncIcon />
    },
  ],

  serverDNS: {
    title: "Server DNS Configurations",
    description1: "Tunnels servers can be configured to forward domains, including wildcards, to an internal network. This removes the need for specific client side DNS records or switching DNS servers when users change networks.",
    description2: "When a device connects to a Tunnels server, its DNS configurations are automatically sent to the device, ensuring seamless connectivity across all your networks."
  },

  deviceDNS: {
    title: "Device DNS Configurations",
    description1: "DNS records can be registered directly in the Tunnels application config, completely removing the need for external DNS servers.",
    description2: "This gives you complete control over DNS resolution on your device, with the ability to override any domain and point it wherever you need - perfect for development, testing, or accessing internal services."
  },

  cta: {
    title: "DNS Protection Available For Free",
    description: "Get started with Tunnels DNS protection today. No account or payment needed for basic DNS features.",
    buttons: [
      { text: "Download Tunnels", href: "/download", primary: true }
    ]
  },

  dnsStats: [
    { value: '1M+', label: 'Domains Blocked', description: 'Malicious domains in combined blocklists' },
    { value: '10ms', label: 'Avg Response', description: 'Typical DNS resolution time' },
    { value: 'Daily', label: 'List Updates', description: 'Blocklists refreshed every 24 hours' },
    { value: '100%', label: 'Private', description: 'Queries never leave your network' },
  ],

  serverTerminalLines: [
    { type: 'comment', text: 'Set upstream DNS resolver' },
    { type: 'command', text: 'tunnels dns add --server 1.1.1.1' },
    { type: 'success', text: 'Upstream server 1.1.1.1 added' },
    { type: 'empty' },
    { type: 'comment', text: 'Enable malware blocklist' },
    { type: 'command', text: 'tunnels dns block --list malware' },
    { type: 'success', text: 'Blocklist activated: 842,310 domains' },
    { type: 'empty' },
    { type: 'comment', text: 'Route corporate domain to internal resolver' },
    { type: 'command', text: 'tunnels dns route --domain *.corp.local --server 10.0.0.1' },
    { type: 'success', text: 'Route added: *.corp.local -> 10.0.0.1' },
    { type: 'empty' },
    { type: 'comment', text: 'Add a custom A record' },
    { type: 'command', text: 'tunnels dns record --name nas.home --type A --value 192.168.1.50' },
    { type: 'success', text: 'Record created: nas.home -> 192.168.1.50' },
    { type: 'empty' },
    { type: 'comment', text: 'Enable DNS over HTTPS translation' },
    { type: 'command', text: 'tunnels dns doh --enable' },
    { type: 'success', text: 'DoH translation enabled' },
  ],

  deviceDNSCards: [
    {
      title: 'Local Hostname Overrides',
      description: 'Point any domain to any IP directly from the device config, with no external DNS server required.',
    },
    {
      title: 'Per-Device Blocklists',
      description: 'Apply different blocklists per device. Block ads on personal machines, enable strict malware filtering on servers.',
    },
    {
      title: 'Automatic Server Sync',
      description: 'When a device connects, DNS configurations from the server are automatically pushed down, requiring zero manual setup.',
    },
    {
      title: 'Development & Testing',
      description: 'Override production domains locally to point at staging or local servers. Ideal for development workflows without touching /etc/hosts.',
    },
  ],

  privateDNSHeader: {
    title: "Private DNS Features",
    subtitle: "Everything you need for internal name resolution",
  },

  illustratedDNS: {
    subtitle: "Simple Resolution",
    title: "Private DNS for Your Network",
    description: "Access your services by memorable names instead of IP addresses. tunnels automatically resolves internal hostnames for all connected devices.",
    features: [
      "home.lan -> your home server",
      "nas.lan -> your storage device",
      "pi.lan -> your Raspberry Pi",
      "Works across all your devices",
    ],
  },

  serverConfigHeader: {
    subtitle: "Configure DNS on your tunnels server with a single CLI",
  },

  serverTerminalPreview: {
    title: "Powerful Server-Side Configuration",
    features: [
      "Forward wildcard domains to internal resolvers",
      "Activate curated threat and malware blocklists",
      "Define custom A and TXT records with wildcard support",
      "Push configurations automatically to connected devices",
    ],
  },

  threatCallout: {
    title: "DNS Threat Protection — Updated Every Day",
    description: "Tunnels ships with combined blocklists sourced from the most trusted security feeds. Malicious domains, trackers, and ad networks are blocked at the DNS layer before any connection is made. Lists are refreshed automatically every 24 hours so your network stays protected without any manual intervention.",
    features: [
      "Malware and phishing domain blocking",
      "Tracker and ad network filtering",
      "Daily automated list updates",
      "DNS-over-HTTPS for encrypted upstream queries",
      "Per-device and per-server blocklist control",
      "Zero performance impact on legitimate traffic",
    ],
  },

  deviceDNSFeatures: [
    "No external DNS server required",
    "Override any domain on a per-device basis",
    "Configurations sync automatically on connect",
    "Perfect for development and testing environments",
  ],

  relatedPages: [
    { title: "Security", description: "Learn about our security architecture.", path: "/security" },
    { title: "Homelab", description: "Self-host your VPN with built-in DNS management.", path: "/homelab" },
  ],
};

// ============================================================================
// FREE AND OPEN SOURCE PAGE CONTENT
// ============================================================================

export const freeOpenSourceContent = {
  hero: {
    title: "Tunnels is Free and Open Source",
    description: "All features are available in the open source version. Self-hosting is free with no paywalls. The public VPN network requires a subscription.",
    buttonText: "View on GitHub",
    buttonUrl: "https://github.com/tunnels-is",
    buttons: [
      { text: "View on GitHub", href: "https://github.com/tunnels-is", primary: true }
    ]
  },

  statsBanner: [
    { value: "$0", label: "Self-Host Cost", description: "All features, no paywalls" },
    { value: "Open", label: "Source Code", description: "Full source on GitHub" },
    { value: "Go", label: "Built With", description: "Modern, auditable codebase" },
    { value: "Free", label: "DNS Protection", description: "No account required" },
  ],

  whyOpenSource: {
    title: "Why Open Source?",
    reasons: [
      {
        title: "Transparency",
        content1: "Open source means complete transparency. Anyone can review our code, audit our security practices, and verify that we're doing exactly what we say we're doing.",
        content2: "There are no hidden backdoors, no secret data collection, and no mysterious code that you can't inspect."
      },
      {
        title: "Community",
        content1: "Being open source allows developers and security experts from around the world to contribute, improve, and help shape the future of Tunnels.",
        content2: "This collaborative approach leads to better security, more features, and faster bug fixes than any closed-source project could achieve alone."
      },
      {
        title: "Freedom",
        content1: "You're free to use, modify, and distribute Tunnels for personal and internal use. Commercial resale of the software is restricted by the license.",
        content2: "Deploy it on your own infrastructure, integrate it with your systems, and maintain complete control over your networking solution."
      },
      {
        title: "Trust",
        content1: "In the world of VPNs and networking, trust is everything. Open source allows you to verify our claims and build that trust through transparency.",
        content2: "Security experts can audit the code, and the community can vouch for the integrity of the project."
      }
    ]
  },

  community: {
    title: "Join Our Community",
    description: "Join our community to contribute, follow our development, or just stay connected with other Tunnels users."
  },

  communityCallout: {
    accent: "green",
    title: "Community-Driven Development",
    description: "Tunnels is built by a global community of developers, security researchers, and networking experts. Every pull request, issue report, and code review makes the project stronger. Whether you want to contribute code, improve documentation, or share feedback — you are welcome here.",
    features: [
      "Open pull requests welcome",
      "Active Discord community",
      "Open source codebase for review",
      "Transparent development",
    ],
    button: { text: "View on GitHub", href: "https://github.com/tunnels-is", primary: true }
  },

  illustratedSecurity: {
    subtitle: "Verifiable Security",
    title: "Audit Every Line of Code",
    description: "Don't trust, verify. Our entire codebase is available for inspection. Security researchers regularly audit our code and report findings publicly.",
    features: [
      "Full source on GitHub",
      "Community code reviews welcome",
      "Written in Go for auditability",
      "Minimal external dependencies"
    ],
    illustrationPosition: "left",
    illustrationSize: "large"
  },

  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/tunnels-is',
      icon: <GitHubIcon />,
      desc: 'View code & contribute'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/invite/7Ts3PCnCd9',
      icon: <DiscordIcon />,
      desc: 'Chat with the community'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/tunnels_is',
      icon: <TwitterIcon />,
      desc: 'Follow for updates'
    },
    {
      name: 'Reddit',
      url: 'https://www.reddit.com/r/tunnels_is/',
      icon: <RedditIcon />,
      desc: 'Join discussions'
    }
  ],

  cta: {
    title: "Ready to get started?",
    description: "Download Tunnels today and take control of your networking.",
    buttons: [
      { text: "Download Now", href: "/download", primary: true },
      { text: "View Source Code", href: "https://github.com/tunnels-is", primary: false }
    ]
  },

  relatedPages: [
    { title: "Features", description: "Explore the full feature set.", path: "/features" },
    { title: "Security", description: "Learn about our security architecture.", path: "/security" },
  ],
};

// ============================================================================
// ENTERPRISE PAGE CONTENT (EXTENDED)
// ============================================================================

export const enterpriseContent = {
  hero: {
    title: "Tunnels For Large Networks",
    subtitle: "Lightweight design for big scale",
    description: "Built from the ground up to handle large-scale networking with minimal overhead and strong security."
  },

  images: {
    management: "https://raw.githubusercontent.com/tunnels-is/media/master/new-website/banner-grid/1.png",
    security: "https://raw.githubusercontent.com/tunnels-is/media/master/new-website/banner-grid/1.png"
  },

  benefits: [
    {
      title: "Flexibility & Scalability",
      description: "Scale your deployment by adding additional VPN servers as your organization grows.",
      icon: <ChartIcon />
    },
    {
      title: "Reduced Attack Surface",
      description: "Built with minimal dependencies and no third-party services, reducing vulnerabilities.",
      icon: <LockShieldIcon />
    },
    {
      title: "24/7 Support",
      description: "Enterprise clients receive round-the-clock support via all support platforms.",
      icon: <ClockIcon />
    },
    {
      title: "On-Premise Deployment",
      description: "Full on-premise installations for organizations requiring complete control and security compliance.",
      icon: <BuildingIcon />
    },
    {
      title: "No Vendor Lock",
      description: "Deploy on any network without extensive configurations. Your infrastructure, your control.",
      icon: <UnlockIcon />
    },
    {
      title: "Custom Integrations",
      description: "We work with you to create custom integrations that fit your specific needs.",
      icon: <WrenchIcon />
    }
  ],

  management: {
    title: "Effortless Management",
    description1: "Connect your employees to all of their networks at once. Tunnels is designed for easy deployment - simply download, configure, and run.",
    description2: "This makes managing a large number of users simple and pain-free. Company-wide configurations can be distributed as simple files to users in multiple ways or automatically updated by system administrators.",
    features: [
      {
        title: "Minimal Installation",
        description: "Deploy across your organization with simple setup"
      },
      {
        title: "Centralized Configuration",
        description: "Distribute configuration files to devices"
      },
      {
        title: "User Management",
        description: "Built-in user, device, and group management"
      }
    ]
  },

  security: {
    title: "Reduced Attack Surface",
    description1: "Tunnels is written in Golang with minimal module use and no third-party services. This method of simplicity reduces the overall attack surface, simplifies security reviews, and minimizes the risk of vulnerabilities.",
    description2: "Golang is an open source programming language made by Google and is under strict review by security experts.",
    golangUrl: "https://go.dev",
    features: [
      {
        title: "Minimal Dependencies",
        description: "Fewer attack vectors, easier audits"
      },
      {
        title: "No Third-Party Services",
        description: "Complete control over your data and infrastructure"
      },
      {
        title: "Security Audits Welcome",
        description: "Simple codebase makes reviews straightforward"
      }
    ]
  },

  cta: {
    title: "Ready to scale your network?",
    description: "Contact our sales team to discuss how Tunnels can fit your enterprise needs.",
    buttons: [
      { text: "Contact Sales", href: "mailto:support@tunnels.is", primary: true }
    ]
  },

  heroButtons: [
    { text: 'Contact Sales', href: 'mailto:support@tunnels.is', primary: true },
    { text: 'View Pricing', href: '/pricing' }
  ],

  enterpriseStats: [
    { value: '10K+', label: 'Connections', description: 'Concurrent nodes supported' },
    { value: 'Fast', label: 'Latency', description: 'Routing decision time' },
    { value: 'High Uptime', label: 'Uptime', description: 'Architecture designed for reliability' },
    { value: '0', label: 'Logs', description: 'Zero-knowledge architecture' },
  ],

  benefitsHeader: {
    title: "Why Choose Tunnels for Enterprise",
    subtitle: "Scalable, secure, and designed for enterprise-grade networking"
  },

  managementItems: [
    {
      title: 'Centralized Dashboard',
      description: 'Manage all nodes, users, and networks from a single control plane.',
      features: ['Real-time node monitoring', 'Bulk configuration deployment', 'Network topology visualization'],
      highlight: 'Core Feature',
    },
    {
      title: 'User Groups',
      description: 'Organize users into groups with shared access policies and permissions.',
    },
    {
      title: 'API Access',
      description: 'Full REST API for automation, integration with your existing infrastructure.',
    },
    {
      title: 'Audit Trail',
      description: 'Complete audit logging for compliance requirements and security reviews.',
    },
  ],

  accessControlHeader: {
    title: "Role-Based Access Control",
    subtitle: "Define who can access what with granular permissions"
  },

  accessControlRows: [
    ['User-based policies', 'Per-user access rules', true],
    ['Group permissions', 'Shared team policies', true],
    ['Device trust levels', 'Hardware-bound authentication', true],
    ['Time-based access', 'Schedule-based rules', true],
    ['Network segmentation', 'Isolated network zones', true],
    ['Audit logging', 'Full compliance trail', true],
  ],

  accessControlTableConfig: {
    headers: ['Capability', 'Description', 'Available'],
    caption: "All access control features are included in the enterprise plan"
  },

  illustratedScale: {
    subtitle: "Built for Scale",
    title: "Enterprise-Grade Infrastructure",
    description: "Deploy across thousands of nodes with centralized management. Tunnels scales from small teams to global enterprises without compromising performance.",
    features: [
      "Supports 10,000+ concurrent connections",
      "Fast routing decisions",
      "Horizontal scaling architecture",
      "High availability architecture"
    ]
  },

  zeroTrustCallout: {
    title: "Zero Trust Architecture",
    description: "Every connection is verified, every packet is encrypted. Tunnels implements a zero-trust model where no device or user is trusted by default, regardless of network location.",
    features: [
      "End-to-end encryption",
      "Certificate-based authentication",
      "Network micro-segmentation",
      "Continuous verification"
    ]
  },

  illustratedTransparency: {
    subtitle: "Enterprise Security",
    title: "Open Source Transparency",
    description: "Every line of code is open for inspection and audit. No black boxes, no hidden backdoors — just transparent, verifiable security you can trust.",
    features: [
      "Open source — fully auditable",
      "Community security reviews welcome",
      "Active community vulnerability reporting",
      "Self-host for maximum control"
    ]
  },

  relatedPages: [
    { title: "Office Networks", description: "Connect multiple office locations securely.", path: "/office" },
    { title: "Cloud & Baremetal", description: "Deploy on cloud providers or dedicated servers.", path: "/cloud" },
  ],
};

// ============================================================================
// CLOUD/BAREMETAL PAGE CONTENT (EXTENDED)
// ============================================================================

export const cloudBaremetalContent = {
  hero: {
    title: "Cloud & Baremetal",
    subtitle: "Multi-Server Architecture for Scale",
    description: "Deploy a distributed VPN infrastructure with centralized authentication. Scale globally with multiple VPN servers while managing everything from a single control plane.",
    buttons: [
      { text: "Get Started", href: "/download", primary: true },
      { text: "Talk to Sales", href: "mailto:support@tunnels.is", primary: false }
    ]
  },

  benefitsSection: {
    title: "Built for Scale & Reliability",
    subtitle: "Architectural benefits that give you scalable capabilities without unnecessary complexity"
  },

  benefits: [
    {
      title: "Geographic Distribution",
      description: "Deploy VPN servers across multiple regions for optimal performance and low latency access worldwide.",
      icon: <GlobeIcon />
    },
    {
      title: "Multi-Server Resilience",
      description: "Deploy multiple VPN servers so users can switch if one becomes unavailable.",
      icon: <BoltIcon />
    },
    {
      title: "Scalable Architecture",
      description: "Separate authentication from VPN traffic handling. Add capacity by deploying additional VPN servers.",
      icon: <ChartIcon />
    },
    {
      title: "Centralized Management",
      description: "Single control server manages users, permissions, and policies across all VPN endpoints.",
      icon: <TargetIcon />
    },
    {
      title: "Multi-Network Access",
      description: "Connect users to multiple private networks simultaneously, each through its optimal VPN server.",
      icon: <LinkIcon />
    },
    {
      title: "Full Control",
      description: "Deploy on your own infrastructure - cloud, baremetal, or hybrid. No vendor dependencies.",
      icon: <WrenchIcon />
    }
  ],

  architecture: {
    title: "Distributed by Design",
    description: "Tunnels multi-server architecture separates concerns for maximum flexibility and performance. Deploy one control server for authentication and management, then add as many VPN servers as you need to handle traffic and provide geographic coverage.",
    controlServer: {
      title: "Control Server",
      description: "Handles user authentication, authorization, device management, and policy enforcement. Signs authentication tokens for VPN servers to verify."
    },
    vpnServers: {
      title: "VPN Servers",
      description: "Handle VPN connections, tunnel traffic, and provide network access. Verify authentication signatures from control server without needing direct database access."
    }
  },

  useCases: [
    {
      title: "Global Enterprise",
      description: "Deploy regional VPN servers for offices in US, EU, and Asia with centralized authentication",
      scenario: "Control Server in US-East, VPN servers in each region for local network access"
    },
    {
      title: "Cloud + On-Premise Hybrid",
      description: "Mix cloud-hosted control with baremetal VPN servers for sensitive workload isolation",
      scenario: "AWS control server, VPN servers on owned datacenter hardware"
    },
    {
      title: "High-Traffic Applications",
      description: "Distribute VPN load across multiple servers while maintaining single point of user management",
      scenario: "1 Control Server + multiple VPN servers handling distributed load"
    },
    {
      title: "Development Environments",
      description: "Separate VPN servers for dev, staging, and production with unified access control",
      scenario: "Per-environment VPN servers with role-based access from single auth server"
    }
  ],

  technicalCapabilities: [
    {
      title: "Signature-Based Authentication",
      description: "Control server signs authentication tokens, VPN servers verify signatures",
      technical: "Public key cryptography ensures VPN servers never need database access"
    },
    {
      title: "Network Isolation",
      description: "Each VPN server manages its own network range, preventing IP conflicts",
      technical: "Configure different CIDR blocks per server (e.g., 10.0.0.0/16, 10.1.0.0/16)"
    },
    {
      title: "Flexible Routing",
      description: "Define custom routes for each VPN server to access specific network segments",
      technical: "Route tables configured per server for fine-grained network access control"
    },
    {
      title: "Simple Client Configuration",
      description: "Clients connect to configured VPN servers with server list from control server",
      technical: "Control server provides available servers list for client configuration"
    }
  ],

  deploymentOptions: [
    {
      platform: "AWS / GCP / Azure",
      description: "Deploy on major cloud providers with managed infrastructure",
      features: ["Easy deployment", "Managed networking", "Manual scaling", "Global regions"]
    },
    {
      platform: "Baremetal / Dedicated Servers",
      description: "Maximum performance and control on physical hardware you own or lease",
      features: ["Full hardware control", "No hypervisor overhead", "Predictable performance", "Cost-effective at scale"]
    },
    {
      platform: "Hybrid Cloud",
      description: "Best of both worlds - cloud for flexibility, baremetal for critical workloads",
      features: ["Flexible deployment", "Cost optimization", "Compliance-friendly", "Geographic flexibility"]
    },
    {
      platform: "Private Cloud / OpenStack",
      description: "Self-hosted cloud infrastructure with full control over every layer",
      features: ["Complete control", "Data sovereignty", "Custom networking", "No external dependencies"]
    }
  ],

  performance: {
    title: "Built for Performance",
    stats: [
      {
        value: "65,535",
        label: "Max Clients/Server",
        description: "Per-server limit, scale with additional servers"
      },
      {
        value: "Efficient",
        label: "Auth Verification",
        description: "Signature-based auth without database lookups"
      },
      {
        value: "Resilient",
        label: "Architecture",
        description: "Multi-server deployment for redundancy"
      }
    ]
  },

  gettingStarted: {
    title: "Ready to Deploy?",
    description: "Get started with multi-server Tunnels architecture today. Full deployment guides and 24/7 support for enterprise customers.",
    documentation: {
      title: "Documentation",
      description: "Comprehensive guides for setting up control servers, VPN servers, and client configuration.",
      features: [
        "Multi-server architecture guide",
        "Deployment best practices",
        "Security configuration",
        "Troubleshooting & monitoring"
      ],
      buttonText: "View Documentation",
      buttonUrl: "/"
    },
    enterpriseSupport: {
      title: "Enterprise Support",
      description: "Need help with deployment? Our team provides full support for enterprise multi-server setups.",
      features: [
        "Architecture consulting",
        "Custom integrations",
        "24/7 technical support",
        "Deployment assistance"
      ],
      buttonText: "Contact Sales",
      buttonUrl: "mailto:support@tunnels.is"
    },
    finalCTA: {
      buttonText: "Download & Get Started Free",
      buttonUrl: "/download",
      tagline: "24-hour free trial • No credit card required"
    }
  },

  illustratedArchitecture: {
    subtitle: "Distributed Architecture",
    title: "Scale Without Limits",
    description: "Deploy VPN servers across multiple regions while managing everything from a single control plane. Each server operates independently, verifying auth tokens without database access.",
    features: [
      "One control server for auth",
      "Unlimited VPN server nodes",
      "Geographic distribution",
      "Independent failure domains"
    ]
  },

  architectureBentoExtras: {
    item0Features: [
      "User authentication & authorization",
      "Device & policy management",
      "Signs tokens for VPN server verification",
      "Single source of truth for access control"
    ],
    item0Highlight: "One control server per deployment",
    item2: {
      title: "Isolated Failure Domains",
      description: "Each VPN server operates independently. A failure in one region has no impact on any other server or the control plane."
    }
  },

  deployHeader: {
    title: "Deploy Anywhere, Manage Centrally",
    subtitle: "Run VPN servers in any region — cloud providers, colocations, or your own data centers"
  },

  terminalPreview: {
    title: "Multi-Region in Minutes",
    description: "Spin up VPN servers in new regions with straightforward server configuration. Maintain central control from one place.",
    features: [
      "Multi-region deployment",
      "Independent server nodes",
      "Central policy management",
      "Real-time monitoring across all nodes"
    ],
    lines: [
      { type: "comment", text: "Install Tunnels server on control node" },
      { type: "command", text: "wget https://tunnels.is/install.sh && sudo bash install.sh" },
      { type: "success", text: "Tunnels server installed" },
      { type: "empty" },
      { type: "comment", text: "Configure as control server in config.json" },
      { type: "command", text: "sudo nano /etc/tunnels/config.json" },
      { type: "info", text: "Set AUTH: true, VPN: true, define server tag and network" },
      { type: "empty" },
      { type: "comment", text: "Start the server" },
      { type: "command", text: "sudo systemctl start tunnels" },
      { type: "success", text: "Control server running" },
      { type: "empty" },
      { type: "comment", text: "Repeat on additional VPN nodes in other regions" },
      { type: "info", text: "Each VPN server registers with the control server" }
    ]
  },

  deploymentsHeader: {
    title: "Real-World Deployments",
    subtitle: "See how organizations are using multi-server Tunnels architecture"
  },

  infrastructureHeader: {
    title: "Cloud, Baremetal, or Hybrid",
    subtitle: "Deploy on the infrastructure that fits your needs — no vendor lock-in, complete flexibility"
  },

  deploymentTable: {
    headers: ["Deployment Option", "Performance", "Control", "Cost Profile", "Best For"],
    rows: [
      ["AWS / GCP / Azure", "High", "Managed", "Pay-as-you-go", "Fast global rollouts"],
      ["Baremetal / Dedicated", "Maximum", "Full", "Predictable at scale", "High-throughput workloads"],
      ["Hybrid Cloud", "High", "Flexible", "Optimized", "Compliance & flexibility"],
      ["Private Cloud / OpenStack", "High", "Complete", "CapEx model", "Data sovereignty requirements"],
      ["Docker / Containers", "Good", "Full", "Efficient", "Dev & staging environments"]
    ],
    caption: "All deployment options support the full Tunnels feature set. Mix and match within a single deployment."
  },

  zeroTrustCallout: {
    title: "Zero Trust Architecture by Design",
    description: "VPN servers verify authentication tokens using public key cryptography — no shared secrets, no direct database connections between servers. Each component operates with the minimum trust and access it needs to do its job.",
    features: [
      "Signature-based auth — no shared secrets",
      "VPN servers never touch the user database",
      "Isolated failure domains prevent lateral movement",
      "Full audit logging on control and VPN servers"
    ],
    button: { text: "Read Security Docs", href: "https://docs.tunnels.is/docs", primary: false }
  },

  ctaSection: {
    title: "Ready to Deploy?",
    description: "Get started with multi-server Tunnels architecture today. Full deployment guides and 24/7 support for enterprise customers.",
    buttons: [
      { text: "Download & Get Started", href: "/download", primary: true },
      { text: "View Documentation", href: "https://docs.tunnels.is/docs", primary: false }
    ]
  },

  relatedPages: [
    { title: "Office Networks", description: "Connect multiple office locations securely.", path: "/office" },
    { title: "Enterprise", description: "Scale across teams with centralized management.", path: "/enterprise" },
  ],
};

// ============================================================================
// OFFICE NETWORKS PAGE CONTENT
// ============================================================================

export const officeNetworksContent = {
  hero: {
    title: "Office Networks",
    subtitle: "Secure Access for Your Entire Team",
    description: "Connect remote employees to office resources with strong encryption and access controls. Manage users, control access, and keep your network protected.",
    buttons: [
      { text: "Get Started Free", href: "/download", primary: true },
      { text: "View Documentation", href: "https://docs.tunnels.is/docs", primary: false }
    ]
  },

  benefitsSection: {
    title: "Everything You Need for Office VPN",
    subtitle: "Built-in features that make managing office network access simple and secure"
  },

  benefits: [
    {
      title: "Centralized User Management",
      description: "Manage all employees from a single dashboard. Create user groups, assign access levels, and control who can access which resources.",
      icon: <UsersIcon />
    },
    {
      title: "Group-Based Access Control",
      description: "Create departments or teams with specific network access. Engineering gets dev servers, Finance gets accounting systems.",
      icon: <ShieldCheckIcon />
    },
    {
      title: "Split Tunneling",
      description: "Route only office traffic through the VPN. Personal browsing stays on local internet, keeping bandwidth efficient.",
      icon: <LinkIcon />
    },
    {
      title: "Internal DNS",
      description: "Access internal services by name. Set up wiki.company, git.internal, or any custom domain that resolves only on the VPN.",
      icon: <GlobeIcon />
    },
    {
      title: "Two-Factor Authentication",
      description: "Secure employee access with TOTP-based 2FA. Protect your network even if passwords are compromised.",
      icon: <LockShieldIcon />
    },
    {
      title: "Device Management",
      description: "Track and manage every device connecting to your network. Revoke access instantly when employees leave.",
      icon: <DevicesIcon />
    }
  ],

  useCases: [
    {
      title: "Remote Team Access",
      description: "Give remote employees secure access to office resources as if they were on-site",
      scenario: "Employees work from home but access file servers, printers, and internal tools seamlessly"
    },
    {
      title: "Multi-Office Connectivity",
      description: "Connect branch offices to headquarters with dedicated VPN servers per location",
      scenario: "HQ in New York, branches in LA and London - all on one unified network"
    },
    {
      title: "Contractor Access",
      description: "Provide limited, time-bound access to external contractors without exposing your full network",
      scenario: "Contractors get access only to their project servers, automatically revoked when contract ends"
    },
    {
      title: "BYOD Policy",
      description: "Allow employees to use personal devices securely with per-device access controls",
      scenario: "Personal laptops connect to work resources through isolated, monitored VPN tunnels"
    }
  ],

  cta: {
    title: "Ready to Secure Your Office?",
    description: "Get started with Tunnels for your office network. Free to use, open source, and ready for teams of any size.",
    buttons: [
      { text: "Download Tunnels Free", href: "/download", primary: true },
      { text: "Contact Us", href: "mailto:support@tunnels.is", primary: false }
    ]
  },

  quickStats: [
    { value: 'Up to 65K', label: 'Clients per Server', description: 'Scale your team without infrastructure limits' },
    { value: 'Split', label: 'Tunnel Support', description: 'Office traffic on VPN, personal traffic stays local' },
    { value: 'TOTP 2FA', label: 'Built-In Auth', description: 'Two-factor authentication out of the box' },
    { value: 'Zero Trust', label: 'Security Model', description: 'Every connection verified and encrypted' },
  ],

  setupSteps: [
    {
      title: 'Deploy Your Server',
      description: 'Install the Tunnels server on any Linux machine - cloud, VPS, or baremetal in your office.',
      command: 'wget https://tunnels.is/install.sh && sudo bash install.sh',
    },
    {
      title: 'Create User Groups',
      description: 'Define departments like Engineering, Finance, and HR. Each group gets access only to the resources it needs.',
      command: 'Configure groups via the admin dashboard',
    },
    {
      title: 'Invite Your Team',
      description: 'Add employees via the admin dashboard. They receive credentials and can connect within minutes.',
      command: 'Create users with username/password registration',
    },
  ],

  terminalLines: [
    { type: 'comment', text: 'Connect to the office network' },
    { type: 'command', text: 'tunnels connect office-vpn' },
    { type: 'success', text: 'Connected to office-vpn (10.0.0.42)' },
    { type: 'empty' },
    { type: 'comment', text: 'Internal DNS resolves company hostnames' },
    { type: 'command', text: 'ping wiki.internal' },
    { type: 'output', text: 'PING wiki.internal (10.0.1.10): 56 bytes' },
    { type: 'output', text: '64 bytes from 10.0.1.10: icmp_seq=0 ttl=64 time=1.4 ms' },
    { type: 'empty' },
    { type: 'comment', text: 'Access the git server by name' },
    { type: 'command', text: 'git clone git@git.internal:org/repo.git' },
    { type: 'success', text: 'Cloning into repo... done.' },
  ],

  useCaseBentoItems: [
    {
      title: 'Remote Team Access',
      description: 'Give remote employees secure access to office resources as if they were on-site. File servers, printers, and internal tools work seamlessly from anywhere.',
    },
    {
      title: 'Multi-Office Connectivity',
      description: 'Connect branch offices to headquarters with dedicated VPN servers per location. HQ in New York, branches in LA and London - one unified network.',
    },
    {
      title: 'Contractor Access',
      description: 'Provide limited, time-bound access to external contractors without exposing your full network. Scoped to only the project servers they need, revoked when the contract ends.',
    },
    {
      title: 'BYOD Policy',
      description: 'Allow employees to use personal devices securely with per-device access controls. Personal laptops connect through isolated, monitored VPN tunnels.',
    },
  ],

  illustratedRemoteAccess: {
    subtitle: 'Work From Anywhere',
    title: 'Secure Remote Access',
    description: "Give your team secure access to office resources from anywhere in the world. Employees connect seamlessly whether they're at home, a coffee shop, or traveling abroad.",
    features: [
      'Access from any location',
      'Same experience as in-office',
      'No complex setup required',
      'Automatic reconnection',
    ],
  },

  setupHeader: {
    title: 'Up and Running in Minutes',
    subtitle: 'Three steps to connect your entire team to the office network',
  },

  terminalPreview: {
    title: 'Access Internal Services by Name',
    description: 'Once connected, employees use internal DNS to reach company tools by hostname - no IP addresses to memorize. Works out of the box with any custom domain you configure.',
    features: [
      'Custom internal domains (wiki.internal, git.internal)',
      'Split tunneling keeps personal traffic off the VPN',
      'Available on Windows, macOS, and Linux desktops',
      'Reconnects automatically after network changes',
    ],
  },

  scenariosHeader: {
    title: 'Common Scenarios',
    subtitle: 'How organizations use Tunnels for office network access',
  },

  accessControlCallout: {
    title: 'Role-Based Access Control',
    description: "Define exactly who can access what. Engineering gets development servers, Finance gets accounting systems, contractors get only the project resources they need. Each employee sees only what's relevant to their role.",
    features: [
      'Per-department permission groups',
      'Group-based network access control',
      'Per-device authentication tokens',
      'User and device management dashboard',
      'Instant revocation when employees leave',
      'Configurable connection and bandwidth limits',
    ],
  },

  illustratedSecurity: {
    subtitle: 'Enterprise Security',
    title: 'Zero Trust by Default',
    description: 'Every connection is encrypted and authenticated. Two-factor authentication, device verification, and continuous monitoring keep your network protected without burdening employees.',
    features: [
      'End-to-end encryption on all traffic',
      'TOTP two-factor authentication',
      'Per-device trust and revocation',
      'Real-time connection monitoring',
    ],
  },

  relatedPages: [
    { title: "Enterprise", description: "Scale across teams with centralized management.", path: "/enterprise" },
    { title: "Cloud & Baremetal", description: "Deploy on cloud providers or dedicated servers.", path: "/cloud" },
  ],
};

// ============================================================================
// IOT NETWORKS PAGE CONTENT
// ============================================================================

export const iotNetworksContent = {
  hero: {
    badge: "Secure Your Connected Devices",
    title: "IoT Networks",
    subtitle: "Connect and Secure Your Device Fleet",
    description: "Manage your IoT device fleet from a single dashboard. Secure remote access to sensors, cameras, and smart devices with strong encryption and centralized control.",
    buttons: [
      { text: "Get Started Free", href: "/download", primary: true },
      { text: "View Documentation", href: "https://docs.tunnels.is/docs", primary: false }
    ],
    quickStats: [
      { value: "Up to 65K", label: "Devices/Server" },
      { value: "Secure", label: "By Default" },
      { value: "Simple", label: "Config" }
    ]
  },

  benefitsSection: {
    title: "Built for IoT at Scale",
    subtitle: "Everything you need to connect, secure, and manage your IoT infrastructure"
  },

  benefits: [
    {
      title: "Centralized Device Management",
      description: "Register, organize, and monitor all your IoT devices from a single dashboard. Group devices by location, function, or project.",
      icon: <DevicesIcon />,
      gradient: "from-dark-accent-primary to-dark-accent-secondary"
    },
    {
      title: "Network Isolation",
      description: "Keep IoT traffic separated from your main network. Define isolated subnets for different device types with strict access controls.",
      icon: <ShieldCheckIcon />,
      gradient: "from-dark-accent-secondary to-dark-accent-tertiary"
    },
    {
      title: "Remote Access Anywhere",
      description: "Securely access your devices from anywhere in the world. Only VPN server ports need to be accessible.",
      icon: <NetworkGlobeIcon />,
      gradient: "from-dark-accent-tertiary to-dark-accent-primary"
    },
    {
      title: "Headless Device Support",
      description: "CLI mode for resource-constrained devices. No GUI required - perfect for sensors, gateways, and embedded systems.",
      icon: <RaspberryPiIcon />,
      gradient: "from-dark-accent-primary to-dark-accent-tertiary"
    },
    {
      title: "Automatic IP Assignment",
      description: "Built-in DHCP assigns IP addresses automatically. Devices connect and receive configuration without manual setup.",
      icon: <SyncIcon />,
      gradient: "from-dark-accent-secondary to-dark-accent-primary"
    },
    {
      title: "Bandwidth Control",
      description: "Set per-device bandwidth limits and connection quotas. Prevent any single device from consuming excessive resources.",
      icon: <ChartIcon />,
      gradient: "from-dark-accent-tertiary to-dark-accent-secondary"
    }
  ],

  useCasesSection: {
    title: "IoT Use Cases",
    subtitle: "From smart homes to industrial deployments, Tunnels handles it all"
  },

  useCases: [
    {
      title: "Smart Home Networks",
      description: "Connect cameras, sensors, and smart home devices securely. Access your home automation from anywhere.",
      icon: <HomeAutomationIcon />,
      scenario: "Access your Home Assistant, cameras, and sensors remotely without exposing them to the internet"
    },
    {
      title: "Industrial Monitoring",
      description: "Connect distributed sensors and equipment across facilities. Centralized monitoring with network isolation.",
      icon: <SettingsIcon />,
      scenario: "Monitor factory sensors and PLCs from headquarters with segmented network access"
    },
    {
      title: "Remote Sensor Networks",
      description: "Manage sensor deployments in remote locations. Reliable connectivity even with intermittent connections.",
      icon: <SignalIcon />,
      scenario: "Agricultural sensors, weather stations, and environmental monitors reporting to a central server"
    },
    {
      title: "Security Camera Systems",
      description: "Secure access to camera feeds without exposing them publicly. Group cameras by location with access controls.",
      icon: <VideoIcon />,
      scenario: "Multi-site camera systems accessible only to authorized personnel"
    },
    {
      title: "Edge Computing Nodes",
      description: "Manage distributed edge devices across locations. Deploy updates and monitor health remotely.",
      icon: <ServerIcon />,
      scenario: "Retail edge nodes, kiosk systems, and distributed compute infrastructure"
    },
    {
      title: "Fleet Management",
      description: "Track and manage devices across vehicles and mobile assets. Secure connectivity on the move.",
      icon: <BriefcaseIcon />,
      scenario: "Vehicle tracking systems, mobile sensors, and connected fleet devices"
    }
  ],

  securitySection: {
    title: "Strong Security",
    subtitle: "Modern cryptography with post-quantum readiness for long-term IoT deployments"
  },

  securityFeatures: [
    {
      title: "Strong Encryption",
      description: "AES-256-GCM encryption protects all device communications. Post-quantum ready with X25519 + ML-KEM hybrid key exchange."
    },
    {
      title: "Device Authentication",
      description: "Token-based authentication for headless devices. No interactive login required - devices authenticate automatically."
    },
    {
      title: "Access Control Groups",
      description: "Organize devices into groups with specific access policies. Control which devices can communicate with each other."
    },
    {
      title: "Per-Device Firewall",
      description: "Configure firewall rules for each device. Block unwanted traffic and restrict device communication to allowed hosts."
    }
  ],

  architectureSection: {
    title: "Simple Architecture",
    description: "Deploy a single server to manage your entire IoT fleet. Devices connect securely from anywhere.",
    centralServer: {
      title: "Tunnels Server",
      description: "Handles authentication, device registry, and network routing"
    },
    devices: {
      title: "IoT Devices",
      description: "Sensors, cameras, gateways - any device with network connectivity"
    }
  },

  setupSection: {
    title: "Get Started in Minutes",
    subtitle: "Simple deployment for any IoT setup"
  },

  setupSteps: [
    {
      step: "01",
      title: "Deploy Server",
      description: "Install Tunnels server on your infrastructure - cloud, on-premise, or edge.",
      specs: "Runs on any Linux system"
    },
    {
      step: "02",
      title: "Configure Network",
      description: "Define your IoT network range and access policies through the admin interface.",
      specs: "Set up subnets and groups"
    },
    {
      step: "03",
      title: "Register Devices",
      description: "Add devices to the registry and generate authentication tokens for each device.",
      specs: "Manual device registration with tokens"
    },
    {
      step: "04",
      title: "Connect & Monitor",
      description: "Devices connect using their tokens. Monitor status and traffic from the dashboard.",
      specs: "Real-time device metrics"
    }
  ],

  faqSection: {
    title: "Common Questions",
    subtitle: "Everything you need to know about IoT networking with Tunnels"
  },

  faqs: [
    {
      q: "How many devices can I connect?",
      a: "A single server can handle up to 65,535 concurrent device connections (protocol limit). For larger deployments, add additional VPN servers to distribute the load."
    },
    {
      q: "Do devices need a lot of resources to run the client?",
      a: "No. The Tunnels client has a CLI mode designed for resource-constrained devices. It runs efficiently on Raspberry Pi, embedded Linux systems, and other low-power hardware."
    },
    {
      q: "Can I isolate IoT devices from my main network?",
      a: "Yes. Tunnels supports network segmentation with separate subnets and firewall rules. IoT devices can be completely isolated from other network traffic while still being accessible through the VPN."
    },
    {
      q: "How do devices authenticate without user interaction?",
      a: "Devices use token-based authentication. You generate a device token from the admin interface, and the device uses that token to authenticate automatically on startup."
    },
    {
      q: "Can I set bandwidth limits per device?",
      a: "Yes. You can configure bandwidth limits and connection quotas for individual devices or device groups to prevent any single device from consuming excessive resources."
    },
    {
      q: "Does it work with intermittent connections?",
      a: "Yes. The client handles disconnections gracefully and automatically reconnects when connectivity is restored. Configurable ping timeouts let you tune behavior for your network conditions."
    }
  ],

  statsBanner: [
    { value: "65K+", label: "Devices per Server" },
    { value: "Token Auth", label: "Headless Authentication" },
    { value: "Low", label: "Overhead" },
    { value: "TCP & UDP", label: "Protocol Support" },
  ],

  illustratedConnectivity: {
    subtitle: "Secure Connectivity",
    title: "Connect All Your IoT Devices",
    description: "Create a secure network for your IoT infrastructure. Every device communicates through encrypted tunnels via the VPN server, isolated from the public internet.",
    features: [
      "Token-based device authentication",
      "Server-managed routing",
      "TCP and UDP traffic support",
      "No open ports on devices",
    ],
  },

  architectureBentoItems: [
    {
      title: "Tunnels Server",
      description: "A single server manages your entire IoT fleet — handling authentication, device registry, IP assignment, and encrypted routing between all connected devices.",
      features: [
        "Runs on any Linux system",
        "Built-in DHCP for automatic IP assignment",
        "Centralized admin dashboard",
        "Scales to 65,535 concurrent devices",
      ],
      highlight: "One server, unlimited deployments",
    },
    {
      title: "IoT Clients",
      description: "Lightweight CLI client installs on any device. Sensors, cameras, gateways, and edge nodes connect with a single token — no GUI required.",
    },
    {
      title: "Network Segmentation",
      description: "Group devices into isolated subnets. Each segment gets its own access rules, keeping IoT traffic separate from other network traffic.",
    },
    {
      title: "Encrypted Tunnels",
      description: "Every packet travels through an AES-256-GCM encrypted tunnel. Devices communicate securely regardless of the underlying network.",
    },
  ],

  securityTable: {
    headers: ["Security Feature", "Description", "Enabled by Default"],
    rows: [
      ["Strong Encryption", "AES-256-GCM with X25519 + ML-KEM hybrid key exchange", true],
      ["Device Authentication", "Token-based headless auth — no interactive login required", true],
      ["Access Control Groups", "Per-group policies controlling which devices can talk to each other", true],
      ["Per-Device Firewall", "Configurable firewall rules blocking unwanted traffic per device", true],
      ["Perfect Forward Secrecy", "Ephemeral session keys ensure past sessions can't be decrypted", true],
      ["Network Isolation", "IoT traffic isolated from main network via separate subnets", true],
    ],
    caption: "Security features are available on all deployments. Some features require configuration.",
  },

  encryptionCallout: {
    title: "Encryption for Every Packet",
    description: "All IoT data is encrypted at the device level before transmission. Even if network traffic is intercepted, your data remains completely unreadable. AES-256-GCM with post-quantum key exchange protects every byte from sensor to server.",
    features: [
      "AES-256-GCM encryption standard",
      "Per-device unique session keys",
      "Perfect forward secrecy",
      "Post-quantum ML-KEM key exchange",
    ],
  },

  finalCTA: {
    title: "Ready to Secure Your IoT Network?",
    description: "Build secure, scalable IoT infrastructure with Tunnels",
    layout: "split"
  },

  ctaCards: [
    {
      icon: <DownloadIcon />,
      title: "Get Started Now",
      description: "Download Tunnels server and client. Free 24-hour trial to test with your devices.",
      features: [
        "Server for Linux only (requires root privileges)",
        "CLI client for IoT devices",
        "GUI client for management",
        "Complete setup documentation"
      ],
      button: { text: "Download Free", href: "/download", primary: true },
      highlighted: true
    },
    {
      icon: <BookIcon />,
      title: "Read the Documentation",
      description: "Comprehensive guides for setting up and managing your IoT network infrastructure.",
      features: [
        "Server deployment guide",
        "Device registration",
        "Network configuration",
        "Security best practices"
      ],
      button: { text: "View Documentation", href: "https://docs.tunnels.is/docs", primary: false },
      highlighted: false
    }
  ],

  relatedPages: [
    { title: "LAN over WAN", description: "Connect devices across locations as if on the same network.", path: "/lan-over-wan" },
    { title: "Homelab", description: "Self-host your VPN with built-in DNS management.", path: "/homelab" },
  ],
};

// ============================================================================
// LAN OVER WAN PAGE CONTENT
// ============================================================================

export const lanOverWanContent = {
  hero: {
    badge: "Bridge Networks Securely",
    title: "LAN Over WAN",
    subtitle: "Connect Remote Networks Seamlessly",
    description: "Bridge isolated local networks across the internet. Create a unified network spanning multiple physical locations with end-to-end encryption.",
    buttons: [
      { text: "Get Started", href: "/download", primary: true },
      { text: "View Docs", href: "https://docs.tunnels.is/docs" }
    ],
    quickStats: [
      { value: "Low", label: "Added Latency" },
      { value: "AES-256", label: "Encryption" },
      { value: "Multiple", label: "Sites" }
    ]
  },

  benefitsSection: {
    title: "Why LAN Over WAN?",
    subtitle: "Connect your networks with strong encryption and simple setup"
  },

  benefits: [
    {
      title: "Connect Remote Networks",
      description: "Bridge isolated LANs across the internet as if they were directly connected. Access devices and services on remote networks seamlessly.",
      icon: <NetworkGlobeIcon />,
      color: "primary"
    },
    {
      title: "Site-to-Site Connectivity",
      description: "Connect branch offices, data centers, or home networks together. Create a unified network spanning multiple physical locations.",
      icon: <GlobeIcon />,
      color: "secondary"
    },
    {
      title: "Secure Tunnel",
      description: "All traffic between sites is encrypted end-to-end. Your private network traffic stays private, even over public internet.",
      icon: <LockShieldIcon />,
      color: "tertiary"
    },
    {
      title: "Low Overhead",
      description: "Lightweight custom UDP protocol with minimal overhead for responsive connections between sites.",
      icon: <BoltIcon />,
      color: "primary"
    },
    {
      title: "DNS Integration",
      description: "Custom DNS records let devices on connected networks reach each other by name through the VPN.",
      icon: <LinkIcon />,
      color: "secondary"
    },
    {
      title: "Self-Hosted",
      description: "Run your own VPN server for complete control. No third-party services, no data leaving your infrastructure.",
      icon: <ServerIcon />,
      color: "tertiary"
    }
  ],

  useCasesSection: {
    title: "Common Use Cases",
    subtitle: "How organizations use LAN over WAN"
  },

  useCases: [
    {
      title: "Multi-Office Networking",
      description: "Connect headquarters with branch offices. Employees access internal resources regardless of location.",
      scenario: "HQ in New York connects to offices in London and Tokyo - all on one unified network"
    },
    {
      title: "Home to Cloud",
      description: "Bridge your home network to cloud infrastructure. Access cloud resources as if they were local.",
      scenario: "Homelab connects directly to AWS VPC for hybrid deployments"
    },
    {
      title: "Disaster Recovery",
      description: "Maintain hot standby sites with real-time data replication over secure tunnels.",
      scenario: "Primary datacenter syncs to backup site across the country"
    },
    {
      title: "IoT Device Management",
      description: "Manage IoT devices deployed across multiple sites from a central location.",
      scenario: "Industrial sensors at 50 locations all accessible from central monitoring"
    }
  ],

  architectureSection: {
    title: "How It Works",
    subtitle: "Secure tunnels connecting your networks",
    centralServer: {
      title: "Tunnels Server",
      description: "Central hub managing all site connections"
    },
    sites: ["Office A", "Office B", "Datacenter", "Home"],
    footer: "All sites connected via encrypted tunnels"
  },

  setupSection: {
    title: "Quick Setup",
    subtitle: "Get connected in minutes"
  },

  setupSteps: [
    {
      step: "1",
      title: "Deploy Tunnels Server",
      description: "Set up a Tunnels server on your primary network. This will act as the connection hub."
    },
    {
      step: "2",
      title: "Configure Network Routes",
      description: "Define which subnets should be accessible across the WAN. Specify CIDR blocks for each site."
    },
    {
      step: "3",
      title: "Connect Remote Sites",
      description: "Deploy Tunnels clients or servers at remote locations. They will establish secure tunnels automatically."
    },
    {
      step: "4",
      title: "Access Resources",
      description: "Devices on connected networks can now communicate directly. DNS resolution works across all sites."
    }
  ],

  statsBanner: [
    { value: "Low", label: "Overhead" },
    { value: "UDP", label: "Protocol" },
    { value: "Layer 3", label: "Connectivity" },
    { value: "Any Location", label: "Site Support" },
  ],

  illustratedIntegration: {
    subtitle: "Seamless Integration",
    title: "One Network, Any Location",
    description: "Connect multiple physical locations as if they were on the same local network. File shares, printers, and services work exactly as they would in a single office.",
    features: [
      "IP-level connectivity across sites",
      "Custom DNS records for service discovery",
      "Abstract NAT resolves IP conflicts",
      "Auto-reconnect on connection loss",
    ],
  },

  terminalPreview: {
    title: "Lightweight Custom Protocol",
    description: "Tunnels uses a custom UDP protocol with low overhead, keeping your cross-site connections responsive.",
    features: [
      "Custom UDP-based VPN protocol",
      "ChaCha20-Poly1305 or AES-256-GCM encryption",
      "Efficient packet processing in Go",
      "Configurable MTU and routing",
    ],
    lines: [
      { type: "comment", text: "Install Tunnels server on primary site" },
      { type: "command", text: "wget https://tunnels.is/install.sh && sudo bash install.sh" },
      { type: "success", text: "Tunnels server installed successfully" },
      { type: "empty" },
      { type: "comment", text: "Configure network routes in config.json" },
      { type: "command", text: "sudo nano /etc/tunnels/config.json" },
      { type: "info", text: "Define VPN network range and routes..." },
      { type: "empty" },
      { type: "comment", text: "Connect remote client" },
      { type: "command", text: "# Add server in client UI, connect to your server" },
      { type: "success", text: "Connected to primary-site (10.0.0.1)" },
      { type: "output", text: "ping 10.0.0.50 → 64 bytes: time=12.3ms" },
    ],
  },

  cta: {
    title: "Ready to Connect Your Networks?",
    description: "Download Tunnels and start bridging your LANs over the internet securely.",
    buttons: [
      { text: "Download Free", href: "/download", primary: true },
      { text: "Read Documentation", href: "https://docs.tunnels.is/docs" }
    ]
  },

  relatedPages: [
    { title: "Homelab", description: "Self-host your VPN with built-in DNS management.", path: "/homelab" },
    { title: "IoT Networks", description: "Manage IoT devices securely across locations.", path: "/iot" },
  ],
};

// ============================================================================
// PUBLIC VPN PAGE CONTENT
// ============================================================================

export const publicVPNContent = {
  hero: {
    badge: "Your Own VPN Service",
    title: "Public VPN",
    subtitle: "Route Your Traffic Through Your Own Server",
    description: "Create your own public VPN service. Route internet traffic through servers you control with full privacy and no third-party access to your data.",
    buttons: [
      { text: "Get Started", href: "/download", primary: true },
      { text: "Setup Guide", href: "https://docs.tunnels.is/docs" }
    ],
    quickStats: [
      { value: "100%", label: "Self-Hosted" },
      { value: "Zero", label: "Third Parties" },
      { value: "Full", label: "Control" }
    ]
  },

  benefitsSection: {
    title: "Why Self-Hosted Public VPN?",
    subtitle: "Complete control over your internet privacy"
  },

  benefits: [
    {
      title: "Public IP Routing",
      description: "Get a routable public IP through your VPN server. Access your services from anywhere without complex NAT configurations.",
      icon: <GlobeIcon />,
      color: "primary"
    },
    {
      title: "Privacy Protection",
      description: "Route your internet traffic through your own server. No third-party VPN provider seeing your data.",
      icon: <LockShieldIcon />,
      color: "secondary"
    },
    {
      title: "Full Tunnel Mode",
      description: "Route all traffic through the VPN or choose split tunneling. Complete control over what goes through the tunnel.",
      icon: <NetworkGlobeIcon />,
      color: "tertiary"
    },
    {
      title: "High Performance",
      description: "Direct connection to your server means minimal latency. No overloaded shared servers.",
      icon: <BoltIcon />,
      color: "primary"
    },
    {
      title: "Your Infrastructure",
      description: "Deploy on any cloud provider or your own hardware. Choose locations that work best for you.",
      icon: <ServerIcon />,
      color: "secondary"
    },
    {
      title: "No Logs",
      description: "Since you control the server, you control the logging. True privacy that you can verify.",
      icon: <ShieldCheckIcon />,
      color: "tertiary"
    }
  ],

  useCasesSection: {
    title: "Common Use Cases",
    subtitle: "How people use public VPN routing"
  },

  useCases: [
    {
      title: "Bypass Geo-Restrictions",
      description: "Access content from different regions by routing through servers in those locations.",
      scenario: "Stream content from home while traveling abroad"
    },
    {
      title: "Secure Public WiFi",
      description: "Protect your traffic when connected to untrusted networks at cafes, airports, or hotels.",
      scenario: "Work securely from any coffee shop"
    },
    {
      title: "Host Public Services",
      description: "Get a stable public IP for hosting services without exposing your home IP.",
      scenario: "Run a game server or website from home"
    },
    {
      title: "Development Testing",
      description: "Test geo-specific features or access region-locked APIs during development.",
      scenario: "Test payment integrations in different regions"
    }
  ],

  providersSection: {
    title: "Affordable Cloud Options",
    subtitle: "Deploy your VPN server starting at just a few dollars per month"
  },

  providers: [
    { name: "DigitalOcean", price: "$4/mo", region: "Global" },
    { name: "Linode", price: "$5/mo", region: "Global" },
    { name: "Vultr", price: "$5/mo", region: "Global" },
    { name: "Hetzner", price: "€3/mo", region: "EU/US" }
  ],

  providersFooter: "Any VPS provider works. These are just popular options with global presence.",

  setupSection: {
    title: "Quick Setup",
    subtitle: "Get your public VPN running in minutes"
  },

  setupSteps: [
    {
      step: "1",
      title: "Deploy a Cloud Server",
      description: "Spin up a VPS on any cloud provider in your preferred location. Even the smallest instance works."
    },
    {
      step: "2",
      title: "Install Tunnels Server",
      description: "Download and run the Tunnels server binary. Single command deployment."
    },
    {
      step: "3",
      title: "Configure Public Routing",
      description: "Enable NAT and configure your server to route traffic to the internet."
    },
    {
      step: "4",
      title: "Connect & Browse",
      description: "Connect your devices and enjoy a secure, private connection to the internet."
    }
  ],

  statsBanner: [
    { value: "0 Logs", label: "No Third-Party Logging" },
    { value: "100%", label: "Encrypted Traffic" },
    { value: "Your Server", label: "Full Infrastructure Control" },
    { value: "< 5 min", label: "Setup Time" },
  ],

  illustratedPrivacy: {
    subtitle: "True Privacy",
    title: "Browse Without Being Watched",
    description: "When you need to access the public internet privately, route your traffic through your own server. No third-party VPN provider sees your data.",
    features: [
      "Your own server, your own IP",
      "No logs by third parties",
      "Full control over exit location",
      "No bandwidth throttling",
    ],
  },

  terminalPreview: {
    title: "Exit Points Anywhere",
    description: "Deploy your VPN server in any region for optimal performance. Choose locations based on your needs — close to you for speed, or in specific countries for access.",
    features: [
      "Deploy on any cloud provider",
      "Choose your exit location",
      "Full server bandwidth",
      "Multi-server deployments possible",
    ],
    lines: [
      { type: "comment", text: "Deploy a VPS in your preferred region" },
      { type: "command", text: "# Use DigitalOcean, Vultr, Hetzner, etc." },
      { type: "empty" },
      { type: "comment", text: "Install Tunnels server" },
      { type: "command", text: "wget https://tunnels.is/install.sh && sudo bash install.sh" },
      { type: "success", text: "Tunnels server installed successfully" },
      { type: "empty" },
      { type: "comment", text: "Configure and start the server" },
      { type: "command", text: "sudo nano /etc/tunnels/config.json" },
      { type: "command", text: "sudo systemctl start tunnels" },
      { type: "success", text: "Server running — ready for connections" },
    ],
  },

  deployHeader: {
    title: "Deploy in Minutes",
    subtitle: "Get your public VPN server running in under 5 minutes with one-command deployment scripts that work with all major cloud providers.",
  },

  deploySteps: [
    {
      title: "Deploy a Cloud Server",
      description: "Spin up a VPS on any cloud provider in your preferred location. Even the smallest instance works.",
      command: "# Any Linux VPS from $5/month",
    },
    {
      title: "Install Tunnels Server",
      description: "Download and install the Tunnels server with one command.",
      command: "wget https://tunnels.is/install.sh && sudo bash install.sh",
    },
    {
      title: "Configure Routing",
      description: "Set up your server config with internet access enabled and your preferred network settings.",
      command: "sudo nano /etc/tunnels/config.json",
    },
    {
      title: "Connect & Browse",
      description: "Connect your devices using the Tunnels client and browse through your own server.",
    },
  ],

  cta: {
    title: "Ready for True Privacy?",
    description: "Download Tunnels and create your own public VPN service today.",
    buttons: [
      { text: "Download Free", href: "/download", primary: true },
      { text: "Read Documentation", href: "https://docs.tunnels.is/docs" }
    ]
  },

  relatedPages: [
    { title: "Personal VPN", description: "Secure your internet and access your network from anywhere.", path: "/personal-vpn" },
    { title: "Cloud & Baremetal", description: "Deploy on cloud providers or dedicated servers.", path: "/cloud" },
  ],
};

// ============================================================================
// SECURITY PAGE CONTENT
// ============================================================================

export const securityContent = {
  hero: {
    badge: "Security First",
    title: "Built for Security",
    subtitle: "Modern Encryption, Zero Trust",
    description: "Tunnels is designed from the ground up with security as the primary concern. Open source, auditable, and using only proven cryptographic primitives.",
    buttons: [
      { text: "View Source", href: "https://github.com/tunnels-is", primary: true },
      { text: "Security Docs", href: "https://docs.tunnels.is/docs" }
    ]
  },

  featuresSection: {
    title: "Security Features",
    subtitle: "Defense in depth at every layer"
  },

  securityFeatures: [
    {
      title: "Encrypted Tunnels",
      description: "All traffic between your device and the VPN server is encrypted. On self-hosted servers, you control everything.",
      icon: <LockShieldIcon />,
      color: "primary"
    },
    {
      title: "Modern Cryptography",
      description: "Uses ChaCha20-Poly1305, AES-256-GCM, and AES-128-GCM encryption with X25519 + ML-KEM-1024 hybrid key exchange.",
      icon: <KeyIcon />,
      color: "secondary"
    },
    {
      title: "Zero Trust Architecture",
      description: "Every connection is authenticated. No implicit trust between any components.",
      icon: <ShieldCheckIcon />,
      color: "tertiary"
    },
    {
      title: "Open Source",
      description: "All code is publicly auditable. Security through transparency, not obscurity.",
      icon: <CodeIcon />,
      color: "primary"
    },
    {
      title: "Self-Hosted",
      description: "Run your own servers. Your data never touches infrastructure you don't control.",
      icon: <ServerIcon />,
      color: "secondary"
    },
    {
      title: "No Logging",
      description: "Tunnels doesn't log connection data. Since you control the server, you control what's logged.",
      icon: <EyeShieldIcon />,
      color: "tertiary"
    }
  ],

  cryptographySection: {
    title: "Cryptographic Primitives",
    subtitle: "Industry-standard, battle-tested cryptography"
  },

  encryptionTypes: [
    { name: "ChaCha20-Poly1305", description: "High-speed stream cipher with authentication (default)" },
    { name: "AES-256-GCM", description: "Industry standard block cipher with authentication" },
    { name: "AES-128-GCM", description: "Fast authenticated encryption for resource-constrained environments" },
    { name: "X25519 + ML-KEM-1024", description: "Post-quantum hybrid key exchange for future-proof security" },
    { name: "HKDF-SHA512", description: "Key derivation for session key material" }
  ],

  practicesSection: {
    title: "Security Practices",
    subtitle: "How we keep your data safe"
  },

  practices: [
    {
      title: "Perfect Forward Secrecy",
      description: "Session keys are ephemeral. Compromising one session doesn't compromise past or future sessions."
    },
    {
      title: "Authenticated Encryption",
      description: "All encrypted data includes authentication tags to prevent tampering and replay attacks."
    },
    {
      title: "Secure Key Exchange",
      description: "Keys are exchanged using modern elliptic curve cryptography resistant to known attacks."
    },
    {
      title: "Memory Safety",
      description: "Built with Go, a memory-safe language that prevents buffer overflow vulnerabilities."
    }
  ],

  openSourceSection: {
    title: "Open Source Security",
    description: "We believe security should be verifiable. Our entire codebase is open source, allowing security researchers and the community to audit our implementation.",
    subDescription: "No hidden code, no secret backdoors, no trust required. Verify everything yourself.",
    buttonText: "View on GitHub",
    buttonUrl: "https://github.com/tunnels-is"
  },

  cryptoTable: {
    headers: ['Algorithm', 'Type', 'Purpose', 'Post-Quantum'],
    rows: [
      ['ChaCha20-Poly1305', 'Stream cipher + AEAD', 'Default tunnel encryption', false],
      ['AES-256-GCM', 'Block cipher + AEAD', 'Hardware-accelerated encryption', false],
      ['AES-128-GCM', 'Block cipher + AEAD', 'Resource-constrained environments', false],
      ['X25519 + ML-KEM-1024', 'Hybrid key exchange', 'Session key establishment', true],
      ['HKDF-SHA512', 'Key derivation', 'Session key material derivation', false],
    ],
    caption: "All primitives are implemented through Go's standard crypto libraries and audited third-party packages. No custom cryptography.",
  },

  practicesBentoItems: [
    {
      title: 'Perfect Forward Secrecy',
      description:
        'Session keys are ephemeral and derived fresh for every connection. Compromising one session cannot expose past or future traffic — each handshake produces independent keying material.',
      features: [
        'Ephemeral session keys per connection',
        'No long-lived symmetric secrets',
        'Past sessions remain protected',
      ],
      highlight: 'Ephemeral key generation',
    },
    {
      title: 'Authenticated Encryption',
      description:
        'Every encrypted payload carries an authentication tag. Any modification — even a single flipped bit — is detected and the packet is rejected before it can cause harm.',
    },
    {
      title: 'Secure Key Exchange',
      description:
        'Keys are negotiated using modern elliptic curve and post-quantum primitives, making interception attacks computationally infeasible today and tomorrow.',
    },
    {
      title: 'Memory-Safe Implementation',
      description:
        'Written entirely in Go, a garbage-collected, memory-safe language. Buffer overflows and use-after-free vulnerabilities are eliminated by design.',
    },
  ],

  securityStats: [
    { value: '256-bit', label: 'Key strength', description: 'Maximum symmetric key size' },
    { value: 'PQ-safe', label: 'Key exchange', description: 'ML-KEM-1024 hybrid handshake' },
    { value: '100%', label: 'Open source', description: 'Every line publicly auditable' },
    { value: 'Zero', label: 'Logging', description: 'No connection data retained' },
  ],

  illustratedDefense: {
    subtitle: "Defense in Depth",
    title: "Security at Every Layer",
    description: "From the protocol level to application design, every component is built with security as the primary concern. No compromises, no shortcuts, and no implicit trust between any two parts of the system.",
    features: [
      'Authenticated connections required',
      'Signed request verification',
      'Minimal attack surface by default',
      'Open source for community review',
    ],
  },

  openSourceCalloutFeatures: [
    'Full source code available on GitHub',
    'No hidden code, no backdoors, no black boxes',
    'No hidden code, no secret backdoors, no trust required. Verify everything yourself.',
    'Community security reviews welcome',
  ],

  cta: {
    title: "Security Without Compromise",
    description: "Verifiable security backed by open source code and modern cryptography.",
    buttons: [
      { text: "Download Free", href: "/download", primary: true },
      { text: "Read Security Docs", href: "https://docs.tunnels.is/docs" }
    ]
  },

  relatedPages: [
    { title: "Technical Details", description: "Deep dive into protocols, encryption, and architecture.", path: "/technical" },
    { title: "Features", description: "See the full feature overview.", path: "/features" },
  ],
};

// Export all content as default for convenient importing
export default {
  home: homeContent,
  homelab: homelabContent,
  personalVPN: personalVPNContent,
  cloudBaremetal: cloudBaremetalContent,
  enterprise: enterpriseContent,
  freeOpenSource: freeOpenSourceContent,
  dns: dnsContent,
  features: featuresContent,
  download: downloadContent,
  pricing: pricingContent,
  technical: technicalContent,
  iotNetworks: iotNetworksContent,
  lanOverWan: lanOverWanContent,
  publicVPN: publicVPNContent,
  security: securityContent
};
