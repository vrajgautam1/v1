import React from "react";

function Home() {
    return (
        <div>
            <main className="container py-5 mt-5">
                {/* hero section  */}
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-5 py-3">
                    <div className="hero-left">
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

                {/* tech stack  */}
                <section className="container tech-stack-section py-5 mt-5">
                    <h2 className="mb-4 fw-bold">Tech Stack</h2>

                    <div className="row gy-4">
                        {/* Tools & Misc */}
                        <div className="col-md-4">
                            <h5 className="fw-semibold mb-3">Tools</h5>
                            <ul className="list-unstyled d-flex flex-wrap gap-3">
                                <li className="tech-item">
                                    <i className="fab fa-git-alt text-danger"></i>{" "}
                                    Git
                                </li>
                                <li className="tech-item">
                                    <i className="fab fa-github text-dark"></i>{" "}
                                    GitHub
                                </li>
                                <li className="tech-item">
                                    <i className="fas fa-code text-indigo"></i>{" "}
                                    VS Code
                                </li>
                                <li className="tech-item">
                                    <i className="fas fa-globe text-success"></i>{" "}
                                    Netlify
                                </li>
                            </ul>
                        </div>

                        {/* Frontend */}
                        <div className="col-md-4">
                            <h5 className="fw-semibold mb-3">Frontend</h5>
                            <ul className="list-unstyled d-flex flex-wrap gap-3">
                                <li className="tech-item">
                                    <i className="fab fa-html5 text-danger"></i>{" "}
                                    HTML
                                </li>
                                <li className="tech-item">
                                    <i className="fab fa-css3-alt text-primary"></i>{" "}
                                    CSS
                                </li>
                                <li className="tech-item">
                                    <i className="fab fa-js-square text-warning"></i>{" "}
                                    JavaScript
                                </li>
                                <li className="tech-item">
                                    <i className="fab fa-react text-info"></i>{" "}
                                    React.js
                                </li>
                                <li className="tech-item">
                                    <i className="fab fa-bootstrap text-purple"></i>{" "}
                                    Bootstrap
                                </li>
                            </ul>
                        </div>

                        {/* Backend */}
                        <div className="col-md-4">
                            <h5 className="fw-semibold mb-3">Backend</h5>
                            <ul className="list-unstyled d-flex flex-wrap gap-3">
                                <li className="tech-item">
                                    <i className="fab fa-node-js text-success"></i>{" "}
                                    Node.js
                                </li>
                                <li className="tech-item">
                                    <i className="fas fa-database text-success"></i>{" "}
                                    MongoDB
                                </li>
                                <li className="tech-item">
                                    <i className="fas fa-server text-secondary"></i>{" "}
                                    Express.js
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="container my-5">
                    <h2 className="mb-4 fw-bold">
                        Featured{" "}
                        <span style={{ borderBottom: "3px solid #0d6efd" }}>
                            Projects
                        </span>
                    </h2>

                    <div className="project-card d-flex flex-wrap-reverse justify-content-between align-items-center gap-5 p-4 rounded-4 shadow-sm my-5 glass-header">
                        {/* Left: Text section */}
                        <div
                            className="project-info"
                            style={{ flex: "1 1 300px" }}
                        >
                            <h3 className="fw-bold mb-3">Fiskil</h3>
                            <p
                                className="text-secondary mb-4"
                                style={{ maxWidth: "500px" }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum ante ipsum primis in
                                faucibus orci luctus et ultrices posuere cubilia
                                curae.
                            </p>

                            {/* Tech stack pills */}
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                {[
                                    "React",
                                    "Next.js",
                                    "TypeScript",
                                    "Nest.js",
                                    "PostgreSQL",
                                    "TailwindCSS",
                                    "Figma",
                                    "Cypress",
                                    "Storybook",
                                    "Git",
                                ].map((tech, index) => (
                                    <span
                                        key={index}
                                        className="badge bg-primary text-light rounded-pill px-3 py-2 small"
                                        style={{
                                            backdropFilter: "blur(10px)",
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.3)", // or rgba(255, 255, 255, 0.1) for light blur
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="d-flex gap-3 mt-2">
                                <a
                                    href="#"
                                    className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"
                                    style={{ transition: "0.3s" }}
                                >
                                    Live Demo
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"
                                    style={{ transition: "0.3s" }}
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div
                            className="project-image"
                            style={{ flex: "1 1 300px" }}
                        >
                            <img
                                src="/images/fiskil-project.jpg"
                                alt="Fiskil project screenshot"
                                className="img-fluid rounded-4 border"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
