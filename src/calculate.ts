interface JacocoCoverageReport {
  name: string
  count: number
  covered: number
  missed: number
}

interface CoverageObject {
  GROUP: string
  PACKAGE: string
  CLASS: string
  INSTRUCTION_MISSED: number
  INSTRUCTION_COVERED: number
  BRANCH_MISSED: number
  BRANCH_COVERED: number
  LINE_MISSED: number
  LINE_COVERED: number
  COMPLEXITY_MISSED: number
  COMPLEXITY_COVERED: number
  METHOD_MISSED: number
  METHOD_COVERED: number
}

export async function calculateCoverage(
  coverages: Promise<object[]>
): Promise<JacocoCoverageReport[]> {
  const results: JacocoCoverageReport[] = []

  calculateInstructionsCoverage(coverages)

  return new Promise((resolve, reject) => {})
}

function calculateInstructionsCoverage(coverages: Promise<object[]>) {
  coverages.then(value => {
    let key1 = 'INSTRUCTION_MISSED'
    var instructionsCovered = 0
    var instructionsMissed = 0
    var instructionsCount = 0

    for (let c of value) {
      var cov: CoverageObject = c as CoverageObject
      instructionsMissed += cov.INSTRUCTION_MISSED
      instructionsCovered += cov.INSTRUCTION_COVERED
      console.log(cov.INSTRUCTION_MISSED)
      console.log(cov.INSTRUCTION_COVERED)
    }

    instructionsCount = instructionsMissed + instructionsCovered
    console.log('****************************************')
    console.log(instructionsMissed)
    console.log(instructionsCovered)
    console.log(instructionsCount)
    console.log(calculatePercentage(instructionsCovered, instructionsCount))
    console.log('****************************************')
  })
}

function calculatePercentage(amount: number, total: number): number {
  return (amount / total) * 100
}
