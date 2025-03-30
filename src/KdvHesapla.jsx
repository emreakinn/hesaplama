import React, { useState } from 'react'
import Input from './components/Kdv-Hesapla/Input'
import Radio from './components/Kdv-Hesapla/Radio'

function KdvHesapla() {

    const [tutar, setTutar] = useState('')
    const [radio, setRadio] = useState('')
    const [sonuc, setSonuc] = useState('')
    const [kdv, setKdv] = useState('')
    const [kdvDahil, setKdvDahil] = useState('')


    const handleClick = () => {
        setSonuc((tutar - (tutar / radio)).toFixed(2))
        setKdv((tutar / radio).toFixed(2))
        setKdvDahil(tutar)
    }

    return (
        <div className='w-full h-[90vh] flex justify-center items-center bg-blue-900 text-white'>
            <div className='w-6/12 h-4/6 bg-blue-800 border-2 border-blue-400 rounded-lg flex gap-5 flex-col items-center justify-center'>
                <h1 className='text-2xl'>KDV Hesapla</h1>
                <Input
                    tutar={tutar}
                    setTutar={setTutar}
                />
                <Radio
                    radio={radio}
                    setRadio={setRadio}
                />
                <button onClick={handleClick} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
                <div className='text-xl'> KDV Hariç Tutar: {sonuc} TL </div>
                <div className='text-xl'> KDV Tutar: {kdv} TL </div>
                <div className='text-xl'> KDV Hariç Tutar: {kdvDahil} TL</div>
            </div>
        </div>
    )
}

export default KdvHesapla