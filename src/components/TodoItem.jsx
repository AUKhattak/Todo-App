import React from 'react'
import Button from 'react-bootstrap/Button';

export default function TodoItem({todoos, onDelete}) {
  return (
    <div>
        <h4>{todoos.title}</h4>
        <p>{todoos.desc}</p>
        <Button className='btn btn-sm' variant="danger" onClick={()=>{onDelete(todoos)}}>Delete</Button>
    </div>
  )
}
