import React from 'react'
import{Routes,Route} from 'react-router-dom'
import StudentDashboard from './components/StudentDashboard'
import StudentRegistation from './components/StudentRegistation'
import StudentUpdate from './components/StudentUpdate'
function App() {
  return (
    <Routes>
      <Route path='/' element={<StudentDashboard/>} />
      <Route path='/registaion' element={<StudentRegistation/>}/>
      <Route path='/update' element={<StudentUpdate/>}/>
    </Routes>
  )
}

export default App