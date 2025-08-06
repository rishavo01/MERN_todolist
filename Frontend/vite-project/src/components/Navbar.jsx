import React from 'react'
import { Link } from 'react-router'
import { PlusIcon } from "lucide-react"; 

const Navbar = () => {
  return <header className='bg-base-300 border-b border-base-content/10'>
    <div className='mx-auto max-w-6xl px-4'>
        <div className='flex items-center jsutify-between'></div>
      <h1 className='text-3xl font-bold text-primary font-mono tracking-tighter'>
        thinkboard
      </h1>
      <div className='flex items-center gap-4'></div>
      <Link to="/create" className="bnt btn-primary flex items-center gap-2">
           <PlusIcon className='size-5'></PlusIcon>
           <span>New Note</span>
     </Link>
    </div>
  
  </header>
}

export default Navbar
