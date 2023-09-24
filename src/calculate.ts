import { calculateCoverage } from './CalculateCoverageFor'
import { IJacocoCoverageReport } from './IJacocoCoverageReport'

export function calculateAllCoverages(icoverages: Promise<object[]>) {
  var coverages: Array<IJacocoCoverageReport> = []

  let instructCov = calculateCoverage(icoverages, 'INSTRUCTION')
  let branchCov = calculateCoverage(icoverages, 'BRANCH')
  let lineCov = calculateCoverage(icoverages, 'LINE')
  let complexityCov = calculateCoverage(icoverages, 'COMPLEXITY')
  let methodCov = calculateCoverage(icoverages, 'METHOD')

  const printValue = async () => {
    coverages.push(await instructCov)
    coverages.push(await branchCov)
    coverages.push(await lineCov)
    coverages.push(await complexityCov)
    coverages.push(await methodCov)

    console.log('*************')
    for (let cov of coverages) {
      console.log(cov)
    }
  }

  console.log('printValue*************printValue')

  printValue()
}
