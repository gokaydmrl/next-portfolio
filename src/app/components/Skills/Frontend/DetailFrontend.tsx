function DetailFrontend() {
  return (
    <div>
      <p className="detailDesc">
        🎨 With a strong eye for design and user interaction, I build
        responsive, intuitive interfaces using React, Vue, and React Native. I
        emphasize clean, maintainable code and seamless UX across devices. My
        experience includes designing websites, emails admin panels, user profile pages and data
        visualizations using Tailwind, Ant Design, and Bootstrap—always ensuring
        performance and accessibility are prioritized.
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
            <a href="https://react-work-two.vercel.app/login">
              React Voice Stream
            </a>
          </li>
          <li>
            <a href="https://www.mutlumesaj.com.tr/"> mutlumesaj website</a>
          </li>
        </div>
      </div>
    </div>
  );
}
export default DetailFrontend;
