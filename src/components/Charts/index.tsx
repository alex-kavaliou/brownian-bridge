import { Layout, Slider, Typography } from 'antd';
import { forwardRef, memo } from 'react';
import { DataBringe, Margin } from '../../type';
import { ChartsControllers } from '../ChartsControllers';

interface Props {
  setY1: (value: number) => void;
  setY2: (value: number) => void;
  height: number;
  width: number;
  margin: Margin;
  y1: number;
  y2: number;
  data: DataBringe | null;
}


const Component = forwardRef<SVGSVGElement, Props>(({ setY1, setY2, height, width, y1, y2, margin }, ref) => {

  return (
    <Layout className="site-layout">
      <Layout.Header className="site-layout-background">
        <Typography.Title level={2} style={{ marginBottom: 0 }} >
          Brownian bridge
        </Typography.Title>
      </Layout.Header>
      <Layout.Content style={{ margin: '16px' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <ChartsControllers setY1={setY1} setY2={setY2} height={height} width={width} y1={y1} y2={y2} margin={margin}>
            <svg ref={ref} />
            </ChartsControllers>
        </div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>©2022 Created by Modsen</Layout.Footer>
    </Layout>
  );
})

export const Charts = memo(Component);
