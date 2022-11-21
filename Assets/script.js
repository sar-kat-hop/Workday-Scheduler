console.log(dayjs().hour()); //default is 24-hr format but can be converted to local format, which I think needs to happen for comparing equality to time-block hours (unless those get changed to 24-hr or get assigned hidden 24-hr values)

//declaring variables globally
var inputEl = $("div[id^=hour-].input"); //trying to point to .input associated with specific time-block divs only, so this variable can be used for save button fxn.
    console.log(inputEl);
var userInput = inputEl.val(); //or would .text() be better?
// var displayInput = localStorage.setItem(userInput);
var savedInput = localStorage.getItem(inputEl, userInput);
var timeBlockDiv = $("div[id^=hour-]"); 
    console.log(timeBlockDiv); 
var saveBtnEl = $(".saveBtn");
    console.log(saveBtnEl);


$(document).ready(function(){
  var dateToday = dayjs().format("LLLL");
  $("#currentDay").append("<p>Today is</p", dateToday);
    console.log(dateToday);
    
  (function displayLastSaved() {
    // localStorage.getItem(input, userInput).text();
    // localStorage.setItem(input, userInput).text();
    $(inputEl).append(userInput);
  }); 
}
);

// $(function displayLastSaved() {
  // var displayInput = localStorage.getItem(userInput);
//   inputEl.append(displayInput).text();
// })

$(function() {
  saveBtnEl.on("click", function(event) {
    event.preventDefault();
  });
});

// TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.
$(function saveInput() {
  saveBtnEl.on("click", function() {
    localStorage.setItem(".input", userInput);
    // localStorage.setItem(savedInput.value);
  })
})


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


  //append a.m. or p.m. to hour on schedule. Currently not working (appending a.m. to all)

  // if (scheduleHour < 12) {
  //   $(".hourText").append(" a.m.");
  // } else {
  //   $(".hourText").append(" p.m.");
  // };

// });


  
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




