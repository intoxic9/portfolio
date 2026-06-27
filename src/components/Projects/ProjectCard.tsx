export type Project = {
  title: string;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 24,
        marginBottom: 16,
      }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p style={{ fontSize: 13, opacity: 0.7 }}>{project.stack.join(" · ")}</p>
      {project.links?.map((link) => (
        <a key={link.href} href={link.href} style={{ marginRight: 12 }}>
          {link.label}
        </a>
      ))}
    </article>
  );
}
