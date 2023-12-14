// import React from 'react'

// function Message() {
//   return (
//     <div>
//         <h2> Welcome to Ust Global</h2>
//     </div>
//   )
// }

// export default Message

import React, { useState } from 'react'
import './Message.css'
const Message = (props) => {
     //let Today=new Date().toDateString();
     let [today,setToday]=useState('');
    // let [msg,setMsg]=useState('Hello From UST Global');
     setInterval(()=>{
        setToday(new Date().toISOString());
    },1000);
    // setInterval(()=>{
    //     setMsg(msg='Hello From TR4 Room');
    // },5000);
  return (
      
    <div>
        {/* <h2>{msg}</h2>
        <h2>we are in TR4 Room</h2>
        <button className='btn btn-primary'>click Here</button>
        <p className="style1"> Today is {today}</p> */}
    <h2>{props.msg}</h2>
    <button className='btn btn-primary'>click Here</button>
    <p className="style1"> Today is {today}</p>

    </div>
    
    
  )
}

export default Message