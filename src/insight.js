import React from 'react'
import {makeObj} from './filter'

const insight = (props) => {
 const data = props.d.chartData;

 let target = makeObj(data);
 target = {...target , '':0};
 var sortable = [];
 for(var i in target){
  sortable.push([i,target[i]]);
 }
 sortable.sort(function(a,b){
  return b[1]-a[1];
 })
 
 for(let x = 0 ; x<5 ;x++){
  sortable.push('',0);

 } 
 
 
 return (
  <div>
   <h4>Radar Chart:  By 2025 experts believe the focus will increase on the top 5 sectors of<span> {sortable[0][0]} , {sortable[1][0]} , {sortable[2][0]} , {sortable[3][0]} , {sortable[4][0]}</span></h4>
  </div>
 )
}

export default insight
