import "./Collections.css";
import Wonders from "../assets/Images/7_wonders.jpg";
import Chess from "../assets/Images/chess.jpg";
import Citadels from "../assets/Images/citadels.png";
import ForbiddenDesert from "../assets/Images/forbidden_desert.jpg";
import Hanabi from "../assets/Images/hanabi.jpg";
import Mastermind from "../assets/Images/mastermind.jpg";
import RisingSun from "../assets/Images/rising_sun.jpg";
import StopThief from "../assets/Images/stop_thief.jpg";
import Taboo from "../assets/Images/taboo.jpg";
import Uno from "../assets/Images/uno.jpeg";

const Collections = () => {
  return (
    <>
      <div className="container">
        <div className="image-list">
          <img src={Wonders} alt="7 wonders" />
          <p>7 wonders</p>
        </div>
        <div className="image-list">
          <img src={Chess} alt="chess" />
          <p>Chess</p>
        </div>
        <div className="image-list">
          <img src={Citadels} alt="citadels" />
          <p>Citadels</p>
        </div>
        <div className="image-list">
          <img src={ForbiddenDesert} alt="forbidden desert" />
          <p>Forbidden Desert</p>
        </div>
        <div className="image-list">
          <img src={Hanabi} alt="hanabi" />
          <p>Hanabi</p>
        </div>
        <div className="image-list">
          <img src={Mastermind} alt="mastermind" />
          <p>Mastermind</p>
        </div>
        <div className="image-list">
          <img src={RisingSun} alt="rising sun" />
          <p>Rising sun</p>
        </div>
        <div className="image-list">
          <img src={StopThief} alt="stop thief" />
          <p>Stop thief!</p>
        </div>
        <div className="image-list">
          <img src={Taboo} alt="taboo" />
          <p>Taboo</p>
        </div>
        <div className="image-list">
          <img src={Uno} alt="uno" />
          <p>Uno</p>
        </div>
      </div>
      <div className="deck">
        <p>ALL BOARD COLLECTIONS</p>
      </div>
    </>
  );
};

export default Collections;
