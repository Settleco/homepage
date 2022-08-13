import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
        <div className="md:w-5/12 w-11/12 mx-auto py-7 space-y-5">
            <div className="flex items-center space-x-3">
                <div>
                    <img src="/logo.png" className="rounded-full h-20 w-20" alt=""/>
                </div>
                <div className="-space-y-1">
                    <p className="text-[#eeeeee] font-semibold text-3xl">SettleCo.</p>
                    <p className="text-[#a4a4a4]">A tiny development company from Turkey, Izmir.</p>
                </div>
            </div>
            <div className="flex">
                <div className="flex text-sm items-center p-1 px-3 text-base border-2 space-x-1 border-[#393939] rounded-full text-[#aaaaaa]">
                    <svg className="w-5 h-5" fill="#aaaaaa" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    <p>Turkey, Izmir.</p>
                </div>

            </div>
            <div className="space-y-10">
                <div className="space-y-2">
                    <p className="font-medium text-lg">Introduce us to your team.</p>
                    <div className="text-stone-500 space-y-1">
                        <p>Hi! We are a tiny development company with fully remote team working throughout Turkey, Izmir. Our main goal is to produce creative and innovative solutions.</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="font-medium text-lg">About our team.</p>
                    <div className="text-stone-500 space-y-1 pl-5">
                        <li>We have a team that consists of 1-5 people.</li>
                        <li>We are a relatively small company that aims to grow by making new projects.</li>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="font-medium text-lg">Our projects.</p>
                    <div className="text-stone-500 space-y-2">
                        <p>
                            The project we are currently working on is a keyboard called <span className="text-stone-100">SyncLn One</span>. Our brand is a company that aims to make products for designers and software developers.
                        </p>
                        <img className="rounded-md" src="https://res.cloudinary.com/read-cv/image/upload/c_fill,h_354,w_630/dpr_1.0/v1/1/teams/ySXChzS6BCouzvzeSCkp/imageSticker-c7de4b64-199b-46d1-a706-5ef42efd1f00.png?_a=ATAABd60" alt=""/>
                        <p>
                            It would be wrong for us to give much information for now, because it is still at the prototype stage. but together with our team, we plan to finish this product quickly and open it for sale.
                        </p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="font-medium text-lg">For more information..</p>
                    <div className="text-stone-500 space-y-5">
                        <p>For more information, you can check our <a className="text-stone-100" href="https://read.cv/settleco">Read.cv</a> account. We are mainly using this platform.</p>
                        <div>
                            <p>Peace and love,</p>
                            <p>The SettleCo Team ✌️</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
