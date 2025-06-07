import Blink from "./Blink";

function IntroTexts() {
  return (
    <div className="introTexts">
      <div className="nameAndTitle">
        <p className="name">Hi, I am</p>
        <p className="name">Gökay Demirel</p>
        <Blink />
        <p className="title">based in Turkey</p>
      </div>
    </div>
  );
}
export default IntroTexts;
