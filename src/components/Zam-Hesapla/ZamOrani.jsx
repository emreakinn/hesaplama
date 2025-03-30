import React, { useState } from 'react'

function ZamOrani({ normalFiyat, setNormalFiyat, zamliFiyat, setZamliFiyat }) {

    const [sonuc, setSonuc] = useState('')
    const [ZamTutari, setZamTutari] = useState('')
    const [IlkFiyat, setIlkFiyat] = useState('')
    const [IlkZamOrani, setIlkZamOrani] = useState('')

    const handleClick = () => {
        if (!normalFiyat && !zamliFiyat) {
            alert('Lütfen Bilgileri Doldurun')
        } else {
            setSonuc(((zamliFiyat - normalFiyat) / normalFiyat) * 100)
            setZamTutari(zamliFiyat - normalFiyat)
            setIlkZamOrani(zamliFiyat)
            setIlkFiyat(normalFiyat)

            setNormalFiyat('')
            setZamliFiyat('')
        }
    }

    return (
        <div className='w-full flex flex-col items-center gap-3'>
            <input
                type="number"
                placeholder='Normal Fiyat'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={normalFiyat}
                onChange={(e) => setNormalFiyat(e.target.value)}
            />
            <input
                type="number"
                placeholder='Zamlı Fiyat'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={zamliFiyat}
                onChange={(e) => setZamliFiyat(e.target.value)}
            />
            <button onClick={handleClick} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
            <div className='text-xl'>Normal Fiyat: {IlkFiyat} </div>
            <div className='text-xl'>Zam Tutarı: {ZamTutari} </div>
            <div className='text-xl'>Zamlı Fiyat: {IlkZamOrani} </div>
            <div className='text-xl'>Zam Oran: %{sonuc} </div>
        </div>)
}

export default ZamOrani