import React, { useEffect, useState } from 'react'

function DovizHesapla() {

    const [dovizKurlari, setDovizKurlari] = useState({})

    const [para, setPara] = useState(null)
    const [fromCurrency, setFromCurrency] = useState('')
    const [toCurrency, setToCurrency] = useState('')

    const [sonuc, setSonuc] = useState('')

    useEffect(() => {
        fetch("https://v6.exchangerate-api.com/v6/22af3225fb42f9ed2979d9a3/latest/USD")
            .then((response) => response.json())
            .then((data) => {
                setDovizKurlari(data.conversion_rates)

            })
    }, [])

    const handleClick = () => {
        if (para && !isNaN(para) && Number(para) > 0 && fromCurrency && toCurrency) {
            if (fromCurrency === toCurrency) {
                alert('Aynı Para Birimleri Arasında Dönüşüm Olmaz')
                setSonuc('')
            } else {
                const exchangeRate = dovizKurlari[toCurrency] / dovizKurlari[fromCurrency];
                setSonuc((Number(para) * exchangeRate).toFixed(3));
            }
        } else {
            alert('Lütfen Bir Değer Girin')
        }
    }

    return (
        <div className='w-full h-[90vh] flex justify-center items-center bg-blue-900 text-white'>
            <div className='w-6/12 h-4/6 bg-blue-800 border-2 border-blue-400 rounded-lg flex gap-5 flex-col items-center justify-center'>
                <h1 className='text-2xl'>Döviz Hesapla</h1>
                <input
                    type="number"
                    placeholder='Miktar Gir'
                    className='w-3/12 py-5 border-2 border-blue-400 rounded-lg pl-2 text-lg text-center outline-none'
                    value={para}
                    onChange={(e) => setPara(e.target.value)}
                />
                <select
                    className='w-3/12 bg-blue-900 p-2 rounded-lg'
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                >
                    <option value="">Para Birimi</option>
                    <option value="USD">USD</option>
                    <option value="TRY">TRY</option>
                    <option value="EUR">EUR</option>
                </select>
                <select
                    className='w-3/12 bg-blue-900 p-2 rounded-lg'
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                >
                    <option value="">Çevrileceği Birim</option>
                    <option value="USD">USD</option>
                    <option value="TRY">TRY</option>
                    <option value="EUR">EUR</option>
                </select>
                <button onClick={handleClick} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
                <div className='text-xl'> Sonuç: {sonuc} </div>
            </div>
        </div>
    )
}

export default DovizHesapla