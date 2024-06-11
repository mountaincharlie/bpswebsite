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
          <div className="aboutpage-content-heading col-12 col-lg-3 d-flex flex-column align-items-center align-items-lg-start">
            <div className="aboutpage-content-heading-word">About</div>
            <div className="aboutpage-content-heading-word">BrightPath</div>
            <div className="aboutpage-content-heading-word">Strategies</div>
          </div>
          <div className="aboutpage-content-desc col-12 col-lg-9 d-flex flex-column align-items-center">
            <div className="aboutpage-content-desc-image-container text-center mb-4">
              <img src={about} className="img-fluid rounded-circle border border-success" alt="About"/>
            </div>
            <div className="aboutpage-content-desc-text text-center">
              Claire LaBrunerie is a senior project manager, financial structuring expert, researcher, and writer -- guiding global foundations and development finance institutions in the structuring of innovative and sustainable financing constructs to mobilize capital to small and growing businesses in frontier markets. Ms. LaBrunerie's thematic focus areas of specialty have been around gender, climate resilience, and monetization of benefits.
            </div>
            <div className="aboutpage-content-desc-text text-center">
              Ms. LaBrunerie has spent 30 years as a capital markets professional, and has deep experience in infrastructure, telecom, consumer products, credit restructuring, working with non-performing loans, and designing, launching and managing funds.
            </div>
            <div className="aboutpage-content-desc-text text-center">
              Ms. LaBrunerie sits on the Board of Ocean Grants and is a former Investment Committee member for Nyala. She has a BA in International Relations from Stanford University, an MA in International Affairs and Finance from Columbia University, and an MBA in Finance and Multinational Management from The Wharton School, University of Pennsylvania. She works on a remote basis, generally based in the United States (New York / Florida). 
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default About;
