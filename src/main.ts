import * as core from '@actions/core'
import { readCSVFile } from './readjacocoreport'
import { calculateAllCoverages } from './calculate'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const csvFilePath: string = core.getInput('path')

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    const records = readCSVFile(csvFilePath)
    calculateAllCoverages(records)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
