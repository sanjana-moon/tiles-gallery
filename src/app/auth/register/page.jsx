'use client'
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleLogicFunc = (data) => {
        console.log(data);
    }

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 p-10">
            <div className="p-20 rounded-xl bg-white">
                <h2 className="font-bold text-3xl text-center mb-6">
                    Register your account
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleLogicFunc)}>
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
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (<p className='text-red-500'>{errors.name.message}</p>)}
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
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (<p className='text-red-500'>{errors.email.message}</p>)}
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