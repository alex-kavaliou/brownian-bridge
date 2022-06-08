import { FC, memo, useEffect, useState } from 'react';
import isMobile from 'react-device-detect';

import Button from 'antd/lib/button';
import InputNumber from 'antd/lib/input-number';
import Space from 'antd/lib/space';
import Tooltip from 'antd/lib/tooltip';
import Typography from 'antd/lib/typography';
import Slider from 'antd/lib/slider';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import Radio, { RadioChangeEvent } from 'antd/lib/radio';
import { Card, Col, Row, Statistic } from 'antd';
import { LineChart } from '../../utils/createChart';

interface Props {
  calculateBridge: () => void;
  onResetData: () => void;
  onChangeAmountPoints: (value: number) => void;
  onChangeSigma: (value: number) => void;
  amountPoints: number;
  sigma: number;
  typeChart: string;
  handleSelectTypeChart: (e: RadioChangeEvent) => void;
}
const lineChart = new LineChart()

const Component: FC<Props> = ({ calculateBridge, onResetData, onChangeSigma, sigma, onChangeAmountPoints, amountPoints, typeChart, handleSelectTypeChart }) => {
  const [position, setPosition] = useState({x: '0.00', y:'0.00'})
  const titleForTooltip = {
    points: 'Number of points to generate a graph',
    sigma: 'Standard deviation',
  }

  useEffect(() => {
    const unsubscribe = lineChart.subscribe('controllerPositionMove', (value) => setPosition(value))

    return unsubscribe
  }, [])

  return (
    <div className='controller'>
      <Space direction="vertical" size="middle" style={{ display: 'flex', padding: 30 }}>
        <Typography.Title level={4} style={{ color: !isMobile ? '#ffffff' : '#000000' }}>
          Controllers
        </Typography.Title>
        <Button onClick={calculateBridge} type="primary" block>
          Calculate new Brownian bridge
        </Button>
        <Button onClick={onResetData} type="primary" block>
          Reset
        </Button>
        <InputNumber
          controls={true}
          min={10}
          max={50000}
          step="100"
          defaultValue={amountPoints}
          onChange={onChangeAmountPoints}
          style={{ width: '100%' }}
          addonBefore={"Points:"}
          addonAfter={
            <Tooltip title={titleForTooltip.points}>
              <QuestionCircleTwoTone />
            </Tooltip>
          }
        />
        <Row>
          <Col span={11}>
            <InputNumber
              min={0}
              max={5}
              step={0.1}
              controls={false}
              value={sigma}
              onChange={onChangeSigma}
              style={{ width: '100%' }}
              addonBefore={"Sigma:"}
              addonAfter={
                <Tooltip title={titleForTooltip.sigma}>
                  <QuestionCircleTwoTone />
                </Tooltip>
              }
            />
          </Col>
          <Col span={13}>
            <Slider value={sigma} onChange={onChangeSigma} max={5} min={0} step={0.1} />
          </Col>
        </Row>
        <Radio.Group value={typeChart} onChange={handleSelectTypeChart}>
          <Radio.Button value="scaleLinear">scaleLinear</Radio.Button>
          <Radio.Button value="scaleLog">scaleLog</Radio.Button>
        </Radio.Group>
        <Card>
          <Statistic title="Position" value={position.x} prefix={'x:'} suffix={`/ y:${position.y}`} />
        </Card>
      </Space>
    </div>
  );
}

export const Controllers = memo(Component)
