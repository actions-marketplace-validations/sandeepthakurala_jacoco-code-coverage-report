import { IJacocoCoverageReport } from './IJacocoCoverageReport'
import { ICoverage } from './ICoverage'
import { calculatePercentage } from './CalculatePercentage'

export function calculateCoverage(
  coverages: Promise<object[]>,
  coveragePropertyName: string
): Promise<IJacocoCoverageReport> {
  return coverages.then(value => {
    var instructionsCovered = 0
    var instructionsMissed = 0

    for (let c of value) {
      var cov = c as ICoverage

      type CoverageObjectKey = keyof typeof cov
      let missedKey = (coveragePropertyName + '_MISSED') as CoverageObjectKey
      let coveredKey = (coveragePropertyName + '_COVERED') as CoverageObjectKey

      instructionsMissed = instructionsMissed + Number(cov[missedKey])
      instructionsCovered = instructionsCovered + Number(cov[coveredKey])
    }

    var instructionsCoverageReport = {} as IJacocoCoverageReport
    instructionsCoverageReport.name = 'Instruction'
    instructionsCoverageReport.count = instructionsMissed + instructionsCovered
    instructionsCoverageReport.covered = instructionsCovered
    instructionsCoverageReport.missed = instructionsMissed
    instructionsCoverageReport.percent = calculatePercentage(
      instructionsCovered,
      instructionsMissed + instructionsCovered
    )

    return instructionsCoverageReport
  })
}
