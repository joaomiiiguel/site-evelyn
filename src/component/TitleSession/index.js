import React from 'react'

export default function TitleSession({Title, SubTitle, Black}) {
  return (
    <div className='flex flex-col items-start'>
        <p className={`font-bold text-2xl text-${Black ? 'secondary' : 'white'} uppercase`}>{Title}</p>
        <p className={`text-${Black ? 'secondary' : 'white'} uppercase md:tracking-wide`}>{SubTitle && SubTitle}</p>
    </div>
  )
}
