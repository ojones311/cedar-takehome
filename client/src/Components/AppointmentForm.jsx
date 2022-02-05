import React from 'react'

const AppointmentForm = () => {
    return (
        <div className='main-form'>
            <form>
                <input 
                    type='text' 
                    name='doctor' 
                    id='docname' 
                    placeholder='Doctor Name' 
                    value={''}
                />
            </form>
        </div>
    )
}

export default AppointmentForm