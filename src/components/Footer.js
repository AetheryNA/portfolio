import LinkedIn from '../../public/icons/linkedin.svg'
import Github from '../../public/icons/github.svg'
import {MailIcon} from '@heroicons/react/solid'

const Footer = () => {
  return (
    <footer className="footer pt-9 pb-6">
      <div className="container">
        <div className="footer__wrap relative flex flex-col justify-center items-center">
          <div className="footer__svg-block flex flex-row absolute justify-between items-center w-full">
            <a href='mailto:mrnaaw98@gmail.com' className="footer__svg footer__svg--mail w-9 h-9 bg-primary rounded-full flex justify-center items-center">
              <MailIcon />
            </a>
            <a href='https://www.linkedin.com/in/naveed-ahamed/' className="footer__svg footer__svg--linked-in w-9 h-9 bg-primary rounded-full justify-center items-center">
              <LinkedIn />
            </a>
            <a href='https://github.com/AetheryNA' className="footer__svg footer__svg--github w-9 h-9 bg-primary rounded-full justify-center items-center">
              <Github />
            </a>
          </div>
          <p className="text-grey text-sm">&copy; 2022 Naveed Ahamed</p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
