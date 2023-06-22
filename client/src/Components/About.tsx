import React from "react";

const About = () => {
  return (
    <div className="about_contents">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 about_img">
            <img
              src="https://lh3.googleusercontent.com/_kyIuiSqVFaBxTpqBuguu4jVekaKme8m4eoskhgvrf7fA9C-BDKpxUG8ZVjuRk1lg79-UzuJ-_Ug7pav3VUelgg1jNiJYSYwxLHsOmY=w900-l80-sg-rj-c0xffffff"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex">
              <div>
                <h5 className="card-title mt-1" >Sonia Singh</h5>
                <br/>
                <p>User Id :- </p>
                <p>Name :- </p>
                <p>Email :- </p>
                <p>Phone :- </p>
              </div>
              <div className="float-end">
                <button type="submit">Edit Profile</button>
                <p>873298424234</p>
                <p>Sonia Singh</p>
                <p>sonia32@gmail.com</p>
                <p>9838482348</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
