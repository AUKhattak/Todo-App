import React, { Component } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import { useState } from 'react';
import AddTodo from './components/AddTodo';


export default function App() {

  const onDelete=(todo)=>{
console.log("I am in delete", todo);

setTodos(todos.filter((e)=>{
  return e!==todo;
}))

  }

  const addTodo=(title, desc)=>{
   
   let sno= todos[todos.lenght-1].sno +1;
  const myTodo={
    sno: sno,
    title: title,
    desc: desc,
   
  }
  setTodos([...todos, myTodo]);
  }
  const [todos, setTodos]= useState([
    {
      sno: 1,
      title: "Goto markeet",
      desc: "you need to goto markeet",
    },
    {
      sno: 2,
      title: "Goto barber",
      desc: "you have to cute your hair after home work",

    },
    {
      sno:3,
      title: "Goto netto",
      desc: "there is nothing left to eat for tonight",
    },
  ])

    return (
    <>
     <Header title="My Todos List"/>
     <AddTodo addTodo={addTodo}/>
     <TodoList todos={todos} onDelete={onDelete}/>
     </>
     
    )
  }

 
