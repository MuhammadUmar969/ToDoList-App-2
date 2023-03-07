import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from "./ListCom";

const App = () => {

  const [items , setItems] = useState("");
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
   setItems(event.target.value);
  };
 
  const listOfItems=()=>{
    if(items!=="" && newItem.length<6){
     setNewItem((oldItems)=>{
       return(
         [...oldItems,items]
       )
     })
    }
    if(newItem.length>=6){
     alert("You can enter 6 items only")
    }
    if(items==""){
     alert("input field required")
    }
     setItems("");
   };

  return(
    <>
      <div className="main_div">
      <div className="center_div">
       <br />
        <h1>ToDo List</h1>
        <br />
        <input 
        type="text" 
        value={items} 
        placeholder="Add an Items" 
        onChange={itemEvent}
        />
        <Button className="newBtn" onClick={listOfItems}>
         <AddIcon />
         </Button>

         <br />
         <ol>
           {newItem.map((val, index) => {
             return <ListCom 
             key = {index}
             text={val}/ >
            })}
         </ol>
         <br />
      </div>
      </div>
    </>
  )
}

export default App;