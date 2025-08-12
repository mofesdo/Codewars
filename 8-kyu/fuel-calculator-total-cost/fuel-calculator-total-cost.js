function fuelPrice(litres, pricePerLitre) {
  // Calculate discount per litre (max 25 cents)
  const discountPerLitre = Math.min(Math.floor(litres / 2) * 0.05, 0.25);
​
  // Apply discount
  const total = litres * (pricePerLitre - discountPerLitre);
​
  // Round to 2 decimal places
  return +total.toFixed(2);
}