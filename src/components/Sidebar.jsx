import coderaLogo from '../assets/codera-logo.png'

const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Codera navigation">
      <div className="brand">
        <img className="brand-logo" src={coderaLogo} alt="Codera logo" />
        <div>
          <strong>Codera</strong>
          <span>Build your way into code</span>
        </div>
      </div>

      <nav className="nav-list" aria-label="Main sections">
        <a className="nav-item active" href="#learn">
          Learn
        </a>
        <a className="nav-item" href="#projects">
          Projects
        </a>
        <a className="nav-item" href="#progress">
          Progress
        </a>
      </nav>

      <div className="streak-panel">
        <span className="metric-label">Daily streak</span>
        <strong>7 days</strong>
        <div className="mini-calendar" aria-label="Weekly streak">
          {weekDays.map((day, index) => (
            <span className={index < 5 ? 'filled' : ''} key={`${day}-${index}`}>
              {day}
            </span>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
