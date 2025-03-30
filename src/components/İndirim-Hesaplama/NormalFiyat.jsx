import React, { useState } from 'react'

function NormalFiyat({ indirimliFiyat, setIndirimliFiyat, indirimOrani, setIndirimOrani }) {

    const [sonuc, setSonuc] = useState('')
    const [indirimTutari, setIndirimTutari] = useState('')
    const [IlkIndırımliFiyat, setIlkIndirimliFiyat] = useState('')
    const [IlkIndirimOrani, setIlkIndirimOrani] = useState('')

    const handleClick = () => {
        if (!indirimliFiyat && !indirimOrani) {
            alert('Tüm Bilgileri Doldurun')
        } else {
            const normalFiyat = indirimliFiyat / (1 - indirimOrani / 100)
            setSonuc((normalFiyat).toFixed(2))
            setIndirimTutari((indirimliFiyat - normalFiyat).toFixed(2))
            setIlkIndirimliFiyat(indirimliFiyat)
            setIlkIndirimOrani(indirimOrani)

            setIndirimliFiyat('')
            setIndirimOrani('')
        }
    }

    return (
        <div className='w-full flex flex-col items-center gap-3'>
            <input
                type="number"
                placeholder='İndirimli Fiyat'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={indirimliFiyat}
                onChange={(e) => setIndirimliFiyat(e.target.value)}
            />
            <input
                type="number"
                placeholder='İndirim Oranı'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={indirimOrani}
                onChange={(e) => setIndirimOrani(e.target.value)}
            />
            <button onClick={handleClick} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
            <div className='text-xl'>Normal Fiyat: {sonuc} </div>
            <div className='text-xl'>İndirim Tutarı: {indirimTutari} </div>
            <div className='text-xl'>İndirimli Fiyat: {IlkIndırımliFiyat} </div>
            <div className='text-xl'>İndirim Oranı: %{IlkIndirimOrani} </div>

        </div>
    )
}

export default NormalFiyat