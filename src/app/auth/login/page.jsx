'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleLogicFunc = async (data) => {
        const {email, password} = data

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });

        console.log(res, error)
    }

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 md:p-4 lg:p-10">
            <div className="rounded-xl bg-white p-5 md:p-10 lg:p-20">
                <h2 className="font-bold text-3xl text-center mb-6">
                    Login to your account
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleLogicFunc)}>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input
                            type="email"
                            className="input w-full"
                            placeholder="Enter your email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (<p className='text-red-500'>{errors.email.message}</p>)}
                    </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type="password"
                            className="input w-full"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && (<p className='text-red-500'>{errors.password.message}</p>)}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">
                        Login
                    </button>
                    <p className='mt-3 text-center'>Dont’t Have An Account ? <Link href={'/auth/register'} className='text-blue-500'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;