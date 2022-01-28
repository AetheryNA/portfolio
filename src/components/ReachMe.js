import LinkedIn from '../../public/icons/linkedin.svg'
import Github from '../../public/icons/github.svg'
import {MailIcon} from '@heroicons/react/solid'

const ReachMe = () => {
  return (
    <footer className="reach-me hidden md:block">
      <div className="container">
        <div className="reach-me__wrapper flex flex-row max-w-max ml-auto">
          <h3 className="mr-16"> Reach out to me </h3>
          <a href="mailto:mrnaaw98@gmail.com" target="_blank" rel="noreferrer">
            <MailIcon />
          </a>
          <a href="https://www.linkedin.com/in/naveed-ahamed/" target="_blank" rel="noreferrer">
            <LinkedIn />
          </a>
          <a href="https://github.com/AetheryNA" target="_blank" rel="noreferrer">
            <Github /> 
          </a>
        </div>
      </div>
    </footer>
  )
}

export default ReachMe
