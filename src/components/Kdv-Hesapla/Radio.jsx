import React from 'react'

function Radio({ radio, setRadio }) {
    return (
        <div className='flex gap-5'>
            <input type="radio" value={1} onChange={(e) => setRadio(Number(e.target.value))} checked={radio === 1} /> %1
            <input type="radio" value={8} onChange={(e) => setRadio(Number(e.target.value))} checked={radio === 8} /> %8
            <input type="radio" value={10} onChange={(e) => setRadio(Number(e.target.value))} checked={radio === 10} /> %10
            <input type="radio" value={18} onChange={(e) => setRadio(Number(e.target.value))} checked={radio === 18} /> %18
            <input type="radio" value={20} onChange={(e) => setRadio(Number(e.target.value))} checked={radio === 20} /> %20
        </div>
    )
}

export default Radio