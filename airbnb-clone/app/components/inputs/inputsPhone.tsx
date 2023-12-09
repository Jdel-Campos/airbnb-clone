'use client'

import { options } from "@/app/providers/callingCodeApi";
import { InputProps } from "@/type/types";
import { BiDollar } from "react-icons/bi";
const axios = require('axios');

/* Com dois inputs diferentes também não deu certo, vou precisar fazer uma lógica de que quando um tiver ativo recebe borda e o outro perde. */

const InputPhone: React.FC<InputProps> = ({ id, label, type = 'text', disable, formatPrice, required, register, errors }) => {

    const CallingCodeAll = async () => {
        const CallingCode = await axios.request(options)
    
    
        return(
            console.log(CallingCode.data)
        )
    }

    return(
        <div className="w-full relative">
            {formatPrice && ( <BiDollar size={24} className="text-neutral-800 absolute top-5 left-2" /> )}
            <input id={id} disabled={disable} {...register( id, { required } )} placeholder=" " type={type} 
                className={`peer w-full h-14 p-2 pt-6 font-light text-sm bg-white border-t-2 focus:border-2 focus:rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
                ${formatPrice ? 'pl-9' : 'pl-4'} ${errors[id] ? 'border-rose-500' : 'border-neutral-300'} ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}  `} 
            />
            <label className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] ${formatPrice ? 'left-9' : 'left-4'} 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${errors[id] ? 'text-rose-500' : 'text-zinc-500'}
            `}>
                {label}
            </label>
        </div>
    )
};
export default InputPhone;

