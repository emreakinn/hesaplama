import React, { useState } from 'react'

function Km({ km, setKm }) {
    const [sonuc, setSonuc] = useState('')
    const [kmDeger, setKmDeger] = useState('')

    const handleClick = () => {
        if (!km) {
            alert('Lütfen Bilgileri Doldurun')
        } else {
            setKmDeger(km)
            setSonuc((km / 1.60934).toFixed(2))
            setKm('')
        }
    }

    return (
        <div className='w-full flex flex-col items-center gap-3'>
            <input
                type="number"
                placeholder='Km'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={km}
                onChange={(e) => setKm(e.target.value)}
            />

            <button onClick={handleClick} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
            <div className='text-xl'>{kmDeger} km {sonuc} mil'dir </div>
        </div>
    )
}

export default Km