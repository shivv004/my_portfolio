import React from 'react'

export default function Contact() {
  return (
    <>
    <style>
      {`
        #contact{
          display:flex;
          height: 85.7vh;
        }
        #form{
          padding-top:50px;
          padding-left:50px;
          width:50%;
        }
        #map{
          width:50%;
        }
        #exampleFormControlInput1{
          width:60%;
        }
        #exampleFormControlTextarea1{
          width:80%;
          resize:none;
        }
        #para{
          padding-right:20px;
        }
        @media screen and (max-width: 900px){
          #contact{
            display: block !important;
            height: 100%
          }
          #form{
            width:100%;
            padding-bottom:50px;
          }
          #map{
            width:100%;
            height:600px
          }
          #para{
            padding-right:20px;
          }
        }
      `}
    </style>
    <div id='contact'>
      <div id="form">
        <h1>
          Contact Form
        </h1>
        <br></br>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Share your thoughts</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
          <br></br>
          <button className="btn btn-outline-success">Submit</button>
          <br></br><br></br><p id="para">***this form does not work, but i can make one using Node.js, Express.js, PHP</p>
        </div>
      </div>
      <div id="map">
      <iframe title="gMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.4839295978434!2d85.06361167490151!3d25.607052200626597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed564b24a25fb1%3A0x612e1e28018d69eb!2sAkansha%20Poonam%20Palace!5e0!3m2!1sen!2sin!4v1703783654656!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </>
  )
}
