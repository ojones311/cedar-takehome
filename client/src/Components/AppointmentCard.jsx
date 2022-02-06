import React from 'react'

const AppointmentCard = ({setAppointments, appointments, id, doctorName, patientName, phoneNumber, email, reasonForVisit,deleted}) => {
    
    const editAppointmentCard = () => {
        console.log('edited')
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
            <button onClick={editAppointmentCard}>Edit</button>
            <button onClick={() => deleteAppointmentCard(id)}>Delete</button>
        </div>
    )
}

export default AppointmentCard 