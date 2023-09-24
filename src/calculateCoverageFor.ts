import { IJacocoCoverageReport } from './iJacocoCoverageReport'
import { ICoverage } from './iCoverage'
import { calculatePercentage } from './calculatePercentage'

export async function calculateCoverage(
  coverages: Promise<object[]>,
  coveragePropertyName: string
): Promise<IJacocoCoverageReport> {
  return coverages.then(value => {
    let instructionsCovered = 0
    let instructionsMissed = 0

    for (let c of value) {
      let cov = c as ICoverage

      type CoverageObjectKey = keyof typeof cov
      let missedKey = (coveragePropertyName + '_MISSED') as CoverageObjectKey
      let coveredKey = (coveragePropertyName + '_COVERED') as CoverageObjectKey

      instructionsMissed = instructionsMissed + Number(cov[missedKey])
      instructionsCovered = instructionsCovered + Number(cov[coveredKey])
    }

    let instructionsCoverageReport = {} as IJacocoCoverageReport
    instructionsCoverageReport.name = coveragePropertyName
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
