import React from 'react'
import './App.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Attendances from './components/Attendances'
import Courses from './components/Courses'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Students from './components/Students'

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/dashboard/courses" component={Courses} />
          <Route path="/dashboard/attendances" component={Attendances} />
          <Route path="/dashboard/students" component={Students} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
