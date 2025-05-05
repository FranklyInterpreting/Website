import React from 'react';
import '../styles/CertificationShowcase.css';

function CertificationShowcase() {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect Associate",
      issueDate: "2024",
      description: "Validates the ability to design and implement distributed systems on AWS.",
      badgeUrl: "/images/SAA_AWS.png",
      badgeAlt: "AWS Certified Solutions Architect Associate Badge"
    },
    {
      id: 2,
      title: "AWS Certified Cloud Practitioner",
      issueDate: "2021",
      description: "Validates foundational understanding of AWS Cloud services, architecture, and economics.",
      badgeUrl: "/images/CCP_AWS.png",
      badgeAlt: "AWS Certified Cloud Practitioner Badge"
    },
    {
      id: 3,
      title: "AWS AI Practitioner",
      issueDate: "2024",
      description: "Demonstrates knowledge of AI/ML concepts and AWS AI services.",
      badgeUrl: "/images/AWS_AIP(1).png",
      badgeAlt: "AWS AI Practitioner Badge"
    }
  ];

  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="learning-journey-card">
            <h3>My AWS Learning Path</h3>
            <p>
              My cloud journey began with Stephane Maarek's comprehensive AWS courses, which provided 
              both theoretical knowledge and guided hands-on practice. While these courses were instrumental 
              in helping me pass the certification exams, I've found that additional self-directed projects 
              have been essential for deepening my practical understanding.
            </p>
            <p>
              I believe in continuous learning and applying knowledge through real-world projects. 
              This website itself represents one of my hands-on learning experiences in web development 
              and cloud deployment.
            </p>
            <div className="learning-tip">
              <i className="fas fa-lightbulb"></i>
              <div>
                <strong>Learning Tip:</strong> While certification courses are valuable, I recommend supplementing 
                them with additional hands-on practice to truly master cloud concepts and services.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="learning-stats-card">
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">AWS Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">Course In Progress</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Learning Journey</div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mb-3">AWS Certifications</h3>
      <div className="row certification-badges mb-5">
        {certifications.map(cert => (
          <div key={cert.id} className="col-md-4 mb-4">
            <div className="certification-card">
              <div className="certification-badge">
                <img 
                  src={cert.badgeUrl} 
                  alt={cert.badgeAlt} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder-badge.png";
                  }}
                />
              </div>
              <div className="certification-details">
                <h4>{cert.title}</h4>
                <p className="issue-date">Issued {cert.issueDate}</p>
                <p className="description">{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationShowcase;
