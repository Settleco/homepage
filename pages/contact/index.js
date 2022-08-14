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
                        data-netlify="true" className="space-y-4">
                      <input type="hidden" name="form-name" value="contact"/>
                      <div>
                          <label className="sr-only" htmlFor="name">Name</label>
                          <input className="w-full p-3 text-sm border-gray-200 bg-black/20 dark:bg-stone-300 rounded-lg"
                                 name="Name" placeholder="Name" type="text" id="name"/>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                              <label className="sr-only" htmlFor="email">Email</label>
                              <input
                                  className="w-full bg-black/20 p-3 text-sm border-gray-200 dark:bg-stone-300  rounded-lg"
                                  placeholder="Email address"
                                  type="email"
                                  id="email"
                                  name="email"
                              />
                          </div>

                          <div>
                              <label className="sr-only" htmlFor="phone">Phone</label>
                              <input
                                  className=" bg-black/20 w-full p-3 text-sm border-gray-200 dark:bg-stone-300  rounded-lg"
                                  placeholder="Phone Number"
                                  type="tel"
                                  id="phone"
                                  name="phone"
                              />
                          </div>
                      </div>

                      <div>
                          <label className="sr-only" htmlFor="message">Message</label>
                          <textarea
                              className="w-full bg-black/20 p-3 text-sm border-gray-200 dark:bg-stone-300  rounded-lg"
                              placeholder="Message"
                              rows="8"
                              id="message"
                              name="message"
                          ></textarea>
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
