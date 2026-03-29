


const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>

      <div className="education-container">
          <div className="edu-card">
          <div className="edu-icon">🎓</div>
          <div className="edu-content">
            <h3>Master of Computer Science</h3>
            <p>Shreemati Nathibai Damodar Thackersey Women's University</p>
            <span>2024 - 2026</span>
          </div>
        </div>

        <div className="edu-card">
          <div className="edu-icon">🎓</div>
          <div className="edu-content">
            <h3>Bachelor of Computer Science</h3>
            <p>Shreemati Nathibai Damodar Thackersey Women's University</p>
            <span>2021 - 2024</span>
          </div>
        </div>

        <div className="edu-card">
          <div className="edu-icon">🏫</div>
          <div className="edu-content">
            <h3>Higher Secondary (HSC)</h3>
            <p>Smt. Chandibai Himathmal Mansukhani College</p>
            <span>2019 - 2021</span>
          </div>
        </div>

        <div className="edu-card">
          <div className="edu-icon">📘</div>
          <div className="edu-content">
            <h3>Secondary School (SSC)</h3>
            <p>Maharashtra Board</p>
            <span>2018 - 2019</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;