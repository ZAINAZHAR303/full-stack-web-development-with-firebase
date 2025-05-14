"use client"

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        {/* <Link href="/">Home</Link> */}
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Navbar