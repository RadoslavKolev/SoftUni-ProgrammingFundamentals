function gramophone(band, album, song) {
  const FULL_ROTATION = 2.5;
  let songDuration = (album.length * band.length * song.length) / 2;
  let rotations = Math.ceil(songDuration / FULL_ROTATION);

  console.log(`The plate was rotated ${rotations} times.`);
}

gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
