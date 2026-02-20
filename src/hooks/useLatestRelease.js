import { useState, useEffect } from 'react';

const REPO = 'tunnels-is/tunnels';
const CACHE_KEY = 'tunnels_latest_release';
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

export default function useLatestRelease() {
  const [version, setVersion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const { version: v, ts } = JSON.parse(cached);
        if (Date.now() - ts < CACHE_TTL) {
          setVersion(v);
          setLoading(false);
          return;
        }
      } catch {}
    }

    fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
      .then(r => r.json())
      .then(data => {
        const v = data.tag_name?.replace(/^v/, '');
        if (v) {
          setVersion(v);
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ version: v, ts: Date.now() }));
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return { version, loading };
}
