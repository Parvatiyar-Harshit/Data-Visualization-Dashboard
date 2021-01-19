export const findSum = (data , n) =>{
 let res = {intensity:0 , relevance:0 , likelihood:0,impact:0 , intensity_array:[], relevance_array:[],likelihood_array:[],impact_array:[]};
 for(let x = 0 ; x< n ; x++){
  let i = data[x].intensity;
  let r = data[x].relevance;
  let l = data[x].likelihood;
  let im = data[x].impact;
  if(i!==''){
   res.intensity = res.intensity + parseInt(i);
   res.intensity_array.push(parseInt(i));
  }
  if(r!==''){
   res.relevance = res.relevance + parseInt(r);
   res.relevance_array.push(parseInt(r));
  }
  if(l!==''){
   res.likelihood = res.likelihood + parseInt(l);
   res.likelihood_array.push(parseInt(l));
  }
  if(im!==''){
   res.impact = res.impact + parseInt(im);
   res.impact_array.push(parseInt(im));
  }
  

 }
 return res;
}

export const findPopulation = (data , n) =>{
 let res = {intensity:data.length , relevance:data.length , likelihood:data.length,impact:data.length};
 for(let x = 0 ; x< n ; x++){
  let i = data[x].intensity;
  let r = data[x].relevance;
  let l = data[x].likelihood;
  let im = data[x].impact;
  if(i===''){
   res.intensity--;
  }
  if(r===''){
   res.relevance--;
  }
  if(l===''){
   res.likelihood--;
  }
  if(im===''){
   res.impact--;
  }
  

 }
 return res;
}
export const findMean = (n , s) =>{
 let res = {intensity : (s.intensity/n.intensity),relevance : (s.relevance/n.relevance),likelihood : (s.likelihood/n.likelihood),impact : (s.impact/n.impact)}
 return res;

}
export const findSD = (data , n , m , p) =>{
 let res = {intensity:0 , relevance:0 , likelihood:0,impact:0};
 for(let x = 0 ; x< n ; x++){
  let i = data[x].intensity;
  let r = data[x].relevance;
  let l = data[x].likelihood;
  let im = data[x].impact;
  if(i!==''){
   res.intensity = res.intensity + ((parseInt(i)-m.intensity)*(parseInt(i)-m.intensity));
  }
  if(r!==''){
   res.relevance = res.relevance + ((parseInt(r)-m.relevance)*(parseInt(r)-m.relevance));
  }
  if(l!==''){
   res.likelihood = res.likelihood + ((parseInt(l)-m.likelihood)*(parseInt(i)-m.likelihood));
  }
  if(im!==''){
   res.impact = res.impact + ((parseInt(im)-m.impact)*(parseInt(im)-m.impact));
  }
  

 }
 res.intensity = Math.sqrt(res.intensity/p.intensity);
 res.likelihood = Math.sqrt(res.likelihood/p.likelihood);
 res.relevance = Math.sqrt(res.relevance/p.relevance);
 res.impact = Math.sqrt(res.impact/p.impact);
 return res;
}
export const findSE = (n , s) =>{
 let res = {intensity : (s.intensity/Math.sqrt(n.intensity)),relevance : (s.relevance/Math.sqrt(n.relevance)),likelihood : (s.likelihood/Math.sqrt(n.likelihood)),impact : (s.impact/Math.sqrt(n.impact))}
 return res;

}
export const findCI = (z , s) =>{
 let res = {intensity : (s.intensity*z),relevance : (s.relevance*z),likelihood : (s.likelihood*z),impact : (s.impact*z)}
 return res;

}
export const findCL = (ci , size , sd) =>{
 let res = {intensity : (0.5*ci.intensity*Math.sqrt(size.intensity)*100)/sd.intensity,relevance : (0.5*ci.relevance*Math.sqrt(size.relevance)*100)/sd.relevance,likelihood : (0.5*ci.likelihood*Math.sqrt(size.likelihood)*100)/sd.likelihood,impact : (0.5*ci.impact*Math.sqrt(size.impact)*100)/sd.impact}
 return res;

}

export const findZ =(c)=>{
  
 if(c ==='50'){
  return 0.674
 }
 else if(c ==='75'){
  return 1.150
 }
 else if(c ==='90'){
  return 1.644
 }
 else if(c ==='95'){
  return 1.959
 }
 else if(c ==='97'){
  return 2.170
 }
 else if(c ==='99'){
  return 2.575
 }
 else if(c ==='99.9'){
  return 3.290
 }
}