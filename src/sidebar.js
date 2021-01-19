import React , {useState} from 'react'
import './styles.css'
import data from './jsondata.json'
import CancelIcon from '@material-ui/icons/Cancel';



const Sidebar = (props) => {
  const [parameters,setParameters] = useState({topic:'All',region:'All',sector:'All',source:'All',confidence:'50',measure:'Intensity'})
  const handleChange =(e) =>{
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    
    setParameters(()=>{
      return({...parameters , [name]:value})
    })
    
    

    
    
  }
  props.sbar.f(parameters);
  
  const makeLists = (d) =>{
    const n = d.length;
    let res = {sectorlist:[] , regionlist:[] , topiclist:[] , sourcelist:[] ,measurelist:['Intensity','Relevance','Likelihood','Impact'] , confidencelist:['50','75','90','95','97','99','99.9']};
    for(let i = 0 ;i<n ;i++){
      if(!res.sectorlist.includes(d[i].sector)&&d[i].sector!==''){
        res.sectorlist.push(d[i].sector);

      }
      if(!res.regionlist.includes(d[i].region)&&d[i].region!==''){
        res.regionlist.push(d[i].region);

      }
      if(!res.topiclist.includes(d[i].topic)&&d[i].topic!==''){
        res.topiclist.push(d[i].topic);

      }
      if(!res.sourcelist.includes(d[i].source)&&d[i].source!==''){
        res.sourcelist.push(d[i].source);

      }
    }
    return res;

  }

  const allLists = makeLists(data);
  
  return (
    <div className ="sidebar">
      <div className = 'sidebar-header'>
        <h2>Hello World</h2>
        
          <CancelIcon />
        
        
      </div>
      <div className = 'sidebar-form'>
        <form>
          <div className ='form-elements'>
            <label for = 'sector'>Sector</label>
            <select id = 'sector' name = 'sector' onChange = {handleChange}>
              <option value = 'all'>All</option>
              {allLists.sectorlist.map((sec)=>{
                return(<React.Fragment>
                  <option value ={sec}>{sec}</option>
                </React.Fragment>)

              })}
              
            </select>

          </div>
           <div className ='form-elements'>
            <label for = 'region'>Region</label>
            <select id = 'region' name = 'region' onChange = {handleChange}>
              <option value = 'all'>All</option>
              {allLists.regionlist.map((sec)=>{
                return(<React.Fragment>
                  <option value ={sec}>{sec}</option>
                </React.Fragment>)

              })}
              
            </select>

          </div>
          <div className ='form-elements'>
            <label for = 'topic'>Topic</label>
            <select id = 'topic' name = 'topic' onChange = {handleChange}>
              <option value = 'all'>All</option>
              {allLists.topiclist.map((sec)=>{
                return(<React.Fragment>
                  <option value ={sec}>{sec}</option>
                </React.Fragment>)

              })}
              
            </select>

          </div>
          <div className ='form-elements'>
            <label for = 'source'>Source</label>
            <select id = 'Source' name = 'source' onChange = {handleChange}>
              <option value = 'all'>All</option>
              {allLists.sourcelist.map((sec)=>{
                return(<React.Fragment>
                  <option value ={sec}>{sec}</option>
                </React.Fragment>)

              })}
              
            </select>

          </div>
          <div className ='form-elements'>
            <label for = 'measure'>Measure</label>
            <select id = 'measure' name = 'measure' onChange = {handleChange}>
              
              {allLists.measurelist.map((sec)=>{
                return(<React.Fragment>
                  <option value ={sec}>{sec}</option>
                </React.Fragment>)

              })}
              
            </select>

          </div>
          <div className ='form-elements'>
            <label for = 'confidence'>Confidence</label>
            <select id = 'confidence' name = 'confidence' onChange = {handleChange}>
              
              {allLists.confidencelist.map((sec)=>{
                return(<React.Fragment>
                  <option value ={sec}>{sec}</option>
                </React.Fragment>)

              })}
              
            </select>

          </div>
        </form>

      </div>
    </div>
  )
}

export default Sidebar
