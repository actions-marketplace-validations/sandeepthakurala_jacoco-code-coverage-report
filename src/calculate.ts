import * as core from '@actions/core'
import { calculateCoverage } from './calculatecoveragefor'

export function calculateAllCoverages(icoverages: Promise<object[]>): void {
  const setCoverageValuesToOutput = async (): Promise<void> => {
    const instructionCov = await calculateCoverage(icoverages, 'INSTRUCTION')
    core.setOutput('instruction_count', instructionCov.count)
    core.setOutput('instruction_covered', instructionCov.covered)
    core.setOutput('instruction_coverage', instructionCov.percent)

    const branchCov = await calculateCoverage(icoverages, 'BRANCH')
    core.setOutput('branch_count', branchCov.count)
    core.setOutput('branch_covered', branchCov.covered)
    core.setOutput('branch_coverage', branchCov.percent)

    const lineCov = await calculateCoverage(icoverages, 'LINE')
    core.setOutput('lines_count', lineCov.count)
    core.setOutput('lines_covered', lineCov.covered)
    core.setOutput('lines_coverage', lineCov.percent)

    const complexity = await calculateCoverage(icoverages, 'COMPLEXITY')
    core.setOutput('complexity_count', complexity.count)
    core.setOutput('complexity_covered', complexity.covered)
    core.setOutput('complexity_coverage', complexity.percent)

    const method = await calculateCoverage(icoverages, 'METHOD')
    core.setOutput('method_count', method.count)
    core.setOutput('method_covered', method.covered)
    core.setOutput('method_coverage', method.percent)

    const obj = await icoverages
    core.setOutput('class_count', obj.length)
  }

  setCoverageValuesToOutput()
}
