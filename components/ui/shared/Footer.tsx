import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between
      flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
        <Image 
          src="assets/images/logo.svg" 
          alt="logo"
          width={128} 
          height={38}
          />
        </Link>

        <p>Tarninowe Wzgórze - 2023 © Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  )
}

export default Footer