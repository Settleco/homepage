import { CONFIG } from "../../libs/config";
import Link from "next/link";
import Ogp from "../../components/ogp";

export default function Store() {
  return (
    <>
        <Ogp title="Store"/>
      <div className="md:w-5/12 sm:w-7/12 w-11/12 mx-auto py-7 space-y-5">
        <div className="">
            <p className="text-2xl font-medium dark:text-stone-700">SettleCo Store.</p>
            <p className="text-stone-500 md:text-base text-sm leading-6">Welcome to our shop! The money of the products you buy from here supports us. You can also donate if you want. Thanks again.
            </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {CONFIG.SHOP.map((r) => (
                <div className="rounded-xl border border-stone-700/50">
                    <img src={r.img} className="h-[25vh] rounded-t-xl border-b border-stone-700/50 w-full object-cover" alt=""/>
                    <div className="p-2 space-y-2">
                        <div>
                            <div className="-space-y-1">
                                <p className="text-xs dark:text-stone-900/50 text-white/50">{r.type}</p>
                                <p className="text-xl dark:text-stone-900 font-semibold">{r.title}</p>
                            </div>
                            <p className="text-white/70 dark:text-stone-900/70 text-sm">{r.description}</p>
                        </div>
                        <div className="">
                            <Link href="/">
                                <a href="">
                                    <div className="p-2 bg-stone-900/50 dark:bg-stone-300 rounded-xl text-center">
                                        <p className="text-sm font-medium dark:text-stone-600 text-white/80">Buy from USD ${r.price}</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}
