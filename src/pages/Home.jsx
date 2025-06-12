import React from "react";

function Home() {
    return (
        <div>
            <main className="container py-5 mt-5">
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-5 py-3">
                    <div className="hero-left">
                        <p>
                            &lt;{" "}
                            <span className="whisperFont">Vraj Gautam</span>
                            /&gt;
                        </p>

                        <h1 className="hero-title">
                            MERN Full Stack
                            <br />
                            Web developer.
                            <br />
                        </h1>
                        <p className="hero-subtitle">
                            I am a MERN full-stack web developer who loves{" "}
                            <strong>logic building</strong> and Web solutions
                            that improve <strong>Business Efficiency</strong>.{" "}
                            <br />
                            <br />
                            <strong>Node.js</strong> is my strong suit And{" "}
                            <strong>React.js</strong> keeps me sharp by
                            constantly challenging the way I structure and think
                            about user interfaces and interactive features.
                        </p>

                        <div className="d-flex align-items-center gap-3 mt-5">
                            <a
                                href="/resume.pdf"
                                download
                                className="btn btn-warning fw-semibold"
                            >
                                Download Resume
                            </a>

                            <a
                                href="https://www.linkedin.com/in/vrajgautam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>

                            <a
                                href="mailto:vraj@example.com"
                                className="icon-link"
                            >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>

                    <div className="hero-img-wrapper ">
                        <img
                            src="/images/vrajgautam.jpg"
                            alt="hero"
                            className="hero-img img-fluid"
                        />
                    </div>
                </div>

                <section className="container tech-stack-section py-5 mt-5">
  <h2 className="mb-4 fw-bold">🛠️ Tech Stack</h2>

  <div className="row gy-4">
    {/* Frontend */}
    <div className="col-md-4">
      <h5 className="fw-semibold mb-3">Frontend</h5>
      <ul className="list-unstyled d-flex flex-wrap gap-3">
        <li className="tech-item">
          <i className="fab fa-html5 text-danger"></i> HTML
        </li>
        <li className="tech-item">
          <i className="fab fa-css3-alt text-primary"></i> CSS
        </li>
        <li className="tech-item">
          <i className="fab fa-js-square text-warning"></i> JavaScript
        </li>
        <li className="tech-item">
          <i className="fab fa-react text-info"></i> React.js
        </li>
        <li className="tech-item">
          <i className="fab fa-bootstrap text-purple"></i> Bootstrap
        </li>
        <li className="tech-item">
          <i className="fas fa-wind text-teal"></i> Tailwind
        </li>
      </ul>
    </div>

    {/* Backend */}
    <div className="col-md-4">
      <h5 className="fw-semibold mb-3">Backend</h5>
      <ul className="list-unstyled d-flex flex-wrap gap-3">
        <li className="tech-item">
          <i className="fab fa-node-js text-success"></i> Node.js
        </li>
        <li className="tech-item">
          <i className="fas fa-database text-success"></i> MongoDB
        </li>
        <li className="tech-item">
          <i className="fas fa-server text-secondary"></i> Express.js
        </li>
      </ul>
    </div>

    {/* Tools & Misc */}
    <div className="col-md-4">
      <h5 className="fw-semibold mb-3">Tools</h5>
      <ul className="list-unstyled d-flex flex-wrap gap-3">
        <li className="tech-item">
          <i className="fab fa-git-alt text-danger"></i> Git
        </li>
        <li className="tech-item">
          <i className="fab fa-github text-dark"></i> GitHub
        </li>
        <li className="tech-item">
          <i className="fas fa-code text-indigo"></i> VS Code
        </li>
        <li className="tech-item">
          <i className="fas fa-globe text-success"></i> Netlify
        </li>
      </ul>
    </div>
  </div>
</section>

            </main>
        </div>
    );
}

export default Home;
