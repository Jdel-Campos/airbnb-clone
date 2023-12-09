'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../button';
import { ModalProps } from '@/type/types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, title, body, footer, actionLabel, disable, secondaryAction, secondaryActionLabel, }) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback (() => {
        if ( disable ) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);

    }, [disable, onClose]);

    const handleSubmit = useCallback (() => {
        if ( disable ) {
            return;
        }

        onSubmit();
    }, [disable, onSubmit]);

    const handleSecondaryAction = useCallback (() => {
        if ( disable || !secondaryAction ) {
            return;
        };

        secondaryAction();
    }, [disable, secondaryAction]);

    if (!isOpen ) {
        return null;
    };
    

    return (
        <>
            <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
                <div className="relative w-full md:w-4/6 lg:w-3/5 xl:w-[568px] h-2/3 my-6 mx-auto lg:h-auto md:h-auto">
                    {/* CONTENT */}
                    <div className={`translate duration-300 h-4/5 overscroll-auto ${showModal ? 'translate-y-0' : 'translate-y-full'} ${showModal ? 'opacity100' : 'opacity-0'}`}>
                        <div className="translate h-full max:h-[85%] overflow-auto lg:h-auto md:h-auto border-0 rounded-xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div>
                                {/* HEADER */}
                                <div className="flex items-center px-6 rounded-t justify-center h-16 relative border-b-[1px]">
                                    <button className=" border-0 hover:opacity-70 transition absolute left-6" onClick={handleClose}> <IoMdClose size={18}/> </button>
                                    <div className=' font-extrabold'> {title} </div>
                                </div>
                                <div className='overflow-y-scroll h-[500px]'>
                                    {/* BODY */}
                                    <div className='relative p-6 flex-auto'> {body} </div>
                                    {/* FOOTER */}
                                    <div className='flex flex-col gap-2 p-6'>
                                        <div className='flex flex-row items-center gap-4 w-full'>
                                            {secondaryAction && secondaryActionLabel && (
                                                <Button outline disable={disable} label={secondaryActionLabel} onClick={handleSecondaryAction}/>
                                            )}
                                            <Button disable={disable} label={actionLabel} onClick={handleSubmit}/>
                                        </div>
                                        {footer} 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;