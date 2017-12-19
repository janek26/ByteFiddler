
export default function setFlags(bits) {
  let flags = {zero: 0, parity: 0, carry: 0};

  let found = 0;
  /** Zero & Parity-Flag */
  for (let x=0; x<8; x++)
    if (bits[x] == 1) {
      found++;
    }

  if (found == 0)
    flags.zero = 1
  else
    flags.zero = 0

  if (found % 2 == 0)
    flags.parity = 1
  else
    flags.parity = 0

  return flags;
}
