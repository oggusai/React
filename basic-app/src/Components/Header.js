import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <div> 
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <Link to="/home" className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav">

          <Link to="/home" className="nav-link active">Home</Link>
          <Link to="/classComp" className="nav-link" href="#">Counter</Link>
          <Link to="/listkeys" className="nav-link" href="#">ListsKeys</Link>
          <Link to="/contactus" className="nav-link" href="#">ContactUs</Link>
          <Link to="/user" className="nav-link" href="#">User</Link>
          <Link to="/Albums" className="nav-link" href="#">PostId</Link>
          <Link to="/pagination" className="nav-link" href="#">Pagination</Link>
          <Link to="/Entertainment" className="nav-link" href="#">Entertainment</Link>
          <Link to="/UseStateHook" className="nav-link" href="#">UseStateHook</Link>
          <Link to="/TodoAppUseEffect" className="nav-link" href="#">TodoAppUseEffect</Link>



          <a className="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
</div>




    
  )
}

export default Header