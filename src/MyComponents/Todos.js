import React from 'react'
import Todo from '../MyComponents/Todo'


const Todos = (props) => {
  return (
    <div className='container' id="Todos">
        <h3>Todos List</h3>
        {props.todo.length===0? "No Todos to display":
      props.todo.map((todo) => {
        return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })
    }
    </div>
  )
}

export default Todos