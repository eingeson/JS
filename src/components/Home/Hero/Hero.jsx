import "./Hero.css";

export default function Hero() {
  return (
    <div className="main-container">
      <div className="main-content-text">
        <h1>
          Manage All Your <br />
          Money in One App
        </h1>
        <p className="subtitle">
          We offer you a new generation of the mobile banking. Save, spend &
          manage money in your pocket.
        </p>
        <div className="app-buttons">
          <a href="#">
            <img src="images/appstore.svg" />
          </a>
          <a href="#">
            <img src="images/googleplay.svg" />
          </a>
        </div>

        <div className="next">
          <a href="#">
            <img src="images/discover-more-btn.svg" />
          </a>
          <span className="discover">Discover more</span>
        </div>
      </div>
      <div className="img-div">
        <img src="images/lp-iphones.svg" />
      </div>
    </div>
  );
}
