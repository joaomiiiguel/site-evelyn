import TitleSession from '@/component/TitleSession'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import CardInsta from '../../../assets/postInsta.png'

export default function PostInsta() {
    return (
        <div className='flex flex-col relative justify-center items-center text-center py-10 bg-white w-full'>
            <div className='flex flex-col items-center w-10/12 pb-8 space-y-8'>
                <TitleSession Black Title={'Acompanhe-me no Instagram'} SubTitle={'não perca nenhuma das minhas dicas!'} />
                <div className='flex flex-col justify-between w-full space-y-10 md:space-y-0 md:flex-row '>
                    <Link className='relative w-[300px]' href={'https://www.instagram.com/p/CkT-bqAACVI/'} target="_blank">
                        <Image src={CardInsta} alt="card instgram" className="absolute w-fit" />
                        <iframe title='post instagram 1' src='https://www.instagram.com/p/CkT-bqAACVI/embed' width={300} height={380} frameborder="0" scrolling='no' className='mt-2 rounded-2xl'></iframe>
                    </Link>

                    <Link className='relative w-[301px]' href={'https://www.instagram.com/p/Cbcg88MrNqd/'} target="_blank">
                        <Image src={CardInsta} alt="card instgram" className="absolute w-full" />
                        <iframe title='post instagram 1' src='https://www.instagram.com/p/Cbcg88MrNqd/embed' width={300} height={380} frameborder="0" scrolling='no' className='mt-2 rounded-2xl'></iframe>
                    </Link>

                    <Link className='relative w-[301px]' href={'https://www.instagram.com/p/CkDwfaUMFGt/'} target="_blank">
                        <Image src={CardInsta} alt="card instgram" className="absolute w-full" />
                        <iframe title='post instagram 1' src='https://www.instagram.com/p/CkDwfaUMFGt/embed' width={300} height={380} frameborder="0" scrolling='no' className='mt-2 rounded-2xl'></iframe>
                    </Link>


                </div>
            </div>
        </div>
    )
}
