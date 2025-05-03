import React from 'react';
import '../styles/Interpreting.css';

function Interpreting() {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Interpreting Samples</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Technology</h5>
                <p className="card-text">
                  Amazon Web Services (AWS) | Developer Day 2025
                </p>
                {/* Responsive video wrapper */}
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: "1rem" }}>
                  <iframe 
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    src="https://www.youtube.com/embed/BSHZNveDE28?si=Mkh0Cxkf0_HBl1Ye&start=630" 
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
      <div className="container">
        <h2 className="text-center mb-4">Contracted Agencies</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">ASLIS</h5>
                <p className="card-text">
                  American Sign Language Interpreting Services
                </p>
                {/* Image */}
                <img src="/images/Logo_ASLIS_WhiteOnDarkNoDrop.png" alt="ASLIS company logo" width="100" height="50" className="mx-auto d-block"/>                        
              </div>
              <a href="https://www.aslis.com" className="btn btn-primary">More information</a>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">SLA</h5>
                <p className="card-text">
                  The Sign Language Agency
                </p>
                {/* Placeholder logo */}
                <div className="placeholder-logo mx-auto d-block text-center" style={{ width: "100px", height: "50px", backgroundColor: "rgba(185, 37, 54, .9)", color: "white", lineHeight: "50px", fontWeight: "bold" }}>
                  SLA
                </div>
              </div>
              <a href="https://signlanguageagency.com/" className="btn btn-primary">More information</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interpreting;
