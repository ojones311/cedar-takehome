import './App.css';

import Dashboard from './Components/Dashboard'
import AppointmentForm from './Components/AppointmentForm'
import Header from './Components/Header'

import {useState, useEffect} from 'react'

function App() {

  const [appointments, setAppointments] = useState(null)
  return (
    <div className="App">
      <Header />
      <div className='app-body'>
        <Dashboard appointments={appointments}/>
        <AppointmentForm />
      </div>
    </div>
  );
}

export default App;
