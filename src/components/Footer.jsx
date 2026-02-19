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
    <footer className="border-t border-dark-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-dark-accent-primary to-dark-accent-tertiary flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2L12 22M2 12L22 12" opacity="0.7"/>
                  <circle cx="12" cy="12" r="3" fill="white" stroke="none"/>
                </svg>
              </div>
              <span className="text-base font-bold text-dark-text-primary tracking-tight">Tunnels</span>
            </div>
            <p className="text-dark-text-muted text-xs leading-relaxed mb-5 max-w-xs">
              Modern networking that connects you to multiple networks at once. VPN, LAN, DNS security, and more.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-dark-text-muted hover:text-dark-accent-primary transition-all duration-150"
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
              <h4 className="text-xs font-semibold text-dark-text-primary mb-3 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-dark-text-muted hover:text-dark-text-secondary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-xs text-dark-text-muted hover:text-dark-text-secondary transition-colors"
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
        <div className="py-5 border-t border-dark-border/30 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-dark-text-muted text-[11px]">
            &copy; {currentYear} Tunnels. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:support@tunnels.is"
              className="text-dark-text-muted hover:text-dark-text-secondary text-[11px] transition-colors"
            >
              Contact
            </a>
            <a
              href="https://github.com/tunnels-is"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-text-muted hover:text-dark-text-secondary text-[11px] transition-colors"
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
