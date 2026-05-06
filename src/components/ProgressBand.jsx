function ProgressBand({ completion, xp }) {
  return (
    <section className="progress-band" id="progress">
      <div>
        <p className="eyebrow">Progress</p>
        <h2>{xp} XP earned this level</h2>
      </div>
      <div className="progress-track" aria-label={`${completion}% progress`}>
        <span style={{ width: `${completion}%` }} />
      </div>
    </section>
  )
}

export default ProgressBand
