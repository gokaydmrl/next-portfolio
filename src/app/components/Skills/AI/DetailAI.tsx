function DetailAI() {
  return (
    <div>
      <p className="detailDesc">
        🧠 I actively integrate AI into real-world applications, focusing on
        real-time audio and voice streaming technologies. My work includes
        implementing intelligent systems that utilize speech processing and
        image generation, enhancing user interactivity and automation. I’m
        especially interested in leveraging OpenAI’s capabilities for building
        conversational and perceptive interfaces, embedding AI into user
        experiences where latency and reliability are critical.
      </p>
      <div>
        <p
          className="respSize"
          style={{
            fontWeight: "bold",
            paddingBottom: "6px",
            color: "rgb(216, 140, 140)",
          }}
        >
          Live Projects:
        </p>
        <div style={{ display: "grid" }}>
          <li>
            <a href="https://react-work-two.vercel.app">OpenAI Voice Stream</a>
          </li>
        </div>
      </div>
    </div>
  );
}
export default DetailAI;
