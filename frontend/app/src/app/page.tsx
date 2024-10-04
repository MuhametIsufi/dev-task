import './style.css'


async function getBookings() {
  const res = await fetch('http://host.docker.internal:5000/api/bookings', { cache: 'no-store', mode: 'no-cors' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Home = async () => {

  const bookings = await getBookings()

  return (
    <div className="links-page-container">
      <h2>Current booking count: {bookings.length}</h2>
      <ol>
        {bookings.map((item, index) => {
          return (
          <li className="li-container" key={index}>
            <a className="link-text" href={`/bookings/${item.id}`}>A Booking on {item.date} starting at {item.start_time}</a>
          </li>)
        })}
      </ol>
      <div className="button-container">
            <button className="button"><a className="button-text" href="/add-booking">Add New Booking</a></button>
        </div>
    </div>
    


   
  );
};

export default Home;
