# Portfolio-website

# Planning and Building
I created a wireframe on whimsical to get a general idea of how I wanted my page to look. I was going to use flexbox but decided it would
work better if i built it using CSS grid. I created some of my own artwork to use in the background and placed these in spaces on the grid.
I used the z-index property to ensure they were behind other elements.

# JavaScript
I added some JavaScript to make links appear and disappear and to animate the pig so that the user would know it was interactive. In order to view the links
properly, I also used JS to hide some other elements.

# Responsiveness
I spent a while editing for responsiveness. I used the responsive design mode on safari to see which problems arose when the screen was resized. The biggest issue 
was that the site was not readable on phones. To make the site appear better on phones, I changed the display to block. I also changed the size of the h1 to fit 
different sreensizes. I spent time moving around the background images so that they were places correctly for each screen size.

# Debugging and problem solving
* When editing for responsiveness I noticed some of the background images were not positioned well and kept moving when the grid resized. I also noticed
  I was getting some unexpected effects when changing the CSS. To work out where I had gone wrong, I commented out some of the code
  and tested the page to see what was causing the effects. Then I edited accordingly.
* I decided that I needed all the elements on my contact page to disappear when the links appeared but i wasn't sure
  how to make this work without giving each of them an id and adding it into the function. I gave them all the same class and
  tried to hide all elements with the class buyt this didn't work. I realised I needed to add a for loop to iterate through
  each element with that class and hide them. 

# Next Steps/ What I would change
* I would like to make the transitions smoother in javaScript. It can be a bit jumpy.
* In hindsight, I should have placed the background images in fixed positions, rather than in grid as this caused problems when editing for responsiveness.
