const assert = require('assert');
const {
	BLOCK_BOARD,
	BLINKER_BOARD,
	PINWHEEL_BOARD,
	getNextGeneration,
} = require('./game');

// If you want to use Mocha for unit testing, add some tests to this file
describe('Game of Life - getNextGeneration', () => {
	it('a still life should not change across multiple generations', () => {
		const generationOne = BLOCK_BOARD;
		const generationTwo = getNextGeneration(generationOne);
		const generationThree = getNextGeneration(generationTwo);

		assert.equal(generationOne, generationTwo);
		assert.equal(generationTwo, generationThree);
		assert.equal(generationThree, BLOCK_BOARD);
	});
});

describe('Game of Life - getNextGeneration', () => {
	it('[period 2 oscilator]', () => {
		const generationOne = BLINKER_BOARD;
		const generationTwo = getNextGeneration(generationOne);
		const generationThree = getNextGeneration(generationTwo);
		const generationFour = getNextGeneration(generationThree);

		assert.equal(generationOne, generationThree);
		assert.notEqual(generationTwo, generationOne);
		assert.equal(generationTwo, generationFour);
	});
});

describe('Game of Life - getNextGeneration', () => {
	it('period 4 osiclator ', () => {
		const generationOne = PINWHEEL_BOARD;
		const generationTwo = getNextGeneration(generationOne);
		const generationThree = getNextGeneration(generationTwo);
		const generationFour = getNextGeneration(generationThree);
		const generationFive = getNextGeneration(generationFour);

		assert.equal(generationOne, generationFive);
		assert.notEqual(generationOne, generationTwo);
	});
});
