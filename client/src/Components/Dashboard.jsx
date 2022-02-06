import React from 'react'
import SearchFilter from './SearchFilter'
import AppointmentCard from './AppointmentCard'

const Dashboard = ({appointments, setAppointments}) => {

    return (
        <div className='main-body'>
            <SearchFilter />
            {appointments && appointments.filter(elem => !elem.deleted).map((card) => (
                <>
                    <AppointmentCard
                        setAppointments={setAppointments}
                        appointments={appointments} 
                        id={card.id}
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