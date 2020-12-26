import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['26', '27', '28', '1', '2', '3', '4'],
  datasets: [
    {
      label: '',
      fill: true,
      backgroundColor: 'rgba(0,255,17,0.19)',
      borderColor: 'rgba(52,168,83,1)',
      borderJoinStyle: 'miter',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 6,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [100, 200, 101, 399, 250, 300, 340]
    }
    
  ],
  options: {
    legend: {
       display: false //This will do the task
    }
 }
};


export default class SmallGraphchart extends Component {
  render() {
    return (
      <div style={{display:'flex', flexDirection:'column', background:'white', boxShadow:'0px 0px 10px rgba(0, 0, 0, 0.05);', borderRadius:'25px'}}>
        <Line ref="chart" data={data} />
        <p> February March</p>
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}