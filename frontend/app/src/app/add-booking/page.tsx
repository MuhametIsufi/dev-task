"use client"

import React, { useState } from 'react';
import './style.css'

const AddNewBooking = () => {
  const [service, setService] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('')
  
  const handleSubmit = async () => {
    const bookingData = {
      service: service,
      doctor_name: doctorName,
      start_time: startTime,
      end_time: endTime,
      date: date,
    };

    try {
      const response = await fetch('http://host.docker.internal:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert('Booking inserted successfully');
      } else {
        alert('Failed to insert booking');
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  return (
    <form className='form-container' onSubmit={(e) => {
      e.preventDefault();
      handleSubmit()
    }}>
      <div className='form-item'>
        <label className='label' htmlFor='service'>Service</label>
        <input className='input-container' id='service' required onChange={(e) => setService(e.target.value)} />
      </div>
      <div className='form-item'>
        <label className='label' htmlFor='doctor-name'>Doctor name</label>
        <input className='input-container' id='doctor-name' required onChange={(e) => setDoctorName(e.target.value)} />
      </div>
      <div className='form-item'>
        <label className='label' htmlFor='start-time'>Start time</label>
        <input className='input-container' id='start-time' type='time' required onChange={(e) => setStartTime(e.target.value)} />
      </div>
      <div className='form-item'>
        <label className='label' htmlFor='end-time'>End time</label>
        <input  className='input-container' id='end-time' type='time' required onChange={(e) => setEndTime(e.target.value)} />
      </div>
      <div className='form-item'>
        <label className='label' htmlFor='date'>Date</label>
        <input className='input-container' id='date' type='date' required onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="button-container">
            <button className="button" type='submit'>Submit Booking</button> 
        </div>
    </form>
  );
}
export default AddNewBooking;
