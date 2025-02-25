import React, { useRef } from "react";
import "./Testimonials.css";
import nextBtn from "../../assets/nextBtn.png";
import backBtn from "../../assets/backtBtn.png";
import user_1 from "../../assets/user_1.jpg";
import gallery_1 from "../../assets/gallery_1.jpg";
import gallery_2 from "../../assets/gallery_2.jpg";

const Testimonials = () => {
  const slider = useRef();
  // tx Trnslate Xiese
  let tx = 0;

  const slideFarword = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackword = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={nextBtn} alt="" className="next-btn" onClick={slideFarword} />
      <img src={backBtn} alt="" className="back-btn" onClick={slideBackword} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Willaim Jackson</h3>
                  <span>City University, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degreee at City University was one of the
                decision I have ever made. The suppportive community,
                state-of-the-art facilities and turly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={gallery_1} alt="" />
                <div>
                  <h3>Willaim Jackson</h3>
                  <span>City University, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degreee at City University was one of the
                decision I have ever made. The suppportive community,
                state-of-the-art facilities and turly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Willaim Jackson</h3>
                  <span>City University, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degreee at City University was one of the
                decision I have ever made. The suppportive community,
                state-of-the-art facilities and turly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={gallery_2} alt="" />
                <div>
                  <h3>Willaim Jackson</h3>
                  <span>City University, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degreee at City University was one of the
                decision I have ever made. The suppportive community,
                state-of-the-art facilities and turly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
