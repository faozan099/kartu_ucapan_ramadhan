import React from 'react'
import './desktop.css'
import logo from '../assets/logo.png'

export default function Desktop() {
  return (
    <div className='frame2'>
      <div className='container2'>
        <p className='title'>Marhaband ya Ramadhan</p>
        <p className='year2'>1445 Hijriah</p>
        <p className='deskripsi2'>Sambut bulan suci Ramadhan dengan berbagi kebaikan, menyebarkan kedamaian, dan mempererat kasih sayang sesama.</p>
        <img src={logo} alt="logo" className='logo2'/>
      </div>
    </div>
  )
}
