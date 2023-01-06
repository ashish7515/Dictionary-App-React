// import { margin } from '@mui/system';
import React from 'react'
import "./Definitions.css";

const Definitions = ({word,meanings}) => {
  return (
    <div className='meanings' style={{marginTop:"10vh",paddingBottom:"5vh"}}>
      {
        word==="" ? (<span className='subTitle'>Start by typing a word in Search</span>) :
        (
            meanings.map((mean)=> (
                mean.meanings.map((item)=> (
                    item.definitions.map((def)=>(
                        <div className="singleMean" style={{backgroundColor:"#282c34", color:"white",margin:"1vh",padding:"3vh",borderRadius:"7px",marginLeft:"4vw",marginRight:"4vw"}}>
                        { def.definition}
                      
                        {/* <hr style={{width:"90%",backgroundColor:"white"}}/> */}
                        </div>
                    ))
                ))
            ))
        )
      }
    </div>
  )
}

export default Definitions
