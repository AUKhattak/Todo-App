import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TodoItem from "./TodoItem";


export default function TodoList(props){
    return(
       
      <div className="container my-5">
        <h3>My Todo List</h3>
    <div className="container    my-5">
        
            
             
            
                
                
                    {props.todos.map((todo)=>{
                        return<TodoItem todoos={todo} key={todo.sno} onDelete={props.onDelete}/>
                    })
                  }
                
          
            </div>
            </div>
    )

}