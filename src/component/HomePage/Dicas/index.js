import Link from 'next/link'
import React from 'react'


export default function Dicas() {
    return (
        <div className='flex items-center justify-center w-full min-h-[40vh] bgDicas md:justify-start md:pl-[10%]'>
            <div className='flex flex-col w-10/12 md:w-4/12 mt-16 md:mt-0'>
                <p className='font-bold text-2xl text-white uppercase'>SUGESTÕES DA EVELYN</p>
                <p className=' text-white mb-10'>Encontre dicas imperdíveis de podcasts, filmes e livros em uma única página.</p>

                <Link
                    className='flex my-6 p-2 bg-primary hover:brightness-125 text-secondary text-center items-center justify-center transition ease-in-out delay-150 uppercase font-semibold'
                    href={'https://educated-rugby-222.notion.site/Sugest-es-da-Evelyn-Pinheiro-3bacf224620c44e6abb17db52554655c'}
                    target="_blank"
                >
                    <p>acesse agora mesmo</p>
                </Link>
            </div>
        </div>
    )
}
