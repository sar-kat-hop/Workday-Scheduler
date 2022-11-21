# Workday-Scheduler README

## About
The purpose of this assignment was to use jQuery DOM traversal methods to navigate the DOM of the starter code provided, selecting specific elements and writing functions to apply class styling conditionally based on the user's current time of day (using dayjs to pull the time) and save user input to the selected textareas on clicking the selected save buttons.

Unfortunately, while I (temporarily) got localStorage.setItem and .getItem to kind of work, I couldn't figure out how to define one variable to select each intended textarea element or how to specify to treat each textarea input as separate instead of as one object (i.e., save as separate objects and display in separate textareas). When my code was semi-working, it was saving input in one textarea and displaying it in every textarea. 

I also couldn't get the conditional styling code working. I think the problem here is also with how I'm defining the variables and what they're selecting. Right now, they're not selecting each time-blocks data-value attribute, which I was hoping to use in the function to compare the values to the current hour and toggle class styling accordingly.

## Installation
N/A

## Screenshot
This is what the deployed work-in-progress site currently looks like in its broken state:

![screenshot of webpage](./Assets/WorkDayScheduler_WIP.png)

## Deployed Site
To see the deployed site, click [here](https://sar-kat-hop.github.io/Workday-Scheduler/). 

## Contributions
Many different resources from class activities to MDN, StackOverflow, Web3Schools, and jQuery documentation were used in the process of trying to figure this out. I'll be seeking additional support from student tutoring services soon to fix the outstanding issues, deploy, and resubmit the assignment.

## License
Please see the license included in the repo.
