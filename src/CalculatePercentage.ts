export function calculatePercentage(amount: number, total: number): number {
  var percentage = (amount / total) * 100
  return Number((Math.round(percentage * 100) / 100).toFixed(2))
}
