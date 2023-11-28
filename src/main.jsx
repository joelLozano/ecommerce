import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/navBar/NavBar.jsx'
import Aside from './components/aside/Aside.jsx'
import Items from './pages/items/Items.jsx'
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <div className='main-content'>
      <Aside className="main-aside"/>
      <Items className="main-items" />
    </div>
  </React.StrictMode>,
)
