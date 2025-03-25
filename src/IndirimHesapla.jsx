import React, { useState } from 'react'
import IndirimliFiyat from './components/İndirim-Hesaplama/IndirimliFiyat'
import NormalFiyat from './components/İndirim-Hesaplama/NormalFiyat'
import IndirimOrani from './components/İndirim-Hesaplama/IndirimOrani'

function IndirimHesapla() {

    const [selected, setSelected] = useState('')

    const [indirimliFiyat, setIndirimliFiyat] = useState('')
    const [normalFiyat, setNormalFiyat] = useState('')
    const [indirimOrani, setIndirimOrani] = useState('')

    return (
        <div className='w-full h-[90vh] flex justify-center items-center bg-blue-900 text-white'>
            <div className='w-6/12 h-4/6 bg-blue-800 border-2 border-blue-400 rounded-lg flex gap-5 flex-col items-center justify-center'>
                <h1 className='text-2xl'>İndirim Hesapla</h1>
                <select
                    className='bg-blue-900 p-2 rounded-lg'
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                >
                    <option value="">İşlemi Seçiniz</option>
                    <option value="indirimliFiyat">İndirimli Fiyat Hesaplama</option>
                    <option value="normalFiyat">Normal Fiyat Hesaplama</option>
                    <option value="indirimOrani">İndirim Oranı Hesaplama</option>
                </select>
                {
                    selected === 'indirimliFiyat' &&
                    <IndirimliFiyat
                        normalFiyat={normalFiyat}
                        setNormalFiyat={setNormalFiyat}
                        indirimOrani={indirimOrani}
                        setIndirimOrani={setIndirimOrani}
                    />
                }
                {
                    selected === 'normalFiyat' &&
                    <NormalFiyat
                        indirimliFiyat={indirimliFiyat}
                        setIndirimliFiyat={setIndirimliFiyat}
                        indirimOrani={indirimOrani}
                        setIndirimOrani={setIndirimOrani}
                    />
                }
                {
                    selected === 'indirimOrani' &&
                    <IndirimOrani
                        normalFiyat={normalFiyat}
                        setNormalFiyat={setNormalFiyat}
                        indirimliFiyat={indirimliFiyat}
                        setIndirimliFiyat={setIndirimliFiyat}
                    />
                }
            </div>
        </div >
    )
}

export default IndirimHesapla