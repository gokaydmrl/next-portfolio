function DetailBackend() {
  return (
    <div>
      <p className="detailDesc">
        🛠 My core strength lies in building scalable, efficient backend systems
        using Node.js, Express, Fastify, and NestJS. I design robust APIs,
        handle asynchronous workloads, implement scheduled tasks, and integrate
        real-time notification systems. I'm experienced with databases like
        PostgreSQL (via Prisma, Neon, Supabase) and NoSQL alternatives. I focus
        on performance, modular architecture, and developer-friendly tooling
        that scales with product needs.
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
            <a href="https://nest-test-gokaydmrl96.onrender.com/">
              Nest.js With Guard
            </a>
          </li>
          <li>
            <a href="https://react-work-two.vercel.app">
              Nest JS Server Sent Event
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
export default DetailBackend;
