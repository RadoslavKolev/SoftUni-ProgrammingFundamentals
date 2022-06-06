function tseamAccount(arr) {
  let games = arr.shift().split(" ");
  for (let i = 0; i < arr.length; i++) {
    let currentCommand = arr[i].split(" ");
    let command = currentCommand[0];
    let game = currentCommand[1];

    if (command !== 'Play!') {
      switch(command) {
        case 'Install':
          if(!games.includes(game)) {
            games.push(game);
          }
          break;
        case 'Uninstall':
          if(games.includes(game)) {
            let position = games.indexOf(game);
            games.splice(position, 1);
          }
          break;
        case 'Update': 
          if(games.includes(game)) {
            let position = games.indexOf(game);
            let updateGame = games.splice(position, 1);
            let gameToUpdate = updateGame.join();
            games.push(gameToUpdate);
          }
          break;
        case 'Expansion':
          let gameExpansion = game.split("-");
          let gameToSearch = gameExpansion[0];
          let expansion = gameExpansion[1];
          if(games.includes(gameToSearch)) {
            let position = games.indexOf(gameToSearch);
            let newGame = `${gameToSearch}:${expansion}`;
            games.splice(position + 1, 0, newGame);
          }
          break;
      }
    } else {
      console.log(games.join(" "));
    }
  }
}

tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);

tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']);
