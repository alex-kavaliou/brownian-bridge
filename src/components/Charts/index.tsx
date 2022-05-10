import { useState, FC } from 'react';
import {
  VictoryAxis,
  VictoryBrushContainer,
  VictoryChart,
  VictoryLine,
  VictoryZoomContainer,
  VictoryZoomContainerProps
} from 'victory';

import { DataBringe } from '../../type';

interface Props {
  data: DataBringe[]
}

export const Charts: FC<Props> = ({ data }) => {
  const [zoomDomain, setZoomDomain] = useState<VictoryZoomContainerProps['zoomDomain']>({ x: [0, 1] })

  const handleZoom = (domain: VictoryZoomContainerProps['zoomDomain']) => {
    setZoomDomain(domain);
  };

  return (
    <>
      <VictoryChart
      width={900}
      height={350}
        containerComponent={
          <VictoryZoomContainer
            width={900}
            height={350}
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        {data.map(item => (
          <VictoryLine
            key={item.color}
            style={{
              data: { stroke: item.color }
            }}
            data={item.bridge}
            x={0}
            y={1}
        />
        ))}
      </VictoryChart>
      <VictoryChart
        padding={{ top: 10, left: 50, right: 50, bottom: 20 }}
        height={150}
        width={900}
        containerComponent={
          <VictoryBrushContainer
          width={900}
            height={160}
            brushDimension="x"
            brushDomain={zoomDomain}
            onBrushDomainChange={handleZoom}
          />
        }
      >
        <VictoryAxis />
        {data.map(item => (
          <VictoryLine
            key={item.color}
            style={{
              data: { stroke: item.color }
            }}
            data={item.bridge}
            x={0}
            y={1}
        />
        ))}
      </VictoryChart>
    </>
  );
}