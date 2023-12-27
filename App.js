
import './App.css';
import Item from './Components/Item'
import ItemDate from './Components/ItemDate'
import Crad from './Components/Crad'
import React, {useState}  from 'react';
function App() {
  const [count ,setCount]=useState(0);

 function ClickHandlerin(){
        setCount(count+1);
 }
 function ClickHandlerdec(){
   setCount(count-1);
 }
 function Clickres(){
  setCount(0);
 }

  return (
    <div className="App">
  <h2 className="head">Increment & Decrement</h2>
        <div className="Appp">
        <div className="dec">
    <button className="bt2" onClick={ClickHandlerdec}>-</button>
         </div>
         <div className="val">
    <p>{count}</p>
    </div>
         <div className='inc'>
         <button  className="bt3"onClick={ClickHandlerin}>+</button>
         </div>
        
         
        </div>
        <div className="resett">
        <div>
         <button className="bt1" onClick={Clickres}>Reset</button>
         </div>
        </div>
     
    </div>
  );
}

export default App;
