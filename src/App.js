import { useState } from "react";
import "./App.css";

const data = ["No", "Are you sure", "Think again", "Why nau?", "I no gree", "Be serious na"];
const img = ["cute-love-bear-roses-ou7zho5oosxnpo6k.gif", "bear-kiss-bear-kisses.gif"];

function App() {
  const [btn, setBtn] = useState(0);
  const [fontSize, setFontSize] = useState(20);
  const [currentImage, setCurrentImage] = useState(0);
  const [clicked, setClicked] = useState(true);

  function handleNoBtn() {
    setBtn(btn + 1);
    setFontSize(fontSize * 1.3);
    if (btn === data.length - 1) {
      const currentPosition = data.length - 1;
      setBtn(btn - currentPosition);
    }
  }

  function handleYesBtn() {
    setCurrentImage(currentImage + 1);
    setClicked(!clicked);
  }

  return (
    <div className="app">
      <div className="img-container">
        <img src={img[currentImage]} alt="Bears Kissing" />
      </div>

      {clicked && (
        <div className="question">
          <h2>Lolo, will you be my Valentine? 😍</h2>

          <div className="buttons">
            <button className="yes" style={{ fontSize: `${fontSize}px` }} onClick={handleYesBtn}>
              Yes
            </button>
            <button className="no" onClick={handleNoBtn}>
              {data[btn]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
