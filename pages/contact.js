import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
      <div className="md:w-5/12 w-11/12 mx-auto py-7 space-y-5">
          <div className="space-y-2 md:w-10/12">
              <p className="text-2xl font-medium">Contact Us.</p>
              <p className="text-stone-500">You can contact us via <a href="mailto:contact@settleco.net" className="text-stone-200">E-mail by clicking on this text</a>, but if you write via e-mail, we will most likely give you a late reply. Therefore, if you want to reach us, it would make more sense to fill out the form below.</p>
          </div>
          <div class="p-8 bg-black/20 rounded-lg lg:p-12 lg:col-span-3">
                          <form name="contact" method="POST" data-netlify="true" netlify class="space-y-4">
                              <div>
                                  <label class="sr-only" for="name">Name</label>
                                  <input class="w-full p-3 text-sm border-gray-200 bg-black/20 rounded-lg" placeholder="Name" type="text" id="name" />
                              </div>

                              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                  <div>
                                      <label class="sr-only" for="email">Email</label>
                                      <input
                                          class="w-full bg-black/20 p-3 text-sm border-gray-200 rounded-lg"
                                          placeholder="Email address"
                                          type="email"
                                          id="email"
                                      />
                                  </div>

                                  <div>
                                      <label class="sr-only" for="phone">Phone</label>
                                      <input
                                          class=" bg-black/20 w-full p-3 text-sm border-gray-200 rounded-lg"
                                          placeholder="Phone Number"
                                          type="tel"
                                          id="phone"
                                      />
                                  </div>
                              </div>

                              <div>
                                  <label class="sr-only" for="message">Message</label>
                                  <textarea
                                      class="w-full bg-black/20 p-3 text-sm border-gray-200 rounded-lg"
                                      placeholder="Message"
                                      rows="8"
                                      id="message"
                                  ></textarea>
                              </div>

                              <div class="mt-4">
                                  <button
                                      type="submit"
                                      class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black/50 rounded-lg sm:w-auto"
                                  >
                                      <span class="font-medium"> Send  </span>

                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          class="w-5 h-5 ml-3"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                      >
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                      </svg>
                                  </button>
                              </div>
                          </form>
                      </div>
      </div>
  )
}
