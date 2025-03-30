import React, { useState } from 'react'

function SatisHesapla({ AlisFiyati, setAlisFiyati, KarOran, setKarOran }) {

    const [BrutKar, setBrutKar] = useState('')
    const [Alis, setAlis] = useState('')
    const [Oran, setOran] = useState('')
    const [sonuc, setSonuc] = useState('')

    const handleClick = () => {
        if (!AlisFiyati || !KarOran) {
            alert('Lütfen geçerli bir değer girin');
            return;
        }

        setAlis(AlisFiyati)
        setOran(KarOran)
        setBrutKar((AlisFiyati * KarOran) / 100)
        setSonuc(AlisFiyati + (AlisFiyati * KarOran) / 100)

        setAlisFiyati('');
        setKarOran('');
    }

    return (
        <div className='w-full flex flex-col items-center gap-3'>
            <input
                type="number"
                placeholder='Alış Fiyatı'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={AlisFiyati}
                onChange={(e) => setAlisFiyati(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder='Kar Oranı'
                className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                value={KarOran}
                onChange={(e) => setKarOran(Number(e.target.value))}
            />
            <button onClick={handleClick} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
            <div className='text-xl'>Alış Fiyat: {Alis} </div>
            <div className='text-xl'>Sarış Oranı: {sonuc} </div>
            <div className='text-xl'>Brüt Kar: {BrutKar} </div>
            <div className='text-xl'>Kar Oran: %{Oran} </div>
        </div>
    )
}

export default SatisHesapla