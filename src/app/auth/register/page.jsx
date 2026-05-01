'use client'
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleRegisterFunc = async(data) => {
        const {name, photo, email, password } = data;
        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });

        console.log(res, error);
        if(error){
            alert(error.message)
        }
        if(res){
            alert("signup successful")
        }
    }

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 p-4 md:p-10">
            <div className="rounded-xl bg-white p-5 md:p-10 lg:p-20 ">
                <h2 className="font-bold text-3xl text-center mb-6">
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
                            type="password"
                            className="input w-full"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && (<p className='text-red-500'>{errors.password.message}</p>)}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;