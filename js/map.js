{
  let el = document.querySelector('.content');

  const prices = [180, 190, 200];

  const upDatePrices = prices.map((price) => {
    return price * 2;
  });
  console.log(upDatePrices);
  el.innerHTML = upDatePrices;

  const upPrice2 = prices.map(price => price * 20);
  console.log(upPrice2);
  el.innerHTML = upDatePrices;
}
