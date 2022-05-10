import numjs from 'numjs';

import { randomNormal } from './randomNormal';


export const createBrownianBridge = (amountPoints: number, sigma: number): number[][] => {
  const dt = 1.0 / ( amountPoints - 1 )
  const dt_sqrt = Math.sqrt(dt)

  const NdArray = numjs.empty([1, amountPoints])

  // Set first element to 0
  NdArray.set(0,0,0)

  for (let point = 0; point <= amountPoints - 2; point++) {
      const t = point * dt
      const xi = randomNormal(0, sigma) * dt_sqrt
      const h = NdArray.get(0, point) * (1 - dt / (1 - t)) + xi
      NdArray.set(0, point + 1, h)
  }

  // Set last element to 0
  NdArray.set(0, amountPoints - 1, 0)

  return (NdArray.tolist()[0] as unknown as number[])
    .reduce((arr, item, index) => {
      const y = (1 / NdArray.size) * index

      return [
        ...arr,
        [y, item]
      ]
    }, [] as number[][])
}