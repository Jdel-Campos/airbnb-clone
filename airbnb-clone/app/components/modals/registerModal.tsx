'use client';

import axios from 'axios';
import { AiFillApple, AiFillFacebook } from 'react-icons/ai';
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/userRegisterModal';
import Modal from './modal';
import Heading from '../heading';
import InputCountryRegion from '../inputs/inputsCountryRegion';
import InputPhone from '../inputs/inputsPhone';
import toast from 'react-hot-toast';
import Button from '../button';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [ isLoading, setIsLoading ] = useState(false);

    const { register, handleSubmit, formState:{ errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose()
            })
            .catch(( error ) => {
                toast.error('Something went wrong')
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    const bodyContent = (
        <div className='flex flex-col gap-2 scroll-auto'>
           <Heading title='Welcome to Airbnb'/>
           <form className='border rounded-md'>
                <div>
                    <InputCountryRegion id='country' label='Country / Region' disable={isLoading} register={register} errors={errors} required />
                </div>
                <div>
                    <InputPhone id='phone' label='Phone number' disable={isLoading} register={register} errors={errors} required />
                </div>
           </form>
           <div>
            <p className='text-xs'> We’ll call or text you to confirm your number. Standard message and data rates apply. </p>
            <p className='text-xs underline cursor-pointer font-bold'>  Privacy Policy </p>

           </div>
        </div>
    )

    /* We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy */

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <div className='flex gap-4 justify-center items-center'>
                <div className='w-2/3 h-[0.25px] border border-b-neutral-300'></div>
                <div className='text-sm'> or </div>
                <div className='w-2/3 h-[0.25px] border border-b-neutral-300'></div>
            </div>

            <Button outline label='Continue with Facebook' icon={AiFillFacebook} onClick={() => {}} />
            <Button outline label='Continue with Google' icon={FcGoogle} onClick={() => {}} />
            <Button outline label='Continue with Apple' icon={AiFillApple} onClick={() => {}} />
            <Button outline label='Continue with Email' icon={HiOutlineMail} onClick={() => {}} />
        </div>
    )

    return(
        <Modal disable={isLoading} isOpen={registerModal.isOpen} title='Log in or sign up' actionLabel='Continue' onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent} />
    );
};

export default RegisterModal;