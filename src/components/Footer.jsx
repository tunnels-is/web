import { Link } from 'react-router-dom';
import { GitHubIcon, DiscordIcon, TwitterIcon, RedditIcon } from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Products',
      links: [
        { label: 'Features', path: '/features' },
        { label: 'DNS Security', path: '/dns' },
        { label: 'Security', path: '/security' },
        { label: 'Enterprise', path: '/enterprise' },
        { label: 'Download', path: '/download' },
        { label: 'Pricing', path: '/pricing' },
      ]
    },
    {
      title: 'Use Cases',
      links: [
        { label: 'Homelab', path: '/homelab' },
        { label: 'Personal VPN', path: '/personal-vpn' },
        { label: 'Public VPN', path: '/public' },
        { label: 'Office Networks', path: '/office' },
        { label: 'IoT Networks', path: '/iot' },
        { label: 'Cloud & Baremetal', path: '/cloud' },
        { label: 'LAN over WAN', path: '/lan-over-wan' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', path: 'https://docs.tunnels.is', external: true },
        { label: 'GitHub', path: 'https://github.com/tunnels-is', external: true },
        { label: 'Free & Open Source', path: '/free-and-opensource' },
      ]
    },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/tunnels-is', icon: GitHubIcon },
    { name: 'Discord', url: 'https://discord.com/invite/7Ts3PCnCd9', icon: DiscordIcon },
    { name: 'Twitter', url: 'https://x.com/tunnels_is', icon: TwitterIcon },
    { name: 'Reddit', url: 'https://www.reddit.com/r/tunnels_is/', icon: RedditIcon },
  ];

  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-dark-accent-primary rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2L12 22M2 12L22 12M5 5L19 19M19 5L5 19" opacity="0.6"/>
                  <circle cx="12" cy="12" r="3" fill="white" stroke="none"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-dark-text-primary">Tunnels</span>
            </div>
            <p className="text-dark-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              Modern networking that connects you to multiple networks at once. VPN, LAN, DNS security, and more — open source and free to self-host.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-dark-elevated border border-dark-border flex items-center justify-center text-dark-text-muted hover:text-dark-accent-primary hover:border-dark-border-light transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-dark-text-primary mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-dark-text-muted hover:text-dark-text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm text-dark-text-muted hover:text-dark-text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-dark-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-dark-text-muted text-xs">
            &copy; {currentYear} Tunnels. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:support@tunnels.is"
              className="text-dark-text-muted hover:text-dark-text-primary text-xs transition-colors"
            >
              Contact
            </a>
            <a
              href="https://github.com/tunnels-is"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-text-muted hover:text-dark-text-primary text-xs transition-colors"
            >
              Open Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
