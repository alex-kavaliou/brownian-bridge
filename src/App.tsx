import { useState, FC, useCallback } from 'react';
import { isDesktop, MobileView } from 'react-device-detect';

import Layout from 'antd/lib/layout';
import Typography from 'antd/lib/typography';
import notification from 'antd/lib/notification';
import { Controllers } from './components/Controllers';
import { Charts } from './components/Charts';

import { createBrownianBridge } from './utils/createBrownianBridge';
import { getColor } from './utils/getColor';
import { DataBringe } from './type';
import initialBridge from './initialBridge.json';

import './index.css';

const MAX_BRIDGES = 10;

const App: FC = () => {
  const [data, setData] = useState<DataBringe[] | []>([initialBridge])
  const [amountPoints, setAmountPoints] = useState<number>(100)
  const [sigma, setSigma] = useState<number>(1)

const openNotification = (message: string) => {
  notification.config({
    maxCount: 1,
  });
  notification.open({
    message: 'Warning',
    description: message,
  });
};

  const handleChangeAmountPoints = useCallback((value: number): void => {
    setAmountPoints(value)
  }, [amountPoints]);

  const handleChangeSigma = useCallback((value: number): void => {
    setSigma(value)
  }, [sigma]);

  const resetData = useCallback((): void => {
    setData([])
  }, []);

  const calculateBridge = useCallback(() => {
    if (data.length < MAX_BRIDGES) {
      const bridge = createBrownianBridge(amountPoints, sigma)

      setData(prevState => [...prevState, { bridge, color: getColor(prevState.length) }])
    } else {
      openNotification(`Max count bridges = ${MAX_BRIDGES}`)
    }
  }, [amountPoints, sigma, data]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isDesktop &&
        <Layout.Sider width="400">
          <div className='logo' />
          <Controllers
            resetData={resetData}
            calculateBridge={calculateBridge}
            onChangeSigma={handleChangeSigma}
            onChangeAmountPoints={handleChangeAmountPoints}
            amountPoints={amountPoints}
            sigma={sigma}
          />
        </Layout.Sider>
      }
      <Layout className="site-layout">
        <Layout.Header className="site-layout-background">
          <Typography.Title level={2} style={{ marginBottom: 0 }} >
            Brownian bridge
          </Typography.Title>
        </Layout.Header>
        <Layout.Content style={{ margin: '16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Charts data={data} />
          </div>
          <MobileView>
            <Controllers
              resetData={resetData}
              calculateBridge={calculateBridge}
              onChangeSigma={handleChangeSigma}
              onChangeAmountPoints={handleChangeAmountPoints}
              amountPoints={amountPoints}
              sigma={sigma}
            />
          </MobileView>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>©2022 Created by Modsen</Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default App;