import { SendOutlined } from '@ant-design/icons';
import { Slider } from 'antd';
import { memo, ReactElement, useEffect, useRef, useState } from 'react';
import { Margin } from '../../type';

interface Props {
  setY1: (value: number) => void;
  setY2: (value: number) => void;
  height: number;
  width: number;
  margin: Margin;
  y1: number;
  y2: number;
  children: ReactElement;
}

const WidthController = 22;

const Component: React.FC<Props> = ({ setY1, setY2, height, width, y1, y2, margin, children }) => {
  const controller = useRef<HTMLDivElement | null>(null)
  const [draggable, setDraggable] = useState(false)
  const [positionX, setPositionX] = useState(margin.left)
  const [startPositonX, setStartPositionX] = useState(0)

  const styleController: React.CSSProperties = {
    position: "absolute",
    bottom: margin.bottom - WidthController / 2,
    transform: 'translateX(-50%)',
    left: positionX,
    cursor: draggable ? 'grabbing' : 'grab',
    zIndex: 9,
  };

  const styleControllerContainer: React.CSSProperties = {
    position: 'relative',
    maxWidth: "fit-content",
    maxHeight: 500,
  };

  const styleIcon: React.CSSProperties = {
    transform: 'rotate(270deg)',
    padding: 4,
  };

  const styleLine: React.CSSProperties = {
    position: "absolute",
    bottom: 16,
    left: 10,
    width: 1,
    height: height - margin.top - margin.bottom - 16,
    backgroundColor: "grey"
  }

  const styleSlider: React.CSSProperties = {
    position: "absolute",
    height: height - margin.top - margin.bottom,
    top: margin.top - 4,
  };

  const handleMouseDown = () => {
    setDraggable(true)
  }

  const handleMouseUp = () => {
    setDraggable(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (draggable && controller.current) {
      const x = e.pageX - startPositonX + margin.left
      setPositionX(prev => (x >= margin.left && x <= width - margin.right) ? x : prev)
    }
  }

  useEffect(() => {
    if (controller.current) {
      console.log(controller.current.offsetLeft, 'controller.current.offsetLeft')
      setStartPositionX(controller.current.offsetLeft + margin.left)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controller.current, margin.left])

  return (
    <div id='controllerContainer' style={styleControllerContainer} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} ref={controller}>
      <div style={{ ...styleSlider, left: margin.left - 16 }}>
        <Slider className='chart-slider' vertical defaultValue={y1} onChange={setY1} max={2} min={-2} step={0.01} />
      </div>
        <div className='controllerPosition' style={styleController} onMouseDown={handleMouseDown}>
          <span style={styleLine} />
          <SendOutlined style={styleIcon} />
        </div>
      <div style={{ ...styleSlider, right: margin.right - 16 }}>
        <Slider className='chart-slider' vertical defaultValue={y2} onChange={setY2} max={2} min={-2} step={0.01} />
      </div>
      {children}
    </div>
  );
}

export const ChartsControllers = memo(Component);
