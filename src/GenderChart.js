import { XYPlot, XAxis, Hint, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
import './css/BarCharts.css'
function GenderChart({ data1 }) {
  var color = 'white'
  return (
    <div className="double-slider-chart">
      <XYPlot yDomain={[0, 100]} xType="ordinal" width={250} height={250} xDistance={100} >
        <XAxis hideLine style={{
          text: { stroke: 'none', fill: 'white', fontWeight: 600 }
        }} />
        <YAxis title={"Percentage"} style={{
          text: { stroke: 'none', fill: color, fontWeight: 600 },
           title: { stroke: 'none', fill: color, fontWeight: 600 },
          line: {stroke: color},
        }} />
        <VerticalBarSeries onValueMouseOver={(datapoint,e)=>{console.log(e)}} 
        data={data1} barWidth={0.4}  />
      </XYPlot>
    </div>
  )
}
export default GenderChart