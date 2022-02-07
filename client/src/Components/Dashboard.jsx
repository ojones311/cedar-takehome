import React,{useEffect, useState} from 'react'
import SearchFilter from './SearchFilter'
import AppointmentCard from './AppointmentCard'

const Dashboard = ({appointments, setAppointments}) => {

    // const [input, setInput] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredAppts, setFilteredAppts] = useState([])

    const filterAppointments = (input) => {
        let filteredList = appointments.filter((card) => {
            return card.doctorName.toLowerCase().includes(input)
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
            <SearchFilter onChange={filterAppointments} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

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
    )
}

export default Dashboard