export default function bin2dec(num) {
  return num[7] * 1 +
         num[6] * 2 +
         num[5] * 2 * 2+
         num[4] * 2 * 2 * 2 +
         num[3] * 2 * 2 * 2 * 2 +
         num[2] * 2 * 2 * 2 * 2 * 2 +
         num[1] * 2 * 2 * 2 * 2 * 2 * 2 +
         num[0] * 2 * 2 * 2 * 2 * 2 * 2 * 2;
}
