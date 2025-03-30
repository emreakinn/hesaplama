import React, { useState } from 'react'
import SinavNotlari from './components/Ders-Puani-Hesapla/SinavNotlari'
import ProjeNotlari from './components/Ders-Puani-Hesapla/ProjeNotlari'

function DersPuaniHesapla() {

    const [sinav1, setSinav1] = useState('')
    const [sinav2, setSinav2] = useState('')
    const [sinav3, setSinav3] = useState('')
    const [sinav4, setSinav4] = useState('')

    const [proje1, setProje1] = useState('')
    const [proje2, setProje2] = useState('')

    const [sinavOrt, setSinavOrt] = useState(null)
    const [projeOrt, setProjeOrt] = useState(null)
    const [sonuc, setSonuc] = useState('')

    const handleHesapla = () => {
        const s1 = parseFloat(sinav1);
        const s2 = parseFloat(sinav2);
        const s3 = parseFloat(sinav3);
        const s4 = parseFloat(sinav4);
        const p1 = parseFloat(proje1);
        const p2 = parseFloat(proje2);

        if (s1 && s2 && s3 && s4 && p1 && p2) {
            if (
                s1 < 0 || s1 > 100 ||
                s2 < 0 || s2 > 100 ||
                s3 < 0 || s3 > 100 ||
                s4 < 0 || s4 > 100 ||
                p1 < 0 || p1 > 100 ||
                p2 < 0 || p2 > 100
            ) {
                alert('0-100 aralığında not giriniz');
            } else {
                const sinavOrtHesap = (s1 + s2 + s3 + s4) / 4;
                const projeOrtHesap = (p1 + p2) / 2;

                setSinavOrt(sinavOrtHesap);
                setProjeOrt(projeOrtHesap);

                const genelOrt = (sinavOrtHesap + projeOrtHesap) / 2;
                setSonuc(genelOrt);
            }
        } else {
            alert('Lütfen bütün bilgileri doldurunuz');
        }

        setSinav1('');
        setSinav2('');
        setSinav3('');
        setSinav4('');
        setProje1('');
        setProje2('');

    };

    return (
        <div className='w-full h-[90vh] flex justify-center items-center bg-blue-900 text-white'>
            <div className='w-6/12 h-4/6 bg-blue-800 border-2 border-blue-400 rounded-lg flex gap-5 flex-col items-center justify-center'>
                <h1 className='text-2xl'>Ders Puan Ortalaması</h1>
                <SinavNotlari
                    sinav1={sinav1} setSinav1={setSinav1}
                    sinav2={sinav2} setSinav2={setSinav2}
                    sinav3={sinav3} setSinav3={setSinav3}
                    sinav4={sinav4} setSinav4={setSinav4}
                />
                <ProjeNotlari
                    proje1={proje1} setProje1={setProje1}
                    proje2={proje2} setProje2={setProje2}
                />
                <button onClick={handleHesapla} className='w-3/12 py-5 border-2 border-blue-400 rounded-lg text-xl cursor-pointer'>Hesapla</button>
                <div className='text-xl'>Sınav Puan Ortalaması: {sinavOrt} </div>
                <div className='text-xl'>Proje Puan Ortalaması: {projeOrt} </div>
                <div className='text-xl'>Dönem Puan Ortalaması: {sonuc} </div>
            </div>
        </div >
    )
}

export default DersPuaniHesapla