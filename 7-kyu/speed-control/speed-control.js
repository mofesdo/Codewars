function gps(s, x) {
  if (x.length <= 1) return 0;
​
  let maxSpeed = 0;
​
  for (let i = 1; i < x.length; i++) {
    let delta = x[i] - x[i - 1];
    let speed = (3600 * delta) / s;  // speed per hour
    if (speed > maxSpeed) {
      maxSpeed = speed;
    }
  }
​
  return Math.floor(maxSpeed);
}