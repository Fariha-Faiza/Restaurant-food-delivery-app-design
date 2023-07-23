import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user = false
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
      <div className='hidden md:flex gap-4'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className='text-xl'>
<Link href="/"> Massimo </Link>

      </div>
      <div className='md:hidden'>
        <Menu/>
      </div>
   <div className='hidden md:flex gap-4 items-center'>
    <div className='items-center flex gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
      <Image src="/phone.png" alt="" width={20} height={20}/>
      <span> 123 456 789 11</span>
    </div>
   {!user ?  (<Link href="/login">Login</Link>):

        (<Link href="/menu">Orders</Link>)
  }
        <CartIcon/>
  
      </div>
      </div>
  )
}

export default Navbar