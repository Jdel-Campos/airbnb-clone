'use client'

import { InputProps } from "@/type/types";
import { BiDollar } from "react-icons/bi";

const InputCountryRegion: React.FC<InputProps> = ({ id, label, type = 'text', disable, formatPrice, required, register, errors }) => {
    return(
        <div className="w-full relative">
            {formatPrice && ( <BiDollar size={24} className="text-neutral-700 absolute top-5 left-2" /> )}
            <select id={id} disabled={disable} {...register( id, { required } )} placeholder={"Brasil (+55)"} content="Brasil (+55)"
                className={`peer w-full h-14 p-2 pt-6 font-light text-sm bg-white focus:border-2 focus:rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
                ${formatPrice ? 'pl-9' : 'pl-4'} ${errors[id] ? 'border-rose-500' : 'border-neutral-300'} ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}  `} 
            />
            {/* <div>{"Brasil (+55)"}</div> */}
            <label className={`absolute text-xs font-light duration-150 transform -translate-y-3 top-5 z-10 origin-[0] ${formatPrice ? 'left-9' : 'left-4'} 
                peer-focus:-translate-y-3 ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
            `}>
                {label}
            </label>
        </div>
    )
};
export default InputCountryRegion;