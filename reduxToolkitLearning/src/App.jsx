import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
    <div className="p-40">
    <AddTodo />
    <Todos />
    </div>
   
    </>
  )
}

export default App
