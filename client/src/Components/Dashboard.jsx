import React from 'react'
import SearchFilter from './SearchFilter'
import AppointmentCard from './AppointmentCard'
import {useState} from 'react'

const Dashboard = ({appointments}) => {

    // const [appointments, setAppointments] = useState(null)
    return (
        <div className='main-body'>
            <SearchFilter />
            {appointments.length > 0 && appointments.map((card) => {
                <AppointmentCard card={card} />
            })}
        </div>
    )
}

export default Dashboard