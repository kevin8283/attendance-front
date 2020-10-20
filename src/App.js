import React from 'react'
import './App.css'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import io from 'socket.io-client'

import Attendances from './components/Attendances'
import Courses from './components/Courses'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Students from './components/Students'
import Login from './components/Login'

function App() {
  
  const socket = io("http://localhost:8080")

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path = "/" exact component = {Login}/>
          <Route path = "/dashboard" component = {Sidebar}/>
        </Switch>
        <Switch>
          <Route path="/dashboard" exact render = {() => <Dashboard socket={socket}/>}/>
          <Route path="/dashboard/courses" component={Courses} />
          <Route path="/dashboard/attendances" component={Attendances} />
          <Route path="/dashboard/students" component={Students} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
