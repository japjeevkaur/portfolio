// Contact.jsx
function Contact() {
    return (
      <div className="contact-section">
        <h2>{">"} Contact</h2>
  
        <div className="contact-card">
          <div className="contact-item">
            <span>📧</span>
            <a href="mailto:jkaur30@illinois.edu">jkaur30@illinois.edu</a>
          </div>
  
          <div className="contact-item">
            <span>💼</span>
            <a href="https://linkedin.com/in/japjeev-kaur" target="_blank" rel="noreferrer">
              linkedin.com/in/japjeevkaur
            </a>
          </div>
  
          <div className="contact-item">
            <span>💻</span>
            <a href="https://github.com/japjeevkaur" target="_blank" rel="noreferrer">
              github.com/japjeevkaur
            </a>
          </div>
  
          <div className="contact-item">
            <span>📍</span>
            <span>Urbana-Champaign, IL</span>
          </div>
  
          <div className="contact-item">
            <span>📅</span>
            <span>
              Available for: Summer 2025 Internships <span className="blink">_</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  