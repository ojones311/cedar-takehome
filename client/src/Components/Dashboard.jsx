import React,{useEffect, useState} from 'react'
import SearchFilter from './SearchFilter'
import AppointmentCard from './AppointmentCard'

import '../Styles/Dashboard.css'

const Dashboard = ({appointments, setAppointments}) => {

    // const [input, setInput] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredAppts, setFilteredAppts] = useState([])

    const filterAppointments = (input) => {
        let filteredList = appointments.filter((card) => {
            return card.doctorName.toLowerCase().includes(input.toLowerCase())
        })
        setSearchTerm(input)
        setFilteredAppts(filteredList)
        console.log(filteredAppts)
    }
    useEffect(()=> { 
        filterAppointments(searchTerm)

    },[searchTerm])
    return (
        <div className='main-body'>
            <h3>Appointments</h3>
            <SearchFilter onChange={filterAppointments} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className='appointments'>
                {
                    searchTerm && filteredAppts.filter(elem => !elem.deleted).map(card => (
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
                {
                    appointments.length > 0 && !searchTerm && appointments.filter(elem => !elem.deleted).map((card) => (
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
        </div>
    )
}

export default Dashboard