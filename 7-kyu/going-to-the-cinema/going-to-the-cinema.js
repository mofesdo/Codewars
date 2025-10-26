function movie(card, ticket, perc) {
  let n = 0;
  let priceA = 0;
  let priceB = card;
  let currentTicket = ticket * perc;
​
  while (Math.ceil(priceB) >= priceA) {
    n++;
    priceA = ticket * n;
    priceB += currentTicket;
    currentTicket *= perc;
  }
​
  return n;
}
​