import pythonIcon from './assets/python.png'
import javascriptIcon from './assets/javascript.png'
import htmlCssIcon from './assets/html.png'

export const languages = [
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

export const lessons = [
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

export const projects = [
  'Command line quiz game',
  'Personal budget calculator',
  'Habit tracker app',
]
