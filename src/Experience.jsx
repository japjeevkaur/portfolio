import { motion } from "framer-motion";

const skills = [
  "C++", "Java", "Python", "SQL", "JavaScript", "TypeScript",
  "Flask", "Angular", "React", "Next.js", "HTML", "CSS",
  "Android Studio", "Firebase", "Vercel", "PostgreSQL",
  "REST APIs", "Tableau", "DBeaver", "Postman", "Git"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.05
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Experience() {
  return (
    <div className="experience-section">
      <h2>{">"} Experience</h2>

      <div className="card">
        <h3>Software Engineering Intern – State Farm</h3>
        <p className="date">May 2025 – Aug 2025</p>
        <ul>
          <li>Upgraded BDD frameworks from JBehave to Cucumber for key billing and payments applications.</li>
          <li>Optimized EAVS utility functionality to align with evolving system requirements and improve deployment efficiency.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Automation Intern – Nokia Networks</h3>
        <p className="date">Jun 2024 – Aug 2024</p>
        <ul>
          <li>Built internal tooling using Angular + Flask to help engineers optimize 5G network KPIs.</li>
          <li>Conducted deep AI/ML tool competitor research to shape product strategy.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Course Assistant – CS 222: Software Design Lab</h3>
        <p className="date">Jan 2025 – Present</p>
        <ul>
          <li>Mentored student teams and gave technical feedback on software architecture, collaboration, and code quality.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Data Analyst Intern – ATLAS</h3>
        <p className="date">Jan 2024 – May 2024</p>
        <ul>
          <li>Automated data cleaning pipelines.</li>
          <li>Built Tableau dashboards to make insights accessible for stakeholders.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Leadership – Women in Cybersecurity (WiCyS)</h3>
        <p className="date">Aug 2023 – Present</p>
        <ul>
          <li>Organized events and led a passionate exec team to promote cybersecurity awareness and hands-on learning.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Assistant Project Manager – ICON Consulting</h3>
        <p className="date">Sep 2023 – Nov 2024</p>
        <ul>
          <li>Conducted market research to support global expansion strategy for a product development firm.</li>
        </ul>
      </div>

      <div className="technical-skills-section">
        <h2>{">"} Technical Skills</h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} className="skill-tag" variants={skillVariants}>
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
