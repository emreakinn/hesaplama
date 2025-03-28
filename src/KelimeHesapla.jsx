import React, { useState } from 'react'

function KelimeHesapla() {

    const [metin, setMetin] = useState('')
    const [sonuc, setSonuc] = useState('')

    const handleClick = () => {
        const kelimeler = metin.trim().split(/\s+/);
        const kelimeSayisi = kelimeler.filter(kelime => kelime !== '').length;
        setSonuc(kelimeSayisi);
        setMetin('');
    }

    return (
        <div className='w-full h-[90vh] flex justify-center items-center bg-blue-900 text-white'>
            <div className='w-6/12 h-4/6 bg-blue-800 border-2 border-blue-400 rounded-lg flex gap-5 flex-col items-center justify-center'>
                <h1 className='text-2xl'>Kelime Hesapla</h1>
                <textarea
                    className='bg-blue-900 p-2 rounded-lg w-10/12 max-h-3/6 min-h-3/6'
                    placeholder='Kelime Hesapla...'
                    value={metin}
                    onChange={(e) => setMetin(e.target.value)}
                ></textarea>
                <button onClick={handleClick} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
                <div className='text-xl'> Kelime Sayısı: {sonuc} </div>
            </div>
        </div>
    )
}

export default KelimeHesapla