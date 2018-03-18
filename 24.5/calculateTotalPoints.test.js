const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

// const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor = 0, gateFactor = 0)

describe('Total Points', () => {
    describe('TOTAL', () => {
        it('should return TOTAL for mamut Planica - Freund', () => {
                const actual = calculateTotalPoints(227.5, 'mamut', 200, [18.0, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);
    
                const expected = 208.3;
    
                assert.equal(actual, expected);
            });

        it('should return TOTAL for normal Pjongjang - Hula', () => {
                const actual = calculateTotalPoints(111, 'normal', 98, [19.0, 19.5, 19.0, 19.0, 19.0], 3.2, -14.4);

                const expected = 131.8;

                assert.equal(actual, expected);
            });

            it('should return TOTAL for big Zakopne - Stoch', () => {
                const actual = calculateTotalPoints(134, 'big', 120, [19, 20, 19.5, 19, 18.5], 0, -5.4);

                const expected = 137.3;
    
                assert.equal(actual, expected);
            });
    });
});