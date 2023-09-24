interface JacocoCoverageReport {
  name: string
  count: number
  covered: number
  missed: number
}

export async function readCSVFile(coverages: object[]): Promise<object[]> {
  const results: object[] = []

  return new Promise((resolve, reject) => {})
}
