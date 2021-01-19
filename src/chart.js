import React from 'react'
import { Radar } from 'react-chartjs-2';
import {makeObj} from './filter';

const chart = (props) => {
 const data = props.d.chartData;
 let target = makeObj(data);
 delete target[''];
 
 var l =[];
 var l_d = [];
 for(var i in target){
  l.push(i);
  l_d.push(target[i]);
 }
 const fuel = {
  labels: l,
  datasets: [
    {
      label: 'Intensity',
      data: l_d,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 3,
      
    },
  ],
}

 return (
  <React.Fragment>
  <Radar
  data={fuel}
  width={2}
  height={1}
  options={{ maintainAspectRatio: true }}
/>

  </React.Fragment>
 )
}

export default chart
