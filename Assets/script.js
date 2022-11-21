console.log("Current hour:", dayjs().hour()); 
//default is 24-hr format but can be converted to local format, which I think needs to happen for comparing equality to time-block hours (unless those get changed to 24-hr or get assigned hidden 24-hr values)

var timeBlockDiv = $("div[id^=hour-]"); 
    console.log("div[id^=hour-1]", timeBlockDiv); 
// var inputEl = $("div[id^=hour-].input"); 
var inputEl = $("textarea[class^=input]");
    console.log("textarea[class^=input]", inputEl);
var input = inputEl.val();
    console.log("input:", input);
var saveBtnEl = $(".saveBtn");
    console.log("saveBtnEl", saveBtnEl);
// var saveInput = localStorage.setItem(inputEl, userInput);
// var displayInput = localStorage.getItem(saveInput);
    
  $(document).ready(function() {
    var dateToday = dayjs().format("LLLL");
    $("#currentDay").append("<p>Today is</p", dateToday);
          console.log("Today's date is", dateToday);
      
      (function displayLastSaved() {
        var userInput = localStorage.getItem(input); 
        // var displayInput = 
        $(inputEl).append(userInput);
          console.log(userInput);
    }); 
  });

    $(function() {
      saveBtnEl.on("click", function(event) {
        event.preventDefault();
    });

  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.
  // HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  
        // SYNTAX:
        // localStorage.setItem(key, value);
        // let lastname = localStorage.getItem(key);

    $(function saveInput() {
      saveBtnEl.on("click", function() {
        var userInput = input;
        // var userInput = $(this.input).val(); 
        //trying to point to save button's corresponding text area, all of which I've given the .input class to
        localStorage.setItem(inputEl, userInput);
          console.log(userInput);
        // localStorage.setItem(savedInput.value);
        });
      });
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




