import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
      <>

          <Script src="https://www.google.com/recaptcha/api.js" async defer></Script>
          <div className="md:w-5/12 w-11/12 mx-auto py-7 space-y-5">
              <div className="space-y-2 md:w-10/12">
                  <p className="text-2xl font-medium dark:text-stone-700">Contact Us.</p>
                  <p className="text-stone-500">You can contact us via <a href="mailto:contact@settleco.net"
                                                                          className="text-stone-200 dark:text-stone-700">E-mail
                      by clicking on this text</a>, but if you write via e-mail, we will most likely give you a late
                      reply. Therefore, if you want to reach us, it would make more sense to fill out the form below.
                  </p>
              </div>
              <div className="p-8 bg-black/20 dark:bg-stone-200  rounded-lg lg:p-12 lg:col-span-3">
                  <form name="contact" data-netlify-recaptcha="true" action="/contact/success" method="POST"
                        data-netlify="true" className="">
                      <input type="hidden" name="form-name" value="contact"/>
                      <div className="form-control w-full">
                          <label className="label">
                              <span className="label-text dark:text-stone-700">What is your name?</span>
                              <span className="label-text-alt text-red-400 dark:text-red-600">Required</span>
                          </label>
                          <input required placeholder="Type here" type="name" id="name" className="input input-bordered bg-black/25 dark:bg-stone-300 w-full"/>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="form-control w-full">
                              <label className="label">
                                  <span className="label-text dark:text-stone-700">What is your E-Mail?</span>
                                  <span className="label-text-alt text-red-400 dark:text-red-600">Required</span>
                              </label>
                              <input required placeholder="Type here" type="email" id="email" className="input input-bordered bg-black/25 dark:bg-stone-300 w-full"/>
                          </div>
                          <div className="form-control w-full">
                              <label className="label">
                                  <span className="label-text dark:text-stone-700">What is your Number?</span>
                              </label>
                              <input placeholder="Type here" type="phone" id="phone" className="input input-bordered bg-black/25 dark:bg-stone-300 w-full"/>
                          </div>
                      </div>
                      <div className="form-control w-full mb-4">
                          <label className="label">
                              <span className="label-text dark:text-stone-700">Finnaly, why did you contact us?</span>
                              <span className="label-text-alt text-red-400 dark:text-red-600">Required</span>
                          </label>
                          <textarea required name="message" id="message" className="textarea textarea-bordered w-full bg-black/25 dark:bg-stone-300 " placeholder="Message"></textarea>
                      </div>
                      <div className="grid justify-items-center space-y-4">
                          <div className="g-recaptcha max-w-2xl" data-sitekey="6LfQoXUhAAAAAL74RQpAh6qPsabSxYZfNd3G2IYP"></div>

                          <button
                              type="submit"
                              className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black/50 dark:bg-stone-500/75 rounded-lg"
                          >
                              <span className="font-medium"> Send  </span>

                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-5 h-5 ml-3"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                              >
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                              </svg>
                          </button>
                      </div>
                      <div data-netlify-recaptcha="true"></div>

                  </form>

              </div>
          </div>
      </>
      )
}
