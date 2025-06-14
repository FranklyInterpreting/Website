import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import CertificationShowcase from '../components/CertificationShowcase';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Danny Frank</h1>
          <p className="lead">AWS Certified Cloud Professional & ASL Interpreter</p>
          <div className="hero-buttons">
            <Link to="/resume" className="btn btn-primary btn-lg me-2">View Resume</Link>
            <a href="#dual-career" className="btn btn-outline-light btn-lg me-2">Learn More</a>
            <button onClick={() => alert("This email feature is inactive and serves as an example of error handling in JavaScript.")} className="btn btn-outline-light btn-lg">
              <i className="fas fa-envelope me-2"></i>Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Dual Career Path Section */}
      <section id="dual-career" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">My Dual Professional Path</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <div className="career-path-card tech">
                <div className="card-icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <h3>Cloud Technology</h3>
                <p>AWS Certified professional with experience in cloud architecture, program management, and vendor operations. Currently expanding my skills in full-stack development.</p>
                <div className="card-actions">
                  <a href="#tech-section" className="btn btn-sm btn-primary">View Tech Skills</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="career-path-card interpreting">
                <div className="card-icon">
                  <i className="fas fa-hands"></i>
                </div>
                <h3>ASL Interpreting</h3>
                <p>Nationally certified interpreter (NIC) with extensive experience in business, healthcare, and educational settings. Providing professional interpreting services since 2009.</p>
                <div className="card-actions">
                  <a href="#interpreting-services" className="btn btn-sm btn-primary">View Interpreting Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Skills Section */}
      <section id="tech-section" className="py-5 bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="text-center">Technology Expertise</h2>
            <p className="lead text-center mb-5">Combining cloud knowledge with practical development skills</p>
          </div>
          
          {/* AWS Certifications Component */}
          <CertificationShowcase />
          
          {/* AI Collaboration Banner */}
          <div className="ai-collab-banner mt-5 mb-5">
            <div className="row align-items-center">
              <div className="col-md-2 text-center">
                <div className="ai-icon">
                  <i className="fas fa-robot"></i>
                </div>
              </div>
              <div className="col-md-10">
                <h4>AI-Enhanced Development</h4>
                <p>
                  While I built the original HTML/CSS version of this site, this React implementation was created in collaboration 
                  with Amazon Q. This project demonstrates my ability to effectively leverage AI tools to achieve technical goals—a 
                  valuable skill in modern development environments.
                </p>
              </div>
            </div>
          </div>
          
          {/* Learning & Portfolio Row */}
          <div className="mt-5">
            <div className="row">
              {/* Currently Learning Column */}
              <div className="col-lg-6 mb-4">
                <h3 className="text-center mb-4">Currently Learning</h3>
                <div className="ongoing-course-card h-100">
                  <div className="course-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <div className="course-details">
                    <h4>Full Stack Web Development</h4>
                    <p>Angela Yu, App Brewery | Udemy</p>
                    <span className="progress-badge">In Progress</span>
                    <p className="mt-2">Building practical web development skills through hands-on projects including HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. This website is one of my React projects from this learning journey!</p>
                    <div className="course-progress">
                      <div className="progress-bar-container">
                        <div className="progress-bar" style={{width: "65%"}}></div>
                      </div>
                      <span className="progress-text">75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Web Development Portfolio Column */}
              <div className="col-lg-6 mb-4">
                <h3 className="text-center mb-4">Web Development Portfolio</h3>
                <div className="card portfolio-card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="portfolio-icon me-3">
                        <i className="fas fa-code"></i>
                      </div>
                      <h4 className="card-title mb-0">Full-Stack Projects</h4>
                    </div>
                    <p className="card-text">
                      As part of my web development journey, I'm building projects that demonstrate my growing skills in:
                    </p>
                    <ul className="tech-list">
                      <li><span className="tech-tag">React</span></li>
                      <li><span className="tech-tag">Node.js</span></li>
                      <li><span className="tech-tag">AWS Services</span></li>
                      <li><span className="tech-tag">Responsive Design</span></li>
                    </ul>
                    <p className="card-text mt-3">
                      This website itself is one of my React projects, demonstrating my ability to create modern, 
                      responsive web applications while learning new technologies.
                    </p>
                    <div className="text-center mt-4">
                      <a href="https://franklyinterpreting.github.io/designwebsite/" className="btn btn-primary">
                        <i className="fas fa-external-link-alt me-2"></i>View Portfolio Projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interpreting Services Section */}
      <section id="interpreting-services" className="py-5">
        <div className="container">
          <div className="section-header">
            <h2 className="text-center">ASL Interpreting Services</h2>
            <p className="lead text-center mb-5">Professional interpretation for business, healthcare, and educational settings</p>
          </div>
          
          {/* RID Certification Banner */}
          <div className="rid-certification-banner mb-5">
            <div className="row align-items-center">
              <div className="col-md-3 text-center">
                <a href="https://rid.org" target="_blank" rel="noopener noreferrer">
                  <img src="/images/RID_Cert.png" alt="Registry of Interpreters for the Deaf" className="rid-logo" />
                </a>
              </div>
              <div className="col-md-9">
                <h4>Nationally Certified Interpreter</h4>
                <p>
                  I hold a National Interpreter Certification (NIC) from the Registry of Interpreters for the Deaf (RID), 
                  the leading organization establishing standards for quality interpretation and transliteration services.
                </p>
                <a href="https://rid.org" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                  Learn About RID Certification
                </a>
              </div>
            </div>
          </div>
          
          {/* Agency Banner */}
          <div className="agency-banner mb-5">
            <div className="row align-items-center">
              <div className="col-md-3">
                <h3 className="mb-3 mb-md-0">Contracted Through</h3>
              </div>
              <div className="col-md-9">
                <div className="agency-logos-banner">
                  <div className="agency-logo-item">
                    <a href="https://aslis.com" target="_blank" rel="noopener noreferrer">
                      <img src="/images/Logo_ASLIS_WhiteOnDarkNoDrop.png" alt="ASLIS - American Sign Language Interpreting Services" />
                      <p>ASLIS</p>
                    </a>
                  </div>
                  <div className="agency-logo-item">
                    <a href="https://signlanguageagency.com" target="_blank" rel="noopener noreferrer">
                      <div className="placeholder-logo">SLA</div>
                      <p>Sign Language Agency</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mb-5">
            <div className="col-lg-6 mb-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="service-content">
                  <h4>Business & Corporate</h4>
                  <p>Professional interpretation for meetings, conferences, and workplace communication.</p>
                  <ul className="service-features">
                    <li>Executive meetings</li>
                    <li>Training sessions</li>
                    <li>Corporate events</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <div className="service-content">
                  <h4>Technology Settings</h4>
                  <p>Specialized interpretation for technical discussions and IT environments.</p>
                  <ul className="service-features">
                    <li>Software development</li>
                    <li>Technical training</li>
                    <li>IT conferences</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <div className="service-content">
                  <h4>Healthcare</h4>
                  <p>Accurate and confidential interpretation for medical appointments and health services.</p>
                  <ul className="service-features">
                    <li>Medical consultations</li>
                    <li>Mental health services</li>
                    <li>Health education</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-university"></i>
                </div>
                <div className="service-content">
                  <h4>Educational</h4>
                  <p>Supporting Deaf and hard-of-hearing students in educational environments.</p>
                  <ul className="service-features">
                    <li>Post-secondary classes</li>
                    <li>Workshops and seminars</li>
                    <li>Student services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interpreting Sample Section */}
      <section id="interpreting-sample" className="py-5 bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="text-center">Interpreting Sample</h2>
            <p className="lead text-center mb-5">Example of my ASL interpreting work</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Technology Interpreting Sample</h5>
                  <p className="card-text">
                    Amazon Web Services (AWS) | Developer Day 2025
                  </p>
                  {/* Responsive video wrapper */}
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: "1rem" }}>
                    <iframe 
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                      src="https://www.youtube.com/embed/BSHZNveDE28?si=Mkh0Cxkf0_HBl1Ye&start=13196&end=14096" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
