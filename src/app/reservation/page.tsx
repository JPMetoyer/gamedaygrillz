import React from 'react'
import '../../app/styles.scss'

const ReservationPage = () => {
  return (

    <div className="wrapper h-screen mt-[20vh]">

    <div className="container mt-[20vh]">
      <div className="container-time">
        <h2 className="heading text-white">Time Open</h2>
        <h3 className="heading-days">Monday-Friday</h3>
        <p>7am - 11am (breakfast)</p>
        <p>11am - 10pm (lunch/dinner)</p>

        <h3 className="heading-days">Saturday and sunday</h3>
        <p>9am - 1am (breakfast)</p>
        <p>1am - 10pm (lunch/dinner)</p>

        <hr />

        <h4 className="heading-phone">Call Us: (123) 456-7890</h4>
      </div>

      <div className="container-form">
        <form action="#">
          <h2 className="heading heading-yellow">Reservation Online</h2>

          {['Your Name', 'Your email', 'Date', 'Time'].map((field, index) => (
            <div className="form-field" key={index}>
              <p>{field}</p>
              <input type={field === 'Date' ? 'date' : field === 'Time' ? 'time' : field === 'Your email' ? 'email' : 'text'} 
                     placeholder={field} />
            </div>
          ))}

          <div className="form-field">
            <p>How many people?</p>
            <select name="select" id="peopleCount">
              <option value="1">1 person</option>
              <option value="2">2 persons</option>
              <option value="3">3 persons</option>
              <option value="4">4 persons</option>
              <option value="5">5 persons</option>
              <option value="5+">5+ persons</option>
            </select>
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ReservationPage
