function excludingVatPrice(price) {
  if (price === null) return -1; // handle null case
  const original = price / 1.15; // remove 15% VAT
  return Number(original.toFixed(2));
}
​