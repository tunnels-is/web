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

// ============================================================================
// HOME PAGE CONTENT
// ============================================================================

export const homeContent = {
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
      title: 'No Installation',
      description: 'Portable executable with no system changes required',
      icon: <LayersIcon />,
    },
    {
      title: 'Enterprise Ready',
      description: 'Scales from individuals to millions of users',
      icon: <BuildingIcon />,
    },
  ],
};

// ============================================================================
// HOMELAB PAGE CONTENT
// ============================================================================

export const homelabContent = {
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
      description: "Connect phones, laptops, tablets - all your devices with a single server.",
      icon: <DevicesIcon />
    },
    {
      title: "Cost Effective",
      description: "Run on existing hardware - Raspberry Pi, old PC, or VM. No expensive infrastructure needed.",
      icon: <CoinsIcon />
    }
  ],

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
      command: "Edit /etc/tunnels/config.yaml",
      details: "Configure APIIP, APIPort, and network settings"
    },
    {
      step: "3",
      title: "Install the Client",
      description: "Download and install the Tunnels client on your devices.",
      command: "Download from tunnels.is/download",
      details: "Available for Windows, macOS, Linux, iOS, and Android"
    },
    {
      step: "4",
      title: "Connect & Configure",
      description: "Add your server to the client and connect to your homelab network.",
      command: "Click + to add server, enter your APIIP and APIPort",
      details: "Default credentials: admin/admin (change immediately!)"
    }
  ],

  useCases: [
    {
      title: "Media Server Access",
      description: "Stream your Plex, Jellyfin, or Emby content from anywhere without exposing ports to the internet.",
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

  technicalHighlights: [
    {
      title: "Zero Configuration NAT Traversal",
      description: "No need to configure port forwarding on your router",
      icon: <SyncIcon />
    },
    {
      title: "WireGuard Protocol",
      description: "Modern, fast, and secure VPN protocol under the hood",
      icon: <BoltIcon />
    },
    {
      title: "IPv4 & IPv6 Support",
      description: "Full dual-stack support for modern networks",
      icon: <NetworkGlobeIcon />
    },
    {
      title: "Automatic Certificate Management",
      description: "Let's Encrypt integration for secure HTTPS connections",
      icon: <KeyIcon />
    }
  ],

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

  ctaCards: [
    {
      icon: <DownloadIcon />,
      title: "Download & Install",
      description: "Get the Tunnels server and client applications. Free for 24 hours trial, then affordable pricing for continued use.",
      features: [
        "Server for Linux (all distributions)",
        "Clients for Windows, macOS, Linux, iOS, Android",
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
      button: { text: "View Documentation", href: "/technical", primary: false },
      highlighted: false
    }
  ]
};

// ============================================================================
// PERSONAL VPN PAGE CONTENT
// ============================================================================

export const personalVPNContent = {
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
      description: "Deploy on a $5/month VPS and get unlimited bandwidth. One server handles your whole family.",
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
      description: "Connect all your devices - phones, laptops, tablets. Unlimited simultaneous connections.",
      icon: <DevicesIcon />,
      gradient: "from-dark-accent-tertiary to-dark-accent-secondary"
    }
  ],

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
      title: "Mobile Privacy",
      description: "Protect your phone's internet connection on cellular networks everywhere you go.",
      icon: <SignalIcon />,
      scenario: "All mobile app traffic encrypted through your server, not your carrier's network"
    },
    {
      title: "Family Protection",
      description: "Single VPN server with DNS blocking protects all family devices automatically.",
      icon: <UsersIcon />,
      scenario: "Kids' devices get automatic ad-blocking and content filtering through your VPN"
    }
  ],

  ctaCards: [
    {
      icon: <RocketIcon />,
      title: "Get Started Now",
      description: "Download the Tunnels server and client. Free 24-hour trial to test everything. After that, just $5-10/month for your cloud server.",
      features: [
        "Server installer for Linux",
        "Clients for all platforms",
        "Complete setup documentation",
        "24/7 community support",
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
      button: { text: "View Documentation", href: "/technical", primary: false },
      highlighted: false
    }
  ]
};

// ============================================================================
// CLOUD/BAREMETAL PAGE CONTENT
// ============================================================================

export const cloudBaremetalContent = {
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
  ]
};

// ============================================================================
// ENTERPRISE PAGE CONTENT
// ============================================================================

export const enterpriseContent = {
  benefits: [
    {
      title: "Flexibility & Scalability",
      description: "From 100 to 1,000,000 users, Tunnels scales effortlessly with your organization's growth.",
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
  ]
};

// ============================================================================
// FREE AND OPEN SOURCE PAGE CONTENT
// ============================================================================

export const freeOpenSourceContent = {
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/tunnels-is',
      icon: <CodeIcon />,
      desc: 'View code & contribute'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/invite/7Ts3PCnCd9',
      icon: <ChatIcon />,
      desc: 'Chat with the community'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/tunnels_is',
      icon: <BirdIcon />,
      desc: 'Follow for updates'
    },
    {
      name: 'Reddit',
      url: 'https://www.reddit.com/r/tunnels_is/',
      icon: <PhoneIcon />,
      desc: 'Join discussions'
    }
  ]
};

// ============================================================================
// DNS PAGE CONTENT
// ============================================================================

export const dnsContent = {
  dnsFeatures: [
    {
      title: "Custom DNS Records",
      description: "Create and manage DNS records for your internal services and devices.",
      icon: <DocumentIcon />
    },
    {
      title: "DNS Blocking",
      description: "Block ads, trackers, and malicious domains at the DNS level for all devices.",
      icon: <BlockIcon />
    },
    {
      title: "Split DNS Routing",
      description: "Route specific domains through different DNS servers based on your rules.",
      icon: <SyncIcon />
    },
    {
      title: "DNS Over VPN",
      description: "All VPN traffic automatically uses your configured DNS settings.",
      icon: <LockShieldIcon />
    }
  ]
};

// Export all content as default for convenient importing
export default {
  home: homeContent,
  homelab: homelabContent,
  personalVPN: personalVPNContent,
  cloudBaremetal: cloudBaremetalContent,
  enterprise: enterpriseContent,
  freeOpenSource: freeOpenSourceContent,
  dns: dnsContent
};
