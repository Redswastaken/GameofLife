/**
 * These example boards represent the row and column of live cells, where an empty array
 * represents an empty row. Feel free to keep this data structure or change it to something
 * that works better for you.
 */

export const BLOCK_BOARD = [
	[0, 0, 0],
	[0, 1, 1],
	[0, 1, 1],
	[0, 0, 0],
];

export const BLINKER_BOARD = [
	[0, 0, 0],
	[0, 1, 0],
	[0, 1, 0],
	[0, 1, 0],
	[0, 0, 0],
];

export const PINWHEEL_BOARD = [
	[0, 1, 1, 1, 1, 0],
	[1, 0, 0, 0, 0, 1],
	[1, 0, 0, 1, 0, 1],
	[1, 0, 0, 0, 1, 1],
	[1, 0, 1, 0, 0, 1],
	[0, 1, 1, 1, 1, 0],
];

//I'm assuming that all input boards wont have any live cells off screen
// Implement the Game of Life here to transform the inputBoard into the outputBoard!
export function getNextGeneration(inputBoard) {
	//printBoard(inputBoard);
	// the actual values of output board don't matter right now
	// just want to copy the size
	let outputBoard = inputBoard;
	let neighbors = 0;

	//setting variables for count neighbors bound checking
	let up = 0;
	let down = 0;
	let right = 0;
	let left = 0;
	for (let i = 0; i < inputBoard; i++) {
		for (let j = 0; j < inputBoard[i].length; j++) {
			//avoids out of bound errors
			i === 0 ? (up = 0) : (up = 1);
			i === inputBoard.length - 1 ? (down = 0) : (down = 1);
			j === 0 ? (left = 0) : (left = 1);
			j === inputBoard.length - 1 ? (right = 0) : (right = 1);

			neighbors = countNeighbors(inputBoard, i, j, up, down, left, right);

			//kill/ ressurect cells
			if ((neighbors === 2 || neighbors === 3) && inputBoard[i][j] === 1)
				outputBoard[i][j] = 1;
			else if (neighbors === 3 && inputBoard[i][j] === 0) outputBoard[i][j] = 1;
			else outputBoard[i][j] = 0;
		}
	}

	//printBoard(outputBoard);
	return outputBoard;
}

//up, right down, and left, are either 1 or 0
//and tell the function whether to check that position on the grid
//ex: if right is 0 now grid positions to the right of the xy will be checked
export function countNeighbors(board, x, y, up, down, left, right) {
	let total = 0;
	for (let i = x - up; i <= x + down; i++) {
		for (let j = y - left; j <= y + right; j++) {
			total += board[i][j];
		}
	}
	total -= board[x][y];
	return total;
}
export function printBoard(board) {
	for (let i = 0; i < board.length; i++) {
		console.log(board[i]);
	}
	console.log('\n');
}
