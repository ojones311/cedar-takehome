import './App.css';

import Dashboard from './Components/Dashboard'
import AppointmentForm from './Components/AppointmentForm'
import Header from './Components/Header'

import {useState, useEffect} from 'react'

function App() {

  const [appointments, setAppointments] = useState([])

  const displayAppointments = () => {
    console.log(appointments)
  }
  useEffect(()=> {
    // displayAppointments()
  })
  return (
    <div className="App">
      <Header />
      <div className='app-body'>
        <Dashboard appointments={appointments}/>
        <AppointmentForm appointments={appointments} setAppointments={setAppointments}/>
      </div>
    </div>
  );
}

export default App;
