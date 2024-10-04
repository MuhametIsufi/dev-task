"use client"

import { useParams } from 'next/navigation'
import './style.css'

async function getBookingById(id) {
    const res = await fetch(`http://host.docker.internal:5000/api/bookings/${id}`, { cache: 'no-store', mode: 'no-cors' })
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  

// eslint-disable-next-line @next/next/no-async-client-component
const BookingDetails = async () => {
    const params = useParams()
    const id = params.id;
    const booking = await getBookingById(id)
    return (
        <div>
            <h2 className="bg-midnight">This Booking is with {booking.doctor_name} For {booking.service} and it ends on {booking.end_time}</h2>
            <div className="button-container">
              <button className="button"><a className="button-text" href="/">Back Home</a></button>
            </div>   
        </div>
    );
};

export default BookingDetails;