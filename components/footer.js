import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#222222] dark:bg-gray-50">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <img src="/logo_transparant.png" className="h-10 w-10" alt=""/>

                <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="font-medium dark:text-stone-700">
                            Company
                        </p>

                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <Link href="/">
                                <a className="hover:opacity-75" href=""> Home </a>
                            </Link>

                            <Link href="/store">
                                <a className="hover:opacity-75" href=""> Store </a>
                            </Link>
                            <a className="hover:opacity-75" href="https://status.settleco.net"> Status </a>
                        </nav>
                    </div>

                    <div>
                        <p className="font-medium dark:text-stone-700">
                            Helpful Links
                        </p>

                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <Link href="/contact">
                                <a className="hover:opacity-75" href=""> Contact </a>
                            </Link>
                            <a className="hover:opacity-75" href=""> FAQs </a>
                            <a className="hover:opacity-75" href=""> Live Chat </a>
                        </nav>
                    </div>

                    <div>
                        <p className="font-medium dark:text-stone-700">
                            Legal
                        </p>

                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <Link href="/legal/privacy-policy">
                                <a className="hover:opacity-75"> Privacy Policy </a>
                            </Link>
                            <Link href="/legal/disclaimers">
                                <a className="hover:opacity-75"> Disclaimers </a>
                            </Link>
                        </nav>
                    </div>
                </div>

                <div className="pt-8 mt-8 border-t dark:border-stone-400 border-stone-700 sm:items-center sm:justify-between sm:flex md:space-y-0 space-y-3">
                    <p className="text-xs text-gray-500">
                        &copy; 2022 SettleCo, Inc. All rights reserved.
                    </p>

                    <a
                       href="https://status.settleco.net" className="inline-flex items-center p-2 space-x-2 text-sm font-medium border border-stone-700 dark:border-stone-400 rounded">
                        <span className="dark:text-stone-700"> Status: </span>

                        <span className="w-3 h-3 bg-green-600 rounded-full"></span>

                        <span className="font-medium text-green-600">
                          All systems operational
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
