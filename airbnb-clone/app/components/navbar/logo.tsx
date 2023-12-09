'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LogoImage from '@/public/images/logo.png';

const Logo = () => {
    const router = useRouter();

    return (
        <Image src={LogoImage} alt="" className="hidden md:block cursor-pointer" height="100" width="100"/>
    );
};

export default Logo;