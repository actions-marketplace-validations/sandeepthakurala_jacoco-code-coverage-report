import { Ijacococoveragereport } from './ijacococoveragereport'
import { Icoverage } from './icoverage'
import { calculatepercentage } from './calculatepercentage'

export async function calculateCoverage(
  coverages: Promise<object[]>,
  coveragePropertyName: string
): Promise<Ijacococoveragereport> {
  return coverages.then(value => {
    let instructionsCovered = 0
    let instructionsMissed = 0

    for (const c of value) {
      const cov = c as Icoverage

      type CoverageObjectKey = keyof typeof cov
      const missedKey = (coveragePropertyName + '_MISSED') as CoverageObjectKey
      const coveredKey = (coveragePropertyName + '_COVERED') as CoverageObjectKey

      instructionsMissed = instructionsMissed + Number(cov[missedKey])
      instructionsCovered = instructionsCovered + Number(cov[coveredKey])
    }

    const instructionsCoverageReport = {} as Ijacococoveragereport
    instructionsCoverageReport.name = coveragePropertyName
    instructionsCoverageReport.count = instructionsMissed + instructionsCovered
    instructionsCoverageReport.covered = instructionsCovered
    instructionsCoverageReport.missed = instructionsMissed
    instructionsCoverageReport.percent = calculatepercentage(
      instructionsCovered,
      instructionsMissed + instructionsCovered
    )

    return instructionsCoverageReport
  })
}
