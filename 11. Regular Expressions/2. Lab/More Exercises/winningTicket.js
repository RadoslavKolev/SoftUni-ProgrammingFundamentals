function winningTicket(str) {
  const VALID_TICKET_LENGTH = 20;
  const tickets = str.trim().split(/\s*,\s*/);
  const pattern = /(?=.{20}).*?(?=(?<char>[@#$^]))(?<match>\k<char>{6,}).*(?<=.{10})\k<match>.*/;

  for (const ticket of tickets) {
    const validTicket = pattern.exec(ticket);

    if (validTicket) {
      const len = validTicket.groups.match.length;
      const char = validTicket.groups.char;

      if (len >= 6) {
        let message = `ticket "${ticket}" - ${len}${char}`;

        if (len === 10) {
          message += ' Jackpot!';
        }

        console.log(message);
      }
    } else if (ticket.length !== VALID_TICKET_LENGTH) {
      console.log('invalid ticket');
    } else {
      console.log(`ticket "${ticket}" - no match`);
    }
  }
}

console.log('----------------------Test 1----------------------');
winningTicket('Cash$$$$$$Ca$$$$$$sh ');

// ticket "Cash$$$$$$Ca$$$$$$sh" - 6$

console.log('----------------------Test 2----------------------');
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');

/* 
  ticket "$$$$$$$$$$$$$$$$$$$$" - 10$ Jackpot!
  invalid ticket
  ticket "th@@@@@@eemo@@@@@@ey" - 6@
*/

console.log('----------------------Test 3----------------------');
winningTicket('validticketnomatch:(');

// ticket "validticketnomatch:(" - no match