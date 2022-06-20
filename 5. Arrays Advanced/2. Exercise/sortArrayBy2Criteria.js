function sortArrayBy2Criteria(input) {
  let result = input.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });

  console.log(result.join('\n'));
}

// sortArrayBy2Criteria(['alpha',
//   'beta',
//   'gamma'
// ]);

sortArrayBy2Criteria(['Isacc',
  'Theodor',
  'Jack',
  'Harrison',
  'George'
]);