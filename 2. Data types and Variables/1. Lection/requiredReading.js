function requiredReading(pages, pagesPerHour, days) {
  let totalTime = pages / pagesPerHour;
  let requiredHours = totalTime / days;
  console.log(requiredHours);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
