'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LogoImage from '@/public/images/logo.png';
import Link from 'next/link';

const Logo = () => {
    const router = useRouter();

    return (
        <Link href="/">
            <Image src={LogoImage} alt="" className="hidden md:block cursor-pointer" height="100" width="100"/>
        </Link>
    );
};

export default Logo;