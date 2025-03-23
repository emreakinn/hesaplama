import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <div className='w-full h-[10vh] flex justify-center items-center border-b-2 border-blue-400 bg-blue-900 text-white'>
            <Link to='/' className='text-5xl'>HESAPLAMA</Link>
        </div>
    )
}

export default Navbar