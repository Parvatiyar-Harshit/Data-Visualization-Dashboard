import React , {useState , useEffect}  from 'react'

import {findSum , findPopulation , findMean , findSD , findSE , findCI , findCL , findZ} from './stats'

 
  





const Datadump = (props) => {
  const data = props.d.filteredData;
   //statistical functions
const sample_size = data.length;
const c = props.p.test.confidence;


const population_size = findPopulation(data , sample_size);
const population_sum = findSum(data , sample_size);
const mean  = findMean(population_size , population_sum); 
const sd = findSD(data , sample_size , mean , population_size  );
const h_i = Math.max(...population_sum.intensity_array);
const h_r = Math.max(...population_sum.relevance_array);
const h_l = Math.max(...population_sum.likelihood_array);
const h_im = Math.max(...population_sum.impact_array);
const l_i = Math.min(...population_sum.intensity_array);
const l_r = Math.min(...population_sum.relevance_array);
const l_l = Math.min(...population_sum.likelihood_array);
const l_im = Math.min(...population_sum.impact_array);
const se = findSE(population_size , sd);
const z = findZ(c);

const ci = findCI(z , se);
const cl = findCL(ci , population_size , sd);
//statistical functions
  
  


 
 
  
  
    return(
    
   <React.Fragment>
    
    
    
    <h4> N : {population_size.intensity} | &#956; : {mean.intensity.toFixed(2)} | &#963; : {sd.intensity.toFixed(2)} | Lower : {l_i} | Upper : {h_i} | C.L : {cl.intensity.toFixed(2)}</h4>
    
    
    
 
    
    
    
   </React.Fragment>
  )
  
 
}

export default Datadump
