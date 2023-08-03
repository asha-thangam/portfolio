import React from 'react'
import "./Contact.css";
const Contact = () => {
  return (
    <div className='maincontact' id='maincontact'>
      <div className="title">
        <h1>Get in touch</h1>
      </div>
      <div className='sections'>
        <section class="contact" id="contact">
        <div class="content">
            <div class="row">
                <a class="cont-a" href="mailto:2012053@nec.edu.in" target='_blank'>
                    <div class="card reveal">
                        <div class="contact-icon">
                            <i class="bi bi-envelope-fill"></i>
                        </div>
                        <div class="info">
                            <h3>Email Address</h3>
                            <span>2012053@nec.edu.in</span>
                        </div>
                    </div>
                </a>
                <a class="cont-a" href="https://twitter.com/asha_tsk" target='_blank'>
                    <div class="card reveal">
                        <div class="contact-icon">
                            <i class="bi bi-twitter"></i>
                        </div>
                        <div class="info">
                            <h3>Twitter</h3>
                            <span>Asha_TSK</span>
                        </div>
                    </div>
                </a>
                <a class="cont-a" href="https://www.linkedin.com/in/asha-t-baa4a3200/" target='_blank'>
                    <div class="card reveal">
                        <div class="contact-icon">
                            <i class="bi bi-linkedin"></i>
                        </div>
                        <div class="info">
                            <h3>LinkedIn</h3>
                            <span>Asha T</span>
                        </div>
                    </div>
                </a>
                <a class="cont-a" href="https://github.com/asha-thangam" target='_blank'>
                    <div class="card reveal">
                        <div class="contact-icon">
                            <i class="bi bi-github"></i>
                        </div>
                        <div class="info">
                            <h3>Github</h3>
                            <span>Asha-Thangam</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
        </div>    
    </div>
  )
}

export default Contact
