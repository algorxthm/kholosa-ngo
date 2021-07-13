import React from "react";


const Header = () => {
  return (
    <>
      <header
        className="header"
       
      >
        <div className="container fixed-top">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <p>
                <span className="fa fa-whatsapp" style={{color:'#fff'}}></span>
                <span style={{ color: "#fff" ,paddingLeft:'5%' }}>(+27) 76 562 1887</span>
              </p>
            </div>

            <div className="col-lg-4 col-sm-12" >
              <p>
                <span className="fa fa-envelope-open-text" style={{color:'#fff'}}></span>
                <span style={{ color: "#fff", paddingLeft:'5%' }}>jakalasekholosa4@gmail.com</span>
              </p>     
            </div>

            <div className="col-lg-4 col-sm-12">
            <p>
                
                <span style={{ color: "#fff" }}><span className="fas fa-map-marker-alt" style={{color:'#fff', paddingRight:'5%'}}>
                  </span> 74794 Sonderwater  <br></br> Extension 15, Sebokeng, Johannesburg</span>
              </p>
            </div>
            
          </div>
       </div>
      </header>
    </>
  );
};

export default Header;
