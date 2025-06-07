import "./about.css";
function TitleAndText({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <p style={{ fontSize: "22px", fontWeight: "bold" }}>
        <span style={{ fontSize: "32px" }}>{icon} </span>
        {"  "} {title}
      </p>
      <p
        style={{
          borderLeft: "3px solid black",
          fontSize: "20px",
          paddingLeft: "44px",
        }}
      >
        {text}
      </p>
    </div>
  );
}
export default TitleAndText;
