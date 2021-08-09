export function findCoin(coins, searchedCoin) {
  const coin = coins.find((testedCoin) => {
    return testedCoin.id === searchedCoin;
  });
  return coin;
};
