// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').

function formatDate(dateStr) {
  // your code here
  date = dateStr.split("-")
  console.log("date:" + date);
  sum = "";
  if (date[1] === "01") {
    date[1] = "January"
  } else if (date[1] === "02") {
    date[1] = "February"
  } else if (date[1] === "03") {
    date[1] = "March"
  } else if (date[1] === "04") {
    date[1] = "April"
  } else if (date[1] === "05") {
    date[1] = "May"
  } else if (date[1] === "06") {
    date[1] = "June"
  } else if (date[1] === "07") {
    date[1] = "July"
  } else if (date[1] === "08") {
    date[1] = "August"
  } else if (date[1] === "09") {
    date[1] = "September"
  } else if (date[1] === "10") {
    date[1] = "October"
  } else if (date[1] === "11") {
    date[1] = "November"
  } else if (date[1] === "12") {
    date[1] = "December"
  }

  if (date[2] === "01") {
    date[2] = "1"
  } else if (date[2] === "02") {
    date[2] = "2"
  } else if (date[2] === "03") {
    date[2] = "3"
  } else if (date[2] === "04") {
    date[2] = "4"
  } else if (date[2] === "05") {
    date[2] = "5"
  } else if (date[2] === "06") {
    date[2] = "6"
  } else if (date[2] === "07") {
    date[2] = "7"
  } else if (date[2] === "08") {
    date[2] = "8"
  } else if (date[2] === "09") {
    date[2] = "9"
  }
  sum = date[1] + ' ' + date[2] + ', ' + date[0]
  return sum;


}




console.log(formatDate('2022-01-01')) // 'January 1, 2022'