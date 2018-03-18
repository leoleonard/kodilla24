const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor = 0, gateFactor = 0) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  // return Math.round(distancePoints + stylePoints + windFactor + gateFactor);
  //return Math.ceil(distancePoints + stylePoints + windFactor + gateFactor)
  return Math.ceil((distancePoints + stylePoints + windFactor + gateFactor)*10)/10;
  // return Math.round((distancePoints + stylePoints + windFactor + gateFactor)*10)/10;

};

module.exports = calculateTotalPoints;