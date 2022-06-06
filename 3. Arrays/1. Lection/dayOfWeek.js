function dayOfWeek(num) {
  if (num < 1 || num > 7) {
    console.log("Invalid day!");
    return;
  }
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  console.log(days[num - 1]);
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
