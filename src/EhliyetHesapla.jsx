import React, { useState } from 'react'

function EhliyetHesapla() {

    const [dogruSayi, setDogruSayi] = useState('')
    const [sonuc, setSonuc] = useState('')
    const [puan, setPuan] = useState(null)

    const handleHesapla = () => {
        const dogruSayiNumber = parseFloat(dogruSayi)
        if (dogruSayiNumber > 0 && dogruSayiNumber <= 50) {
            setPuan(dogruSayiNumber * 2)
            if (dogruSayiNumber * 2 >= 70) {
                setSonuc('Ehliyet alabilirsiniz')
            } else {
                setSonuc('Ehliyet alamazsınız')
            }
        } else {
            setSonuc('Lütfen 0-50 arasında değer girin')
        }
        setDogruSayi('')
    }


    return (
        <div className='w-full h-[90vh] flex justify-center items-center bg-blue-900 text-white'>
            <div className='w-6/12 h-4/6 bg-blue-800 border-2 border-blue-400 rounded-lg flex gap-5 flex-col items-center justify-center'>
                <h1 className='text-2xl'>Ehliyet</h1>
                <input
                    type="number"
                    placeholder='0-50'
                    className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-xl text-center outline-none'
                    value={dogruSayi}
                    onChange={(e) => setDogruSayi(e.target.value)}
                />
                <button onClick={handleHesapla} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
                <div className='text-xl'>Puanınız: {puan}</div>
                <div className='text-xl'>Sonuç: {sonuc}</div>
            </div>
        </div>
    )
}

export default EhliyetHesapla