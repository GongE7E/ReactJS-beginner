import { useState,useEffect } from "react";
import Button from "./Button"

function App() {
  const [counter,setValue]=useState(0);
  const [keyword,setKeyword]=useState("");
  const onChange=(event)=>setKeyword(event.target.value);
  const onClick=()=>setValue((current)=>current+1);
  console.log("I run all the time ");
  useEffect(()=>{console.log("CALL THE API...")},[]);
  useEffect(()=>{
    if(keyword !="" && keyword.length>5){
    console.log("SEARCH FOR",keyword);
  }
  },[keyword]);
  useEffect(()=>{
    console.log("i run when keyword &counter changes")},
    [keyword, counter]);
  return (
    <div><h1>{counter}</h1>
    <input value={keyword}onChange={onChange} type="text" placeholder="Search here..."/>
    <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
