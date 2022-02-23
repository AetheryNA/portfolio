import PortfolioItem from './PortfolioItem'

const WorkInfographic = () => {
  const work_info = [
    {
      completed: true,
      href: 'care',
      theme: 'orange',
      position: 'right',
      title: 'Care',
      date: 'JAN-MAR',
      desc: 'CARE is a major international humanitarian agency delivering emergency relief and long-term international development projects.',
      image: '/images/care.png',
      link: 'https://www.care.org/',
      achievements: [
        {
          item: 'My first professionally built site'
        },
        {
          item: 'Had the lead role for front-end and back-end of the site'
        },
        {
          item: 'Communicated with the clients and managed the project independantly'
        },
      ]
    },
    {
      completed: true,
      href:'wbr',
      theme: 'red',
      position: 'left',
      title: 'World Bicycle Relief',
      date: 'OCT-NOV',
      desc: 'World Bicycle Relief is a major international humanitarian agency delivering emergency relief and long-term international development projects.',
      image: '/images/wbr.png',
      link: 'https://worldbicyclerelief.org/',
      achievements: [
        {
          item: 'Worked as a full time developer under the guidance of the tech lead'
        },
      ]
    },
    {
      completed: false,
      href:'mypower',
      theme: 'purple',
      position: 'right',
      title: 'MyPower.Lk',
      date: 'SEPT-FEB',
      desc: 'An e-commerce website built on NextJS and ExpressJS. It was a locally funded site built for the Sri Lankan E-Commerce sector and was headed by MyPower.Lk',
      image: '/images/mypower.png',
      link: '/',
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
      completed: true,
      href:'youlead',
      theme: 'orange',
      position: 'left',
      title: 'Youlead',
      date: 'FEB-APR',
      desc: 'A career guidance and vocational education consultancy agency in Sri Lanka supported by foreign aid.',
      image: '/images/youlead.png',
      link: 'https://www.youlead.lk/',
      achievements: [
        {
          item: 'Worked on the Front-end alongside another developer'
        },
        {
          item: 'Was reached out to to help build the site'
        },
      ]
    },
    {
      completed: true,
      href:'dxdy',
      theme: 'black',
      position: 'right',
      title: 'DxDy',
      date: 'SEPT-DEC',
      desc: 'DxDy Digital is a company that deliver software solutions. This is also the previous company I worked at',
      image: '/images/dxdy.png',
      link: 'http://dxdy.tech/',
      achievements: [
        {
          item: 'First solo project as an Intern'
        },
        {
          item: 'Worked on the Front end and Back end with little guidance'
        },
        {
          item: 'Managed the workflow of the site'
        },
      ]
    },
  ]

  return (
    <section className="work-infographic">
      <div className="container">
        <h2 className="work-infographic__title font-semibold -mb-8 md:-mb-14 relative max-w-max">Stuff I&apos;ve Built</h2>
        {work_info.map((work_item, index) => (
          <PortfolioItem work_details={work_item} key={index} />
        ))}
      </div>
    </section>
  )
}

export default WorkInfographic
