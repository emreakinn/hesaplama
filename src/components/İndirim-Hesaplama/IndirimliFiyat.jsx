import React from 'react'

function IndirimliFiyat() {
    return (
        <div className='w-full flex flex-col items-center gap-3'>
            <input
                type="number"
                placeholder='Normal Fiyat'
                className='w-3/12 py-2 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
            />
            <input
                type="number"
                placeholder='İndirim Oranı'
                className='w-3/12 py-2 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
            />
        </div>
    )
}

export default IndirimliFiyat