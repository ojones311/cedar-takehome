import React,{useState} from 'react'

const AppointmentCard = ({setAppointments, appointments, id, doctorName, patientName, phoneNumber, email, reasonForVisit,deleted,allowEdit,setAllowEdit}) => {

    const editAppointment = () => {
        setAllowEdit(!allowEdit)
    }
    
    const handleEditSubmission = () => {
        console.log('trying')
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
                <input />
                <input />
                <input />
                <input />
                <button>Submit</button>
            </form>
            
            }
        </div>
    )
}

export default AppointmentCard 