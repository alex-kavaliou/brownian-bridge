import { useState, FC, useCallback, useEffect, useRef } from 'react';

import Layout from 'antd/lib/layout';
import { Controllers } from './components/Controllers';

import { createBrownianBridge } from './utils/createBrownianBridge';
import { DataBringe, Margin, ScaleType } from './type';

import './index.css';
import { LineChart } from './utils/createChart';
import { changeDispersion } from './utils/changeDispersion';
import { RadioChangeEvent } from 'antd';
import { Charts } from './components/Charts';
import * as d3 from "d3";

const memoChangeDispersion = changeDispersion()
const lineChart = new LineChart()

const App: FC = () => {
  const [initChart, setInitChart] = useState(false)
  const [data, setData] = useState<DataBringe | null>(null)
  const [amountPoints, setAmountPoints] = useState<number>(100)
  const [sigma, setSigma] = useState<number>(1)
  const [y1, setY1] = useState<number>(0)
  const [y2, setY2] = useState<number>(0)
  const [height] = useState<number>(500)
  const [width] = useState<number>(600)
  const [margin] = useState<Margin>({
    top: 20,
    bottom: 30,
    left: 60,
    right: 40,
  })
  const [typeChart, setTypeChart] = useState<ScaleType>("scaleLinear")
  const container = useRef<SVGSVGElement | null>(null)

  const handleChangeAmountPoints = useCallback((value: number): void => {
    setAmountPoints(value)
  }, []);

  const handleChangeSigma = useCallback((value: number): void => {
    setSigma(value)
  }, []);

  const handleSelectTypeChart = useCallback((e: RadioChangeEvent) => {
    setTypeChart(e.target.value)
  }, [setTypeChart])

  const handleResetData = useCallback((): void => {
    if (initChart) {
      lineChart.clearLine()
    }
    setData(null)
  }, []);

  const calculateBridge = useCallback(() => {
    const bridge = createBrownianBridge(amountPoints, sigma, y1, y2)
    setData(bridge)
  }, [amountPoints, sigma, y1, y2]);

  useEffect(() => {
    calculateBridge()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y1, y2])

  useEffect(() => {
    if (data) {
      const bridge = memoChangeDispersion(sigma, data);
      setData(bridge)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sigma])

  useEffect(() => {
    if (initChart && data) {
      lineChart.clearLine()
      lineChart.drawLine(data)
    }
  }, [initChart, data])

  useEffect(() => {
    const svg = d3.select(container.current)
    if (container.current && data) {
      console.log('start')
      lineChart.initilize(data, svg as any, { yType: typeChart, width: 1000, height: 500, margin })
      lineChart.drawContainer()
      setInitChart(lineChart.initilized!)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container.current])

  useEffect(() => {
    if (initChart) {
      lineChart.clearChart()
      lineChart.changeScaleType(typeChart)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initChart, typeChart])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider width="400">
        <div className='logo' />
        <Controllers
          onResetData={handleResetData}
          calculateBridge={calculateBridge}
          onChangeSigma={handleChangeSigma}
          onChangeAmountPoints={handleChangeAmountPoints}
          handleSelectTypeChart={handleSelectTypeChart}
          amountPoints={amountPoints}
          sigma={sigma}
          typeChart={typeChart}
        />
      </Layout.Sider>
      <Charts
        setY1={setY1}
        setY2={setY2}
        height={height}
        width={width}
        margin={margin}
        y1={y1}
        y2={y2}
        data={data}
        ref={container}
      />
    </Layout>
  );
}

export default App;