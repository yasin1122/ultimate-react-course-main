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
    <div>
      <img
        className='avatar'
        src='src/assets/Resume Photo.jpg'
        alt='resume-photo'
      />
    </div>
  )
}

function Intro() {
  return (
    <div>
      <h2>Yasin Cakal</h2>
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

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill
        name='HTML+CSS'
        emoji='👍'
      />
      <Skill
        name='JavaScript'
        emoji='💪'
      />
      <Skill
        name='React'
        emoji='👶'
      />
    </div>
  )
}

function Skill(props) {
  return (
    <div className='skill'>
      <p>{props.name}</p>
      <span>{props.emoji}</span>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
