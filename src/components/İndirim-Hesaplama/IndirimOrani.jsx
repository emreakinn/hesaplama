import React, { useState } from 'react'

function IndirimOrani({ normalFiyat, setNormalFiyat, indirimliFiyat, setIndirimliFiyat }) {

    const [sonuc, setSonuc] = useState('')
    const [IlkNormalFiyat, setIlkNormalFiyat] = useState('')
    const [IlkIndirimliFiyat, setIlkIndirimliFiyat] = useState('')
    const [IndirimTutari, setIndirimTutari] = useState('')

    const handleClick = () => {
        setSonuc((normalFiyat - indirimliFiyat) / normalFiyat * 100)
        setIlkNormalFiyat(normalFiyat)
        setIlkIndirimliFiyat(indirimliFiyat)
        setIndirimTutari(normalFiyat - indirimliFiyat)

        setNormalFiyat('')
        setIndirimliFiyat('')
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
                placeholder='İndirimli Fiyat'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={indirimliFiyat}
                onChange={(e) => setIndirimliFiyat(e.target.value)}
            />
            <button onClick={handleClick} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
            <div className='text-xl'>Normal Fiyat:{IlkNormalFiyat}  </div>
            <div className='text-xl'>İndirim Tutarı: {IlkIndirimliFiyat} </div>
            <div className='text-xl'>İndirimli Fiyat:{IndirimTutari}  </div>
            <div className='text-xl'>İndirimli Oranı: %{sonuc} </div>
        </div>
    )
}

export default IndirimOrani