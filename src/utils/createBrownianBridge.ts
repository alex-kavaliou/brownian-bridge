import { randomNormal } from './randomNormal';
import { DataBringe, Point } from '../type';

export const createBrownianBridge = (amountPoints: number, sigma: number, y1 = 0, y2 = 0, mu = 0,): DataBringe => {
  const m: number[] = [0];
  const dt = 1.0 / (amountPoints)
  // Set first element
  const points: Point[] = [{ x: 0, y: y1, randomValue: 0 }]

  for (let index = 0; index < amountPoints - 1; index++) {
    const t = index * dt
    m.push(y2 * t)
    const randomValue = randomNormal()

    const xi = (mu + sigma * randomValue) * Math.sqrt(dt)
    const h = points[index].y * (1 - dt / (1 - t)) + xi

    points[index + 1] = {
      x: (1 / amountPoints) * (index + 1),
      y: h,
      randomValue,
    }
  }

  // Set last element
  points[amountPoints] = {
    x: 1,
    y: y2,
    randomValue: 0,
  }

  points.forEach((item, index) => {
    points[index] = {
      ...item,
      y: (index === points.length - 1) ? item.y : (item.y + m[index])
    }
  })

  return {
    id: Math.random(),
    m,
    points,
    mu: 0,
    sigma: sigma,
  }
}