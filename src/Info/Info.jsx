import React from 'react'
import '../css/Info.css'
export default function Info() {
  return <>

  <div className="row Info">
      <div className="col-md-4  p-3">
          <div className="inner text-center text-white p-3">
              <h2>LOCATION</h2>
              <h4>2215 John Daniel Drive</h4>
              <h4>Clark, MO 65243</h4>
          </div>
      </div>
      <div className="col-md-4  p-3">
          <div className="inner text-center text-white  p-3">
              <h2>AROUND THE WEB</h2>
             <div className="social-media d-flex justify-content-around">
                <div className="icon rounded-circle border-white border-4 d-flex justify-content-center align-content-center align-items-center">
                <i class="fa-brands fa-facebook fa-2xl"></i>
                </div>
                <div className="icon rounded-circle border-white border-4 d-flex justify-content-center align-content-center align-items-center">
                <i class="fa-brands fa-instagram fa-2xl"></i>
                </div>
                <div className="icon rounded-circle border-white border-4 d-flex justify-content-center align-content-center align-items-center">
                <i class="fa-brands fa-linkedin fa-2xl"></i>
                </div>
                <div className="icon rounded-circle border-white border-4 d-flex justify-content-center align-content-center align-items-center">
                <i class="fa-brands fa-twitter fa-2xl"></i>
                </div>
             </div>
          </div>
      </div>
      <div className="col-md-4  p-3">
          <div className="inner text-center text-white  p-3">
              <h2>ABOUT FREELANCER</h2>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
      </div>
  </div>

</>
}
