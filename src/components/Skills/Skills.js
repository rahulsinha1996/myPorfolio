import { useContext } from 'react'
import uniqid from 'uniqid'
import { ThemeContext } from '../../contexts/theme'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {  
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {themeName === 'dark' ? skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <img className="skillIcons" src={skill[1]} alt={uniqid()}/>
            <h5><center>{skill[2]}</center></h5>
          </li>
        )) : skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            <img className="skillIcons" src={skill[0]} alt={uniqid()}/>
            <h5><center>{skill[2]}</center></h5>
          </li>
        ))}
        
      </ul>
    </section>
  )
}

export default Skills
