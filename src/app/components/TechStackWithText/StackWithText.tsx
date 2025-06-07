import type { ReactNode } from "react";

function StackWithText({
  list,
  children,
}: {
  list: string[];
  children: ReactNode;
}) {
  return (
    <div className="stackWrapper">
      {children}
      <div
        className="flex30"
        style={{ display: "grid", paddingTop: "16px", paddingBottom: "16px" }}
      >
        <p className="respSize skillTitle">Tech Stack:</p>
        {list.map((item) => {
          return <li key={item}>{item} </li>;
        })}
      </div>
    </div>
  );
}
export default StackWithText;
