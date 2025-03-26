import React, { useState } from 'react'
import ZamliFiyat from './components/Zam-Hesapla/ZamliFiyat'
import ZamOrani from './components/Zam-Hesapla/ZamOrani'

function ZamHesapla() {

    const [selected, setSelected] = useState('')

    const [zamliFiyat, setZamliFiyat] = useState('')
    const [normalFiyat, setNormalFiyat] = useState('')
    const [zamOrani, setZamOrani] = useState('')

    return (
        <div className='w-full h-[90vh] flex justify-center items-center bg-blue-900 text-white'>
            <div className='w-6/12 h-4/6 bg-blue-800 border-2 border-blue-400 rounded-lg flex gap-5 flex-col items-center justify-center'>
                <h1 className='text-2xl'>Zam Hesapla</h1>
                <select
                    className='bg-blue-900 p-2 rounded-lg'
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                >
                    <option value="">İşlemi Seçiniz</option>
                    <option value="ZamliFiyatHesapla">Zamlı Fiyat Hesaplama</option>
                    <option value="ZamOraniHesapla">Zam Oranı Hesaplama</option>
                </select>
                {
                    selected === 'ZamliFiyatHesapla' &&
                    <ZamliFiyat
                        normalFiyat={normalFiyat}
                        setNormalFiyat={setNormalFiyat}
                        zamOrani={zamOrani}
                        setZamOrani={setZamOrani}
                    />
                }
                {
                    selected === 'ZamOraniHesapla' &&
                    <ZamOrani
                        normalFiyat={normalFiyat}
                        setNormalFiyat={setNormalFiyat}
                        zamliFiyat={zamliFiyat}
                        setZamliFiyat={setZamliFiyat}
                    />
                }
            </div>
        </div>
    )
}

export default ZamHesapla