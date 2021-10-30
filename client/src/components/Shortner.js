import React, { useState } from 'react';
import axios from 'axios'

function handleChange(e, setState)
{
  setState(e.target.value);
}

function handleSubmit(e,backUrl,link)
{
  e.preventDefault();
  axios.post("http://localhost:8080/api/add",{
    route:backUrl,
    link:link
  }).then((data)=>{
    console.log(data.data);
  })
}

export default function Shortner() {
  const [backUrl, setBackUrl] = useState();
  const [link, setLink] = useState();
  return (
    <div>
    <form onSubmit={(e)=>{handleSubmit(e,backUrl,link)}}>
      <input type="text" onChange={(e)=>handleChange(e,setBackUrl)}/>
      <input type="text" onChange={(e)=>handleChange(e,setLink)}/>
      <input type="submit"/>
    </form>
    </div>
  )
}
