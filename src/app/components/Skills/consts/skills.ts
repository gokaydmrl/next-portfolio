import AI from "../AI/AI";
import Backend from "../Backend/Backend";
import Frontend from "./../Frontend/Frontend";
import DetailAI from "../AI/DetailAI";
import DetailFrontend from "../Frontend/DetailFrontend";
import DetailBackend from "../Backend/DetailBackend";

export type TComponent = "AI" | "Backend" | "Frontend";

export interface IComponent {
  component: TComponent;
}
export const skills: IComponent[] = [
  { component: "AI" },
  { component: "Backend" },
  { component: "Frontend" },
];
export const expand = {
  AI: {
    name: "AI",
    component: AI,
    list: ["SSE", "WebSocket", "OpenAI", "Image Generator", "Voice Stream"],
    detailChildren: DetailAI,
  },
  Backend: {
    name: "Backend",
    component: Backend,
    list: [
      "Node.js",
      "JavaScript, TypeScript",
      "SQL, NoSQL",
      "Prisma, Drizzle",
      "Express, Nest.js, Fastify",
      "Supabase"
    ],
    detailChildren: DetailBackend,
  },
  Frontend: {
    name: "Frontend",
    component: Frontend,
    list: [
      "React, Vue, React Native",
      "Tailwing, Ant, Bootstrap",
      "Auth0",
      "REST API",
      "Zustand, React Context, Redux",
      "HTML, CSS"
    ],
    detailChildren: DetailFrontend,
  },
};
