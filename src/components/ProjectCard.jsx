function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <span className="project-number">0{index + 1}</span>
      <h3>{project}</h3>
      <p>Guided brief, checkpoints, mentor hints, and a final review.</p>
    </article>
  )
}

export default ProjectCard
