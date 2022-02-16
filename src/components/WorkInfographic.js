import PortfolioItem from './PortfolioItem'

const WorkInfographic = () => {
  const work_info = [
    {
      position: 'right',
      title: 'MyPower.Lk',
      date: '2020-2021',
      desc: 'An e-commerce website built on NextJS and ExpressJS. It was a locally funded site built for the Sri Lankan E-Commerce sector and was headed by MyPower.Lk',
      image: 'http://picsum.photos/2000',
      link: 'http://google.com',
      achievements: [
        {
          item: 'Lead Front end development of the project'
        },
        {
          item: 'Consulted on the application design and architecture'
        },
        {
          item: 'Built the UI of the site and Front end functionality'
        },
        {
          item: 'Enforced code quality and implemented a code review process'
        },
      ]
    },
    {
      position: 'left',
      title: 'MyPower.Lk',
      date: '2020-2021',
      desc: 'An e-commerce website built on NextJS and ExpressJS. It was a locally funded site built for the Sri Lankan E-Commerce sector and was headed by MyPower.Lk',
      image: 'http://picsum.photos/2000',
      link: 'http://google.com',
      achievements: [
        {
          item: 'Lead Front end development of the project'
        },
        {
          item: 'Consulted on the application design and architecture'
        },
        {
          item: 'Built the UI of the site and Front end functionality'
        },
        {
          item: 'Enforced code quality and implemented a code review process'
        },
      ]
    },
  ]

  return (
    <section className="work-infographic">
      <div className="container">
        <h2 className="work-infographic__title font-semibold mb-16 md:mb-20 relative max-w-max">Stuff I&apos;ve Built</h2>
        {work_info.map((work_item, index) => (
          <PortfolioItem work_details={work_item} key={index} />
        ))}
      </div>
    </section>
  )
}

export default WorkInfographic
