import { XYPlot, XAxis, YAxis, VerticalBarSeries,VerticalGridLines, HorizontalGridLines } from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
import './css/BarCharts.css'
function BarCharts({data1,data2}) {

    return (
        <div className="double-slider-chart">
        <XYPlot xType="ordinal" width={250} height={250} xDistance={100}>
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={data1} />
          <VerticalBarSeries data={data2} />
        </XYPlot>
        </div>
    )
}
export default BarCharts