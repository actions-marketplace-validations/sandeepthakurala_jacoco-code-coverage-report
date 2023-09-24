import fs from 'fs'
import csvParser from 'csv-parser'

export async function readCSVFile(filePath: string): Promise<object[]> {
  const results: object[] = []

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', function (row) {
        console.log(row)
        console.log(row.INSTRUCTION_MISSED)
        console.log(row.INSTRUCTION_COVERED)
      })
      .on('end', () => resolve(results))
      .on('error', error => reject(error))
  })
}
