# Jacoco Report Parser

This actions parse the jacoco code coverage CSV report and outputs the
coverages.

## Inputs

### `path`

**_Required_**: Path of CSV file generated by jacoco.

## Outputs

### `class_count`

This represents the total number of classes in your Java project. This includes
all classes defined in your source code.

### `instruction_count`

In Java, your source code is compiled into bytecode, which is a set of low-level
instructions that the Java Virtual Machine (JVM) can execute. Each Java source
code statement typically translates to one or more bytecode instructions.

### `instruction_covered`

Covered instructions are the executable bytecode instructions that have been
executed by your tests during their execution. JaCoCo records which bytecode
instructions were executed and which were not.

### `instruction_coverage`

To calculate instruction coverage, JaCoCo divides the number of covered
instructions by the total number of executable instructions and expresses it as
a percentage. The formula is:

Instruction Coverage Percentage = (Number of Covered Instructions / Total
Executable Instructions) \* 100%

A high instruction coverage percentage indicates that a significant portion of
your code's bytecode instructions have been exercised by your tests.

### `branch_count`

Shows the branches in the code, typically related to `if/else` and `switch`
statements.

### `branch_covered`

For each decision point in your code, JaCoCo tracks whether both the "true" and
"false" branches (or all possible branches) have been executed by your tests.

### `branch_coverage`

Branch coverage is calculated as the ratio of executed branches to the total
number of branches in your code, expressed as a percentage. The formula is:

Branch Coverage Percentage = (Number of Executed Branches / Total Number of
Branches) \* 100%

A high branch coverage percentage indicates that your tests have evaluated
different branches within your code.

### `lines_count`

Executable lines are lines of code that can be executed. This typically includes
statements within methods, loops, conditionals, and any other code that can be
executed during program execution

### `lines_covered`

Covered lines are the lines of code that have been executed by your tests during
their execution. When your tests run, JaCoCo records which lines of code were
executed and which were not.

### `lines_coverage`

To calculate line coverage, JaCoCo divides the number of covered lines by the
total number of executable lines and expresses it as a percentage. The formula
is:

Line Coverage Percentage = (Number of Covered Lines / Total Executable Lines) \*
100%

A high line coverage percentage indicates that a significant portion of your
code has been exercised by your tests.

### `complexity_count`

Cyclomatic complexity is a software metric that measures the complexity of a
program by counting the number of linearly independent paths through the code.
Each decision point (such as an if statement or a loop) adds to the complexity.
High cyclomatic complexity can indicate that a piece of code is harder to
understand and potentially harder to test.

### `complexity_covered`

Reflects the complexity of code by giving the number of paths covered.

### `complexity_coverage`

Reflects the complexity of code by giving the number of paths needed to cover
all the possible paths in a code through linear combination.

### `method_count`

In a Java program, classes contain methods, which are blocks of code that
perform specific tasks or functions. Methods are essential building blocks of a
Java application and often represent the behavior of the application.

### `method_covered`

Methods which were executed.

### `method_coverage`

Method coverage measures the percentage of methods in your Java classes that
have been executed by your tests. To calculate method coverage, JaCoCo divides
the number of methods that were executed by your tests by the total number of
methods in your classes and expresses it as a percentage.

Formula: Method Coverage Percentage = (Number of Executed Methods / Total Number
of Methods) \* 100%

In the context of JaCoCo reports, a higher method coverage percentage indicates
that a larger portion of your application's methods have been exercised by your
tests.

## Usage

```yaml
- uses: sandeepthakurala/jacoco-code-coverage-report@v1
  with:
    path: path/to/jacoco.csv
```
