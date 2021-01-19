export const filterData = (d , p) =>{
 let res = d;
 if(p.topic!=='All'){
  res = res.filter((point)=> point.topic === p.topic);
 }
 
 if(p.sector!=='All'){
  res = res.filter((point)=> point.sector === p.sector);
 }

 if(p.region!=='All'){
  res = res.filter((point)=> point.region === p.region);
 }
 
 if(p.source!=='All'){
  res = res.filter((point)=> point.source === p.source);
 }
 
return res;

}

export const filterSpecial = (d , p) =>{
 let res = d;
 if(p.topic!=='All'){
  res = res.filter((point)=> point.topic === p.topic);
 }
 
 

 if(p.region!=='All'){
  res = res.filter((point)=> point.region === p.region);
 }
 
 if(p.source!=='All'){
  res = res.filter((point)=> point.source === p.source);
 }
 
return res;

}

 export const makeObj =(data) =>{
  let res = {};
  data.map((point)=>{
   if(point.intensity ==''){
    
   }
   else if(!(point.sector in res)){
    res = {...res, [point.sector]:parseInt(point.intensity)}
  }
  else{
   res[point.sector] = res[point.sector] + parseInt(point.intensity);
  }

  })
  return res;

 } 