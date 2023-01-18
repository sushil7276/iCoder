import React from 'react'

const Contactus = () => {
  return (
    <div className='container my-4'>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type='submit' className="btn btn-primary">Submit</button>
    </div>
  )
}

export default Contactus