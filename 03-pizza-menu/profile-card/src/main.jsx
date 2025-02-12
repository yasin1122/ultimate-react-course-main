import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <img
      className='avatar'
      src='src/assets/Resume Photo.jpg'
      alt='resume-photo'
    />
  )
}

function Intro() {
  return (
    <div>
      <h1>Yasin Cakal</h1>
      <p>
        Highly motivated Full Stack Developer with strong technical expertise
        and a passion for programming. Published author of 15 beginner-friendly
        programming books and creator of free programming courses on
        codeofcode.org. Constantly seeking new challenges to grow and contribute
        effectively.
      </p>
    </div>
  )
}

const skills = [
  {
    name: 'HTML+CSS',
    level: 'intermediate',
    color: 'orangered'
  },
  {
    name: 'JavaScript',
    level: 'advanced',
    color: 'yellow'
  },
  {
    name: 'Node.JS',
    level: 'intermediate',
    color: 'green'
  },
  {
    name: 'React',
    level: 'beginner',
    color: 'blue'
  }
]

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map(skill => (
        <Skill
          skillObj={skill}
          key={skill.name}
        />
      ))}
    </div>
  )
}

function Skill({ skillObj: { name, level, color } }) {
  let emoji = '?'
  if (level === 'beginner') emoji = '👶'
  else if (level === 'intermediate') emoji = '👍'
  else if (level === 'advanced') emoji = '💪'

  return (
    <div
      className='skill'
      style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>{emoji}</span>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
