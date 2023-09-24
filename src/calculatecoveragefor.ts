import { IJacocoCoverageReport } from './ijacococoveragereport'
import { ICoverage } from './icoverage'
import { calculatepercentage } from './calculatepercentage'

export async function calculateCoverage(
  coverages: Promise<object[]>,
  coveragePropertyName: string
): Promise<IJacocoCoverageReport> {
  const obj = await coverages
  let instructionsCovered = 0
  let instructionsMissed = 0

  for (const c of obj) {
    const cov = c as ICoverage

    type CoverageObjectKey = keyof typeof cov
    const missedKey = `${coveragePropertyName}_MISSED` as CoverageObjectKey
    const coveredKey = `${coveragePropertyName}_COVERED` as CoverageObjectKey

    instructionsMissed = instructionsMissed + Number(cov[missedKey])
    instructionsCovered = instructionsCovered + Number(cov[coveredKey])
  }

  const instructionsCoverageReport = {} as IJacocoCoverageReport
  instructionsCoverageReport.name = coveragePropertyName
  instructionsCoverageReport.count = instructionsMissed + instructionsCovered
  instructionsCoverageReport.covered = instructionsCovered
  instructionsCoverageReport.missed = instructionsMissed
  instructionsCoverageReport.percent = calculatepercentage(
    instructionsCovered,
    instructionsMissed + instructionsCovered
  )

  return instructionsCoverageReport
}
