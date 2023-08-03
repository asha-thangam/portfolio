import React from 'react';
import './Skills.css';
import TextShpere from './TextShpere';

const Skills = () => {
  const skillsData = [
    { title: 'Core Java', percentage: 80, className: 'corejava' },
    { title: 'JavaScript', percentage: 80, className: 'javascript' },
    { title: 'HTML', percentage: 90, className: 'html' },
    { title: 'CSS', percentage: 60, className: 'css' },
    { title: 'SQL', percentage: 90, className: 'sql' },
    { title: 'NodeJs', percentage: 60, className: 'nodejs' },
    { title: 'ReactJs', percentage: 65, className: 'reactjs' },
    { title: 'PHP', percentage: 85, className: 'php' },
  ];
  return (
    <div>
      <section class="skills" id="skills">
        <div class="title reveal">
            <h2 class="section-title">My Skills</h2>
        </div>
        <div class="content">
            <div class="column col-left reveal">
            {skillsData.map((skill, index) => (
              <div key={index} className="bar">
                <div className="info">
                  <span>{skill.title}</span>
                  <span>{`${skill.percentage}%`}</span>
                </div>
                <div className={`line ${skill.className}`}></div>
              </div>
            ))}
            </div>
            <div class="column col-right reveal">
              <TextShpere/>
            </div>
        </div>
    </section>
    
    </div>
  )
}

export default Skills

