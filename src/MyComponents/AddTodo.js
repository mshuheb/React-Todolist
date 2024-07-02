import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || ! desc){
            alert("Title or Description cannot be blank")
        }
        else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }

    
  return (
    <div className='container my-3' id="addtodo">
       <h3>Add a Todo</h3>
      <Form onSubmit={submit}>
      <Form.Group className="mb-3" id="title">
        <Form.Label>Todo title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter the title" />
      </Form.Group>

      <Form.Group className="mb-3" id="desc">
        <Form.Label>Todo Description</Form.Label>
        <Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter description" />
      </Form.Group>
      <Button variant="success" type="submit" className='btn-sm'>
        Add Todo
      </Button>
    </Form>
    </div>
  )
}

export default AddTodo