'use client'
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleRegisterFunc = async (data) => {
        const { name, photo, email, password } = data;
        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });

        console.log(res, error);
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("signup successful")
        }
    }

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className=' bg-slate-100 '>
            <div className="container mx-auto min-h-[80vh] flex justify-center items-center p-4 md:p-10 pb-15">
                <div className="rounded-xl bg-white p-5 md:p-10 lg:p-20 ">
                    <h2 className="font-bold text-3xl text-center mb-6 text-[#384959]">
                        Register your account
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Name</legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Enter your name"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && (<p className='text-red-500'>{errors.name.message}</p>)}
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Photo URL</legend>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Enter your photo url"
                                {...register("photo", { required: "Photo URL is required" })}
                            />
                            {errors.photo && (<p className='text-red-500'>{errors.photo.message}</p>)}
                        </fieldset>

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
                                type={isShowPassword ? "text" : "password"}
                                className="input w-full"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: "Password field is required",
                                })}
                            />
                            <span
                                className="absolute right-8 top-4 cursor-pointer"
                                onClick={() => setIsShowPassword(!isShowPassword)}
                            >
                                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                            {errors.password && (<p className='text-red-500'>{errors.password.message}</p>)}
                        </fieldset>

                        <button className="btn w-full bg-linear-to-r from-[#384959] to-[#88BDF2] text-white">
                            Register
                        </button>
                        <p className='text-center font-bold text-[#384959]'>OR</p>
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn w-full bg-linear-to-r from-[#384959] to-[#88BDF2] text-white">
                            <FaGoogle />
                            Login with google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;