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
      { text: "Explore Features", href: "/features", teal: true }
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
      title: 'Enterprise Ready',
      description: 'Scales from individuals to enterprise deployments',
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
  }
};

// ============================================================================
// HOMELAB PAGE CONTENT
// ============================================================================

export const homelabContent = {
  hero: {
    badge: "Perfect for Self-Hosters",
    title: "Homelab VPN",
    subtitle: "Self-Hosted VPN for Your Home Network",
    description: "Deploy a single server and securely access your homelab from anywhere. Built-in DNS management, ad blocking, and straightforward setup.",
    buttons: [
      { text: "Download Free", href: "/download", primary: true },
      { text: "View Documentation", href: "/", primary: false }
    ],
    quickStats: [
      { label: "Setup Time", value: "5 min" },
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
      title: "Multi-Device Support",
      description: "Connect laptops and desktops - all your devices with a single server.",
      icon: <DevicesIcon />
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
    title: "Perfect For Your Setup",
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
      description: "Lightweight, fast VPN protocol with ChaCha20-Poly1305 encryption",
      icon: <BoltIcon />
    },
    {
      title: "IPv4 Networking",
      description: "Full IPv4 support for reliable connectivity",
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
    proTip: "Start with what you have - Tunnels is incredibly lightweight and runs efficiently on minimal hardware."
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
        "Server for Linux (all distributions)",
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
  ]
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
      title: "Multi-Device",
      description: "Connect all your computers - laptops and desktops. Multiple simultaneous connections per user.",
      icon: <DevicesIcon />,
      gradient: "from-dark-accent-tertiary to-dark-accent-secondary"
    }
  ],

  useCasesSection: {
    title: "Perfect For Every Scenario",
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
    title: "Enterprise-Grade Technology",
    subtitle: "Built on battle-tested protocols with modern security practices"
  },

  technicalFeatures: [
    {
      category: "Security",
      features: [
        { name: "Custom UDP Protocol", detail: "Modern VPN protocol with X25519 key exchange and ChaCha20-Poly1305 encryption" },
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
        { name: "Full Bandwidth", detail: "Modern servers handle gigabit speeds easily" },
        { name: "Automatic Reconnect", detail: "Seamless reconnection when switching networks" },
        { name: "Battery Efficient", detail: "Lightweight protocol optimized for efficiency" }
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
      command: "Available for desktop platforms",
      specs: "Windows, macOS, and Linux"
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
      commercial: "Not included",
      personal: "Built-in ad & malware blocking",
      winner: "personal"
    }
  ],

  privacyHighlight: {
    title: "Zero Knowledge. Zero Logs.",
    titleLine2: "Zero Compromise.",
    description: "With your own server, you don't need to trust a privacy policy.",
    descriptionBold: "You write the rules.",
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
      a: "A basic $5/month server can easily handle 10-20 simultaneous connections. For larger families, upgrade to a $10-20/month server with more bandwidth allocation."
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
        "Server installer for Linux",
        "Clients for desktop platforms",
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
  ]
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
      { text: "View Pricing", href: "/pricing", teal: true }
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
        title: "Source Available",
        content: "Our server and client implementations are source available on GitHub",
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
  }
};

// ============================================================================
// DOWNLOAD PAGE CONTENT
// ============================================================================

export const downloadContent = {
  version: "2.0.7",

  hero: {
    title: "Download Tunnels",
    subtitle: "Download, extract, and run. Available for Windows, macOS, and Linux. Windows requires WinTUN driver."
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
  }
};

// ============================================================================
// PRICING PAGE CONTENT
// ============================================================================

export const pricingContent = {
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

  cta: {
    title: "Ready to get started?",
    description: "Try Tunnels free for 24 hours. No credit card required.",
    buttons: [
      { text: "Download Now", href: "/download", primary: true },
      { text: "Contact Sales", href: "mailto:support@tunnels.is", primary: false }
    ]
  }
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
        "AES-128 / AES-256",
        "ChaCha20-Poly1305"
      ],
      handshakeTypes: [
        "Elliptic Curve P521",
        "X25519"
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
  }
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
      { text: "Learn More", href: "#features", teal: true }
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
  }
};

// ============================================================================
// FREE AND OPEN SOURCE PAGE CONTENT
// ============================================================================

export const freeOpenSourceContent = {
  hero: {
    title: "Tunnels is Free and Open Source",
    description: "All of our features are free and available in the open source version. No paywalls, no hidden fees.",
    buttonText: "View on GitHub",
    buttonUrl: "https://github.com/tunnels-is"
  },

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
        content1: "You're free to use Tunnels however you want - personally, commercially, or modify it to fit your specific needs. No licensing restrictions.",
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
    description: "Download Tunnels today and experience open source networking at its finest.",
    buttons: [
      { text: "Download Now", href: "/download", primary: true },
      { text: "View Source Code", href: "https://github.com/tunnels-is", primary: false }
    ]
  }
};

