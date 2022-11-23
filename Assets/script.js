console.log("Current hour:", dayjs().hour()); 

var currentHour = dayjs().hour();
var hourDiv = $("div[id^=hour-]");
var inputEl = $(hourDiv).children("textarea");
var saveBtnEl = $("button[class^=btn]");

$(document).ready(function() {
  var dateToday = dayjs().format("LLLL");
    $("#currentDay").append("<p>Today is</p", dateToday);
      console.log("Today's date is", dateToday); 
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
    })
  });
  
$(function btnEventListener() {
  saveBtnEl.click(function(event) {
    event.preventDefault();
    })
  });

// this currently isn't working  
$(function saveMe() {
  saveBtnEl.click(function() {
    var apple = [];
    var userInput = $(inputEl).val();
      for (var i = 0; i < apple.length; i++) {
        apple.push(userInput[i]);
          localStorage.setItem("inputEl", userInput);
      }
    }) 
  });

    // saveBtnEl.click(function saveMe() {
    //     var apple = [];
    //     for (var i = 0; i < apple.length; i++) {
    //       apple.push(inputEl.val()[i]);
    //       localStorage.setItem(inputEl, inputEl.val());
    //       console.log(inputEl.val());
    //     } 
        // localStorage.setITem("key", apple);
    // });
      // saveBtnEl.click(function saveInput(saveMe_id) {
    //     var savedInput = [];
    //     savedInput.push(saveMe_id);
    //     localStorage.setItem("saveMe", savedInput(saveMe_id));
    //   console.log(saveMe_id);  
      // $((inputEl).val()).each(function() {
      //   var userInput = $(this);
      //   var findMe = userInput.find("textarea");
      //   var renderMe = userInput.data("textContent", findMe);
      //   localStorage.setItem();
      //     console.log(renderMe);

  // saveBtnEl.click(function saveInput(saveMe_id) {
  //   savedInput.push(saveMe_id);
  //   localStorage.setItem ("saveMe", savedInput(saveMe_id));
  //   console.log(saveMe_id);

      // var saveMe = inputEl.val();
      // localStorage.setItem(inputEl, saveMe);
      // console.log(saveMe);
    // });
  // });
  // });

  // $(function renderSaved(saveMe) {
    // $(userInput).each(function(i) {
      //not sure if fxn needed to iterate over every textarea with saved input or if localStorage.setItem and getItem just need to be fleshed out?
      // var savedItem = localStorage.getItem(saveMe);
      // inputEl.append("<p>", savedItem);
      // for (variable of iterable) {
      // }
    // });
  // });
  
  // SYNTAX:
  // localStorage.setItem(key, value);
  // let lastname = localStorage.getItem(key);
  
// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?