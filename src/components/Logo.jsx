import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImg from "../../public/assets/images/Logo.png"

const Logo = ({ className, classNameImg }) => {
    return (
        <Link href="/" className={clsx(`w-[150px]`, className)}>
            <Image src={LogoImg} className={clsx(classNameImg)} alt="Logo" />
        </Link>
    )
}

export default Logo