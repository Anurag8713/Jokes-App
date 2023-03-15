import React from "react";
import WindowTracker from "./window";

export default function App() {

  const [show , setshow] = React.useState(true)

  
  function handleclick() {
    setshow(prevshow => !prevshow)
  }

  return (
    <div>
   {show && <WindowTracker />} 
    <button onClick={handleclick}>Toggle Width Tracker</button>
    </div>
    
  )
}