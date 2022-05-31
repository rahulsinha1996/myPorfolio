import { aboutme } from '../../portfolio'
import './AboutMe.css'

const AboutMe = () => {
  const [{description}] = aboutme

  return (
    <div id='aboutme'>
      <br/>
      <br/>
    <h2 className='section__title'>About Me</h2>
    <div className='aboutMain' >
    <div className='imageDiv'>
        <img className='myImage' src='https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/src/components/About/rahul_image.JPG' alt='rahul'/>
      </div>
      <div className='about center'>
      <p className='about__des'>{description && description}</p>
      
    </div>
    
    </div>
    </div>
    
  )
}

export default AboutMe
