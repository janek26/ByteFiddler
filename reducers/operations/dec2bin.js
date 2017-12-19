export default function dec2bin(num) {
  let result = [0, 0, 0, 0, 0, 0, 0, 0];

  for (let x=num, y=7; x>0 && y>=0; y--, x/=2) {
    if (x % 2 == 0) {
      result[y] = 0;
    } else {
      result[y] = 1;
        x--;
    }
  }

  return result;
}
