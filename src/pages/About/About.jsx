import React from "react";
import "./About.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import Footer from '../../components/Footer/Footer';
import about from '../../assets/images/about-pic.png';

const About = () => {
  return (
    <div className="aboutpage-container d-flex flex-column min-vh-100">
      <HeaderNav/>
      <div className="aboutpage-content container-fluid flex-grow-1 d-flex flex-column">
        <div className="row m-4">
          <div className="aboutpage-content-heading col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start">
            <div className="aboutpage-content-heading-word">About</div>
            <div className="aboutpage-content-heading-word">BrightPath</div>
            <div className="aboutpage-content-heading-word">Strategies</div>
          </div>
          <div className="aboutpage-content-desc col-12 col-lg-6 d-flex flex-column align-items-center">
            <div className="aboutpage-content-desc-image-container text-center mb-4">
              <img src={about} className="img-fluid rounded-circle border border-success" alt="About"/>
            </div>
            <div className="aboutpage-content-desc-text text-center">
              Claire LaBrunerie is a project manager, advisor, researcher, synthesizer, and writer supporting private and public entities to shape innovative financing constructs that move debt and equity capital to "the missing middle" in frontier markets -- with a focus on gender and climate resilience and monetization of benefits. Deep sector experience with financial institutions, capital markets, deal structuring, and due diligence. Leveraging 30 years of experience in telecom, consumer products, credit restructuring (non-performing loans, real estate), and fund design and operations -- to support projects with the potential for impact and systems change.
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default About;
