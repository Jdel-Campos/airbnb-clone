'user client';

import Image from "next/image"
import AvatarImage from "@/public/images/placeholder.jpg"

const Avatar = () => {
    return (
        <Image src={AvatarImage} alt="Avatar" className="rounded-full" height="30" width="30" />
    );
};

export default Avatar;