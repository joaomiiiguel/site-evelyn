import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import ImageComp from '../../../assets/vidaProd.webp'

export default function vidaProdutiva() {
    return (
        <div className='flex flex-col justify-around items-center text-center px-[10%] md:px-[15%] py-20 bg-gradient-to-r from-[#f3e7e9] to-[#e3eeff] min-h-[80vh]'>
            <p className='font-bold text-2xl text-secondary py-8'>Vida Produtiva</p>
            <div className='flex flex-col-reverse justify-around items-center md:flex-row'>
                {/* <Image src={ImageComp} width={600} alt="mulher falando no microfone" className='w-full md:w-2/4 py-8' /> */}
                <div className='md:pl-10 md:w-full text-left text-secondary space-y-8'>
                    <p>
                        O curso online que te faz largar de uma vez por todas a procrastinação e concluir a sua lista de tarefas do dia, todos os dias, mesmo que os seus dias sejam muito diferentes um do outro.
                        <br /><br />
                        Ser produtiva é realizar uma tarefa com a maior excelência que você pode, dentro do menor tempo possível. Se você corre o dia inteiro pra lá e pra cá, chega no fim do dia exausta, com a mente agitada, com dor de cabeça e com a lista de tarefas pela metade, eu sinto muito te informar, mas você só está ativa, não produtiva.
                        <br /><br />
                        O objetivo do curso é pegar na sua mão e te passar os caminhos, as estratégias e as ferramentas certas para que, de forma descomplicada, essa nova realidade se torne super possível de acontecer na sua vida (e muito mais rápido do que você imagina!).
                        <br /><br />
                        Ele é a ponte entre a vida que você tem hoje e a vida produtiva que você sonha em viver.
                    </p>

                    <Link
                        href={'https://wa.me/5527992567192?text=Ol%C3%A1+Evelyn%2C+gostei+do+seu+trabalho.'}
                        target="_blank"
                        className='flex rounded my-4 p-4 bg-secondary hover:brightness-125 text-white text-center items-center justify-center transition ease-in-out delay-150'>
                        <p>Tenha uma vida produtiva</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}
