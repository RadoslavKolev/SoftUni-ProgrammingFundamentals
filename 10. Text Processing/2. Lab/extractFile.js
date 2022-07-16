function extractFile(path) {
  const pathElements = path.split('\\');
  const fileElements = pathElements.pop().split('.');
  const extension = fileElements.pop();
  const fileName = fileElements.join('.');  // if there are more than 1 left

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

console.log('---------------------Test 1---------------------');
extractFile('C:\\Internal\\training-internal\\Template.pptx');

/* 
  File name: Template
  File extension: pptx
*/

console.log('---------------------Test 2---------------------');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');

/* 
  File name: LinkedList
  File extension: cs
*/

console.log('---------------------Test 3---------------------');
extractFile('C:\\Projects\\Data-Structures\\template.bak.pptx');

/* 
  File name: template.bak
  File extension: pptx
*/