function softUniStudents(input) {
  const courses = {};

  for (const elem of input) {
    if (elem.includes(': ')) {
      let [courseName, capacity] = elem.split(': ');
      capacity = Number(capacity);

      if (!courses.hasOwnProperty(courseName)) {
        courses[courseName] = {
          capacity: 0,
          students: [],
        };
      }

      courses[courseName].capacity += capacity;
    } else if (elem.includes('joins')) {
      let newElem = elem
        .replace('with email ', '')
        .replace('joins ', '')
        .replace('[', ' ')
        .replace(']', '');

      let [username, credits, email, courseName] = newElem.split(' ');
      credits = Number(credits);

      if (!courses.hasOwnProperty(courseName)) {
        continue;
      }

      if (courses[courseName].capacity === 0) {
        continue;
      }

      courses[courseName].students.push({
        credits,
        username,
        email,
      });

      courses[courseName].capacity--;
    }
  }

  const sortedStudents = Object.entries(courses)
    .sort(([courseA, objA], [courseB, objB]) => {
      return Object.values(objB)[1].length - Object.values(objA)[1].length
    });

  for (const [course, obj] of sortedStudents) {
    console.log(`${course}: ${obj.capacity} places left`);

    Object.values(obj)[1]
      .sort((a, b) => b.credits - a.credits)
      .forEach(student => {
        console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
      });
  }
}

console.log('---------------------- Test 1  ----------------------');
softUniStudents([
  'JavaBasics: 2',
  'user1[25] with email user1@user.com joins C#Basics',
  'C#Advanced: 3',
  'JSCore: 4',
  'user2[30] with email user2@user.com joins C#Basics',
  'user13[50] with email user13@user.com joins JSCore',
  'user1[25] with email user1@user.com joins JSCore',
  'user8[18] with email user8@user.com joins C#Advanced',
  'user6[85] with email user6@user.com joins JSCore',
  'JSCore: 2',
  'user11[3] with email user11@user.com joins JavaBasics',
  'user45[105] with email user45@user.com joins JSCore',
  'user007[20] with email user007@user.com joins JSCore',
  'user700[29] with email user700@user.com joins JSCore',
  'user900[88] with email user900@user.com joins JSCore'
]);

/* 
  JSCore: 0 places left
  --- 105: user45, user45@user.com
  --- 85: user6, user6@user.com
  --- 50: user13, user13@user.com
  --- 29: user700, user700@user.com
  --- 25: user1, user1@user.com
  --- 20: user007, user007@user.com
  JavaBasics: 1 places left
  --- 3: user11, user11@user.com
  C#Advanced: 2 places left
  --- 18: user8, user8@user.com
*/

console.log('---------------------- Test 2  ----------------------');
softUniStudents([
  'JavaBasics: 15',
  'user1[26] with email user1@user.com joins JavaBasics',
  'user2[36] with email user11@user.com joins JavaBasics',
  'JavaBasics: 5',
  'C#Advanced: 5',
  'user1[26] with email user1@user.com joins C#Advanced',
  'user2[36] with email user11@user.com joins C#Advanced',
  'user3[6] with email user3@user.com joins C#Advanced',
  'C#Advanced: 1',
  'JSCore: 8',
  'user23[62] with email user23@user.com joins JSCore'
]);

/* 
  C#Advanced: 3 places left
  --- 36: user2, user11@user.com
  --- 26: user1, user1@user.com
  --- 6: user3, user3@user.com
  JavaBasics: 18 places left
  --- 36: user2, user11@user.com
  --- 26: user1, user1@user.com
  JSCore: 7 places left
  --- 62: user23, user23@user.com
*/