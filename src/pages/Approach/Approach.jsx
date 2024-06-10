import React from "react";
import "./Approach.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'

const Approach = () => {
  return (
    <div className="approachpage-container">
      <HeaderNav/>
      <div className="approachpage-content">
        <div className="approachpage-content-heading">
          Approach
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Approach;
