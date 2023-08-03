import React from 'react'
import mine from '../images/mine-about.png'
import "./About.css"
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const About = () => {
    
    const info1 =[
        {
            head3:"First Name:",
            spand:"Asha"
        },
        {
            head3:"Last Name:",
            spand:"T"
        },
        {
            head3:"D.O.B:",
            spand:"21 NOV 2001 "
        },
        {
            head3:"Email:",
            spand:"2012053@nec.edu.in"
        },
        {
            head3:"Native:",
            spand:"Tenkasi"
        },
    ]
    const edu=[
        {
            insti : "National Engineering College, Kovilpatti",
            year : "2020- 2024",
            marks : "9.32 CGPA (Till 6th Sem)"
        },
        {
            insti : "Chatram Bharathi Higher Secondary School, Kadayam",
            year : "2017 - 2019",
            marks : "89.5 %"
        },
        {
            insti : "Chatram Bharathi Girls High School, Kadayam",
            year : "2016 - 2017 ",
            marks : "97.8 %"
        },

    ]
    const  ach = [
        {
            comp : "Top Coders Event(National Level)",
            detail: "13 th place"
        },
        {
            comp : "Mapathon Event",
            detail: "Notable Partipant"
        },
        {
            comp : "Blind Coding",
            detail: "2nd Runner-Up"
        }
    ]
    return (
        <div id='about-me'>
            {/* container starts */}
        <section className='container'>
        {/* title starts */}
            <div className="title">
                <h1>About Me</h1>
                <h3>Passionated Developer</h3>
            </div>
            {/* title ends  */}
            {/* personal-info starts  */}
            <div className="personal-info">
                <div className="img">
                    <img src={mine} alt="" />
                </div>
                <div className="other-details">
                    <ul className='list1'>
                        {info1.map((i) => {
                            return (
                            <li key={i.id}>
                                <h3>{i.head3}</h3>
                                <span>{i.spand}</span>
                            </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            {/* personal-info  ends  */}
            {/* exp-edu starts  */}
        <div className="exp-edu">
            {/* education starts  */}
            <div className="education">
                <h3>Education</h3>
                <ul>
                    {edu.map((e)=>{
                        return(
                            <li key={e.id}>
                                <ul>
                                    <li><i class="bi bi-calendar3"></i>      {e.year}</li>
                                    <li>{e.insti}</li>
                                    <li>{e.marks}</li>
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* education ends  */}
            <div className="achievments">
                <h3>Achievments</h3>
                <ul>
                    {ach.map((a) => {
                    return (
                        <li key={a.id}>
                        <ul>
                            <li><i class="bi bi-trophy-fill"></i>  {a.comp}</li>
                            <li>{a.detail}</li>
                        </ul>
                        </li>
                    );
                    })}
                </ul>
            </div>

        </div>
        {/* exp-edu ends  */}
        </section>
        {/* container ends */}
        </div>
  )
}
export default About
