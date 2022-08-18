import { useRouter } from 'next/router'
import {useEffect} from "react";
import Ogp from "../../components/ogp";

export default function Home() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(function(){
            router.push("/contact")
        }, 5000)
    });
  return (
      <div className="md:w-5/12 w-11/12 mx-auto py-7 space-y-5">
          <Ogp title="Success"/>
          <div className="space-y-2 md:w-10/12">
              <p className="text-2xl font-medium dark:text-stone-700">Contact Us. > Success</p>
              <p className="text-stone-500">Thanks for reaching us! We will get back to you asap. You will redirect to Contact page with in 5 seconds..</p>
          </div>
      </div>
  )

}
