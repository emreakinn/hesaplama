import React, { useState } from 'react'
import Mil from './components/Mil-Km-Hesapla/Mil'
import Km from './components/Mil-Km-Hesapla/Km'

function MilKmHesapla() {

    const [selected, setSelected] = useState('')
    const [mil, setMil] = useState('')
    const [km, setKm] = useState('')

    return (
        <div className='w-full h-[90vh] flex justify-center items-center bg-blue-900 text-white'>
            <div className='w-6/12 h-4/6 bg-blue-800 border-2 border-blue-400 rounded-lg flex gap-5 flex-col items-center justify-center'>
                <h1 className='text-2xl'>Mil - Km Hesapla</h1>
                <select
                    className='bg-blue-900 p-2 rounded-lg'
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                >
                    <option value="">İşlemi Seçiniz</option>
                    <option value="Mil">Mili Kilometreye Çevir</option>
                    <option value="Km">Kilometreyi Mile Çevir</option>
                </select>
                {
                    selected === 'Mil' &&
                    <Mil
                        mil={mil}
                        setMil={setMil}
                    />
                }
                {
                    selected === 'Km' &&
                    <Km
                        km={km}
                        setKm={setKm}
                    />
                }
            </div>
        </div>
    )
}

export default MilKmHesapla