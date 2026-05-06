import { useMemo, useState } from 'react'
import { authClient } from './lib/auth-client'
import ChallengePanel from './components/ChallengePanel'
import LanguageCard from './components/LanguageCard'
import LessonCard from './components/LessonCard'
import LoginScreen from './components/LoginScreen'
import ProgressBand from './components/ProgressBand'
import ProjectCard from './components/ProjectCard'
import Sidebar from './components/Sidebar'
import { languages, lessons, projects } from './data'
import './App.css'

function App() {
  const {
    data: session,
    isPending: isSessionPending,
    refetch: refetchSession,
  } = authClient.useSession()
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
      setXp((prevXp) => Math.min(prevXp + 25, 500))
      setFeedback('Correct! You earned 25 XP.')
      setAnswer('')
    } else {
      setFeedback('Not quite right. Try again!')
    }
  }

  async function handleLogout() {
    await authClient.signOut()
    refetchSession()
  }

  if (isSessionPending) {
    return (
      <main className="login-page">
        <section className="login-panel">
          <p className="eyebrow">Loading</p>
          <h1>Checking your session.</h1>
        </section>
      </main>
    )
  }

  if (!session) {
    return <LoginScreen onAuthenticated={refetchSession} />
  }

  return (
    <main className="app-shell">
      <Sidebar />

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Today&apos;s path</p>
            <h1>Learn fundamentals, then ship real projects.</h1>
            <p className="welcome-message">Welcome back, {session.user.name}</p>
          </div>
          <div className="topbar-actions">
            <button className="primary-action" type="button">
              Continue lesson
            </button>
            <button className="secondary-action" onClick={handleLogout} type="button">
              Log out
            </button>
          </div>
        </header>

        <section className="language-strip" aria-label="Choose language">
          {languages.map((language) => (
            <LanguageCard
              key={language.name}
              language={language}
              isActive={language.name === selectedLanguage.name}
              onSelect={setSelectedLanguage}
            />
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
                <LessonCard key={lesson.title} lesson={lesson} index={index} />
              ))}
            </div>
          </section>

          <ChallengePanel
            answer={answer}
            feedback={feedback}
            onAnswerChange={setAnswer}
            onSubmit={submitChallenge}
          />
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
              <ProjectCard key={project} project={project} index={index} />
            ))}
          </div>
        </section>

        <ProgressBand completion={completion} xp={xp} />
      </section>
    </main>
  )
}

export default App
