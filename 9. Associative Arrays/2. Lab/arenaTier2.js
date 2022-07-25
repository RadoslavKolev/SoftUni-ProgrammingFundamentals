// Todor's variant with object literal

function arenaTier(input) {
  const pool = {};

  for (const elem of input) {
    if (elem === 'Ave Cesar') break;

    // Inserting gladiators in the pool
    if (elem.includes('->')) { 
      let [gladiator, technique, skill] = elem.split(' -> ');
      skill = Number(skill);

      // if there is no such gladiator, create it (assign empty object)
      if (!pool.hasOwnProperty(gladiator)) {
        pool[gladiator] = {};   
      }

      // if there is no such technique on the current gladiator, assign it to 0
      // in that way we escape from the else case
      if (!pool[gladiator].hasOwnProperty(technique)) {
        pool[gladiator][technique] = 0;
      }

      const oldSkill = pool[gladiator][technique];

      // if the current skill is higher than the oldSkill on the current technique
      // replace it
      if (skill > oldSkill) {
        pool[gladiator][technique] = skill;
      }

      // battle case
    } else if (elem.includes(' vs ')) { 
      const [gladiatorA, gladiatorB] = elem.split(' vs ');

      // if one of them don't exist, skip the fight
      if (!pool[gladiatorA] || !pool[gladiatorB]) continue;

      // [[technique1, skill1], [technique2, skill2]]
      const techniques = Object.keys(pool[gladiatorA]);
      let sumSkillOne = 0;
      let sumSkillTwo = 0;

      // calculating the sum of the matching technique skills on both gladiators
      for (const technique of techniques) {
        // if the second gladiator has the same technique as the first
        // add its skill to the sumSkill properties
        if (pool[gladiatorB].hasOwnProperty(technique)) {
          sumSkillOne += pool[gladiatorA][technique];
          sumSkillTwo += pool[gladiatorB][technique];
        }
      }

      // deleting gladiators from the pool
      // depends on their matching total technique skills
      // if their total skills are equal, we don't delete
      if (sumSkillOne > sumSkillTwo) {
        delete pool[gladiatorB];
      } else if (sumSkillOne < sumSkillTwo) {
        delete pool[gladiatorA];
      }
    }
  }

  // new object, containing the gladiator and his total skill points
  const totalSkills = {};
  const gladiators = Object.entries(pool);

  for (let [gladiator, techniquesObj] of gladiators) {
    if (!totalSkills.hasOwnProperty(gladiator)) {
      totalSkills[gladiator] = 0;
    }

    // we need only the values
    const skills = Object.values(techniquesObj);
    let currentSum = 0;

    // calculates the total sum of the current gladiator skills
    for (const currentSkill of skills) {
      currentSum += currentSkill;
    }

    totalSkills[gladiator] = currentSum;
  }

  // sorts gladiators by descending total skills
  // if they have equal total skills, it sorts them by their name (alphabetical)
  const sortedGladiators = Object.entries(totalSkills)
    .sort(([nameA, skillA], [nameB, skillB]) => {
      return skillB - skillA || nameA.localeCompare(nameB)
    });

  // output loop
  for (const [gladiator, skill] of sortedGladiators) {
    console.log(`${gladiator}: ${skill} skill`);

    // sorts the techniques in the pool by descending skills
    // if they have equal skills, it sorts them by their name (alphabetical)
    const sortedTechniques = Object.entries(pool[gladiator])
      .sort(([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA || keyA.localeCompare(keyB);
    });

    for (const [techniqueName, techniqueSkill] of sortedTechniques) {
      console.log(`- ${techniqueName} <!> ${techniqueSkill}`);
    }
  }
}

console.log('---------------------- Test 1  ----------------------');
arenaTier([
  'Peter -> BattleCry -> 400',
  'Alex -> PowerPunch -> 300',
  'Stefan -> Duck -> 200',
  'Stefan -> Tiger -> 250',
  'Ave Cesar'
]);

/* 
  Stefan: 450 skill
  - Tiger <!> 250
  - Duck <!> 200
  Peter: 400 skill
  - BattleCry <!> 400
  Alex: 300 skill
  - PowerPunch <!> 300
*/

console.log('---------------------- Test 2  ----------------------');
arenaTier([
  'Peter -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Peter vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Maximilian',
  'Ave Cesar'
]);

/* 
  Gladius: 700 skill
  - Shield <!> 250
  - Support <!> 250
  - Heal <!> 200
  Peter: 400 skill
  - Duck <!> 400
*/