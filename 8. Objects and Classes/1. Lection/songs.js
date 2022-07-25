function songs(songs) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }

    printSongName() {
      console.log(this.name);
    }
  }

  const numberOfSongs = Number(songs.shift());
  const typeList = songs.pop();

  for (let i = 0; i < numberOfSongs; i++) {
    const [type, name, time] = songs[i].split('_');
    const song = new Song(type, name, time);

    if (type === typeList || typeList === 'all') {
      song.printSongName();
    }
  }
}

console.log('------------------Test 1------------------');
songs([
  3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite'
]);

/*
  DownTown
  Kiss
  Smooth Criminal
*/

console.log('------------------Test 2------------------');
songs([
  4,
  'favourite_DownTown_3:14',
  'listenLater_Andalouse_3:24',
  'favourite_In To The Night_3:58',
  'favourite_Live It Up_3:48',
  'listenLater'
]);

// Andalouse

console.log('------------------Test 3------------------');
songs([
  2,
  'like_Replay_3:15',
  'ban_Photoshop_3:48',
  'all'
]);

/* 
  Replay
  Photoshop
*/