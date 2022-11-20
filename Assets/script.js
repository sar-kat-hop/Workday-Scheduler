// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  // .append(content [, content ])
  // append( function )

  $("#currentDay").append("<p>Today is </p>", dateToday);
      console.log(dateToday);
      // console.log("The time is " + currentTime);
  
});

//dayjs code

//this isn't working, unclear why. 
      // var localizedFormat = require('dayjs/plugin/localizedFormat')
      // dayjs.extend(localizedFormat);
      // var weekday = require('dayjs/plugin/weekday');
      // dayjs.extend(weekday);

// dayjs().format("LLLL");

var dateToday = dayjs().format("LLLL");
//user's current time, default is in 24-hr format, GMT. 
// var currentTime = dayjs().hour();
// var weekdayNum = dayjs().day();
// var dayOfWeek = dayjs().toString();

//LocalizedFormat plugin needed for this code to work...

// function dayName () {
//   if (weekdayNum == 0) {
//     console.log("Sunday");
//   }
//   else if (weekdayNum == 1) {
//     console.log("Monday");
//   }
//   else if (weekdayNum == 2) {
//     console.log("Tuesday");
//   }
//   else if (weekdayNum == 3) {
//     console.log("Wednesday");
//   }
//   else if (weekdayNum == 4) {
//     console.log("Thursday");
//   }
//   else if (weekdayNum == 5) {
//     console.log("Friday");
//   }
//   else {
//     console.log("Saturday");
//   };
// };

// });
// toggleClass to toggle past, present, future css style to time blocks appropriately 