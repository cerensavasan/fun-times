# fun-times
project 0

repo url: https://github.com/kevinvkell/fun-times

In order to view the project, clone the repository from the above url and open index.html in a browser.
If you got the project in a zip file and are reading this then you have already 
unzipped the project and need only to open index.html in a browser.

I have only tested it in chrome. 

To get started I used the tutorial found here: http://bost.ocks.org/mike/bar/2/

In preparation for using data sets in future projects I tried to base some part of each
object drawn on the array of numbers that the tutorial used to make the bar chart.
None of it makes sense, I just kind of did what came into my head. 

The lines are just the length of each number in the array. 

The dots are at the coordinates of each number in the array. They become less blue as
the value increases.

For the polygon I used sin and cos to "wrap" the data in the 
array around a circle, so each point is placed on the unit circle by rotating
it a distance proportional to its value (I think...I might have done my math incorrectly). 

Aside from the dots, I just picked random colors for the objects.