function schoolRegister(input) {
  // Array of student objects with grade higher than 2.99
  const passedStudents = [];

  // Pushing all the passed students (higher than 2.99) as objects
  for (const elem of input) {
    const student = elem.split(', ');
    const name = student[0].replace('Student name: ', '');
    const grade = Number(student[1].replace('Grade: ', ''));
    const averageScore = Number(
      student[2].replace('Graduated with an average score: ', '')
    );

    // Creating the object
    const studentObj = {
      name,
      grade,
      averageScore,
    };

    if (studentObj.averageScore >= 3.00) {
      passedStudents.push(studentObj);
    }
  }

  // Sorting the students by their grade
  const sortedStudents = passedStudents.sort((a, b) => a.grade - b.grade);

  // To check if the grade is the same
  let previousGrade = 0;

  for (const student of sortedStudents) {
    // Holds the current grade student names
    const currentStudents = [];

    // Current grade average score
    let currentAverage = 0;
    let gradeSum = 0;
    let currentGrade = student.grade;

    // If the grade is the same, continue to the next student
    // Otherwise it doubles the output
    if (currentGrade === previousGrade) continue;

    console.log(`${currentGrade + 1} Grade`);

    // Pushes all of the current grade student names and sums their score
    sortedStudents.forEach(student => {
      if (student.grade === currentGrade) {
        currentStudents.push(student.name);
        gradeSum += student.averageScore;
      }
    });

    // Printing the student names
    console.log(`List of students: ${currentStudents.join(', ')}`);

    // Calculating and printing the average grade score
    currentAverage = (gradeSum / currentStudents.length).toFixed(2);
    console.log(`Average annual score from last year: ${currentAverage}\n`);

    previousGrade = currentGrade;
  }
}

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

/*
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

/* 
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