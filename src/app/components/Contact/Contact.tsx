import { submitMessage } from "@/app/actions/contact";
import TitleAndText from "../About/TitleAndText";
import { contact } from "./const";
import { useState } from "react";

function Contact() {
  const [body, setBody] = useState({
    email: "",
    messageOfClient: "",
  });
  return (
    <div style={{ display: "grid", gap: "24px", backgroundColor: "grey" }}>
      <p className="respSize">
        I am always open to new opportunities, collaborations, or just a good
        conversation about tech, AI, and real-time applications. Feel free to
        reach out if you wouldd like to discuss a project, need technical support, or
        want to connect professionally.
      </p>
      <div>
        <input
          className="w-full px-0 text-xl text-gray-900 rounded-lg bg-black text-base dark:bg-inherit dark:placeholder-gray-400 dark:text-white outline-none border-transparent "
          type="text"
          value={body.email}
          onChange={(e) =>
            setBody({
              ...body,
              email: e.target.value,
            })
          }
        />
        <input
          className="w-full px-0 text-xl text-gray-900 rounded-lg bg-black text-base dark:bg-inherit dark:placeholder-gray-400 dark:text-white outline-none border-transparent "
          type="text"
          value={body.messageOfClient}
          onChange={(e) =>
            setBody({
              ...body,
              messageOfClient: e.target.value,
            })
          }
        />
      </div>
      <div>
        <button
          onClick={() => {
            submitMessage({
              email: body.email,
              messageOfClient: body.messageOfClient,
            });
          }}
        >
          Save
        </button>
      </div>

      {contact.map((item) => {
        return (
          <TitleAndText
            key={item.title}
            icon={item.icon}
            text={item.text}
            title={item.title}
          />
        );
      })}
    </div>
  );
}
export default Contact;
