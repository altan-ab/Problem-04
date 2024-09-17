import Image from 'next/image'
import { useState } from 'react'

// login'i ve dashboard + signout'u isAuthUser'a koşullu olarak görüntülemek için <></> fragment'ı kullanın

export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false)

  return (
    <header className="navbar-wrapper">
      <nav className="navbar flex justify-center items-center flex-col">
        <Logo />
        <div className="navbar-links mt-4">
          {isAuthUser ? (
            <>
              <a
                href="#"
                className="navbar-link block bg-purple text-white py-2 px-4 rounded-lg mb-2 text-center"
              >
                Dashboard
              </a>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a
                href="#"
                className="navbar-link block bg-purple text-white py-2 px-4 rounded-lg text-center"
                onClick={() => setIsAuthUser(false)}
              >
                Sign out
              </a>
            </>
          ) : (
            <>
              <h1 className="mb-8 text-black">Hesabınıza Giriş Yapın</h1>
              <a
                href="#"
                className="navbar-link block bg-purple text-white py-2 px-4 rounded-lg text-center"
                onClick={() => setIsAuthUser(true)}
              >
                Login
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

function Logo() {
  return (
    <div className="flex lg:flex-1 mt-10 mb-3">
      <a href="#" className="-m-1.5 p-1.5">
        <Image
          className="h-8 w-auto"
          src="/mark.svg"
          alt="Tailwind Logo"
          width={500}
          height={500}
        />
      </a>
    </div>
  )
}
