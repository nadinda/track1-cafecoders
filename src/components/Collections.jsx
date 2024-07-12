import "./Collections.css"; // Assuming you have a CSS file for styling

const Collections = () => {
  return (
    <>
      <div className="container">
        <div className="image-list">
          <img src="src/assets/Images/7 wonders.jpg" alt="7 wonders" />
          <p>7 wonders</p>
        </div>
        <div className="image-list">
          <img src="src/assets/Images/chess.jpg" alt="chess" />
          <p>Chess</p>
        </div>
        <div className="image-list">
          <img src="src/assets/Images/citadels.png" alt="citadels" />
          <p>Citadels</p>
        </div>
        <div className="image-list">
          <img
            src="src/assets/Images/forbidden desert.jpg"
            alt="forbidden desert"
          />
          <p>Forbidden Desert</p>
        </div>
        <div className="image-list">
          <img src="src/assets/Images/hanabi.jpg" alt="hanabi" />
          <p>Hanabi</p>
        </div>
        <div className="image-list">
          <img src="src/assets/Images/mastermind.jpg" alt="mastermind" />
          <p>Mastermind</p>
        </div>
        <div className="image-list">
          <img src="src/assets/Images/rising sun.jpg" alt="rising sun" />
          <p>Rising sun</p>
        </div>
        <div className="image-list">
          <img src="src/assets/Images/stop thief.jpg" alt="stop thief" />
          <p>Stop thief!</p>
        </div>
        <div className="image-list">
          <img src="src/assets/Images/taboo.jpg" alt="taboo" />
          <p>Taboo</p>
        </div>
        <div className="image-list">
          <img src="src/assets/Images/uno.jpeg" alt="uno" />
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
