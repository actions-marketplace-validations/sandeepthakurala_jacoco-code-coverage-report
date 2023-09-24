export interface Icoverage {
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
