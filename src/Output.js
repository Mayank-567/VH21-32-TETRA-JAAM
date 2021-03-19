import BarCharts from './BarCharts';

import './css/Output.css'

function Output(){
    var data1 = [{ x: 'A', y: 10 }, { x: 'B', y: 5 }]
    var data2 = [{ x: 'A', y: 12 }, { x: 'B', y: 2 }]
    var data3 = [{ x: 'A', y: 5 }, { x: 'B', y: 12 }]
    var data4 = [{ x: 'A', y: 12 }, { x: 'B', y: 2 }]
    return (
        <div className="Output">
            <div className="charts">
                <BarCharts data1={data1} data2={data2} />
                <BarCharts data1={data3} data2={data4} />
            </div>
            <div className="prediction-output">
                <h2 class="title" >Output</h2>
            </div>
            <div className="doctor-info">
                <h2 class="title" >Cardiologists Near You</h2>
            </div>

    </div>
    )
}

export default Output