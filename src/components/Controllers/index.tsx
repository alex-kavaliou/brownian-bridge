import { FC } from 'react';
import isMobile from 'react-device-detect';

import Button from 'antd/lib/button';
import InputNumber from 'antd/lib/input-number';
import Space from 'antd/lib/space';
import Tooltip from 'antd/lib/tooltip';
import Typography from 'antd/lib/typography';
import { QuestionCircleTwoTone } from '@ant-design/icons';

interface Props {
  calculateBridge: () => void;
  resetData: () => void;
  onChangeAmountPoints: (value: number) => void;
  onChangeSigma: (value: number) => void;
  amountPoints: number;
  sigma: number;
}

export const Controllers: FC<Props> = ({ calculateBridge, resetData, onChangeSigma, sigma, onChangeAmountPoints, amountPoints, }) => {

  const titleForTooltip = {
    points: 'Number of points to generate a graph',
    sigma: 'Standard deviation',
  }

  return (
    <div className='controller'>
      <Space direction="vertical" size="middle" style={{ display: 'flex', padding: 30 }}>
        <Typography.Title level={4} style={{ color: !isMobile ? '#ffffff' : '#000000' }}>
          Controllers
        </Typography.Title>
        <Button onClick={calculateBridge} type="primary" block>
          add new Brownian bridge
        </Button>
        <Button onClick={resetData} type="primary" block>
          Reset
        </Button>
        <InputNumber
        controls={true}
          min={10}
          max={1000}
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
        <InputNumber
          min={0.1}
          max={10}
          step="0.1"
          defaultValue={sigma}
          onChange={onChangeSigma}
          style={{ width: '100%' }}
          addonBefore={"Sigma:"}
          addonAfter={
            <Tooltip title={titleForTooltip.sigma}>
              <QuestionCircleTwoTone />
            </Tooltip>
          }
        />
      </Space>
    </div>
  );
}