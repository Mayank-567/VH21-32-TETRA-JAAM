import SmokingAlcoholChart from './SmokingAlcoholChart';
import GenderChart from './GenderChart';
import AgeChart from './AgeChart'
import './css/Output.css'

function Output(){
    var data1 = [{ x: 'Men', y: 60 }, { x: 'Women', y: 65 }]
    var data2 = [{ x: 'Men', y: 60 }, { x: 'Women', y: 65 },{ x: 'Alcohol', y: 55 }, { x: 'Smokers', y: 80 },{ x: 'Active', y: 55 }, { x: 'Non-active', y: 80 }]
    var data3 = [{ x: 'Alcohol', y: 55 }, { x: 'Smokers', y: 80 }]
    var data4 = [{ x: 'Alcohol', y: 45 }, { x: 'Smokers', y: 20 }]
    return (
        <div className="Output">
            <div className="charts">
                <GenderChart data1={data1} data2={data2} />
                <SmokingAlcoholChart data1={data3} data2={data4} />
            </div>
            <div className="prediction-output">
                <h2 class="title" >Output</h2>
            </div>
            <div className="doctor-info">
                <h2 class="title" >Cardiologists Near You</h2>
            </div>
            <AgeChart data1={data2}/>

    </div>
    )
}

export default Output