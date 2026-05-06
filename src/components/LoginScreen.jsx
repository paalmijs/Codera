import { useState } from 'react'
import { authClient } from '../lib/auth-client'

function LoginScreen({ onAuthenticated }) {
  const [mode, setMode] = useState('sign-in')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isSignUp = mode === 'sign-up'

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    const cleanEmail = email.trim()
    const cleanName = name.trim()

    if (!cleanEmail || !password) {
      setError('Email and password are required.')
      setIsSubmitting(false)
      return
    }

    if (isSignUp && !cleanName) {
      setError('Name is required when creating an account.')
      setIsSubmitting(false)
      return
    }

    const response = isSignUp
      ? await authClient.signUp.email({
          name: cleanName,
          email: cleanEmail,
          password,
        })
      : await authClient.signIn.email({
          email: cleanEmail,
          password,
        })

    setIsSubmitting(false)

    if (response.error) {
      setError(response.error.message || 'Authentication failed.')
      return
    }

    await onAuthenticated()
    window.location.reload()
  }

  return (
    <main className="login-page">
      <section className="login-panel">
        <div className="login-brand">
          <span className="brand-mark">C</span>
          <div>
            <strong>Codera</strong>
            <span>Learn code by building projects</span>
          </div>
        </div>

        <div>
          <p className="eyebrow">{isSignUp ? 'Create account' : 'Welcome back'}</p>
          <h1>{isSignUp ? 'Start your coding path.' : 'Continue your path.'}</h1>
          <p className="login-copy">
            Codera now uses Better Auth with email and password sessions backed by
            MongoDB.
          </p>
        </div>

        <div className="auth-tabs" aria-label="Authentication mode">
          <button
            className={!isSignUp ? 'active' : ''}
            onClick={() => setMode('sign-in')}
            type="button"
          >
            Sign in
          </button>
          <button
            className={isSignUp ? 'active' : ''}
            onClick={() => setMode('sign-up')}
            type="button"
          >
            Sign up
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <label>
              Name
              <input
                onChange={(event) => setName(event.target.value)}
                placeholder="Deivids"
                value={name}
              />
            </label>
          )}

          <label>
            Email
            <input
              autoComplete="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              type="email"
              value={email}
            />
          </label>

          <label>
            Password
            <input
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
              minLength={8}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="At least 8 characters"
              type="password"
              value={password}
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <button className="primary-action wide" disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Working...' : isSignUp ? 'Create account' : 'Sign in'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default LoginScreen
