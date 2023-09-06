import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Padre } from './07-tarea-memo/Padre.jsx'
import MainApp from './09-useContext/MainApp.jsx'
import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
// import { MultipleCustomHooks } from './examples/multipleCustomHooks.jsx'
// import CallBackHook from './callbackHook.jsx'
// import './08-useReducer/intro-reducer.jsx'
// import TodoApp from './08-useReducer/todoApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>
)
