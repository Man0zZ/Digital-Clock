// function clock() {
//   const hours = document.getElementById("hours");
//   const minutes = document.getElementById("minutes");
//   const seconds = document.getElementById("seconds");

//   let dname = new Date().getDay();
//   let mnt = new Date().getMonth();
//   let dnum = new Date().getDate();
//   let yr = new Date().getFullYear();
//   let h = new Date().getHours();
//   let m = new Date().getMinutes();
//   let s = new Date().getSeconds();
//   p = "AM";

//   if (h == 0) {
//     h = 12;
//   }
//   if (h > 12) {
//     h = h - 12;
//     p = "PM";
//   }

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const week = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const ids = ["dayname", "month", "daynum", "year"];

//   const values = [week[dname], months[mnt], dnum, yr];

//   for (i = 0; i < ids.length; i++)
//     document.getElementById(ids[i]).firstChild.nodeValue = values[i];

//   hours.innerHTML = h;
//   minutes.innerHTML = m;
//   seconds.innerHTML = s;
//   period.innerHTML = p;
// }
// const interval = setInterval(clock, 1000);

function clock() {
  let dname = new Date().getDay();
  let dnum = new Date().getDate();
  let mnt = new Date().getMonth();
  let yr = new Date().getFullYear();
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  p = "AM";

  if (h === 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
  }
  p = "PM";

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weeks = [
    "Sunaday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friaday",
    "Saturaday",
  ];
  const ids = ["dayname", "daynum", "month", "year"];
  const values = [months[mnt], weeks[dname], dnum, yr];

  for (i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  period.innerHTML = p;
}
const interval = setInterval(clock, 1000);
