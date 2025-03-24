import React from 'react'

function ProjeNotlari({ proje1, setProje1, proje2, setProje2 }) {
    return (
        <div className='w-full flex justify-center gap-5'>
            <input
                type="number"
                placeholder='1. Sınav Notu'
                className='w-2/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={proje1}
                onChange={(e) => setProje1(e.target.value)}
            />
            <input
                type="number"
                placeholder='1. Sınav Notu'
                className='w-2/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={proje2}
                onChange={(e) => setProje2(e.target.value)}
            />
        </div>
    )
}

export default ProjeNotlari