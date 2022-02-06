import './App.css';

import Dashboard from './Components/Dashboard'
import AppointmentForm from './Components/AppointmentForm'
import Header from './Components/Header'

import {useState, useEffect} from 'react'

function App() {

  const [appointments, setAppointments] = useState([])
  const [allowEdit, setAllowEdit] = useState(false)

  return (
    <div className="App">
      <Header />
      <div className='app-body'>
        <Dashboard appointments={appointments} setAppointments={setAppointments} allowEdit={allowEdit} setAllowEdit={setAllowEdit}/>
        <AppointmentForm appointments={appointments} setAppointments={setAppointments} allowEdit={allowEdit} setAllowEdit={setAllowEdit}/>
      </div>
    </div>
  );
}

export default App;
