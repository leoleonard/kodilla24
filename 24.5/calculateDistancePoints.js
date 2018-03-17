const calculateDistancePoints = (distance, hillSize, kPoint) => {
    switch (hillSize) {
      case 'normal':
        return 60 + ((distance - kPoint) * 2);

      case 'big':
        return 60 + ((distance - kPoint) * 1.8);

      case 'mamut':
        return 120 + ((distance - kPoint) * 1.2);

      default:
        return 'wrong hillSize - type in either normal, big, mamut';
    }
  };
  
  module.exports = calculateDistancePoints;

