export function sanitizeImageUrl(url: string): string {
  if (!url) return '/placeholder.svg';
  const cleaned = url.replace(/^\[?"?|"?\]?$/g, '').trim();
  if (cleaned.startsWith('http://') || cleaned.startsWith('https://')) {
    return cleaned;
  }
  return '/placeholder.svg';
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
