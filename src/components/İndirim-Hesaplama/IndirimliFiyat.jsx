import React, { useState } from 'react'

function IndirimliFiyat({ normalFiyat, setNormalFiyat, indirimOrani, setIndirimOrani }) {

    const [sonuc, setSonuc] = useState('')
    const [indirimTutari, setIndirimTutari] = useState('')
    const [IlkFiyat, setIlkFiyat] = useState('')
    const [IlkIndirimOrani, setIlkIndirimOrani] = useState('')

    const handleClick = () => {
        if (!normalFiyat && !indirimOrani) {
            alert('Tüm Bilgileri Doldurun')
        } else {

            setSonuc(normalFiyat - (normalFiyat * indirimOrani / 100))
            setIndirimTutari(normalFiyat * indirimOrani / 100)
            setIlkIndirimOrani(indirimOrani)
            setIlkFiyat(normalFiyat)

            setNormalFiyat('')
            setIndirimOrani('')
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
                placeholder='İndirim Oranı'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={indirimOrani}
                onChange={(e) => setIndirimOrani(e.target.value)}
            />
            <button onClick={handleClick} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
            <div className='text-xl'>Normal Fiyat: {IlkFiyat} </div>
            <div className='text-xl'>İndirim Tutarı: {indirimTutari} </div>
            <div className='text-xl'>İndirimli Fiyat: {sonuc} </div>
            <div className='text-xl'>İndirim Oran: %{IlkIndirimOrani} </div>
        </div>
    )
}

export default IndirimliFiyat