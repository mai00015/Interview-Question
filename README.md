# How to run
- Enter a valid input into rows and columns field (number only)
- Press a Submit button to create a table with exact rows and columns
- Change a color if you like by pressing a color picker below a form
- After that, choose which location you would like to change a color and press a Click button
=> It will change a color of an original pixel and 8 adjacent pixels around it according to a button is clicked

- If you want to create a new table, you will need to refresh a page to start

# JS Technical Interview - Paint

## Instructions

Given the base project, you need to implement the `floodFillAt` method in the src/paint.js

- `floodFillAt`: The user should be able to input an x and y coordinate in the Width Field and the Height Field on the screen, and choose a color from the color picker. With these as inputs, implement the flood fill feature: Any pixel adjacent to the original pixel that is the same color as the pixel's original color should be changed to the new color, and this should also apply to its adjacent pixels (adjacent includes diagonals, so there are up to 8 adjacent pixels to one pixel). An example of flood fill can be found [here][1]. This method should be called when the Flood Fill button is pressed on the screen.

## UI

The UI portion of this project should have the following components:

- Consist of a grid whose number of rows and columns are inputed by a user
- The 3 colors randomly assigned to each point in the grid are inputed by the user
- The color with which the flood fill algorithm is implemented is inputed by the user
- And finally the center point for the flood fill algorithm is either inputed by the user using controls or by clicking on a point in the grid

Things to Consider:

- Approach this project as you would any new project i.e. use whatever best practices, styles etc. you would normally use
- You can add as many new methods, variables, objects, classes (etc.) as you want
- You can change the parameters of the given methods if you deem it necessary
- The only thing expected is to fill out the 1 method, but feel free to go further if wanted
- Feel free to use StackOverflow or any other online resource as you would normally do
- You should be using Git as you normally would in a project

[1]: http://inventwithpython.com/blogstatic/floodfill/floodfill4.png
