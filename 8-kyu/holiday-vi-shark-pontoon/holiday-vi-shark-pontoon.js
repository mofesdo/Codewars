function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  const yourTime = pontoonDistance / youSpeed;
  const sharkEffectiveSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
  const sharkTime = sharkDistance / sharkEffectiveSpeed;
  return yourTime < sharkTime ? "Alive!" : "Shark Bait!";
}
​