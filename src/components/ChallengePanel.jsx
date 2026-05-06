function ChallengePanel({ answer, feedback, onAnswerChange, onSubmit }) {
  return (
    <section className="challenge-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Active challenge</p>
          <h2>If / else logic</h2>
        </div>
        <span className="pill">+25 XP</span>
      </div>

      <p className="challenge-copy">
        Write the condition that checks if a learner has at least 100 XP and can unlock
        the next lesson.
      </p>

      <div className="code-prompt">
        <span>if learner_xp</span>
        <input
          aria-label="Condition answer"
          onChange={(event) => onAnswerChange(event.target.value)}
          placeholder=">= 100:"
          value={answer}
        />
      </div>
      {feedback && <p className="feedback-message">{feedback}</p>}
      <button className="primary-action wide" onClick={onSubmit} type="button">
        Check answer
      </button>
    </section>
  )
}

export default ChallengePanel
