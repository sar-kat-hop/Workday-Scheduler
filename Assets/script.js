console.log("Current hour:", dayjs().hour()); 
//default is 24-hr format but can be converted to local format, which I think needs to happen for comparing equality to time-block hours (unless those get changed to 24-hr or get assigned hidden 24-hr values)

var timeBlockDiv = $("div[id^=hour-]"); 
var inputEl = $("textarea[id^=input-]"); 
var saveBtnEl = $("button[class^=btn]");
var userInput = $("texarea[id^=input-]").val();

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

$(function() {
  saveBtnEl.on("click", function(event) {
    event.preventDefault();
  });
});

// TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.
// HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

// SYNTAX:
// localStorage.setItem(key, value);
// let lastname = localStorage.getItem(key);

//this is saving input but needs to only save input for each block individually
$(function saveInput() {
  saveBtnEl.on("click", function() {
    // if (userInput != "") {
      // var userInput = $("textarea]").val();
      localStorage.setItem("userInput", userInput);
        console.log("input:", userInput);
      // };
    });
  });

//this is displaying saved input, but it's displaying it on ALL available inputEls
$(function displayLastSaved() {
  var displayInput = localStorage.getItem("userInput");
  $(inputEl).append(displayInput);
    // for (let i = 0; i < inputEl.length; i++) {
    //   $(inputEl).children().append(displayInput);
          console.log(displayInput);
    // };
});

// $(function() {
//   var currentHour = dayjs().hour() //.toString();
  // console.log(currentHour);
  // var scheduleHour = $(".hourText").toNum();
  // var scheduleHour = $(".hourText").text();
  // var parsedHour = parseInt(scheduleHour);
  // console.log(parsedHour); //logging NaN... can't be converted to number?

  // var hourValue = scheduleHour.match(/(\d+)/);

// pseudo-code
      
      // write fxn to check current time: If else? If #hour == current time, toggle .present class, else if #hour < current time, toggle .past class, else toggle .future class.

      // on click of save button, store input in textarea corresponding to save button clicked locally. 

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  
// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?