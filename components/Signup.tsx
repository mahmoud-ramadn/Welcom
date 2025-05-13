"use client"

import * as motion from "motion/react-client";
import { Send } from "lucide-react";
import { useState } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const inputVariants = {
    focus: {
        borderBottomWidth: "2px",
        borderColor: "#ffffff",
        transition: { duration: 0.3 }
    },
    error: {
        borderColor: "#ef4444",
        transition: { duration: 0.3 }
    }
};

const errorVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 }
    }
};

function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: ''
    });
    const [errors, setErrors] = useState({
        firstName: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            firstName: '',
            email: ''
        };

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
            valid = false;
        } else if (formData.firstName.trim().length < 2) {
            newErrors.firstName = 'First name must be at least 2 characters';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                // Reset form after 3 seconds
                setTimeout(() => {
                    setFormData({ firstName: '', email: '' });
                    setIsSuccess(false);
                }, 3000);
            }, 1500);
        }
    };

    return (
        <div className="bg-[url('/section-1.png')] bg-no-repeat bg-cover bg-center md:p-20 p-10 relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-0"></div>

            <div className="container relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    <motion.h1
                        className="md:text-[59px] text-[40px] max-w-[373px] w-full font-bold leading-tight text-white"
                        variants={itemVariants}
                    >
                        Sign up for the newsletter
                    </motion.h1>

                    <form onSubmit={handleSubmit}>
                        <motion.div
                            className="mt-[69px] flex flex-col md:flex-row justify-between gap-10"
                            variants={containerVariants}
                        >
                            <motion.h3
                                className="text-2xl flex self-end text-white/80"
                                variants={itemVariants}
                            >
                                Stay connected with us
                            </motion.h3>

                            <motion.div
                                className="w-full max-w-[600px] space-y-7"
                                variants={itemVariants}
                            >
                                <div>
                                    <motion.div
                                        whileFocus="focus"
                                        variants={inputVariants}
                                        animate={errors.firstName ? "error" : undefined}
                                    >
                                        <input
                                            name="firstName"
                                            type="text"
                                            placeholder="First name"
                                            className="w-full border-b pb-4 placeholder:text-lg placeholder:text-white/70 bg-transparent text-white focus:outline-none border-white/50 transition-colors duration-300"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </motion.div>
                                    {errors.firstName && (
                                        <motion.p
                                            className="text-red-400 text-sm mt-1"
                                            variants={errorVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {errors.firstName}
                                        </motion.p>
                                    )}
                                </div>

                                <div>
                                    <motion.div
                                        whileFocus="focus"
                                        variants={inputVariants}
                                        animate={errors.email ? "error" : undefined}
                                    >
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email address"
                                            className="w-full border-b pb-4 placeholder:text-lg placeholder:text-white/70 bg-transparent text-white focus:outline-none border-white/50 transition-colors duration-300"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </motion.div>
                                    {errors.email && (
                                        <motion.p
                                            className="text-red-400 text-sm mt-1"
                                            variants={errorVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </div>

                                <motion.div variants={itemVariants}>
                                    <motion.button
                                        type="submit"
                                        className={`mt-6 rounded-full py-6 px-8 ${isSuccess ? 'bg-green-500' : 'bg-white'} text-black hover:bg-white/90 hover:shadow-lg transition-all duration-300 group flex items-center gap-2 w-full justify-center`}
                                        whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.03 }}
                                        whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
                                        disabled={isSubmitting || isSuccess}
                                    >
                                        {isSubmitting ? (
                                            'Submitting...'
                                        ) : isSuccess ? (
                                            'Success! Thank you!'
                                        ) : (
                                            <>
                                                Subscribe Now
                                                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Signup;