import React from 'react';
import { FiLock, FiLogIn, FiUser } from 'react-icons/fi';

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
            <div className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-blur-lg w-96 border border-white border-opacity-20">
                <h1 className="text-4xl font-bold mb-8 text-center text-white">
                    Admin Portal
                </h1>
                <form className="space-y-6">
                    <div className="relative">
                        <FiUser
                            className="absolute top-3 left-3 text-purple-300"
                            size={20}
                        />
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-purple-200"
                            required
                        />
                    </div>
                    <div className="relative">
                        <FiLock
                            className="absolute top-3 left-3 text-purple-300"
                            size={20}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-purple-200"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
                    >
                        <FiLogIn className="mr-2" size={20} />
                        Sign In
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <a
                        href="#"
                        className="text-purple-200 hover:text-white transition duration-300"
                    >
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    );
}
