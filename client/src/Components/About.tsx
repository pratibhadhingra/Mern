import React from 'react'

const About = () => {
  return (
   <div className='about_contents'>
     <div className="card mb-3" >
    <div className="row g-0">
      <div className="col-md-4 about_img">
        <img src="https://lh3.googleusercontent.com/_kyIuiSqVFaBxTpqBuguu4jVekaKme8m4eoskhgvrf7fA9C-BDKpxUG8ZVjuRk1lg79-UzuJ-_Ug7pav3VUelgg1jNiJYSYwxLHsOmY=w900-l80-sg-rj-c0xffffff" className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <div className='d-flex'>
          <h5 className="card-title">Vinod Thapa</h5>
          <button type='submit'>Edit Profile</button>
          </div>
            
          <div>
          <p className="card-text">User Id :- 35345454545</p>
          <p className="card-text">Name :- Priyanka Singh</p>
          <p className="card-text">Phone :- 8767676343</p>
          <p className="card-text">Email :- priyanka10@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
   </div>
  )
}

export default About
