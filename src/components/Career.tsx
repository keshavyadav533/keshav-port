import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Learning Full Stack Development</h4>
                <h5>Self-Taught</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started my journey in web development. Learned HTML, CSS, JavaScript,
              and built my first responsive websites. Explored frontend frameworks
              and began understanding how the web works.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Student</h4>
                <h5>University/College</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pursuing my degree while building real-world projects. Mastered
              React.js, Node.js, Express, and MongoDB. Created multiple full-stack
              applications including authentication systems and RESTful APIs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer & Student</h4>
                <h5>Continuous Learning</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently balancing studies with hands-on development. Building
              modern web applications with TypeScript, Next.js, and exploring
              cloud technologies. Open to internships and freelance opportunities
              while completing my education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
