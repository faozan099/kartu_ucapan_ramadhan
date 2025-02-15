import React from 'react'
import "./mobile.css"
import logo from '../assets/logo.png'

export default function Mobile() {
    return (
        <div className='frame'>
            <div className='container'>
                <div className='containerFlex'>
                    <img src={logo} alt="logo" className='logo' />
                    <p className='greeting'>Marhaband ya Ramadhan</p>
                    <p className='year'>1445 Hijriah</p>
                    <p className='deskription'>Sambut bulan suci Ramadhan dengan berbagi kebaikan, menyebarkan kedamaian, dan mempererat kasih sayang sesama.</p>
                </div>
            </div>
        </div>
    )
}
