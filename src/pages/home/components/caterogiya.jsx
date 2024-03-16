import React from 'react'
import { CaterogiyaCard } from '../card/caterogiya-card'
import { UserGetCaterogia } from '../../../servis/query/userGetCatigoria'


export const Caterogiya = () => {
  const {data}= UserGetCaterogia()
  return (
    <>
    {/* <SearchHeader/> */}   <div className='container pt-8 pb-8'>
        <h1 className='font-bold text-2xl pb-5'>Kategoriyalar</h1>
      <div className='grid grid-cols-9 gap-10'>
      {data?.map((item)=>(
        <CaterogiyaCard key={item.id} {...item}/>
       ))}
      </div>
    </div>
    </>
  )
}
