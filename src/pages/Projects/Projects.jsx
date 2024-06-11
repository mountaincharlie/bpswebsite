import React from "react";
import "./Projects.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'

import projects_1 from '../../assets/images/projects-1.png';
import projects_2 from '../../assets/images/projects-2.png';
import projects_3 from '../../assets/images/projects-3.png';
import projects_4 from '../../assets/images/projects-4.png';


const Projects = () => {
  return (
    <div className="projectspage-container d-flex flex-column min-vh-100">
      <HeaderNav/>
      <div className="projectspage-content container-fluid flex-grow-1 d-flex flex-column">
        <div className="row">
          <div className="projectspage-content-heading col-12 d-flex align-items-lg-start align-items-center">
            Projects
          </div>
        </div>
        <div className="projectspage-content-desc row m-4">
          <div className="d-none col-12 col-lg-4 d-lg-flex flex-column justify-content-evenly align-items-center projectspage-content-images">
            <img src={projects_3} className="img-fluid" alt="Projects image"/>
            <img src={projects_2} className="img-fluid" alt="Projects image"/>
            <img src={projects_1} className="img-fluid" alt="Projects image"/>
            <img src={projects_4} className="img-fluid" alt="Projects image"/>
          </div>
          <div className="d-flex col-12 d-lg-none flex-row justify-content-center align-items-center projectspage-content-images">
            <img src={projects_3} className="img-fluid me-1" alt="Projects image"/>
            <img src={projects_2} className="img-fluid ms-1" alt="Projects image"/>
          </div>
          <div className="col-12 col-lg-8 text-center">
            <div className="projectspage-content-desc-text mt-4 text-align-center">
              <strong>The Bill and Melinda Gates Foundation</strong>
              <small className="projectspage-content-desc-text-subtext">Structuring a climate adaptation blended finance vehicle.</small>
            </div>
            <div className="projectspage-content-desc-text mt-4">
              <strong>The World Bank</strong>
              <small className="projectspage-content-desc-text-subtext">Refining and gathering best practices on the implementation of SGB finance programs with gender and climate lenses in Uganda, South Sudan, Nigeria, Tanzania, and Somalia.</small>
            </div>
            <div className="projectspage-content-desc-text mt-4">
              <strong>The Bank of Zambia</strong>
              <small className="projectspage-content-desc-text-subtext">Structuring a credit risk guarantee scheme for SGBs in targeted sectors.</small>
            </div>
            <div className="projectspage-content-desc-text mt-4">
              <strong>The Graca Michel Trust</strong>
              <small className="projectspage-content-desc-text-subtext">Designing an alternative credit assessment tool for funds to employ with women-owned businesses.</small>
            </div>
            <div className="projectspage-content-desc-text mt-4">
              <strong>Collaborative for Frontier Finance</strong>
              <small className="projectspage-content-desc-text-subtext">Designing Launch Capital+, a blended finance turnkey fund platform for emerging local capital providers.</small>
            </div>
            <div className="projectspage-content-desc-text mt-4">
              <strong>GSG Impact</strong>
              <small className="projectspage-content-desc-text-subtext">Designing and implementing responsive fund vehicles for Zambian, Ghanaian, and Nigerian SGBs.</small>
            </div>
            <div className="projectspage-content-desc-text my-4">
              <strong>UN Women</strong>
              <small className="projectspage-content-desc-text-subtext">Conducting a systemwide gender policy and programming assessment - consisting of structured interviews with the management of 67 UN entities and aggregation of the resulting data into policy recommendations for the Secretariat.</small>
            </div>
          </div>
          <div className="d-flex col-12 d-lg-none flex-row justify-content-center align-items-center projectspage-content-images">
            <img src={projects_1} className="img-fluid me-1" alt="Projects image"/>
            <img src={projects_4} className="img-fluid ms-1" alt="Projects image"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Projects;

