import './App.css';

import Dashboard from './Components/Dashboard'
import AppointmentForm from './Components/AppointmentForm'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-body'>
        <Dashboard />
        <AppointmentForm />
      </div>
    </div>
  );
}

export default App;
