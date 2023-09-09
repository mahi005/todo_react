import React, { useState } from 'react'
import Todolists from './Todolists';
import "./App.css"
const App = () => {
  const [inputList, setInputList]= useState("");
  const [Items,setItems] = useState([]);
  const itemEvent =(event)=>{
   setInputList(event.target.value);
  }
  const listOfItems=()=>{
         setItems((olditems)=>{
           return[...olditems,inputList];
         })
         setInputList("");
  }

  const deleteItems =(id)=>{
       setItems((olditems)=>{
        return olditems.filter((arrElem,index)=>{
              return index!==id;
        })
       })
  }
  return (
    <div>
    <div className='main-div'>
        <div className="center-div">
           
              <h1>ToDo List</h1>
           
             <input type="text" placeholder='Add a item'  value={inputList} onChange={itemEvent}/>
             <button className='button' onClick={listOfItems}>+</button>
             <ol>
              {/*<li>{inputList}</li>*/}
               {Items.map((itemval,index)=>{
                  return  <Todolists key={index} id={index} text ={itemval} onSelect={deleteItems}/>;
               })}
             </ol>
        </div>
        </div>
    </div>
  )
}

export default App;
