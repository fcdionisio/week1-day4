import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  return (
    <>
      <div className="row">
        <div className="col s4">
        </div>
        <div className="col s8">
          <h2>Contact Us</h2>
        </div>
      </div>


      <div className="row">
        <div className="col s8">
          <div className="mapouter"><div 
          className="gmap_canvas"><iframe 
          className="gmap_iframe"  
          src="https://maps.google.com/maps?q=Milfora Home Sabang Baliuag&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>
          </div>
        </div>
      </div>




      <div className="row">
        

          <div className="col s3">

            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Fernando C Dionisio</span>
                <p>Email : fcdionisio@gmail.com</p>
                <p>Contact Number: 999999999</p>
                <p>Address: Street 101, USA</p>
              </div>
              <div className="card-action">
                <a href="#">Call</a>
                <a href="#">Send Message</a>
              </div>

            </div>
          </div>

          <div className="col s3">
            <div className="card blue darken-1">
              <div className="card-content white-text">
                <span className="card-title">Maricel Dionisio</span>
                <p>Email : mari.dionisio@gmail.com</p>
                <p>Contact Number: 999999999</p>
                <p>Address: Street 101, USA</p>
              </div>
              <div className="card-action">
                <a href="#">Call</a>
                <a href="#">Send Message</a>
              </div>
            </div>
          </div>

          <div className="col s3">
            <div className="card green darken-1">
              <div className="card-content white-text">
                <span className="card-title">Peter C Dionisio</span>
                <p>Email : ptr3005211@gmail.com</p>
                <p>Contact Number: 111111</p>
                <p>Address: Street 101, USA</p>
              </div>
              <div className="card-action">
                <a href="#">Call</a>
                <a href="#">Send Message</a>
              </div>
            </div>
          </div>

        
      </div>
    </>
  );
};

export default Contact;

