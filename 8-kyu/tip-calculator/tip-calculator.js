function calculateTip(amount, rating) {
  let tip = 0;
  console.log(rating)
  switch (rating.toLowerCase()){
      case "terrible":
        tip = amount * 0;
      break;
      case "poor":
        tip = amount * .05;
      break;
      case "good":
        tip = amount * 0.10;
      break;
       case "great":
        tip = amount * 0.15;
      break;
      case "excellent":
        tip = amount * 0.20;
      break;
      default:
      return "Rating not recognised"
  }
  return Math.ceil(tip);
}