/**
 * @param {[][]string} grid The grid on which you should implement the flooding algorithm using the color defined at the x and y coordinates given in the x and y args
 * @param {number} x The x coordinate: R
 * @param {number} y The y coordinate
 * @param {string} color The color to fill with using the flood algorithm
 * @return {[][]string} The grid array with the implemented flood fill algorithm
 */
//Function which you have to implement
function floodFillAt(grid, x, y, color, callback) {

    var isNil = [null, undefined];

    // Check error input before doing
    var isValid = grid && Array.isArray(grid) && grid[0] &&
        !isNil.includes(x) && !isNil.includes(y);
    if (!isValid) return callback('Invalid grid');

    var preColor = grid[x][y];

    return floodFillLoop(grid, x, y, preColor, color)
        .then(() => {
            return callback(null);
        });
}
exports.floodFillAt = floodFillAt


// Change a color of a original pixel and 8 adjacent pixels if they have a same color. Nothing happens if they are different
function floodFillLoop(grid, x, y, preColor, color) {
    return new Promise((resolve) => {

        const height = grid.length; // == Number of Row == x
        const width = grid[0].length; // == Number of Column == y

        // Check base case
        if (x < 0 || x >= height || y < 0 || y >= width ||
            grid[x][y] === color || grid[x][y] !== preColor) return resolve();

        // Set new color to the selected pixel
        grid[x][y] = color;

        // Recursion to spread the color
        floodFillLoop(grid, x + 1, y, preColor, color);
        floodFillLoop(grid, x - 1, y, preColor, color);
        floodFillLoop(grid, x, y + 1, preColor, color);
        floodFillLoop(grid, x, y - 1, preColor, color);
        return resolve();
    })
}


//Generates a (rowsxcolumns) grid where the color of each point in the grid is randomly selected to be red, blue or green
function generateRandomGrid(rows, columns) {
    //The colors this grid allows
    var COLORS = [
        '#ff0000',
        '#008000',
        '#0000ff'
    ]

    //The number of columns in this grid
    var GRID_NUMBER_COLUMNS = columns
    //The number of rows in this grid
    var GRID_NUMBER_ROWS = rows

    //The 2D array which will be used to store the randomly generated color values
    var grid = []

    //Move row by row and populate each point in the row with a random color
    for (var rowIndex = 0; rowIndex < GRID_NUMBER_ROWS; rowIndex++) {
        //Create the array at this row which represents the column
        grid[rowIndex] = []

        //Go through each point in the column
        for (var columnIndex = 0; columnIndex < GRID_NUMBER_COLUMNS; columnIndex++) {
            //Generate the random color for the point at rowIndex,columnIndex
            var colorForCurrentCoord = COLORS[Math.floor(Math.random() * (3 - 0)) + 0]


            //Set the color
            grid[rowIndex][columnIndex] = colorForCurrentCoord
        }
    }

    //Return the generated grid
    return grid
}
exports.generateRandomGrid = generateRandomGrid


// Create a CONTROLLER and VIEW for a grid (I use a table)
function createGrid() {

    // Check if it has value
    var hasArgs = document.getElementById("getRows") &&
        document.getElementById("getColumns") &&
        document.querySelector(".canvas") &&
        document.getElementById('pickColor');

    if (!hasArgs) return false;

    // Get rows and columns are inputed by users
    var getRows = document.getElementById("getRows").value;
    var getColumns = document.getElementById("getColumns").value;
    grid = generateRandomGrid(getRows, getColumns);


    // Loop to create a table that has rows and columns are inputed by users
    var html = "<table class='center'>";
    for (var i = 0; i < getRows; i++) {
        html += "<tr id='row_" + i + "'>"

        for (var j = 0; j < getColumns; j++) {
            html += "<td id='column_" + j + "' width='130' style='background-color: " + grid[i][j] + ";'><button>Click</button></td>"
        }
        html += "</tr>"
    }
    html += "</table>";

    // Add a table into the HTML
    document.querySelector(".canvas").insertAdjacentHTML('beforeend', html);


    // Do this when button is clicked to change a color
    $("button").click(function () {

        if (!this.parentNode || !this.parentNode.parentNode) return false;
        
        // Get value of an x and y coordinate
        var column = this.parentNode.id;
        var getColumnId = parseInt(column.split('_')[1]);
        var row = this.parentNode.parentNode.id;
        var getRowId = parseInt(row.split('_')[1]);

        // Get a new color in order to do flood fill. Default color is Red if user does not change a color
        var getNewColor = document.getElementById('pickColor').value;

        return floodFillAt(grid, getRowId, getColumnId, getNewColor, function (err) {

            if (err) return console.error(err);

            // Change a color
            for (var i = 0; i < getRows; i++) {
                for (var j = 0; j < getColumns; j++) {
                    document.getElementById("row_" + i).children[j].style.backgroundColor = grid[i][j];
                }
            }
        });
    });
    return false;
}
exports.createGrid = createGrid
