import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const [{email,social}]=contact;

  if (!email) return null

  return (
      <div className='section contact center'>
        <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
    <div style={{display:"flex", gap:"10px"}}>
    {social && (
          <>
            {social.github && (
              <a
                href={social.github} target='_blank' rel="noreferrer"
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin} target='_blank' rel="noreferrer"
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
    </div>
      </div>
      

  
    
    
  )
}

export default Contact
