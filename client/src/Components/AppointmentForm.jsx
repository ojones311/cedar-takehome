import React from 'react'
import {useState} from 'react'

const AppointmentForm = () => {

    const [doctorName, setDoctorName] = useState('')
    const [patientName, setPatientName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [email, setEmail] = useState('')

    const handleFormSubmission = (e) => {
        e.preventDefault()
        console.log('submitted')
    }
    return (
        <div className='main-form'>
            <form onSubmit={handleFormSubmission}>
                <h3>Make Appointment</h3>
                <input 
                    type='text' 
                    name='doctor' 
                    id='docname' 
                    placeholder='Doctor Name'
                    onChange = {(e) => e.target.value}
                    value={''}
                />
                <input 
                    type='text' 
                    name='patient' 
                    id='patientname' 
                    placeholder='Patient Name'
                    onChange = {(e) => e.target.value} 
                    value={''}
                />
                <input 
                    type='text' 
                    name='phone' 
                    id='phone' 
                    placeholder='Phone Number' 
                    onChange = {(e) => e.target.value}
                    value={''}
                />
                <input 
                    type='text' 
                    name='email' 
                    id='email' 
                    placeholder='Email' 
                    onChange = {(e) => e.target.value}
                    value={''}
                />
                <select placeholder={'Reason for visit'}>
                    <option value='' disable selected>{'Reason for visit'}</option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option> 
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AppointmentForm