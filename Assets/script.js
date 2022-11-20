// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

console.log(dayjs().hour()); //logging current hour for testing purposes

//declaring variables globally
var inputEl = $(".input");
var userInput = inputEl.val(); //or would .text() be better?
var timeBlockDiv = $("div[id^=hour-]"); //using wildcard to select all divs starting with hour-
var saveBtnEl = $(".saveBtn");

$(document).ready(function(){
  var dateToday = dayjs().format("LLLL");
  $("#currentDay").append("<p>Today is</p", dateToday);
    console.log(dateToday);
    
    displayLastSaved(); //calling fxn defined below to display user's locally stored input, if available
  }
);
      
      saveBtnEl.addEventListener("click", function(event) {
        event.preventDefault();
      }
// $(function() {
  //append hours to hourText instead of including in the html???
//   var hourText = $(".hourText");
//   var 
// })

// $(function() {
//   var currentHour = dayjs().hour() //.toString();
  // console.log(currentHour);
  // var scheduleHour = $(".hourText").toNum();
  // var scheduleHour = $(".hourText").text();
  // var parsedHour = parseInt(scheduleHour);
  // console.log(parsedHour); //logging NaN... can't be converted to number?

  //need to make it possible to compare equality of currentHour and scheduleHour. Extract numbers from scheduleHour (remove am/pm) or convert currentHour format? Or, just append am/pm separately?
  // var hourValue = scheduleHour.match(/(\d+)/);

  // console.log(hourValue); //not logging anything
  // console.log(scheduleHour[0]);
  // $(scheduleHour).css("color", "blue");

  //append a.m. or p.m. to hour on schedule. Currently not working (appending a.m. to all)

  // if (scheduleHour < 12) {
  //   $(".hourText").append(" a.m.");
  // } else {
  //   $(".hourText").append(" p.m.");
  // };

  //attempts to grab ids beginning with "hour-" that I couldn't get to work:
      // $("[id^=hour-").css("color", "blue");
      // $("[id=hour-9").css("color", "blue");
      // $("id[name^='hour']").css("color", "skyblue");
      // $(".row time-block").css("font-size", "30 px");
// });

// $(".hourText").append()

  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.
  
// pseudo-code
      
      // write fxn to check current time: If else? If #hour == current time, toggle .present class, else if #hour < current time, toggle .past class, else toggle .future class.

      // on click of save button, store input in textarea corresponding to save button clicked locally. 

      //

      // declare var for user text input
  // var textInput = $("textarea");
  
// )};

  // HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
// pseudo-code
// If else? If #hour == current time, toggle .present class, else if #hour < current time, toggle .past class, else toggle .future class.

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?




