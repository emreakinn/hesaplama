import React, { useState } from 'react'

function KarOrani({ AlisFiyati, setAlisFiyati, SatisFiyati, setSatisFiyati }) {

    const [brutKar, setBrutKar] = useState('')
    const [Alis, setAlis] = useState('')
    const [Satis, setSatis] = useState('')
    const [sonuc, setSonuc] = useState('')

    const handleClick = () => {
        if (!AlisFiyati || !SatisFiyati) {
            alert('Lütfen geçerli bir değer girin');
            return;
        }

        setAlis(AlisFiyati)
        setSatis(SatisFiyati)
        setBrutKar(SatisFiyati - AlisFiyati)
        setSonuc(((SatisFiyati - AlisFiyati) / AlisFiyati * 100).toFixed(2))

        setAlisFiyati('')
        setSatisFiyati('')
    }

    return (
        <div className='w-full flex flex-col items-center gap-3'>
            <input
                type="number"
                placeholder='Alış Fiyatı'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={AlisFiyati}
                onChange={(e) => setAlisFiyati(e.target.value)}
            />
            <input
                type="number"
                placeholder='Satış Fiyatı'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={SatisFiyati}
                onChange={(e) => setSatisFiyati(e.target.value)}
            />
            <button onClick={handleClick} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
            <div className='text-xl'>Alış Fiyat: {Alis} </div>
            <div className='text-xl'>Satış Tutarı: {Satis} </div>
            <div className='text-xl'>Brüt Kar: {brutKar} </div>
            <div className='text-xl'>Kar Oran: %{sonuc} </div>
        </div>
    )
}

export default KarOrani