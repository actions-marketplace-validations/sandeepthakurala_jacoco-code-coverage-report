import { calculateCoverage } from './CalculateCoverageFor'

export function calculateAllCoverages(coverages: Promise<object[]>) {
  calculateCoverage(coverages, 'INSTRUCTION').then(value => {
    console.log('***************************')
    console.log(value)
    console.log('***************************')
  })
}
