import * as core from '@actions/core'
import { calculateCoverage } from './CalculateCoverageFor'
import { IJacocoCoverageReport } from './IJacocoCoverageReport'

export function calculateAllCoverages(icoverages: Promise<object[]>) {
  var coverages: Array<IJacocoCoverageReport> = []

  calculateCoverage(icoverages, 'INSTRUCTION').then(value => {
    core.setOutput('instruction_count', value.count)
    core.setOutput('instruction_covered', value.covered)
    core.setOutput('instruction_coverage', value.percent)
  })
  let branchCov = calculateCoverage(icoverages, 'BRANCH')
  let lineCov = calculateCoverage(icoverages, 'LINE')
  let complexityCov = calculateCoverage(icoverages, 'COMPLEXITY')
  let methodCov = calculateCoverage(icoverages, 'METHOD')

  const printValue = async () => {
    coverages.push(await branchCov)
    coverages.push(await lineCov)
    coverages.push(await complexityCov)
    coverages.push(await methodCov)

    console.log('*************')
    for (let cov of coverages) {
      console.log(cov)
    }
  }
}
