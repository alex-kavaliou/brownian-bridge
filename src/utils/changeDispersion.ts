import { DataBringe, Point } from '../type';

export const changeDispersion = (): (sigma: number, data: DataBringe) => DataBringe => {
  const memo = new Map()

  return (sigma, data) => {
    const cash = memo.get(sigma) as DataBringe | undefined
    if (cash) {
      if (cash.id !== data.id) {
        memo.clear()
      } else {
        return cash
      }
    }

    const amountPoints = data.points.length - 1
    const dt = 1.0 / (amountPoints)
    const dt_sqrt = Math.sqrt(dt)
  
    const points: Point[] = [data.points[0]]
  
    for (let point = 0; point < amountPoints - 1; point++) {
      const t = point * dt
  
      const xi = (data.mu + sigma * data.points[point + 1].randomValue) * dt_sqrt
      const h = points[point].y * (1 - dt / (1 - t)) + xi
  
      points[point + 1] = {
        x: (1 / amountPoints) * (point + 1),
        y: h,
        randomValue: data.points[point + 1].randomValue,
      }
    }
  
    // Set last element to 0
    points[amountPoints] = data.points[amountPoints]
  
    points.forEach((item, index) => {
      points[index] = {
        ...item,
        y: (index === points.length - 1) ? item.y : (item.y + data.m[index])
      }
    })

    const result = {
      ...data,
      points,
    }

    memo.set(sigma, result)
    return result
  }
}