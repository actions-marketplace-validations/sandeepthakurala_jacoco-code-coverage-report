interface JacocoCoverageReport {
  name: string
  count: number
  covered: number
  missed: number
}

export async function calculateCoverage(
  coverages: Promise<object[]>
): Promise<JacocoCoverageReport[]> {
  const results: JacocoCoverageReport[] = []

  return new Promise((resolve, reject) => {})
}

function calculateInstructionsCoverage(coverages: Promise<object[]>) {
  var instructionsCovered
  var instructionsMissed
  var instructionsCount

  coverages.then(value => {
    for (let cov of value) {
      console.log(cov)
    }
  })
}
