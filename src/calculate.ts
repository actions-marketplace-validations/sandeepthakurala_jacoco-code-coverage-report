import { calculateCoverage } from './CalculateCoverageFor'
import { IJacocoCoverageReport } from './IJacocoCoverageReport'

export function calculateAllCoverages(icoverages: Promise<object[]>) {
  var coverages: Array<IJacocoCoverageReport> = []

  let val = calculateCoverage(icoverages, 'INSTRUCTION')
  calculateCoverage(icoverages, 'BRANCH').then(value => {
    console.log('******')
    console.log(value)
    return value
  })

  calculateCoverage(icoverages, 'LINE').then(value => {
    coverages.push(value)
  })

  calculateCoverage(icoverages, 'COMPLEXITY').then(value => {
    coverages.push(value)
  })

  calculateCoverage(icoverages, 'METHOD').then(value => {
    coverages.push(value)
  })

  console.log('#####')
  console.log(val)
}
