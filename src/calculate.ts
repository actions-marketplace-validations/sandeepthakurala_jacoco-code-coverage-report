import { calculateCoverage } from './CalculateCoverageFor'

export function calculateAllCoverages(coverages: Promise<object[]>) {
  var instructionsCoverage = calculateCoverage(coverages, 'INSTRUCTION').then(
    value => {
      console.log('***************************')
      console.log(value)

      return value
    }
  )

  console.log(instructionsCoverage)
}
