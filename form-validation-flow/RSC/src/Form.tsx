import React, { useMemo, useState } from 'react'

const validators = {
    firstName: (val: string) => {
        if (!val) return "First name is required"
        if (val.length < 3) return "Must be at least 3 characters";
        return "";
    },
    lastName: (val: string) => {
        if (!val) return "Last name is required";
        if (val.length < 3) return "Must be at least 3 characters";
        return "";
    },
    email: (val: string) => {
        if (!val) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(val)) return "Invalid email format";
        return "";
    },
    password: (val: string) => {
        if (!val) return "Password is required";
        if (val.length < 6) return "Must be at least 6 characters";
        return "";
    },
};

const InputField = ({
    label,
    name,
    value,
    error,
    onChange,
}: {
    label: string;
    name: keyof typeof validators;
    value: string;
    error: string;
    onChange: (name: string, value: string) => void;
}) => {

    const isValid = !error && value.length > 0;

    return (
        <div className='mb-4'>
            <label className='block font-medium mb-1' htmlFor={name}>{label}</label>
            <div className='relative'>
                <input
                    id={name}
                    type={name === "password" ? "password" : "text"}
                    value={value}
                    onChange={(e) => onChange(name, e.target.value)}
                    className={`border rounded p-2 w-full focus:outline-none ${error ? "border-red-500" : isValid ? "border-green-500" : "border-gray-300"
                        }`}
                    aria-invalid={!error}
                    aria-describedby={`${name}-error`}
                />
                {isValid && (
                    <span className='absolute right-2 top-2 text-green-600'>✔</span>
                )}
            </div>
            {error && (
                <p id={`${name}-error`} className='text-red-500 text-sm mt-1'>{error}</p>
            )}
        </div>
    )
}

const Form = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })


    const handleChange = (name: string, value: string) => {
        setValues((prev) => ({...prev, [name]: value}));
        setErrors((prev) => ({...prev, [name]: validators[name](value)}))
    }

    const isFormValid = useMemo(
        () => Object.values(errors).every((err) => err === "") && Object.values(values).every((val) => val.length > 0), [errors, values]
    )

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!isFormValid) return;
        alert("Form submitted successfully ✅");
    }

    return (
        <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-6 p-4 border rounded shadow'>
            <h2 className='text-xl font-bold mb-4'>Sign Up</h2>

            <InputField 
                label='First Name'
                name='firstName'
                value={values.firstName}
                error={errors.firstName}
                onChange={handleChange}
            />
            <InputField 
                label='Last Name'
                name='lastName'
                value={values.lastName}
                error={errors.lastName}
                onChange={handleChange}
            />
            <InputField 
                label='Email'
                name='email'
                value={values.email}
                error={errors.email}
                onChange={handleChange}
            />
            <InputField 
                label='Password'
                name='password'
                value={values.password}
                error={errors.password}
                onChange={handleChange}
            />
            <button
                type='submit' disabled={!isFormValid} className={``}
            >Submit</button>
        </form>
    )
}

export default Form
