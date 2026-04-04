import Link from 'next/link'
// import React from 'react'
// import { LuCodeXml } from 'react-icons/lu'
// import Image from 'next/image'
import NextImage from 'next/image'
const Logo = () => {
    return (
        <Link href="/" className='flex items-center justify-center'>
            <NextImage
                src="/Image/LogoImg.svg"
                alt='logo'
                width={40}
                height={40}
            />
        </Link>
    )
}

export default Logo