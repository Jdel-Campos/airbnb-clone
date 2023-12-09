'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import { GoGlobe } from 'react-icons/go';
import { useCallback, useState } from 'react';
import Avatar from '../avatar';
import MenuItem from './menuItem';
import MenuItemVariation from   './menuItemVariation';
import useRegisterModal from '@/app/hooks/userRegisterModal';


const UserMenu = () => {
    const registerModal = useRegisterModal()
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen( ( value ) => !value );
    }, []);
 
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer" onClick={() => {}} > Airbnb your home </div>
                <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer" onClick={() => {}} > 
                    <GoGlobe size={18} /> 
                </div>
                <div className="pl-4 px-2 pr-2 md:py-1 md-px-2 border-[1px] h-12 border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition" onClick={toggleOpen} > 
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                
                </div>
            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[60vw] md:w-4/5 overflow-hidden bg-white right-0 top-12 text-sm py-1">
                    <div className="flex flex-col">
                    <div className="flex items-center cursor-pointer py-1">
                            <MenuItemVariation onclick={() => {}}  label='Winter Release features'/>
                            {/* <div className='bg-rose-500 text-white px-1 rounded-md font-semibold'> NEW </div> */}
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col cursor-pointer py-1">
                        <MenuItem onclick={registerModal.onOpen} label='Sing up'/>
                        <MenuItem onclick={() => {}} label='Log in'/>
                    </div>
                    <hr />
                    <div className="flex flex-col cursor-pointer py-1">
                        <MenuItem onclick={() => {}}  label='Gift cards'/>
                        <MenuItem onclick={() => {}}  label='Airbnb your home'/>
                        <MenuItem onclick={() => {}}  label='helper center'/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;