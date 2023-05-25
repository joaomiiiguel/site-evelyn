import Image from 'next/image'
import React from 'react'
import Capa from '../assets/capaMeta.webp'

export default function testerImage() {
    return (
        <>
            <Image src={Capa} alt="" />
        </>
    )
}
