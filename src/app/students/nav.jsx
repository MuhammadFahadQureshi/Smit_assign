import Link from 'next/link';
import React from 'react'

  const NavBar = () => {
  return (
    <div className='flex justify-center'>
        <ul className='flex gap-12 justify-center w-[500px] bg-gray-600 text-white p-6 rounded-full mt-7 font-bold'>
            <Link href="/students"><li>Home</li></Link>
            <Link href="/students/myCources"><li>My Cources</li></Link>
        </ul>
    </div>   
  )
}

export default NavBar;