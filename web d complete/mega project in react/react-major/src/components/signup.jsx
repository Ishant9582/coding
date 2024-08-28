import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { login } from "../store/authslice"
import { Input, Logo } from "./index"
import { useDispatch } from "react-redux";
import getcurrentuser from "../appwrite/auth"
import createaccount from "../appwrite/auth"
import { useForm } from "react-hook-form"

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const create = async (data) => {
        setError("")
        try {
            const userData = await createaccount(data)
            if (userData) {
                const userDataa = await getcurrentuser()
                if (userDataa) {
                    dispatch(login(userDataa))
                }
                navigate("/")
            }
        }
        catch (err) {
            setError(err.message)
        }
    }
    return (
        <div className="flex items-center justify-center" >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <p>LOGO</p>
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight ">
                    Sign up to create account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have a account ? &nbsp;
                    <Link to={"/login"} className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className="space-y-5">
                        <Input
                        label="full name"
                        placeholder="enter your full name"
                        {...register("name",{
                            required:true ,
                        })} 
                        />
                    
                    
                        <Input
                        label = "Email"
                        placeholder = "enter email"
                        type = "email"
                        {...register("email",{
                            required : true ,
                            validate : {
                                matchpattern: (value) => 
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                    "email address not valid",     
                            }
                        })} 
                        
                        />
                        
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="enter your password" 
                        {...register("password",{
                            required : true ,
                        })}
                        />

                        <button className="w-full btn btn-outline btn-primary">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup