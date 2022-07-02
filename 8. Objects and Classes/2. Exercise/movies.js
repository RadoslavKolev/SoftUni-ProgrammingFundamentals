function movies(input) {
  const moviesArr = [];

  for (const elem of input) {
    if (elem.includes('addMovie')) {
      let movie = elem.replace('addMovie ', '');
      moviesArr.push({
        name: movie
      });
    } else if (elem.includes('directedBy')) {
      let [movie, director] = elem.split(' directedBy ');
      moviesArr.forEach(movieObj => {
        if (movieObj.name === movie) {
          movieObj.director = director;
        }
      });
    } else if (elem.includes('onDate')) {
      let [movie, date] = elem.split(' onDate ');
      moviesArr.forEach(movieObj => {
        if (movieObj.name === movie) {
          movieObj.date = date;
        }
      });
    }
  }

  for (const obj of moviesArr) {
    if (obj.name && obj.date && obj.director) {
      console.log(JSON.stringify(obj));
    }
  }
}

movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen'
]);

movies([
  'addMovie The Avengers',
  'addMovie Superman',
  'The Avengers directedBy Anthony Russo',
  'The Avengers onDate 30.07.2010',
  'Captain America onDate 30.07.2010',
  'Captain America directedBy Joe Russo'
]);