import { XYPlot, XAxis, DecorativeAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
import './css/BarCharts.css'
function SmokingAlcoholChart({ data1, data2 }) {
  var color = 'white'
  return (
    <div className="double-slider-chart">
      <XYPlot yDomain={[0, 100]} xType="ordinal" width={250} height={250} xDistance={100} >
        <XAxis hideLine style={{
          text: { stroke: 'none', fill: color, fontWeight: 600 },
        }} />
        <YAxis title={"Percentage"} style={{
          text: { stroke: 'none', fill: color, fontWeight: 600 },
          title: {stroke: 'none', fill: color, fontWeight: 600},
          line: {stroke: color},
        }} />
        <VerticalBarSeries data={data1} onValueMouseOver={(datapoint)=>{console.log(datapoint)}} />
        <VerticalBarSeries data={data2} onValueMouseOver={(datapoint)=>{console.log(datapoint)}}/>
      </XYPlot>
    </div>
  )
}
export default SmokingAlcoholChart
