import './Chart.css'
import ChartBar from './ChartBar'
const Chart =(props)=>{
    const valueArray = props.dataPoints.map(dataPoint=>dataPoint.value)
    const MaxVal = Math.max(...valueArray)
    return <div className='chart'>
        {props.dataPoints.map(dataPoint=><ChartBar key={dataPoint.label} maxValue={MaxVal} value={dataPoint.value} label={dataPoint.label}></ChartBar>)}
    </div>
}
export default Chart