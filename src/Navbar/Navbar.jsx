import { Link } from "react-router-dom"
import '../css/Navbar.css'
export function Navbar(){
    return <>
    <nav class="navbar navbar-expand-lg bg-danger">
    <div className="nav d-flex fixed-top position-absolute top-0 end-0 start-0">
   <div className="left-side d-flex">
   <p className="fs-1 p-3">
    <Link className="navbar-brand text-decoration-none text-white" to="/">
      Start Framework
    </Link>
  </p>
  <button class="navbar-toggler position-absolute end-0 mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
   </div>
   <div className="right-side collapse navbar-collapse">
  <ul className="navbar-nav p-3 mt-3 w-50 d-flex justify-content-around gap-3 list-unstyled align-items-center ">
    <li className="nav-item">
      <Link className="nav-link text-decoration-none text-white fs-5" to="/about">
        About
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-decoration-none text-white fs-5" to="/portfolio">
        Portfolio
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-decoration-none text-white fs-5" to="/contact">
        Contact
      </Link>
    </li>
  </ul>
    </div>     
  </div>
  </nav>
    </>
}