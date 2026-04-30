import { useMemo, useState } from 'react'
import coderaLogo from './assets/codera-logo.png'
import pythonIcon from './assets/python.png'
import javascriptIcon from './assets/javascript.png'
import htmlCssIcon from './assets/html.png'
import './App.css'

const languages = [
  {
    name: 'Python',
    level: 'Beginner friendly',
    accent: '#2f80ed',
    icon: pythonIcon,
    units: ['Variables', 'Conditions', 'Loops', 'Functions'],
  },
  {
    name: 'JavaScript',
    level: 'Web apps',
    accent: '#f2b705',
    icon: javascriptIcon,
    units: ['DOM basics', 'Events', 'Arrays', 'APIs'],
  },
  {
    name: 'HTML & CSS',
    level: 'Design basics',
    accent: '#eb5757',
    icon: htmlCssIcon,
    units: ['Structure', 'Selectors', 'Layouts', 'Responsive UI'],
  },
]

const lessons = [
  {
    title: 'Variables',
    kind: 'Lesson',
    minutes: 8,
    status: 'done',
  },
  {
    title: 'If / else logic',
    kind: 'Challenge',
    minutes: 12,
    status: 'active',
  },
  {
    title: 'Loops',
    kind: 'Practice',
    minutes: 10,
    status: 'locked',
  },
  {
    title: 'Build: Score tracker',
    kind: 'Project',
    minutes: 35,
    status: 'locked',
  },
]

const projects = [
  'Command line quiz game',
  'Personal budget calculator',
  'Habit tracker app',
]

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [answer, setAnswer] = useState('')
  const [xp, setXp] = useState(340)
  const [feedback, setFeedback] = useState('')


  const completion = useMemo(() => Math.round((xp / 500) * 100), [xp])

  function submitChallenge() {
    const cleanAnswer = answer.trim()
    
    if (!cleanAnswer) {
      setFeedback('Write your answer first!')
      return
    }

    if (cleanAnswer === '>= 100:') {
      setXp((prevXp) => prevXp + 25)
      setFeedback('Correct! You earned 25 XP.')
    } else {
      setFeedback('Not quite right. Try again!')
    }
  }

  return (
    <main className="app-shell">
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
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
              <span className={index < 5 ? 'filled' : ''} key={`${day}-${index}`}>
                {day}
              </span>
            ))}
          </div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Today&apos;s path</p>
            <h1>Learn fundamentals, then ship real projects.</h1>
          </div>
          <button className="primary-action" type="button">
            Continue lesson
          </button>
        </header>

        <section className="language-strip" aria-label="Choose language">
          {languages.map((language) => (
            <button
              className={language.name === selectedLanguage.name ? 'language active' : 'language'}
              key={language.name}
              onClick={() => setSelectedLanguage(language)}
              style={{ '--language-accent': language.accent }}
              type="button"
            >
            <img className="language-icon" src={language.icon} alt="" />
            <div>
              <span>{language.name}</span>
              <small>{language.level}</small>
            </div>
            </button>
          ))}
        </section>

        <div className="content-grid">
          <section className="learning-path" id="learn">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{selectedLanguage.name} track</p>
                <h2>Fundamentals map</h2>
              </div>
              <span className="pill">{completion}% to next level</span>
            </div>

            <div className="lesson-list">
              {lessons.map((lesson, index) => (
                <article className={`lesson ${lesson.status}`} key={lesson.title}>
                  <span className="lesson-index">{index + 1}</span>
                  <div>
                    <h3>{lesson.title}</h3>
                    <p>
                      {lesson.kind} · {lesson.minutes} min
                    </p>
                  </div>
                  <span className="lesson-status">{lesson.status}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="challenge-panel">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Active challenge</p>
                <h2>If / else logic</h2>
              </div>
              <span className="pill">+25 XP</span>
            </div>

            <p className="challenge-copy">
              Write the condition that checks if a learner has at least 100 XP and can
              unlock the next lesson.
            </p>

            <div className="code-prompt">
              <span>if learner_xp</span>
              <input
                aria-label="Condition answer"
                onChange={(event) => setAnswer(event.target.value)}
                placeholder=">= 100:"
                value={answer}
              />
            </div>
            {feedback && <p className="feedback-message">{feedback}</p>}
            <button className="primary-action wide" onClick={submitChallenge} type="button">
              Check answer
            </button>
          </section>
        </div>

        <section className="project-row" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Project studio</p>
              <h2>Bigger builds waiting after basics</h2>
            </div>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project}>
                <span className="project-number">0{index + 1}</span>
                <h3>{project}</h3>
                <p>Guided brief, checkpoints, mentor hints, and a final review.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="progress-band" id="progress">
          <div>
            <p className="eyebrow">Progress</p>
            <h2>{xp} XP earned this level</h2>
          </div>
          <div className="progress-track" aria-label={`${completion}% progress`}>
            <span style={{ width: `${completion}%` }} />
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
