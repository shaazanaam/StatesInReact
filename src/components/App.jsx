import React from "react";
function strike(){
 isDone =true;
}

function unStrike(){
  isDone =false; 
}


function App(){
  return(<div>
    <p>Buy Milk</p>
    <button onClick= {strike}>Change to strike through </button>
    <button onClick={unStrike}> UnChange  </button>
  </div>)  
}

export default App;
