// Bobby's Variant

function arrangeStudents(arr) {
  // create collection
  const students = {};

  // parse the input
  for (const line of arr) {
    const token = line.split(', ');
    const name = token[0].replace('Student name: ', '');
    const grade = Number(token[1].replace('Grade: ', ''));
    const averageScore = Number(token[2].slice(-4));

    // check if average score is more than 3
    if (averageScore >= 3) {
      if (!students[grade]) {
        students[grade] = {
          name: [name],
          averageScore: [averageScore],
        };
      } else {
        students[grade].name.push(name);
        students[grade].averageScore.push(averageScore);
      }
    }
  }

  // sort the by grade
  const sortedByGrade = Object.entries(students).sort((a, b) => a - b);


  // print the output
  for (const [grade, obj] of sortedByGrade) {
    const average =
      obj.averageScore.reduce((a, b) => a + b, 0) /
      obj.averageScore.length;

    console.log(`${Number(grade) + 1} Grade`);
    console.log(`List of students: ${obj.name.join(', ')}`);
    console.log(
      `Average annual score from last year: ${average.toFixed(2)}\n`
    );
  }
}

// Test 1 
console.log('\n----------------Test 1----------------\n');

schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);

/* Results: 
  9 Grade
  List of students: Mark, Daryl
  Average annual score from last year: 5.35

  10 Grade
  List of students: Ethan, Joey, Bill
  Average annual score from last year: 5.52

  11 Grade
  List of students: Steven, Philip, Gavin
  Average annual score from last year: 4.42

  12 Grade
  List of students: Bob, Peter
  Average annual score from last year: 5.02
*/

// Test 2
console.log('\n----------------Test 2----------------\n');

schoolRegister([
  'Student name: George, Grade: 5, Graduated with an average score: 2.75',
  'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
  'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
  'Student name: Bobby, Grade: 5, Graduated with an average score: 4.20',
  'Student name: John, Grade: 9, Graduated with an average score: 2.90',
  'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
  'Student name: Gary, Grade: 1, Graduated with an average score: 5.15'
]);

/* Results: 
  2 Grade
  List of students: Gary
  Average annual score from last year: 5.15

  3 Grade
  List of students: Steven
  Average annual score from last year: 4.90

  6 Grade
  List of students: Bobby
  Average annual score from last year: 4.20

  10 Grade
  List of students: Alex
  Average annual score from last year: 3.66
*/