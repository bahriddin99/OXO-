import React from 'react'
import { MaxsusCard } from '../card/maxsus-card'

export const Maxsus = () => {
  return (
    <div className='bg-header'>
       <div className='container pt-8' >
       <h1 className='font-bold text-2xl'>Siz uchun maxsus</h1>
       <MaxsusCard/>
       </div>
    </div>
  )
}
