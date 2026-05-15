export function generateRef(type: 'BOOK' | 'ORD' | 'LEAD'): string {
  return `${type}-${Date.now().toString().slice(-7)}`;
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function getRatingStars(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '★'.repeat(fullStars);
  if (hasHalfStar) stars += '½';
  stars += '☆'.repeat(5 - Math.ceil(rating));
  return stars;
}
