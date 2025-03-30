import React, { useState } from 'react'

function ZamliFiyat({ normalFiyat, setNormalFiyat, zamOrani, setZamOrani }) {

    const [sonuc, setSonuc] = useState('')
    const [ZamTutari, setZamTutari] = useState('')
    const [IlkFiyat, setIlkFiyat] = useState('')
    const [IlkZamOrani, setIlkZamOrani] = useState('')

    const handleClick = () => {
        if (!normalFiyat && !zamOrani) {
            alert('Lütfen Bilgileri Doldurun')
        } else {
            const norFiyat = Number(normalFiyat)
            setSonuc(norFiyat + (normalFiyat * zamOrani / 100))
            setZamTutari(normalFiyat * zamOrani / 100)
            setIlkZamOrani(zamOrani)
            setIlkFiyat(normalFiyat)

            setNormalFiyat('')
            setZamOrani('')
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
                placeholder='Zam Oranı'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={zamOrani}
                onChange={(e) => setZamOrani(e.target.value)}
            />
            <button onClick={handleClick} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
            <div className='text-xl'>Normal Fiyat: {IlkFiyat} </div>
            <div className='text-xl'>Zam Tutarı: {ZamTutari} </div>
            <div className='text-xl'>Zamlı Fiyat: {sonuc} </div>
            <div className='text-xl'>Zam Oran: % {IlkZamOrani} </div>
        </div>
    )
}

export default ZamliFiyat