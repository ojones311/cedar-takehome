import React,{useState} from 'react'

const AppointmentCard = ({setAppointments, appointments, id, doctorName, patientName, phoneNumber, email, reasonForVisit,deleted,allowEdit,setAllowEdit}) => {

    const [newDoctorName, setNewDoctorName] = useState(doctorName)
    const [newPatientName, setNewPatientName] = useState(patientName)
    const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber)
    const [newEmail, setNewEmail] = useState(email)
    const [newReasonForVisit, setNewReasonForVisit] = useState(reasonForVisit)

    const editAppointment = () => {
        setAllowEdit(!allowEdit)
    }

    const handleEditSubmission = (e) => {
        console.log('trying')
        e.preventDefault()
        console.log(appointments)
        let editedAppointment = {
            id: id,
            doctorName: newDoctorName,
            email: '',
            patientName:'',
            phoneNumber:'',
            reasonForVisit:'',
        }
        // setAllowEdit(!allowEdit)
        // setAppointments([...appointments, editedAppointment])
        // appointments.splice(1,editAppointment)
    }

    const deleteAppointmentCard = (id) => {
        console.log('deleted',id)
        const remainingAppointments = appointments.filter(card => id !== card.id)
        deleted = true
        setAppointments(remainingAppointments)
    }
    return (
        <div className='appt-card'>
            <p>{doctorName}</p>
            <p>{patientName}</p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
            <p>{reasonForVisit}</p>
            <button onClick={editAppointment}>Edit</button>
            <button onClick={() => deleteAppointmentCard(id)}>Delete</button>

            {allowEdit && 
            <form onSubmit={handleEditSubmission}>
                <input 
                    name={'edit-docname'}
                    placeholder={'doctorName'}
                    value={newDoctorName}
                    onChange={(e) => setNewDoctorName(e.target.value)}
                />
                <input 
                    type='text' 
                    name='patient' 
                    id='patientname' 
                    placeholder='Patient Name'
                    onChange = {(e) => setNewPatientName(e.target.value)} 
                    value={newPatientName}
                />
                <input 
                    type='text' 
                    name='phone' 
                    id='phone' 
                    placeholder='Phone Number' 
                    onChange = {(e) => setNewPhoneNumber(e.target.value)}
                    value={newPhoneNumber}
                />
                <input 
                    type='text' 
                    name='email' 
                    id='email' 
                    placeholder='Email' 
                    onChange = {(e) => setNewEmail(e.target.value)}
                    value={newEmail}
                />
                <select 
                    name='visit-reason'
                    value={newReasonForVisit}
                    onChange={(e) => setNewReasonForVisit(e.target.value)}
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
            
            }
        </div>
    )
}

export default AppointmentCard 