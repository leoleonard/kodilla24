const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('Style points', () => {
    describe('Sum of the votes', () => {
        it('should return the average sum of the notes - test one', () => {
            const actual = calculateStylePoints([16, 17.5, 18.5, 18.5, 19.5]);

            const expected = 54.5;

            assert.equal(actual, expected);
        });

        it('should return the average sum of the notes - test two', () => {
            const actual = calculateStylePoints([11, 12.5, 14.5, 19.5, 19.5]);

            const expected = 46.5;

            assert.equal(actual, expected);
        });
    });

    describe('Format of the votes', () => {
        it('numbers of the votes', () => {
            const actual = calculateStylePoints([16, 17, 18, 19]);

            const expected = 'niepoprawna ilość oddanych głosów!';

            assert.equal(actual, expected);
        });

        it('format of the input votes', () => {
            const actual = calculateStylePoints(16, 17, 18, 19, 20);

            const expected = 'niepoprawny format danych!';

            assert.equal(actual, expected);
        });
    });
})