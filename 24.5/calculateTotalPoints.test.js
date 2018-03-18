const assert = require('assert');
const calculateTotalPoints = require('./calculateDistancePoints');

// const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor = 0, gateFactor = 0)

describe('Total Points', () => {
    describe('total sum', () => {
        it('should return TOTAL for mamucia Planica - Freund', () => {
                const actual = calculateTotalPoints(227.5, 'mamut', 200, [18.0, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);
    
                const expected = 208.3;
    
                assert.equal(actual, expected);
            });
        it('should return TOTAL for normal Pjongjang - Hula', () => {
                const actual = calculateTotalPoints(111, 'normal', 98, [19.0, 19.5, 19.0, 19.0, 19.0], 3.2, -14.4);

                const expected = 131.9;

                assert.equal(actual, expected);
            });
    })
});