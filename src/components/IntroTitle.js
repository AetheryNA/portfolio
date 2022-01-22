const IntroTitle = ({ title }) => {
  return (
    <div className="intro-title my-11 md:my-0 md:mt-20">
      <h2 
        className="relative mx-auto md:mx-0 md:max-w-max w-full text-center md:text-left flex flex-col md:flex-row"
      >
        <span className="relative pb-1 md:pb-0 font-bold md:font-medium">Hi!&nbsp;</span>
        <span className="mt-1 md:mt-0">{title}</span>
      </h2>
    </div>
  );
};

export default IntroTitle;
