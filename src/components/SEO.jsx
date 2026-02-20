import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Tunnels';
const SITE_URL = 'https://tunnels.is';

const SEO = ({ title, description, breadcrumb }) => {
  const location = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Modern VPN, LAN & Networking`;
  const canonicalUrl = `${SITE_URL}${location.pathname}`;

  useEffect(() => {
    document.title = fullTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || '');
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = description || '';
      document.head.appendChild(metaDesc);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    const breadcrumbId = 'seo-breadcrumb-jsonld';
    let existingScript = document.getElementById(breadcrumbId);

    if (breadcrumb) {
      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': SITE_URL,
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': breadcrumb,
            'item': canonicalUrl,
          },
        ],
      };

      if (existingScript) {
        existingScript.textContent = JSON.stringify(breadcrumbData);
      } else {
        const script = document.createElement('script');
        script.id = breadcrumbId;
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(breadcrumbData);
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }

    return () => {
      document.title = `${SITE_NAME} - Modern VPN, LAN & Networking`;
    };
  }, [fullTitle, description, canonicalUrl, breadcrumb]);

  return null;
};

export default SEO;
