/**  Formula Normal = mu + sigma * randomValue */
export const randomNormal = (): number => {
  let x: number | null = null;
  let r: number | null = null;
  let y: number | null = null;

  // If available, use the second previously-generated uniform random.
  if (x != null) {
    y = x;
    x = null;
  }
  // Otherwise, generate a new x and y.
  else do {
    x = Math.random() * 2 - 1;
    y = Math.random() * 2 - 1;
    r = x * x + y * y;
  } while (!r || r > 1);

  return y * Math.sqrt(-2 * Math.log(r!) / r!)
}
