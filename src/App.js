import './App.css';
import React, { useState } from 'react';

function App() {
  const [selectedSection, setSelectedSection] = useState('Home');

  const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="profile">
          <h1>S MONIKA SIRI</h1>
        </div>
        <div className="navbar">
          {sections.map((section, index) => (
            <button
              key={index}
              className={selectedSection === section ? 'active' : ''}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
      <div className="main-content">
        {selectedSection === 'Home' && (
          <div className="content-section">
            <h2>Welcome to my portfolio!</h2>
            <p>
              Currently, I am working as a marketing core member in SEDS club and as an NGC core member in the event management department at VIT-AP University.
            </p>

            <h2>My Interests</h2>
            <ul>
              <li>HTML, CSS, JavaScript, Bootstrap</li>
              <li>Java, Python, PHP</li>
              <li>SQL, Front-End Development</li>
              <li>UI/UX Design</li>
            </ul>

            <h2>My Projects</h2>
            <div className="project-card-grid">
              <div className="project-card">
                <h3>Project 1</h3>
                <p>Breast cancer classification with convolutional neural network using deep learning.</p>
                {/* You should wrap the project link with an anchor tag */}
               
              </div>
              <div className="project-card">
                <h3>Project 2</h3>
                <p>Divaza - one-stop for beauty</p>
                {/* You should also wrap the project link with an anchor tag */}
                
              </div>
            </div>
          </div>
        )}

        {selectedSection === 'About' && (
          <div className="content-section">
            <h2>About Me</h2>
            <p>
              Hello! This is Monika Siri. Explore my captivating web developer portfolio, a visual journey through my web design and development expertise.
            </p>
            <p>
              Currently, I am pursuing B.TECH in Computer Science Engineering with a specialization in Artificial Intelligence and Machine learning at VIT-AP University.
            </p>
            <p>
              I take pleasure in crafting web page designs using Figma, and I have a genuine passion for the field of UI/UX design.
            </p>
          </div>
        )}

        {selectedSection === 'Skills' && (
          <div className="content-section">
            <h2>Skills</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Python, Java, PHP</li>
              <li>SQL, Front-End Development</li>
              <li>UI/UX Design</li>
              {/* Add more skills as needed */}
            </ul>
          </div>
        )}

        {selectedSection === 'Projects' && (
          <div className="content-section">
            <h2>Projects</h2>
            <p>You can see my project works on the Home page.</p>
          </div>
        )}

        {selectedSection === 'Experience' && (
          <div className="content-section">
            <h2>Experience</h2>
            <p>
              I worked as a monitor in CSI club and as a marketing core member in GPUG CLUB.
            </p>
            <p>
              Currently, I am working as a marketing core member in SEDS club and as an NGC core member in the event management department at VIT-AP University.
            </p>
          </div>
        )}

        {selectedSection === 'Contact' && (
          <div className="content-section">
            <h2>Contact Me</h2>
            <p>Name: S MONIKA SIRI</p>
            <p>Mobile: 8555096372</p>
            <p>Email: monikasiri488@gmail.com</p>
            <p>
              Linkedin: <a href="https://www.linkedin.com/in/monika-siri-savarala-378726234">S MONIKA SIRI</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;