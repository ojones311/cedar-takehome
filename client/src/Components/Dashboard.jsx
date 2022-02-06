import React,{useEffect, useState} from 'react'
import SearchFilter from './SearchFilter'
import AppointmentCard from './AppointmentCard'

const Dashboard = ({appointments, setAppointments}) => {

    const [input, setInput] = useState('')
    const [filteredAppts, setFilteredAppts] = useState(appointments)

    const filterAppointments = (input) => {
        let filteredList = appointments.filter((card) => {
            return card.doctorName.toLowerCase().includes(input)
        })
        setInput(input)
        console.log(filteredList)
        if(filteredAppts.length < 1){
        }
        setFilteredAppts(filteredList)
    }

    // useEffect(() => {
    //     filterAppointments(appointments)
    // },[])
    return (
        <div className='main-body'>
            <SearchFilter input={input} onChange={filterAppointments}/>
            
            {filteredAppts && filteredAppts.filter(elem => !elem.deleted).map((card) => (
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