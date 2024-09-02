import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { login } from "../store/authslice"
import { Input} from "./index.js"
import { useDispatch } from "react-redux";
import {fetchUserData} from "../appwrite/auth"
import {createaccount} from "../appwrite/auth"
import { useForm } from "react-hook-form"

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
       
        // data ke naam p yha pr object aaya hai jisme hai name , password and email
        setError("")
        try {
            const userData = await createaccount(data)
            // creating account with that data
            if (userData) {
                const userData = await fetchUserData()
                // getting userdata if it is present 
                console.log(userData)
                if(userData) dispatch(login(userData));
                // sending data to slice so that status is changes and also value go there
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <h1></h1>
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            // yha p vo name jo hmare database m hai
                            required: true,
                        })}
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        <button type="submit" className="w-full">
                            Create Account
                        </button>
                    </div>
                </form>
            </div>

    </div>
  )
}
export default Signup