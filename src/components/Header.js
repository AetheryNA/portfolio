import Link from "next/link"

const header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href='/' passHref>
          <h1> Naveed </h1>
        </Link>
      </div>
    </header>
  )
}

export default header
