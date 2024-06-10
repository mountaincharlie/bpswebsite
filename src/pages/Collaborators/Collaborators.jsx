import React from "react";
import "./Collaborators.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'

const Collaborators = () => {
  return (
    <div className="collaboratorspage-container">
      <HeaderNav/>
      <div className="collaboratorspage-content">
        <div className="collaboratorspage-content-heading">
          Collaborators
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Collaborators;
