import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'


let name = "Swagatika";

createRoot(document.getElementById('root')).render(
  <>

    <h1>  Welcome to {name}'s my page!</h1>

    <App />
  </>

);