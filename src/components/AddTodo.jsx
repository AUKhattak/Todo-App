import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddTodo(addTodo) {
const [title, setTitle]= useState("");
const [desc, setdesc]= useState("");

const submit=(e)=>{
  e.preventDefault();
  addTodo(title, desc);
  console.log(addTodo)
}
  return (
    <Form className='container my-5' >
    <Form.Group className="containemb-3r"  controlId="textTitle">
      <Form.Label>Add Todo here</Form.Label>
      <Form.Control value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter text" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="textDesc">
      <Form.Label>What is your next task for today</Form.Label>
      <Form.Control value={desc} onChange={(e)=> setdesc(e.target.value)} type="text" placeholder="Enter text" />
    </Form.Group>

    <Button  variant="warning" type="submit" onClick={submit}>
      Add Todo
    </Button>
  </Form>
  )
}

