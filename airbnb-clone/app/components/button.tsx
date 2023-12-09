'use client';

import { ButtonProps } from "@/type/types";

const Button: React.FC<ButtonProps> = ({ label, onClick, disable, outline, small, icon: Icon }) => {
    return(
        <button className={`relative disable:opacity-70 disabled:cursor-not-allowed rounded-lg transition w-full h-12
            ${outline ? 'bg-white' : 'bg-rose-500'} ${outline ? 'border-black' : 'bg-rose-500'} ${outline ? 'text-black' : 'text-white'} 
            ${small ? 'py-1' : 'py-3'} ${small ? 'text-sm' : 'text-md'} ${small ? 'font-light' : 'font-semibold'} ${small ? 'border-[1px]' : 'border-2'}
            `} onClick={onClick} disabled={disable}>
            {Icon && <Icon size={18} className="absolute left-4 top-3 " />}
            {label}
        </button>
    );
};

export default Button;