import Link from "next/link"

const header = () => {
  return (
    <header className="header fixed w-full top-0 z-10 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg">
      <div className="container">
        <Link href='/' passHref>
          <h1 className="max-w-max mx-auto md:mx-0 md:mr-auto"> Naveed </h1>
        </Link>
      </div>
    </header>
  )
}

export default header
