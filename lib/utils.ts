const BLOCKED_DOMAINS = [
  'placeimg.com',
  'placehold.co',
  'via.placeholder.com',
  'pravatar.cc',
];

export function sanitizeImageUrl(url: string): string {
  if (!url) return '/placeholder.svg';
  // Strip wrapping brackets/quotes from API responses like ["url"] or "url"
  const cleaned = url.replace(/^\[?"?|"?\]?$/g, '').trim();
  if (!cleaned.startsWith('http://') && !cleaned.startsWith('https://')) {
    return '/placeholder.svg';
  }
  try {
    const hostname = new URL(cleaned).hostname;
    if (BLOCKED_DOMAINS.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`))) {
      return '/placeholder.svg';
    }
  } catch {
    return '/placeholder.svg';
  }
  return cleaned;
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
