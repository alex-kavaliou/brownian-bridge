export interface DataBringe {
  id: number,
  points: Point[],
  m: number[],
  mu: number, 
  sigma: number,
}

export type Point = {
  x: number,
  y: number,
  randomValue: number
}

export type ScaleType = "scaleLog" | "scaleLinear";

export type Margin = {
  top: number,
  bottom: number,
  left: number,
  right: number,
}
