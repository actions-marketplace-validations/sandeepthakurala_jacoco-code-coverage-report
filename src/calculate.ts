import { calculateCoverage } from './CalculateCoverageFor'
import { IJacocoCoverageReport } from './IJacocoCoverageReport'

export function calculateAllCoverages(icoverages: Promise<object[]>) {
  var coverages: Array<IJacocoCoverageReport> = []

  calculateCoverage(icoverages, 'INSTRUCTION').then(value => {
    coverages.push(value)
  })

  calculateCoverage(icoverages, 'BRANCH').then(value => {
    coverages.push(value)
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

  for (let jacocoCoverage of coverages) {
    console.log('*******************')
    console.log(jacocoCoverage)
  }
}
