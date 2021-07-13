import React from 'react'


const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 mt-0  fixed-top"  style={{height:'110px'}}>
        <div className="container">
            
        
          <p style={{color:'white'}}> <h2 style={{color:'white'}}><i class="fas fa-hands fa-2x"style={{color:'#af2575'}}>  </i><span  style={{color:'#f99b1b' , fontFamily: 'Playfair Display', paddingLeft:"3%"}}><strong>Kholosa</strong></span>   <span style={{color:'#635bfb'}}>Foundation</span></h2></p>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link"  href="#ourstories">
                  Our Stories
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  href="#ourimpact">
                  Impact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  Talk To Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>   
        </>
    )
}

export default Navbar
