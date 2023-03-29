import React from 'react'

export default function PostInsta() {
    return (
        <div className='text-center py-10'>
            <p className='text-primary-dark'>MEU PERFIL</p>
            <p className='font-bold text-2xl text-secondary mb-10'>Instagram</p>
            <div className='flex flex-col md:flex-row'>
                <iframe src='https://www.instagram.com/p/Cj8NfydrZ3Q/embed' width={300} height={420} frameborder="0" scrolling='no' className='m-4'></iframe>
                <iframe src='https://www.instagram.com/p/CkDwfaUMFGt/embed' width={300} height={420} frameborder="0" scrolling='no' className='m-4'></iframe>
                <iframe src='https://www.instagram.com/p/CkT-bqAACVI/embed' width={300} height={420} frameborder="0" scrolling='no' className='m-4'></iframe>
            </div>
        </div>
    )
}
