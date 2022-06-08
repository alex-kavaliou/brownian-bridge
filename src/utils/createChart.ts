import * as d3 from "d3";
import { DataBringe, Margin, Point, ScaleType } from "../type";

function debounce<T extends Function>(func: T, wait = 20) {
    let h = 0;
    let callable = (...args: any) => {
        if (h) return

        func(...args)
        h = setTimeout(() => h = 0, wait) as unknown as number;
    };
    return <T>(<any>callable);
}

export class LineChart {
    data!: DataBringe;
    svg!: d3.Selection<SVGSVGElement, unknown, null, undefined>;
    xType: any;
    yType: any;
    width!: number;
    height!: number;
    marginTop!: number;
    marginRight!: number;
    marginBottom!: number;
    marginLeft!: number;
    xRange: number[] | undefined;
    yRange: number[] | undefined;
    X: number[] | undefined;
    Y: number[] | undefined;
    I: number[] | undefined;
    xScale: any;
    yScale: any;
    xAxis: any;
    yAxis: any;
    memo: any;
    listeners!: Record<string, Set<(...args: any[]) => any>>;
    static instance: any;
    initilized: boolean | undefined;

    constructor() {
        console.log('constructor')
        if (typeof LineChart.instance === 'object') {
            return LineChart.instance
        }
        this.listeners = {}

        LineChart.instance = this
        return LineChart.instance
    }
    xFormat = undefined;
    yFormat = undefined;
    xDomain = [0, 1];
    yDomain = [-2, 2];
    color = "currentColor"; // stroke color of line
    strokeLinecap = "round"; // stroke line cap of the line
    strokeLinejoin = "round"; // stroke line join of the line
    strokeWidth = 1.5; // stroke width of line, in pixels
    strokeOpacity = 1; // stroke opacity of line
    yLabel = "Y"
    mouseDown = false;

    initilize = (data: DataBringe, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, settings: {
        yType: ScaleType,
        width: number,
        height: number,
        margin: Margin,
    }) => {
        this.data = data;
        this.svg = svg;
        this.width = settings.width;
        this.height = settings.height;
        this.xType = d3.scaleLinear;
        this.yType = settings.yType === 'scaleLinear' ? d3.scaleLinear : d3.scaleSymlog;
        this.marginTop = settings.margin.top; // top margin, in pixels
        this.marginRight = settings.margin.right; // right margin, in pixels
        this.marginBottom = settings.margin.bottom; // bottom margin, in pixels
        this.marginLeft = settings.margin.left; // left margin, in pixels
        this.initilized = true;
    }

    subscribe = (eventName: string, callback: (...args: any[]) => any) => {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = new Set()
        }

        const callbacks = this.listeners[eventName]
        callbacks.add(callback)

        return () => {
            callbacks.delete(callback)

            if (callbacks.size === 0) {
                delete this.listeners[eventName]
            }
        }
    }

    private broadcast = (eventName: string, ...args: any[]) => {
        if (!this.listeners[eventName]) {
          return
        }
      
        const callbacks = this.listeners[eventName]
      
        for (const callback of Array.from(callbacks)) {
            callback.apply(null, args)
        }
      }

    private calculateScale = () => {
        console.log('calculateScale')
        this.xRange = [this.marginLeft, this.width - this.marginRight];
        this.yRange = [this.height - this.marginBottom, this.marginTop];
        this.xScale = this.xType(this.xDomain as number[], this.xRange);
        this.yScale = this.yType(this.yDomain as number[], this.yRange);
        this.xAxis = d3.axisBottom(this.xScale).ticks(this.width / 50).tickSizeOuter(0);
        this.yAxis = d3.axisLeft(this.yScale).ticks(this.height / 50, this.yFormat);
    }

    private mouseMove = debounce((event: any) => {
        console.log(event.type, 'ff')
        if (event.type === 'mousedown') {
            this.mouseDown = true
        }
        
        if (this.mouseDown) {
            console.log(event.pageX, this.xScale.invert(60), this.marginLeft, 'this.marginLeft')
            const i = d3.bisectCenter(this.X!, this.xScale.invert(event.pageX - this.svg.property('parentNode').offsetLeft));

            if (this.listeners && this.X && this.Y) {
                this.broadcast('controllerPositionMove', {x: this.X[i].toFixed(2), y: this.Y[i].toFixed(2)})
            }
        }
    }, 100)

    private mouseLeave = () => {
        this.mouseDown = false
        console.log('mouseLeave')
    }

    drawContainer = () => {
        this.calculateScale()

        d3.select('.controllerPosition')
            .on('mousedown', this.mouseMove)

        d3.select('#controllerContainer')
            .on('mousemove', this.mouseMove)
            .on('mouseup', this.mouseLeave)

        this.svg.attr("width", this.width)
            .attr("height", this.height)
            // .attr("viewBox", [0, 0, this.width, this.height])
            // .attr("style", "max-width: 100%; height: auto; height: intrinsic; border: solid 1px;");

        this.svg.append("g")
            .attr("transform", `translate(0,${this.height - this.marginBottom})`)
            .call(this.xAxis);

        this.svg.append("g")
            .attr("transform", `translate(${this.marginLeft - 30},0)`)
            .call(this.yAxis)
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").clone()
                .attr("x2", this.width - this.marginLeft)
                .attr("stroke-opacity", 0.1))
            .call(g => g.append("text")
                .attr("x", -this.marginLeft)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text(this.yLabel));

    }

    drawLine = (data: DataBringe) => {
        console.log('drawLine')
        this.data = data

        this.X = d3.map(data.points, (d: Point) => d.x)
        this.Y = d3.map(data.points, (d: Point) => d.y)
        this.I = d3.range(this.X.length);

        const line = d3.line()
            .x((i: any) => this.xScale(this.X![i]))
            .y((i: any) => this.yScale(this.Y![i]));

        this.svg.append("path")
            .attr("fill", "none")
            .attr("stroke", this.color)
            .attr("stroke-width", this.strokeWidth)
            .attr("stroke-linecap", this.strokeLinecap)
            .attr("stroke-linejoin", this.strokeLinejoin)
            .attr("stroke-opacity", this.strokeOpacity)
            .attr("d", line(this.I as any));
    }

    changeScaleType = (type: ScaleType) => {
        console.log('changeScaleType')
        this.yType = type === 'scaleLinear' ? d3.scaleLinear : d3.scaleSymlog;
        this.drawContainer()
        this.drawLine(this.data)
    }

    clearChart = () => {
        console.log('clearChart')
        this.svg.selectChildren().remove()
    }

    clearLine = () => {
        console.log('clearLine')
        this.svg.selectAll('path').remove()
    }
}