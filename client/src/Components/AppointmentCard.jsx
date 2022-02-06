import React from 'react'

const AppointmentCard = ({card}) => {
    return (
        <div>
            <p>{card.doctorName}</p>
            <p>{card.patientName}</p>
        </div>
    )
}

export default AppointmentCard 