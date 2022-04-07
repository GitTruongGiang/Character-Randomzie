import React, { useState, useEffect } from "react";
import "./App.css";
const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};
let partBody = [];
let partEyes = [];
let partHair = [];
let partMouth = [];
let partEyebrows = [];
let partGlasses = [];
let partClothing1 = [];
let partClothing2 = [];
let partClothing3 = [];
function App() {
  const [body, setBody] = useState(1);
  const [eyes, setEyes] = useState(1);
  const [eyebrows, setEyebrow] = useState(1);
  const [hair, setHair] = useState(1);
  const [clothing1, setClothing1] = useState(1);
  const [clothing2, setClothing2] = useState(1);
  const [clothing3, setClothing3] = useState(1);
  const [mouth, setMouth] = useState(1);
  const [glasses, setGlasses] = useState(1);
  function randomize() {
    setBody(Math.floor(Math.random() * total.body) + 1);
    setEyes(Math.floor(Math.random() * total.eyes) + 1);
    setHair(Math.floor(Math.random() * total.hair) + 1);
    setClothing1(Math.floor(Math.random() * total.clothing1) + 1);
    setClothing2(Math.floor(Math.random() * total.clothing2) + 1);
    setClothing3(Math.floor(Math.random() * total.clothing3) + 1);
    setEyebrow(Math.floor(Math.random() * total.eyebrows) + 1);
    setMouth(Math.floor(Math.random() * total.mouth) + 1);
    setGlasses(Math.floor(Math.random() * total.glasses) + 1);
  }
  useEffect(() => {
    randomize();
  }, []);
  useEffect(() => {
    for (let i = 1; i < total.body; i++) {
      partBody.push(
        <div key={i} className="square">
          <img
            src={`https://character-customization.netlify.app/character/body/${i}.png`}
            alt=""
            height={60}
            onClick={() => setBody(i)}
          />
        </div>
      );
    }
  }, []);
  useEffect(() => {
    for (let i = 1; i < total.eyes; i++) {
      partEyes.push(
        <div key={i} className="square">
          <img
            src={`https://character-customization.netlify.app/character/eyes/${i}.png`}
            alt=""
            height={60}
            onClick={() => setEyes(i)}
          />
        </div>
      );
    }
  }, []);
  useEffect(() => {
    for (let i = 1; i < total.hair; i++) {
      partHair.push(
        <div key={i} className="square">
          <img
            src={`https://character-customization.netlify.app/character/hair/${i}.png`}
            alt=""
            height={60}
            onClick={() => setHair(i)}
          />
        </div>
      );
    }
  }, []);
  useEffect(() => {
    for (let i = 1; i < total.mouth; i++) {
      partMouth.push(
        <div key={i} className="square">
          <img
            src={`https://character-customization.netlify.app/character/mouths/${i}.png`}
            alt=""
            height={60}
            onClick={() => setMouth(i)}
          />
        </div>
      );
    }
  }, []);
  useEffect(() => {
    for (let i = 1; i < total.eyebrows; i++) {
      partEyebrows.push(
        <div key={i} className="square">
          <img
            src={`https://character-customization.netlify.app/character/eyebrows/${i}.png`}
            alt=""
            height={60}
            onClick={() => setEyebrow(i)}
          />
        </div>
      );
    }
  }, []);
  useEffect(() => {
    for (let i = 1; i < total.glasses; i++) {
      partGlasses.push(
        <div key={i} className="square">
          <img
            src={`https://character-customization.netlify.app/character/accessories/glasses/${i}.png`}
            alt=""
            height={60}
            onClick={() => setGlasses(i)}
          />
        </div>
      );
    }
  }, []);
  useEffect(() => {
    for (let i = 1; i < total.clothing1; i++) {
      partClothing1.push(
        <div key={i} className="square">
          <img
            src={`https://character-customization.netlify.app/character/clothes/layer_1/${i}.png`}
            alt=""
            height={60}
            onClick={() => setClothing1(i)}
          />
        </div>
      );
    }
  }, []);
  useEffect(() => {
    for (let i = 1; i < total.clothing2; i++) {
      partClothing2.push(
        <div key={i} className="square">
          <img
            src={`https://character-customization.netlify.app/character/clothes/layer_2/${i}.png`}
            alt=""
            height={60}
            onClick={() => setClothing2(i)}
          />
        </div>
      );
    }
  }, []);
  useEffect(() => {
    for (let i = 1; i < total.clothing3; i++) {
      partClothing3.push(
        <div key={i} className="square">
          <img
            src={`https://character-customization.netlify.app/character/clothes/layer_3/${i}.png`}
            alt=""
            height={60}
            onClick={() => setClothing3(i)}
          />
        </div>
      );
    }
  }, []);
  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <div className="avatar">
              <img
                src={`https://character-customization.netlify.app/character/body/${body}.png`}
                alt=""
                width={260}
                style={{ zIndex: 0, position: "absolute", left: 0, top: 0 }}
                key={1}
              />
              <img
                src={`https://character-customization.netlify.app/character/eyes/${eyes}.png`}
                alt=""
                width={260}
                style={{ zIndex: 1, position: "absolute", left: 0, top: 0 }}
              />
              <img
                src={`https://character-customization.netlify.app/character/hair/${hair}.png`}
                alt=""
                width={260}
                style={{ zIndex: 6, position: "absolute", left: 0, top: 0 }}
              />
              <img
                src={`https://character-customization.netlify.app/character/clothes/layer_1/${clothing1}.png`}
                alt=""
                width={260}
                style={{ zIndex: 2, position: "absolute", left: 0, top: 0 }}
              />
              <img
                src={`https://character-customization.netlify.app/character/clothes/layer_2/${clothing2}.png`}
                alt=""
                width={260}
                style={{ zIndex: 3, position: "absolute", left: 0, top: 0 }}
              />
              <img
                src={`https://character-customization.netlify.app/character/clothes/layer_3/${clothing3}.png`}
                alt=""
                width={260}
                style={{ zIndex: 4, position: "absolute", left: 0, top: 0 }}
              />
              <img
                src={`https://character-customization.netlify.app/character/mouths/${mouth}.png`}
                alt=""
                width={260}
                style={{ zIndex: 4, position: "absolute", left: 0, top: 0 }}
              />
              <img
                src={`https://character-customization.netlify.app/character/noses/1.png`}
                alt=""
                width={260}
                style={{ zIndex: 4, position: "absolute", left: 0, top: 0 }}
              />
              <img
                src={`https://character-customization.netlify.app/character/eyebrows/${eyebrows}.png`}
                alt=""
                width={260}
                style={{ zIndex: 4, position: "absolute", left: 0, top: 0 }}
              />
              <img
                src={`https://character-customization.netlify.app/character/accessories/glasses/${glasses}.png`}
                alt=""
                width={260}
                style={{ zIndex: 5, position: "absolute", left: 0, top: 0 }}
              />
            </div>
            <div className="text-center">
              <button className="button" onClick={() => randomize()}>
                Randomize!
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="list-section">
            <h2>Body</h2>
            <div className="list">{partBody}</div>
          </div>
          <div className="list-section">
            <h2>Eyes</h2>
            <div className="list">{partEyes}</div>
          </div>
          <div className="list-section">
            <h2>Hair</h2>
            <div className="list">{partHair}</div>
          </div>
          <div className="list-section">
            <h2>Mouth</h2>
            <div className="list">{partMouth}</div>
          </div>
          <div className="list-section">
            <h2>Eyebrows</h2>
            <div className="list">{partEyebrows}</div>
          </div>
          <div className="list-section">
            <h2>Glasses</h2>
            <div className="list">{partGlasses}</div>
          </div>
          <div className="list-section">
            <h2>Clothing (L1)</h2>
            <div className="list">{partClothing1}</div>
          </div>
          <div className="list-section">
            <h2>Clothing (L2)</h2>
            <div className="list">{partClothing2}</div>
          </div>
          <div className="list-section">
            <h2>Clothing (L3)</h2>
            <div className="list">{partClothing3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
