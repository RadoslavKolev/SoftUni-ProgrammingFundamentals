function extractEmails(input) {
  const emailPattern = /(?<user> [A-Za-z0-9]+[-.\w]*)@(?<host>[a-zA-Z-]+\.[A-Za-z-]+[A-Za-z-.]*)\b/g;

  // trim() removes the left space
  const validEmails = input.match(emailPattern)
    .map(email => email.trim());

  console.log(validEmails.join('\n'));
}

console.log('----------------------Test 1----------------------');
extractEmails('Please contact us at: support@github.com.');

// support@github.com

console.log('----------------------Test 2----------------------');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');

/* 
  s.miller@mit.edu
  j.hopking@york.ac.uk
*/

console.log('----------------------Test 3----------------------');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');

// steve.parker@softuni.de