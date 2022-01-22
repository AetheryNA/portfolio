import Link from "next/link"

const header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href='/' passHref>
          <h1 className="max-w-max mx-auto md:mx-0 md:mr-auto"> Naveed </h1>
        </Link>
      </div>
    </header>
  )
}

export default header
