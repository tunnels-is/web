import { GitHubIcon, DiscordIcon, TwitterIcon, RedditIcon } from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/tunnels-is', icon: GitHubIcon },
    { name: 'Discord', url: 'https://discord.com/invite/7Ts3PCnCd9', icon: DiscordIcon },
    { name: 'Twitter', url: 'https://x.com/tunnels_is', icon: TwitterIcon },
    { name: 'Reddit', url: 'https://www.reddit.com/r/tunnels_is/', icon: RedditIcon },
  ];

  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Tunnels</h3>
            <p className="text-dark-text-secondary text-sm">
              Advanced networking made simple. Connect to multiple networks with VPN, LAN, DNS security, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-dark-text-primary uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Features', path: '/features' },
                { label: 'DNS Security', path: '/dns' },
                { label: 'Download', path: '/download' },
                { label: 'Pricing', path: '/pricing' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-dark-text-secondary hover:text-dark-accent-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-dark-text-primary uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-dark-elevated flex items-center justify-center text-dark-text-secondary hover:text-dark-accent-primary transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-text-muted text-sm">
              © {currentYear} Tunnels. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="mailto:support@tunnels.is"
                className="text-dark-text-muted hover:text-dark-text-primary text-sm transition-colors"
              >
                Contact Support
              </a>
              <a
                href="https://github.com/tunnels-is"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-text-muted hover:text-dark-text-primary text-sm transition-colors"
              >
                Open Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
