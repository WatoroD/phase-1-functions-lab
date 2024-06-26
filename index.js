function distanceFromHqInBlocks(value) {
    return Math.abs(value - 42); 
  }

  function distanceFromHqInFeet(value) {
    let blocks = distanceFromHqInBlocks(value);
    return blocks * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    let distanceInBlocks = Math.abs(destination - start);
    return distanceInBlocks * 264; 
  }

  function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet > 2500) {
      return 'cannot travel that far';
    } else if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else {
      return 25;
    }
  }
