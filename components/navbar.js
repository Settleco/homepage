import Link from "next/link";

export default function Navbar({text}) {
  return (
    <div className="border-b border-stone-700 sticky top-0 bg-[#222222]/50 backdrop-blur-md">
        <div className="md:w-5/12 w-11/12 mx-auto py-5 flex justify-between items-center">
            <div className="font-medium flex items-center space-x-1">
                <p>SettleCo. <span className="opacity-40">{text}</span></p>
            </div>
            <div className="text-base font-[400] text-stone-400 space-x-5">
                <Link href="/">
                    <a href="">Home</a>
                </Link>
                <Link href="/contact">
                    <a href="">Contact</a>
                </Link>
                <Link href="/">
                    <a href="">Shop</a>
                </Link>
                    <a href="https://status.settleco.net">Status</a>
            </div>
        </div>
    </div>
  )
}
