import React from "react";
import "./Approach.scss";
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Footer from '../../components/Footer/Footer'
import approach_1 from '../../assets/images/approach-1.png';
import approach_2 from '../../assets/images/approach-2.png';


const Approach = () => {
  return (
    <div className="approachpage-container d-flex flex-column min-vh-100">
      <HeaderNav/>
      <div className="approachpage-content container-fluid flex-grow-1 d-flex flex-column">
        <div className="row">
          <div className="approachpage-content-heading col-12 d-flex align-items-lg-start align-items-center">
            Approach
          </div>
        </div>
        <div className="approachpage-content-desc row m-4 justify-content-center align-items-center">
          <div className="approachpage-content-desc-text__left col-12 col-lg-9 d-flex flex-column">
            BrightPath Strategies is a design leader and thought-partner supporting private and public entities to shape innovative financing constructs that move debt and equity capital to "the missing middle" in frontier markets -- with a focus on gender and climate resilience and monetization of benefits.
          </div>
          <div className="approachpage-content-desc-image-container col-12 col-lg-3 d-flex flex-column">
            <img src={approach_1} className="img-fluid" alt="About"/>
          </div>
        </div>
        <div className="approachpage-content-desc row m-4 align-items-center justify-content-center justify-content-lg-end">
          <div className="approachpage-content-desc-image-container col-12 col-lg-3 d-flex flex-column order-2 order-lg-1">
            <img src={approach_2} className="img-fluid" alt="About"/>
          </div>
          <div className="approachpage-content-desc-text__right col-12 col-lg-9 d-flex flex-column order-1 order-lg-2">
            Local fund managers and intermediaries are essential for driving the growth of SGBs yet require technical and capacity support to reach their full potential. BrightPath Strategies structures financing vehicles tailored to the unique needs of small and growing businesses and fund managers in emerging markets, incorporating opportunities for flexible funding, diverse investment instruments, and post-investment support.
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Approach;
