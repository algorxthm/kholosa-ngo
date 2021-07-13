import React from 'react'
import mailjs from 'emailjs-com';

export default function Contact(){

function sendEmail(e) {
  e.preventDefault();

  mailjs.sendForm(
    'service_nk5sj4h', 
    'template_kntjiga', 
    e.target, 
    'user_lt3U70KmzoDcbEHKFjUIp'

    ).then((result) => {
        console.log(result.text);
    }, (err) => {
        console.log(err.text);
    });
    e.target.reset();
  }
    return (
    <> 
      <div className="containerA">
        <div className="row">
          <div className="col-md-5 left">
            <div>
              <i class="fas fa-phone-volume fa-3x"></i>
              <h2>Call Here</h2>
              <p>
              (+27) 76 562 1887
              </p>
            </div>
            <div>
              <i class="fas fa-envelope-open-text fa-3x"></i>
              <h2>Email Address</h2>
              <p>jakalasekholosa4@gmail.com</p>
              <button className="btn btn-primary">Talk to us</button>
            </div>
          </div>
          <div className="col-md-7 right">
            <div className="contact_head">
              <h2>Help A Girl</h2> 
            </div>

           
            <form onSubmit={sendEmail}>
              <div className="contact-form">
              <div className="form-group"> 
              <input
                  name="fullName"
                  type="text"
                  className="form-control mt-3"
                  placeholder="Full Name"
                >   
              </input>

              <input
                  name="subject"
                  type="text"
                  className="form-control mt-3"
                  placeholder="Subject"
              >  
              </input>
              </div>
              
              <div className="form-group">
             
                <input
                  name= "email"

                  type="email"
                  className="form-control mt-3"
                  placeholder="Email Address"
                >

              </input>
              </div>
              <div className="form-group">
             
                <textarea
                  name="message"
                  id=""
                  cols="5"
                  row="10"
                  className="form-control mt-3"
                  placeholder="Enter message here...."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{color:'#fff'}}>
                Send
              </button>
              </div>
              
              </form>
          </div>
        </div>
      </div>
    </>
  )
}


