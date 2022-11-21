console.log("Current hour:", dayjs().hour()); 
//default is 24-hr format but can be converted to local format, which I think needs to happen for comparing equality to time-block hours (unless those get changed to 24-hr or get assigned hidden 24-hr values)

var timeBlockDiv = $("div[id^=hour-]"); 
var saveBtnEl = $("button[class^=btn]");

// declaring these globally doesn't appear to be enough for fxns below to be able to access
// var userInput = $("textarea[id^=input-]").val();
// var inputEl = $("[id^=input-]"); 

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
  // displayLastSaved();
});

//this WAS saving input but isn't anymore; when working, it needed to only save input for each block individually
$(function saveInput() {
    saveBtnEl.on("click", function(event) {
      event.preventDefault();
      var userInput = $("textarea[id^=input-]").val();
      var inputEl = $("[id^=input-]"); 
      
      // SYNTAX:
      // localStorage.setItem(key, value);
      // let lastname = localStorage.getItem(key);
      localStorage.setItem(inputEl, userInput);
      console.log("input:", userInput);

      displayLastSaved();
    });
  });

// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
$(function displayLastSaved() {
  var displayInput = localStorage.getItem("userInput");
  var inputEl = $("[id^=input-]"); 

  $(inputEl).append(displayInput);
    // for (let i = 0; i < inputEl.length; i++) {
    //   $(inputEl).children().append(displayInput);
          console.log(displayInput);
    // };
  });

// $(function saveInput() {
//   saveBtnEl.on("click", function() {
//     // if (userInput != "") {
//       // var userInput = $("textarea]").val();
//       localStorage.setItem("userInput", userInput);
//         console.log("input:", userInput);
//       // };
//     });
//   });

// pseudo-code
      // write fxn to check current time: If else? If #hour == current time, toggle .present class, else if #hour < current time, toggle .past class, else toggle .future class.

// $(function() {
//   var currentHour = dayjs().hour() //.toString();
  // console.log(currentHour);
  // var scheduleHour = $(".hourText").toNum();
  // var scheduleHour = $(".hourText").text();
  // var parsedHour = parseInt(scheduleHour);
  // console.log(parsedHour); //logging NaN... can't be converted to number?
  // var hourValue = scheduleHour.match(/(\d+)/);
