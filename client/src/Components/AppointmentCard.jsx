import React from 'react'

const AppointmentCard = ({appointments, doctorName, patientName, phoneNumber, email, reasonForVisit,deleted}) => {
    
    const editAppointmentCard = () => {
        console.log('edited')
    }

    const deleteAppointmentCard = () => {
        console.log('deleted')
    }
    return (
        <div className='appt-card'>
            <p>{doctorName}</p>
            <p>{patientName}</p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
            <p>{reasonForVisit}</p>
            <button onClick={editAppointmentCard}>Edit</button>
            <button onClick={deleteAppointmentCard}>Delete</button>
        </div>
    )
}

export default AppointmentCard 