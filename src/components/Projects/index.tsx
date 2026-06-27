import { ProjectCard, type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Example project",
    description: "Replace this with a real project to seed the pattern.",
    stack: ["TypeScript", "React"],
    links: [{ label: "GitHub", href: "#" }],
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ padding: "48px 24px", maxWidth: 640, margin: "0 auto" }}>
      <h2>Projects</h2>
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </section>
  );
}
