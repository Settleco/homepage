import Link from "next/link";
import React, { useState } from 'react';
import UseDarkMode from "../useDarkMode";

export default function Navbar({text}) {
    const [colorTheme, setTheme] = UseDarkMode();
    const [useNavbar, setNavbar] = useState(false);
  return (
    <div className="border-b border-stone-700 dark:border-stone-300 sticky top-0 dark:bg-white/50 bg-[#222222]/50 backdrop-blur-md">
        <div className="md:w-5/12 w-11/12 mx-auto py-5 flex justify-between items-center">
            <div className="font-medium flex items-center space-x-1">
                <Link href="/">
                    <a className="hidden lg:block" href="">
                        <p className=" dark:text-stone-700">SettleCo. <span className="opacity-40">{text}</span></p>
                    </a>
                </Link>
                <Link href="/">
                    <a href="">
                        <img src="/logo_transparant.png" className="h-6 w-6 lg:hidden block" alt=""/>
                    </a>
                </Link>
            </div>
            <div className="text-sm items-center font-[450] text-stone-400 dark:text-stone-500 flex space-x-5">
                <div className="lg:hidden block">
                    {useNavbar === true ? (
                        <svg onClick={() => setNavbar(false)} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    ) : (
                        <svg onClick={() => setNavbar(true)} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                    )}
                </div>
                <Link href="/">
                    <a className="hidden lg:block" href="">Home</a>
                </Link>
                <Link href="/contact">
                    <a className="hidden lg:block" href="">Contact</a>
                </Link>
                <Link href="/store">
                    <a className="hidden lg:block" href="">Store</a>
                </Link>
                    <a className="hidden lg:block" href="https://status.settleco.net">Status</a>
                {colorTheme === "light" ? (
                    <svg
                        onClick={() => setTheme("light")}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                    </svg>
                ) : (
                    <svg
                        onClick={() => setTheme("dark")}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                )}

            </div>
        </div>
        {useNavbar === true && (
            <ul className="md:w-5/12 w-11/12 mx-auto pt-5 pb-10 font-medium space-y-2 text-gray-500 place-items-end z-20 grid grid-rows-1">

                <Link href="/">
                    <a href="">Home</a>
                </Link>
                <Link href="/contact">
                    <a href="">Contact</a>
                </Link>
                <Link href="/store">
                    <a href="">Store</a>
                </Link>
                <a href="https://status.settleco.net">Status</a>
            </ul>
        )}
    </div>
  )
}
