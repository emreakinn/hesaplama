import React from 'react'

function Input({ tutar, setTutar }) {
    return (
        <input
            type="number"
            placeholder='KDV Dahil Tutar'
            className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
            value={tutar}
            onChange={(e) => setTutar(Number(e.target.value))}
        />
    )
}

export default Input