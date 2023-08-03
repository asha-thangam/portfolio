import React from 'react';
import bg from "../images/background.jpg";
import myimg from "../images/myimg.jpeg";
import './Home.css'
import Typical from 'react-typical';

const Home = () => {
  const openResume = () => {
    console.log("resume");
    const url = "https://drive.google.com/file/d/1EmgvmIBnnBLa3CQzdTytOLs85DYVz5jG/view?usp=drive_link";
    window.open(url, "_blank", "noreferred");
  };

  return (
    <div className='bg'>
      <div className='main-container' id="main-container">
        <section className="prof-img">
          <img src={myimg} alt="" />
        </section>
        <section id="home" className="text">
          <div>
            <h1 className='hi'>HI THERE!</h1>
            <h3 className='varying'>
              <span className="typed-text">I'm</span>
              <Typical
                steps={['Asha', 1000, 'Java Coder', 1000, 'Currently learning full stack development', 1000]}
                loop={Infinity}
                wrapper="p"
              />
            </h3>
            <p>I'm a  final year engineering student on the basis of Tamil Nadu, India. Passionated programmer and application developer,
              dedicated to crafting innovative solutions and pushing the boundaries of technology.</p>
            <div className="buttons">
              {/* <button type="button" class="btn btn-primary"><i class="bi bi-person-fill"></i>MORE ABOUT ME</button> */}
              <button type="button" class="btn btn-primary" onClick={openResume}><i class="bi bi-person-bounding-box"></i>RESUME</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
