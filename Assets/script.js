console.log("Current hour:", dayjs().hour()); 

// var timeBlockDiv = $("div[id^=hour-]");
// var timeBlockDiv = $( "div-[id^=hour-] > p" );
var timeBlockDiv = $(".row time-block"); 
var timeValue = $((timeBlockDiv).data("value")); 
    console.log($((timeBlockDiv).data("value")));
var saveBtnEl = $("button[class^=btn]");
var inputEl = $("[id^=input-]"); 
var userInput = $("[type='text']").data();

//redefine savedInput so it's getting text entered into textarea & saved
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
  // $(userInput).each(function(i) {
    //not sure if fxn needed to iterate over every textarea with saved input or if localStorage.setItem and getItem just need to be fleshed out?
    localStorage.getItem("inputEl", savedInput);
    // for (variable of iterable) {

    // }
  });
// });

$(function highlight() {
  $(timeBlockDiv).map(function(i) { 
    var value = $(this).data("value");
    if (value < currentHour) {
      $(this).toggleClass(".past");
    } else if (value > currentHour) {
      $(this).toggleClass(".future");
    } else {
      $(this).toggleClass("present");
    }
    console.log(value); //not grabbing value as expected :(
  });
});

$(function saveInput() {
    saveBtnEl.on("click", function(event) {
      event.preventDefault();
      
      // SYNTAX:
      // localStorage.setItem(key, value);
      // let lastname = localStorage.getItem(key);
      localStorage.setItem(inputEl, savedInput);
      console.log(savedInput);

    });
  });

// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?

// pseudo-code
      // write fxn to check current time: If else? If #hour == current time, toggle .present class, else if #hour < current time, toggle .past class, else toggle .future class.
