import Rocket from '../../public/icons/rocket.svg'
import useWindowHeight from '../hooks/useWindowHeight';

const BackToTop = () => {
  const detectHeight = useWindowHeight()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div 
      className={`back-to-top fixed right-10 bottom-10 w-12 h-12 text-white bg-black-100 rounded-full p-1.5 cursor-pointer ${detectHeight >= 500 ? 'back-to-top--show' : 'back-to-top--not-shown'}`}
      onClick={scrollToTop}  
    >
      <Rocket />
    </div>
  );
};

export default BackToTop;
