import React from 'react'
import SearchFilter from './SearchFilter'
import AppointmentCard from './AppointmentCard'

const Dashboard = ({appointments}) => {

    return (
        <div className='main-body'>
            <SearchFilter />
            {appointments && appointments.map((card) => (
                <>
                    <AppointmentCard
                        appointments={appointments} 
                        doctorName={card.doctorName}
                        patientName = {card.patientName}
                        phoneNumber = {card.phoneNumber}
                        email = {card.email}
                        reasonForVisit = {card.reasonForVisit}
                        deleted = {card.deleted}
                    />
                </>
            ))}
        </div>
    )
}

export default Dashboard