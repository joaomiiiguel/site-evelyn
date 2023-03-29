import React from 'react'

export default function ButtonComp({name, onClick, icon}) {
  return (
    <a 
    onClick={() => onClick} 
    className='flex rounded-full my-2 p-2 bg-gradient-to-r from-background1 to-background2 hover:brightness-125 text-white text-center	items-center justify-center transition ease-in-out delay-150'>
      <p>{name}</p>
      <div className='ml-2'>{icon && icon}</ div>
    </a>
  )
}
