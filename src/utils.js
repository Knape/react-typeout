export const shuffle = (array) => {
  const d = array.slice();
  for (let c = d.length - 1; c > 0; c--) {
    const b = Math.floor(Math.random() * (c + 1));
    const a = d[c];
    d[c] = d[b];
    d[b] = a;
  }
  return d;
};


export const move = (array, steps = 1) => {
  return [].concat(array.slice(steps), array.slice(0, steps));
};
