function LessonCard({ lesson, index }) {
  return (
    <article className={`lesson ${lesson.status}`}>
      <span className="lesson-index">{index + 1}</span>
      <div>
        <h3>{lesson.title}</h3>
        <p>
          {lesson.kind} · {lesson.minutes} min
        </p>
      </div>
      <span className="lesson-status">{lesson.status}</span>
    </article>
  )
}

export default LessonCard
