import React, { useState } from 'react'

function Mil({ mil, setMil }) {

    const [sonuc, setSonuc] = useState('')
    const [milDeger, setMilDeger] = useState('')

    const handleClick = () => {
        if (!mil) {
            alert('Lütfen Bilgileri Doldurun')
        } else {
            setMilDeger(mil)
            setSonuc(mil * 1.60934)
            setMil('')
        }
    }

    return (
        <div className='w-full flex flex-col items-center gap-3'>
            <input
                type="number"
                placeholder='Mil'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={mil}
                onChange={(e) => setMil(e.target.value)}
            />

            <button onClick={handleClick} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
            <div className='text-xl'>{milDeger} mil {sonuc} km'dir </div>
        </div>
    )
}

export default Mil