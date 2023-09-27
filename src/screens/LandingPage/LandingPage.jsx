import React from "react";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            className="element-burst"
            alt="Element burst"
            src="https://c.animaapp.com/WzlATkda/img/436-4368493-burst-vintage-comic-book-background-1.png"
          />
          <img className="untitled" alt="Untitled" src="https://c.animaapp.com/WzlATkda/img/untitled-2-1.png" />
          <p className="text-wrapper">
            COPYRIGHT © INFOVINE. ALL RIGHTS RESERVED. PUBLISHED BY ELECTRONICS EXTREME CO., LTD.
          </p>
          <img className="image" alt="Image" src="https://c.animaapp.com/WzlATkda/img/image-12@2x.png" />
          <div className="group">
            <div className="coming-soon">
              <div className="overlap-group">
                <img className="LOGO" alt="Logo" src="https://c.animaapp.com/WzlATkda/img/zone4-logo-1@2x.png" />
                <div className="div">สังเวียนสุดมันกำลังจะเปิดแล้วเร็วๆนี้...</div>
                <div className="text-wrapper-2">COMING SOON</div>
              </div>
              <img className="img" alt="Group" src="https://c.animaapp.com/WzlATkda/img/group-9@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
