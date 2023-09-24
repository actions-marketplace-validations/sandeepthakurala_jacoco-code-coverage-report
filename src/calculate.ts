import * as core from '@actions/core'
import { calculateCoverage } from './calculateCoverageFor'

export function calculateAllCoverages(icoverages: Promise<object[]>): void {
  //Set instructions coverages to outputs.
  calculateCoverage(icoverages, 'INSTRUCTION').then(value => {
    core.setOutput('instruction_count', value.count)
    core.setOutput('instruction_covered', value.covered)
    core.setOutput('instruction_coverage', value.percent)
  })

  //Set branch coverages to outputs.
  calculateCoverage(icoverages, 'BRANCH').then(value => {
    core.setOutput('branch_count', value.count)
    core.setOutput('branch_covered', value.covered)
    core.setOutput('branch_coverage', value.percent)
  })

  //Set line coverages to outputs.
  calculateCoverage(icoverages, 'LINE').then(value => {
    core.setOutput('lines_count', value.count)
    core.setOutput('lines_covered', value.covered)
    core.setOutput('lines_coverage', value.percent)
  })

  //Set complexity coverages to outputs.
  calculateCoverage(icoverages, 'COMPLEXITY').then(value => {
    core.setOutput('complexity_count', value.count)
    core.setOutput('complexity_covered', value.covered)
    core.setOutput('complexity_coverage', value.percent)
  })

  //Set method coverages to outputs.
  calculateCoverage(icoverages, 'METHOD').then(value => {
    core.setOutput('method_count', value.count)
    core.setOutput('method_covered', value.covered)
    core.setOutput('method_coverage', value.percent)
  })

  icoverages.then(values => {
    core.setOutput('class_count', values.length)
  })
}
