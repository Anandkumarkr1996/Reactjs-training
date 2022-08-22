import React, { useState } from 'react'

function TodoList() {

  const [todo, Settodo]= useState(" ")
  const [Items, setItems]= useState([ ]);


  const onChangeHandler = (e)=>{
    Settodo(e.target.value)
  }

  const onSubmitHandler = (e)=>{
  e.preventDefault()
  }

 const listOfItems =()=>{
  setItems((oldItems)=>{
    return [...oldItems, todo ];
  
  });
  Settodo (" ")
 }
 

  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4 mt-5">
        <form onSubmit={onSubmitHandler} >
        <input type="text" m-2 className="bg-warning form-control" value={todo} onChange={onChangeHandler} placeholder="Enter todo"></input>
        <button className='btn btn-secondary m-3' onClick={listOfItems}>Add ToDo</button>
        </form>
        < div className="col-4"></div>
        <div>
         {Items.map((item, index)=>{
            return <div className="row bg-info m-1">
              <div className="col-8"><h2 className=' p-2 text-start text-white'>{item}</h2></div>
              <div className="col-4"><button className="btn btn-secondary m-3">Delete</button></div>
              </div>
          })
        } 
        </div>
        
      </div>
    </div>
  )
  
}

export default TodoList;