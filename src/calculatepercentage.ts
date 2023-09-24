export function calculatepercentage(amount: number, total: number): number {
  const percentage = (amount / total) * 100
  return Number((Math.round(percentage * 100) / 100).toFixed(2))
}
