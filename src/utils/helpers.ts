
/**
 * Format a number as Indonesian Rupiah
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format a date string to Indonesian format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/**
 * Get status badge color based on status
 */
export function getStatusColor(status: 'unpaid' | 'paid' | 'overdue'): string {
  switch (status) {
    case 'paid':
      return 'bg-green-100 text-green-800 border-green-300';
    case 'overdue':
      return 'bg-red-100 text-red-800 border-red-300';
    case 'unpaid':
    default:
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
  }
}

/**
 * Generate a random transaction reference number
 */
export function generateReferenceNumber(): string {
  const prefix = 'REF';
  const randomDigits = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  return `${prefix}-${randomDigits}`;
}
