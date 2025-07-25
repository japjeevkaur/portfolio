function Contact() {
  return (
    <div className="experience-section">
      <h2>{">"} Contact</h2>

      <div className="contact-card">
        <ul>
          <li>
            <span>📧</span>
            <a href="mailto:jkaur30@illinois.edu">jkaur30@illinois.edu</a>
          </li>
          <li>
            <span>💼</span>
            <a
              href="https://linkedin.com/in/japjeev-kaur"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/japjeevkaur
            </a>
          </li>
          <li>
            <span>💻</span>
            <a
              href="https://github.com/japjeevkaur"
              target="_blank"
              rel="noreferrer"
            >
              github.com/japjeevkaur
            </a>
          </li>
          <li>
            <span>📍</span>
            <span>Urbana-Champaign, IL</span>
          </li>
          <li>
            <span>📅</span>
            <span>
              Available for: Summer 2026 Internships{" "}
              <span className="blink">_</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
