import React from "react";
import confLogo from "./../images/badge-header.svg";
import './styles/badge.css';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon" alt="avatar" />
          <h1>
            Richard <br /> Kaufman
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@sparragus</div>
        </div>
        <div className="Badge__footer">
          <p>#platziconf</p>
        </div>
      </div>
    );
  }
}

export default Badge;
