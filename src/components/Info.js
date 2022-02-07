import { useInView } from 'react-intersection-observer';

const Info = () => {
  const {ref, inView} = useInView({
    threshold: .7,
  })

  return (
    <section ref={ref} className="info h-screen flex justify-center items-center">
      <div className="container flex flex-col items-center">
        <div className={`info__wrap flex flex-col relative ${inView ? 'show-line' : 'hide-line'}`}>
          <h3 className="text-xl md:text-3xl">Like my profile?</h3>
          <h3 className="text-xl md:text-3xl">Let's work together!</h3>
        </div>
      </div>
    </section>
  );
};

export default Info;
