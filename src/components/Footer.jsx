import React from 'react'


const Footer = () => {
    return (
        <>
            <footer className="bg-[#1E2A38] text-gray-300 py-10 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div>
                        <h2 className="text-lg font-bold text-white mb-3">Googlyy</h2>
                        <p className="text-sm leading-relaxed">
                            Googlyy is a creative digital platform based in Raipur, Telibandha, Chhattisgarh, specializing in UI/UX design, website development, and delivering high-quality blogs across multiple categories.<br/><a href='https://www.codeheaven.in/' target='_blank'>Designed and Developed by Code Heaven.</a>
                        </p>
                        <p className="mt-4 text-xs text-gray-400">
                            Copyright Googlyy. All rights reserved.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-blue-400 font-semibold mb-3">Get in Touch</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="text-blue-400">📍</span>
                                Raipur, Rajendra Nagar, Golden Trade center.
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-400">✉️</span>
                                admin@googlyy.com
                            </li>
                            <li className="flex
                             items-center gap-2">
                                <span className="text-blue-400">📞</span>
                                +91 9575584999
                            </li>
                        </ul>
                    </div>

                    <div>
                        {/* <div className="flex gap-3 mb-3">
                            {["Dr", "Be", "Ig", "Tw"].map((s, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-500 text-white rounded-full px-3 py-2 text-sm font-semibold cursor-pointer hover:bg-blue-600"
                                >
                                    {s}
                                </span>
                            ))}
                        </div> */}
                        {/* <p className="text-sm leading-relaxed">
                            Connect through 
                        </p> */}
                    </div>

                    <div>
                        <h3 className="text-blue-400 font-semibold mb-3">Join a Newsletter</h3>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="bg-gray-700 text-gray-200 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer