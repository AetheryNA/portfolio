import Rocket from '../../public/icons/rocket.svg'
import useWindowHeight from '../hooks/useWindowHeight';
import { useEffect, useState } from 'react';

const BackToTop = () => {
  const detectHeight = useWindowHeight()
  const [enableIf, setEnableIf] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const addClassOnHeight = () => {
    const backToTopElement = document.querySelector('.back-to-top')

    if (detectHeight >= 500) {
      setEnableIf(true)
    }

    if (enableIf == true) {
      if (detectHeight >= 500) {
        backToTopElement.classList.add('back-to-top--show')
        backToTopElement.classList.remove('back-to-top--not-shown')
      }
      else {
        backToTopElement.classList.add('back-to-top--not-shown')
        backToTopElement.classList.remove('back-to-top--show')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', addClassOnHeight)

    return () => window.removeEventListener('scroll', addClassOnHeight)
  }, [addClassOnHeight])

  return (
    <div 
      className="back-to-top fixed right-5 bottom-5 md:right-10 md:bottom-10 w-12 h-12 text-white bg-black-100 rounded-full p-1.5 cursor-pointer opacity-0"
      onClick={scrollToTop}  
    >
      <Rocket />
    </div>
  );
};

export default BackToTop;
