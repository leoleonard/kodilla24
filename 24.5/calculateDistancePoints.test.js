const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe ('Distance Points', () => {
    describe ('hillSize', () => {
        it('should return value for the normal hillSize', () => {
            const actual = calculateDistancePoints(0, 'normal', 0);

            const expected = 60;

            assert.equal(actual, expected);
        });

        it('should return value for the big hillSize', () => {
            const actual = calculateDistancePoints(0, 'big', 0);

            const expected = 60;

            assert.equal(actual, expected);
        });

        it('should return value for the mamut hillSize', () => {
            const actual = calculateDistancePoints(0, 'mamut', 0);

            const expected = 120;

            assert.equal(actual, expected);
        });
    });

    describe('distance', () => {
        it('should return distance with normal hillSize', () => {
            const actual = calculateDistancePoints(100, 'normal', 90);

            const expected = 80;

            assert.equal(actual, expected);
        });

        it('should return distance with big hillSize', () =>{
            const actual = calculateDistancePoints(100, 'big', 90);

            const expected = 78;

            assert.equal(actual, expected);
        });

        it('should return distance with mamut hillSize', () => {
            const actual = calculateDistancePoints(100, 'mamut', 90);

            const expected = 132;

            assert.equal(actual, expected);
        });
    });

    describe('kPoint and distance', () => {
        it('should return value for the kPoint > distance', () => {
            const actual = calculateDistancePoints(100, 'mamut', 120);

            const expected = 96;

            assert.equal(actual, expected);
        });

        it('should return value for the kPoint < distance', () => {
            const actual = calculateDistancePoints(120, 'mamut', 100);

            const expected = 144;

            assert.equal(actual, expected);
        });
    });

})