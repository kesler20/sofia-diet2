export const zip = (k) => {
  // where k is a collection of lists
  // k = [y1, y2, y3 ... y_n]
  // where y1 = [ a1, b1, c1 .... z_n ]

  let x = [];
  // assuming that all the lists y_n have the same length
  for (let i in k[0]) {
    x.push(k.map((items) => items[i]));
  }
  return x;
};

export const sum = (array) => {
  let totalValue = 0;
  for (let val of array) {
    totalValue += val;
  }
  return totalValue;
};
