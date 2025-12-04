function flickSwitch(arr) {
  let mode = true;         // start returning true
  return arr.map(item => {
    if (item === 'flick') mode = !mode;  // flip on flick
    return mode;
  });
}
​