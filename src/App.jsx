import JapjeevImage from './assets/Japjeev.jpg';
import './App.css'
import { Typewriter } from 'react-simple-typewriter'
import Experience from './Experience'
import Contact from './assets/Contact'
import { useState } from 'react'

function App() {
  const [section, setSection] = useState('about')
  const [doneTyping, setDoneTyping] = useState(false) 

  return (
    <div className="App">
      <h1>
        {!doneTyping ? (
          <Typewriter
            words={["Welcome to Japjeev Kaur's Portfolio"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={0}
            onTypeDone={() => setDoneTyping(true)}
          />
        ) : (
          "Welcome to Japjeev Kaur's Portfolio"
        )}
      </h1>

      <div className="nav-buttons">
        <button onClick={() => setSection('about')}>About</button>
        <button onClick={() => setSection('experience')}>Experience</button>
        <button onClick={() => setSection('projects')}>Projects</button>
        <button onClick={() => setSection('contact')}>Contact</button>
      </div>

      {section === 'about' && (
        <div className="about-section">
          <img src={JapjeevImage} alt="Japjeev Kaur" className="profile-img" />
          <div className="about-text">
            <h2>{">"} About Me</h2>
            <p>Hi! I'm Japjeev Kaur, a Senior majoring in Computer Science + Economics. I'm passionate about the intersection of technology and society, from full-stack development to cybersecurity and AI.</p>
            <p>I enjoy building tools that solve meaningful problems and collaborating on projects that challenge me to grow as a developer and a thinker. My academic interests are rooted in using software to create practical, scalable solutions that improve everyday life.</p>
            <p>In my free time, I love running and exploring new places!</p>
            <p>Thanks for visiting my site. Feel free to explore my work or reach out if you'd like to connect.</p>
          </div>
        </div>
      )}

      {section === 'experience' && <Experience />}

      {section === 'projects' && (
        <div className="projects-section">
          <h2>{">"} Projects</h2>

          <div className="project-card">
            <h3> Computer Vision ASL Detector</h3>
            <p>Real-time American Sign Language detection using <strong>Python</strong>, <strong>TensorFlow</strong>, and <strong>Mediapipe</strong>.</p>
          </div>

          <div className="project-card">
            <h3> BloomBuddy</h3>
            <p>A mobile app that uses <strong>ML</strong> and <strong>image recognition</strong> to recommend plant care routines and identify plant types.</p>
          </div>

          <div className="project-card">
            <h3> Career Compass</h3>
            <p>Android app that maps out career fair booths and helps students search and filter employers. Built with <strong>Android Studio</strong> and <strong>Java</strong>.</p>
          </div>
        </div>
      )}

      {section === 'contact' && <Contact />}

    </div>
  )
}

export default App;
