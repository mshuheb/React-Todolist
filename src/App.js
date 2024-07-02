import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import React,{ useState,useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {
  let initTodo;
  if( localStorage.getItem('todos')===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete= (todo)=>{
    setTodos(todos.filter((e)=>{// Update the list of todos. "e" is for event.
      return e!==todo// Return true if the `e` object is not equal to the `todo` object.
    }))
    localStorage.getItem('todos',JSON.stringify(todos));
  }

  const addTodo =(title,desc)=>{
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
    sno=todos[todos.length-1].sno+1;
    }
    const myTodo= {
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]); //destructuring here can be explaned as to set the todo by inserting
    //myTodo to the object.(...todos[after some objects in todo], Mytodo[insert the new content into todos
  //object])
  }
   

  const [todos,setTodos] =useState(initTodo);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
   },[todos]) //If anyone changes the "todos object",then call the above method.i.e locakStorage... etc

  //const [todos,setTodos] =useState( [
    //{
      //sno: 1,
      //title: 'Go to market',
      //desc: 'First todo',
    //},
    //{
      //sno: 2,
      //title: 'Go to mall',
      //desc: 'Second todo',
    //},
    //{
      //sno: 3,
      //title: 'Go to college',
      //desc: 'Third todo',
    //},
  //]);

  return (
    <>
  <div className='bg'>
    <Router>
      <Header title="My Todos List" />
      <Routes>
        <Route exact path="/" element={<><AddTodo addTodo={addTodo} /><Todos todo={todos} onDelete={onDelete} /></>} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </div>
    </>
  );
}

export default App;