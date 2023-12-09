'use client';

import { MenuItemProps } from "@/type/types";

const MenuItemVariation: React.FC<MenuItemProps> = ({ onclick, label }) => {
 
    return (
        <div className="flex items-center hover:bg-neutral-100 transition w-full">
            <div className="px-4 py-3 font-semibold" onClick={ onclick }>
                {label}
            </div>
            <div className='bg-rose-500 text-white px-1 rounded-md font-semibold h-5'> NEW </div>
        </div>
    );
};

export default MenuItemVariation;