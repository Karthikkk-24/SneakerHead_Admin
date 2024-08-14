import React from 'react';

export default function Contact() {
    return (
        <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden flex">
                <div
                    className="w-1/2 bg-cover bg-center hidden lg:block"
                    style={{
                        backgroundImage:
                            "url('https://source.unsplash.com/random/800x800?nature')",
                    }}
                ></div>
                <div className="w-full lg:w-1/2 p-12">
                    <h2 className="text-4xl font-extrabold text-white mb-6">
                        Get in Touch
                    </h2>
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-white text-sm font-medium mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-white text-sm font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-white text-sm font-medium mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                placeholder="Your message here..."
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-white text-purple-600 font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
