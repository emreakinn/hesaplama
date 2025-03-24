import React from 'react'

function SinavNotlari({ sinav1, setSinav1, sinav2, setSinav2, sinav3, setSinav3, sinav4, setSinav4 }) {
    return (
        <div className='w-full flex justify-center gap-5'>
            <input
                type="number"
                placeholder='1. Sınav Notu'
                className='w-2/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={sinav1}
                onChange={(e) => setSinav1(e.target.value)}
            />
            <input
                type="number"
                placeholder='1. Sınav Notu'
                className='w-2/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={sinav2}
                onChange={(e) => setSinav2(e.target.value)}
            />
            <input
                type="number"
                placeholder='1. Sınav Notu'
                className='w-2/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={sinav3}
                onChange={(e) => setSinav3(e.target.value)}
            />
            <input
                type="number"
                placeholder='1. Sınav Notu'
                className='w-2/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={sinav4}
                onChange={(e) => setSinav4(e.target.value)}
            />
        </div>
    )
}

export default SinavNotlari