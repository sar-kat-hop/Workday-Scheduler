console.log("Current hour:", dayjs().hour()); 

// var am9 = $("#input-1");
// var am10 = $("#input-2");
// var am11 = $("#input-3");
// var pm12 = $("#input-4");
// var pm1 = $("#input-5");
// var pm2 = $("#input-6");
// var pm3 = $("#input-7");
// var pm4 = $("#input-8");
// var pm5 = $("#input-9");
// var event9 = $(am9).data();
// var event10 = $(am10).data();
// var event11 = $(am11).data();
// var event12 = $(pm12).data();
// var event13 = $(pm1).data();
// var event14 = $(pm2).data();
// var event15 = $(pm3).data();
// var event16 = $(pm4).data();
// var event17 = $(pm5).data();

var timeBlockDiv = $("div[id^=hour-]"); 
var saveBtnEl = $("button[class^=btn]");
var inputEl = $("[id^=input-]"); 
var userInput = $("[type='text']").data();
var savedInput = localStorage.getItem(userInput);
var currentHour = dayjs().hour();

// var schedEvents = {
  
// };
// console.log(userInput);

// console.log("div[id^=hour-1]", timeBlockDiv); 
// console.log("saveBtnEl", saveBtnEl);
// var saveInput = localStorage.setItem(inputEl, userInput);
// var displayInput = localStorage.getItem(saveInput);
// var inputEl = $("textarea[class^=input]");
// console.log("textarea[class^=input]", inputEl);

$(document).ready(function() {

  var dateToday = dayjs().format("LLLL");

  $("#currentDay").append("<p>Today is</p", dateToday);
  console.log("Today's date is", dateToday); 

  });

$(function renderSaved() {
  $(userInput).each(function(i) {
    // for (variable of iterable) {

    // }
  })
});

$(function highlight() {
  $(timeBlockDiv).each(function(i) {
    if (this.value < currentHour) {
      $(this).toggleClass(".past");
    } else if (this.value > currentHour) {
      $(this).toggleClass(".future");
    } else {
      $(this).toggleClass("present");
    }
  });
});

$(function saveInput() {
    saveBtnEl.on("click", function(event) {
      event.preventDefault();
      
      // SYNTAX:
      // localStorage.setItem(key, value);
      // let lastname = localStorage.getItem(key);
      localStorage.setItem(inputEl, savedInput);

    });
  });

// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?

// pseudo-code
      // write fxn to check current time: If else? If #hour == current time, toggle .present class, else if #hour < current time, toggle .past class, else toggle .future class.
