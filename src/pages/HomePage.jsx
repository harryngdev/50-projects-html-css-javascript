import React from "react";
import Helmet from "./../components/Helmet/Helmet";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import Grid from "../components/Grid/Grid";
import projects from "../assets/data/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import About from "../components/About/About";

const HomePage = () => {
  return (
    <Helmet title="Home">
      <Header />

      <main className="main">
        <div className="main-container">
          <div className="main-description">
            <div className="container">
              <div className="main-description-inner">
                <h3>50 Projects Front-end</h3>
                <h1>
                  50 unique mini-projects to sharpen your HTML, CSS & JavaScript
                  skills
                </h1>
              </div>
            </div>
          </div>

          <div className="projects-list" id="projects">
            <Grid col={5} xlCol={4} lgCol={3} mdCol={2} smCol={1}>
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  image={project.image}
                  slug={project.slug}
                />
              ))}
            </Grid>
          </div>
        </div>
      </main>

      <About />

      <Footer />
    </Helmet>
  );
};

export default HomePage;
