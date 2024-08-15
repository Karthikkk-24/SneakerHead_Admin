
export default function Contact() {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-gray-900 p-8">
                    <h2 className="text-3xl font-bold text-pink-200 mb-6">
                        Contact Us
                    </h2>
                    <p className="text-gray-400 mb-6">
                        Get in touch with us for any inquiries or support.
                    </p>
                    <div className="text-gray-400">
                        <p className="mb-2">123 Sneaker Street</p>
                        <p className="mb-2">Footwear City, FC 12345</p>
                        <p className="mb-2">Phone: (555) 123-4567</p>
                        <p>Email: info@sneakerhead.com</p>
                    </div>
                </div>
                <div className="w-full md:w-2/3 p-8">
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-pink-200 text-sm font-medium mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-transparent"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-pink-200 text-sm font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-transparent"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-pink-200 text-sm font-medium mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-transparent"
                                placeholder="Your message here..."
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-pink-200 text-gray-900 font-bold py-3 px-4 rounded-lg hover:bg-pink-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
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
