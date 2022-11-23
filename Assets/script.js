console.log("Current hour:", dayjs().hour()); 

var currentHour = dayjs().hour();
var hourDiv = $("div[id^=hour-]");
var inputEl = $(hourDiv).children("textarea");
var saveBtnEl = $("button[class^=btn]");
// var getUserInput = localStorage.getItem(userInput);
// var userInput = localStorage.setItem("inputEl", getUserInput);
// var userInput = JSON.stringify(inputEl);
// var savedInput = "";

//redefine savedInput so it's getting text entered into textarea & saved

$(document).ready(function() {

  var dateToday = dayjs().format("LLLL");

  $("#currentDay").append("<p>Today is</p", dateToday);
  console.log("Today's date is", dateToday); 
  
  function renderSaved(saveMe) { 
    
  };

  });

$(function highlight() {
  $(hourDiv).map(function() { 
var schedHour = (this).id.slice(5);
    // console.log((this.id).slice(5));
    if (schedHour < currentHour) {
      $(this).children("textarea").addClass("past");
      // console.log($(this).children("textarea"));
    } else if (schedHour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
    console.log(schedHour);
  });
});

// $(function saveInput(saved) {
//   var inputEl = $("div[id^=hour-]").children(3);
//   var saveMe = $("div[id^=hour-]").children(3).val();
//   console.log(saveMe);
// });

$(function btnEventListener() {
  saveBtnEl.on("click", function(event) {
    event.preventDefault();

    saveBtnEl.click(function saveInput() {
      // $().click();
      // var saveMe = $("div[id^=hour-]").children(textarea).val();
      var saveMe = inputEl.val();
      
      localStorage.setItem(inputEl, saveMe);
      console.log(saveMe);
      return saveMe;
    });
    });
  });

  $(function renderSaved(saveMe) {
    // $(userInput).each(function(i) {
      //not sure if fxn needed to iterate over every textarea with saved input or if localStorage.setItem and getItem just need to be fleshed out?
      var savedItem = localStorage.getItem(saveMe);
      inputEl.append("<p>", savedItem);
      // for (variable of iterable) {
      // }
    });
  // });
  
  // SYNTAX:
  // localStorage.setItem(key, value);
  // let lastname = localStorage.getItem(key);
  
// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?

// pseudo-code
      // write fxn to check current time: If else? If #hour == current time, toggle .present class, else if #hour < current time, toggle .past class, else toggle .future class.



// old variables for testing

// var inputEl = $("div[id^=hour-]").children(3);
// var timeValue = $((timeBlockDiv).data("value")); 
//     console.log($((timeBlockDiv).data("value")));
    // console.log(JSON.stringify(timeValue));
// var inputEl = $("[id^=input-]".text); 
    // console.log(JSON.stringify(inputEl));
// var userInput = $("[type='text']").data();
    // console.log(JSON.stringify(userInput));