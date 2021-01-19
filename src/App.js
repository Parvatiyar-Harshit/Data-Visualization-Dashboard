import React ,{useState,useEffect} from 'react';
import Data from './datadump';
import SideBar from './sidebar';
import Togglebutton from './Togglebutton';
import './styles.css';
import rawdata from './jsondata.json';
import {filterData , filterSpecial} from './filter';
import Insight from './insight';
import Chart from './chart';


function App(){
  

  const[test,setTest] = useState({topic:'All',region:'All',sector:'All',source:'All',confidence:'50',measure:'Intensity'});
  const[sidebarOpen,setSidebarOpen] = useState(false);
  const toggleHandler =()=>{
    if(!sidebarOpen){
      setSidebarOpen(true);
    }
    else{
      setSidebarOpen(false);
    }
  } 
  const closeHandler = () =>{
    setSidebarOpen(false);
  }

  let sidebar
  if(sidebarOpen){
    sidebar = <SideBar sbar={{click:closeHandler} , {f:setTest}} />
  }
  //Filtering Functions
  const filteredData = filterData(rawdata , test);
  const chartData = filterSpecial(rawdata , test);

  //Filtering Functions
  
  return(
    <>
    <div className = 'mainscreen'>
      {sidebar}
      <div className = 'rightscreen'>
        <div className ='items'><Insight d ={{chartData}}/></div>
        <div className ='items' ><Data d ={{filteredData}} p = {{test}} /></div>
        <Chart d ={{chartData}}/>
        <div className ='btn-items'><Togglebutton click={toggleHandler} /></div>
      </div>
      
      
    </div>
    
    
    </>
  )

}

export default App;