// ============================================================================
// ENTERPRISE PAGE CONTENT (EXTENDED)
// ============================================================================

export const enterpriseContent = {
  hero: {
    title: "Tunnels For Large Networks",
    subtitle: "Lightweight design for big scale",
    description: "Built from the ground up to handle enterprise-scale networking with minimal overhead and maximum security."
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
  }
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
    subtitle: "Architectural benefits that give you enterprise-grade capabilities without the enterprise complexity"
  },

  benefits: [
    {
      title: "Geographic Distribution",
      description: "Deploy VPN servers across multiple regions for optimal performance and low latency access worldwide.",
      icon: <GlobeIcon />
    },
    {
      title: "High Availability",
      description: "Redundant server architecture ensures continuous service even if individual nodes experience issues.",
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
        value: "Thousands",
        label: "Concurrent Users",
        description: "Scale by deploying multiple VPN servers"
      },
      {
        value: "Fast",
        label: "Auth Latency",
        description: "Efficient signature verification on VPN servers"
      },
      {
        value: "High",
        label: "Availability",
        description: "Redundant multi-server architecture for reliability"
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
  }
};

// ============================================================================
// IOT NETWORKS PAGE CONTENT
// ============================================================================

export const iotNetworksContent = {
  hero: {
    badge: "Secure Your Connected Devices",
    title: "IoT Networks",
    subtitle: "Connect and Secure Your Device Fleet",
    description: "Manage thousands of IoT devices from a single dashboard. Secure remote access to sensors, cameras, and smart devices with enterprise-grade encryption and centralized control.",
    buttons: [
      { text: "Get Started Free", href: "/download", primary: true },
      { text: "View Documentation", href: "https://docs.tunnels.is/docs", primary: false }
    ],
    quickStats: [
      { value: "Thousands", label: "Devices" },
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
    title: "Perfect For Your IoT Setup",
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
    title: "Enterprise-Grade Security",
    subtitle: "Modern cryptography designed for long-term IoT deployments"
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
      a: "Tunnels is designed to scale. A single server can handle thousands of concurrent device connections. For larger deployments, add additional VPN servers to distribute the load."
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
        "Server for Linux (all distributions)",
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
  ]
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
      { text: "View Docs", href: "https://docs.tunnels.is/docs", teal: true }
    ],
    quickStats: [
      { value: "<10ms", label: "Added Latency" },
      { value: "AES-256", label: "Encryption" },
      { value: "Unlimited", label: "Sites" }
    ]
  },

  benefitsSection: {
    title: "Why LAN Over WAN?",
    subtitle: "Connect your networks with enterprise-grade security and simplicity"
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
      title: "Low Latency",
      description: "Optimized for performance with minimal overhead. Direct tunnels between sites without routing through central servers.",
      icon: <BoltIcon />,
      color: "primary"
    },
    {
      title: "Automatic Discovery",
      description: "Devices on connected networks can discover and communicate with each other automatically through DNS and routing.",
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

  cta: {
    title: "Ready to Connect Your Networks?",
    description: "Download Tunnels and start bridging your LANs over the internet securely.",
    buttons: [
      { text: "Download Free", href: "/download", primary: true },
      { text: "Read Documentation", href: "https://docs.tunnels.is/docs" }
    ]
  }
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
      { text: "Setup Guide", href: "https://docs.tunnels.is/docs", teal: true }
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

  cta: {
    title: "Ready for True Privacy?",
    description: "Download Tunnels and create your own public VPN service today.",
    buttons: [
      { text: "Download Free", href: "/download", primary: true },
      { text: "Read Documentation", href: "https://docs.tunnels.is/docs" }
    ]
  }
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
      { text: "Security Docs", href: "https://docs.tunnels.is/docs", teal: true }
    ]
  },

  featuresSection: {
    title: "Security Features",
    subtitle: "Defense in depth at every layer"
  },

  securityFeatures: [
    {
      title: "End-to-End Encryption",
      description: "All traffic is encrypted from device to destination. Even we cannot see your data in transit.",
      icon: <LockShieldIcon />,
      color: "primary"
    },
    {
      title: "Modern Cryptography",
      description: "Uses ChaCha20-Poly1305 and AES-256-GCM encryption with Curve25519 key exchange.",
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
    { name: "ChaCha20-Poly1305", description: "High-speed stream cipher with authentication" },
    { name: "AES-256-GCM", description: "Industry standard block cipher with authentication" },
    { name: "Curve25519", description: "Elliptic curve Diffie-Hellman key exchange" },
    { name: "BLAKE2b", description: "Fast cryptographic hash function" }
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

  cta: {
    title: "Security Without Compromise",
    description: "Experience enterprise-grade security that you can verify yourself.",
    buttons: [
      { text: "Download Free", href: "/download", primary: true },
      { text: "Read Security Docs", href: "https://docs.tunnels.is/docs" }
    ]
  }
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
