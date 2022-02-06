import React from 'react'
import {useState} from 'react'

const AppointmentForm = ({appointments, setAppointments}) => {

    const [doctorName, setDoctorName] = useState('')
    const [patientName, setPatientName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [reasonForVisit, setReasonForVisit] = useState('')

    const clearForm = () => {
        setDoctorName('')
        setPatientName('')
        setPhoneNumber('')
        setEmail('')
        setReasonForVisit('')
    }

    const handleFormSubmission = (e) => {
        e.preventDefault()
        console.log('submitted')
        const newAppointment = {
            // id: ,
            doctorName: doctorName,
            patientName: patientName,
            phoneNumber: phoneNumber,
            email: email,
            reasonForVisit: reasonForVisit,
            deleted: false
        }
        setAppointments([...appointments, newAppointment])
        clearForm()
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
                    onChange = {(e) => setDoctorName(e.target.value)}
                    value={doctorName}
                />
                <input 
                    type='text' 
                    name='patient' 
                    id='patientname' 
                    placeholder='Patient Name'
                    onChange = {(e) => setPatientName(e.target.value)} 
                    value={patientName}
                />
                <input 
                    type='text' 
                    name='phone' 
                    id='phone' 
                    placeholder='Phone Number' 
                    onChange = {(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                />
                <input 
                    type='text' 
                    name='email' 
                    id='email' 
                    placeholder='Email' 
                    onChange = {(e) => setEmail(e.target.value)}
                    value={email}
                />
                <select 
                    name='visit-reason'
                    value={reasonForVisit}
                    onChange={(e) => setReasonForVisit(e.target.value)}
                    >
                    <option value='' >{'Reason for visit'}</option>
                    <option>{'Sick'}</option>
                    <option>{'Emergency'}</option>
                    <option>{'Check-up'}</option>
                    <option>{'Physical'}</option> 
                    <option>{'Referral'}</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AppointmentForm