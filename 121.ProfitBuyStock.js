// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// O(n^2)
const maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > 0 && profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};

const maxProfitOptimized = (prices) => {
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
      right++;
    } else {
      left = right;
      right++;
    }
  }

  return maxProfit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
// console.log(maxProfit([3, 2, 6, 5, 0, 3]));

console.log(maxProfitOptimized([7, 1, 5, 3, 6, 4]));
console.log(maxProfitOptimized([7, 6, 4, 3, 1]));
console.log(maxProfitOptimized([3, 2, 6, 5, 0, 3]));
