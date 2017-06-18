// @flow

export const shuffle = (array: Array<string>): Array<string> => {
  // create a new copy of the a
  const d = array.slice();
  for (let c = d.length - 1; c > 0; c--) {
    const b = Math.floor(Math.random() * (c + 1));
    const a = d[c];
    d[c] = d[b];
    d[b] = a;
  }
  return d;
};


export const move = (a: Array<string>, steps: number = 1): Array<string> => {
  return [].concat(a.slice(steps), a.slice(0, steps));
};

export const getFirst = (a: Array<string>): string => a[0];
