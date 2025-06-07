"use Client"
import "./nav.css";
import { usePage } from "../../PageContext";
function Nav() {
  const { currentPage, setCurrentPage } = usePage();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid black",
        padding: "12px 0px",
        marginBottom: "20px",
        height: "20%",
      }}
    >
      <a
        className={currentPage === "intro" ? "activeTab" : "" + "pointer"}
        onClick={() => {
          setCurrentPage("intro");
        }}
      >
        Home
      </a>
      <div style={{ display: "flex", gap: "20px" }}>
        <a
          className={currentPage === "skills" ? "activeTab" : "" + "pointer"}
          onClick={() => {
            setCurrentPage("skills");
          }}
        >
          Skills
        </a>
        <a
          className={currentPage === "contact" ? "activeTab" : "" + "pointer"}
          onClick={() => {
            setCurrentPage("contact");
          }}
        >
          Contact
        </a>
        <a
          className={currentPage === "about" ? "activeTab" : "" + "pointer"}
          onClick={() => {
            setCurrentPage("about");
          }}
        >
          About
        </a>
      </div>
    </div>
  );
}
export default Nav;
