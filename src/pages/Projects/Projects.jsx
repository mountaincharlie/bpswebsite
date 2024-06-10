import React from "react";
import "./Projects.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'

const Projects = () => {
  return (
    <div className="projectspage-container">
      <HeaderNav/>
      <div className="projectspage-content">
        <div className="projectspage-content-heading">
          Projects
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Projects;
