import React, { useState } from 'react'
import KarOrani from './components/Kar-hesapla/KarOrani'
import SatisHesapla from './components/Kar-hesapla/SatisHesapla'

function KarHesapla() {

    const [selected, setSelected] = useState('')
    const [AlisFiyati, setAlisFiyati] = useState('')
    const [SatisFiyati, setSatisFiyati] = useState('')
    const [KarOran, setKarOran] = useState('')

    return (
        <div className='w-full h-[90vh] flex justify-center items-center bg-blue-900 text-white'>
            <div className='w-6/12 h-4/6 bg-blue-800 border-2 border-blue-400 rounded-lg flex gap-5 flex-col items-center justify-center'>
                <h1 className='text-2xl'>KDV Hesapla</h1>

                <select
                    className='bg-blue-900 p-2 rounded-lg'
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                >
                    <option value="">İşlemi Seçiniz</option>
                    <option value="KarOrani">Kar Oranı Hesaplama</option>
                    <option value="SatisHesapla">Satış Fiyatı Hesaplama</option>
                </select>
                {
                    selected === 'KarOrani' &&
                    <KarOrani
                        AlisFiyati={AlisFiyati}
                        setAlisFiyati={setAlisFiyati}
                        SatisFiyati={SatisFiyati}
                        setSatisFiyati={setSatisFiyati}
                    />
                }
                {
                    selected === 'SatisHesapla' &&
                    <SatisHesapla
                        AlisFiyati={AlisFiyati}
                        setAlisFiyati={setAlisFiyati}
                        KarOran={KarOran}
                        setKarOran={setKarOran}
                    />
                }
            </div>
        </div>
    )
}

export default KarHesapla