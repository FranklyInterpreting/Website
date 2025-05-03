import React from 'react';
import '../styles/Resume.css';

function Resume() {
  return (
    <section className="resume-section py-5" aria-labelledby="resume-title">
      <div className="container">
        <h1 id="resume-title" className="text-center mb-4">Danny Frank, MBA, NIC</h1><hr />

        {/* Professional Summary */}
        <div className="mb-5">
          <h2 id="professional-summary" className="aws-style">Professional Summary</h2>
          <p>
            Results-driven Program Manager with 4+ years of experience driving business transformation and stakeholder management 
            at scale. Proven track record in developing and executing strategic partnerships, managing complex cross-functional 
            relationships, and delivering measurable business outcomes. Demonstrated expertise in program development, cost 
            optimization, and scaling operations across global markets.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-5">
          <h2 id="skills" className="aws-style">Skills</h2>
          <ul className="skills-list">
            <li><strong>AWS Cloud Services: </strong>Certified AWS Cloud Practitioner, AI Practitioner, and Solutions Architect 
              Associate with experience building a static website using Amazon S3, CloudFront, AWS Certificate Manager, and Route 
              53. 
            </li>
            <li><strong>Stakeholder Management:</strong> Expertise in building and maintaining strategic partnerships, influencing without 
              authority, and aligning cross-functional teams to drive business objectives.
            </li>
            <li><strong>Program Management: </strong>Experienced in leading programs using Agile methodologies, formerly Scrum Master 
              certified.
            </li>
            <li><strong>Business Analytics:</strong> Skilled in leveraging data for strategic decision-making using tools such as Smartsheet and Excel 
              for advanced analysis and reporting</li>
            <li><strong>American Sign Language:</strong>(Fluent) | National Interpretpreter Certification (NIC) | <em>RID, 2011</em></li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="mb-5">
          <h2 id="experience" className="aws-style">Experience</h2>
          <div className="experience-item">
            <h4>Program Manager, Vendor Operations</h4>
            <p><strong>Amazon</strong> | <em>2020 - Present</em></p>
            <ul>
              <li>Developed and managed strategic partnerships with 8 vendor organizations, implementing standardized processes and commercial 
                frameworks that scaled to support 2,800+ contingent workers globally
              </li>
              <li>Launched innovative on-demand service pilot projected to deliver $800K in first-year savings, growing to $1.5M annually, 
                demonstrating ability to drive new revenue streams and cost optimization
              </li>
              <li>Developed key performance indicators (KPIs) to monitor vendor performance across eight contracts, resulting in improved 
                visibility into vendor engagement on customer escalations and driving strategy as we approached contract renewals.
              </li>
              <li>Created and executed comprehensive reorganization plans establishing new roles and accountability frameworks across 
                organization, improving operational efficiency and stakeholder alignment
              </li>
              <li>Implemented data-driven vendor performance monitoring system across multiple contracts, enabling strategic business 
                reviews and informed partnership decisions
              </li>
              <li>Designed and deployed centralized issue management system enabling cross-functional collaboration, reducing resolution time by 
                69% and improving partner satisfaction
              </li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>Owner, Sign Language Interpreter</h4>
            <p><strong>Frankly Interpreting, LLC</strong> | <em>2009 - Present</em></p>
            <ul>
              <li>Delivered high-quality, real-time American Sign Language (ASL) interpretation for individuals and organizations, ensuring clear 
                communication and understanding across various settings, including healthcare, legal, educational, and business environments.
              </li>
              <li>Fostered strong customer relationships by consistently providing professional, accurate interpretation services, adapting to diverse 
                needs and ensuring customer satisfaction.
              </li>
              <li>Provided feedback and mentoring to colleagues and mentees, ensuring message accuracy, customer experience quality, and professional 
                development within the interpreting community.
              </li>
              <li>Maintained thorough knowledge of ethical guidelines, industry standards, and customer preferences to uphold the highest standards of 
                service and customer trust.
              </li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>Program Manager</h4>
            <p><strong>Student Association for Interpreter Development</strong> | <em>2008 - 2022</em></p>
            <ul>
              <li>Designed and launched a state-funded internship program in partnership with Riverside City College generating over 35,700 hours of 
                pro bono ASL interpreting services, contributing to 65% growth in community outreach.
              </li>
              <li>Reduced scheduling time by 50% through the development of a scheduling platform, allowing the team to respond to customer intakes 
                more rapidly.
              </li>
              <li>Established a normalized expectation within community partnerships to have interpreting students on site at community Deaf events 
                (art walks, historical site tours, sporting clubs), as well as state residential schools and state-funded Deaf agencies.
              </li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-5">
          <h2 id="education" className="aws-style">Education</h2>
          <div className="education-item">
            <h4>MBA</h4>
            <p><strong>Grand Canyon University</strong> | <em>2021</em></p>
            <h4>Sign Language Interpreting, Certificate</h4>
            <p><strong>Riverside City College</strong> | <em>2009</em></p>
            <h4>Bachelor of Arts in Communication</h4>
            <p><strong>University of Minnesota</strong> | <em>2005</em></p>
          </div>
          
          {/* Reformatted In Progress Section */}
          <div className="education-item mt-4">
            <h4 className="text-primary">In Progress:</h4>
            <div className="card border-primary mb-3">
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-graduation-cap me-2"></i>
                    Project Management Professional (PMP) Exam Prep Course (Udemy)
                  </li>
                  <li>
                    <i className="fas fa-code me-2"></i>
                    Web Development Course (Udemy)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
