import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const footer = () => {
  return (
<footer className="bg-green-500">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2">
      <div
        className=" py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
      >
        <div className="block">
        <Link href="/" className="">
          <Image src="/logo.png" alt="drone logo" width="50" height="50"/>
        </Link>
        </div>

        <div className="mt-8 space-y-4 lg:mt-0">
          <span className="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>

          <div>
            <h2 className="text-2xl font-medium text-gray-900">Request a Demo</h2>

            <p className="mt-4 max-w-lg text-gray-500">
            Experience the future of aerial services with Tororo Drone Services - your trusted partner for drone technology solutions, setting new heights in innovation and excellence.
            </p>
          </div>

          <form className="mt-6 w-full">
            <label for="UserEmail" className="sr-only"> Email </label>

            <div
              className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="info@tororodrone.com"
                className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
              />

              <button
                className="mt-1 w-full rounded bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="py-8 lg:py-16 lg:pe-16">
        <div className="hidden text-teal-600 lg:block">
       
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="font-medium text-gray-900">
              <Link href="#">
              Services
              </Link>
              </p>
             
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  Special Events
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  Sporting Events
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  Live Broadcast
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  Marathons
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                Live Feed Surveillance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  About
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  Meet the Team
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-700 transition hover:opacity-75">
                  Accounts Review
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link href="/contact" className="text-gray-700 transition hover:opacity-75">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/frequently-asked-questions-faqs" className="text-gray-700 transition hover:opacity-75">
                  FAQs
                </Link>
              </li>

            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <ul className="flex flex-wrap gap-4 text-xs">
            <li>
              <Link href="/terms-and-conditions" className="text-gray-500 transition hover:opacity-75">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link href="/privacy-policy-2" className="text-gray-500 transition hover:opacity-75">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/cookies-policy" className="text-gray-500 transition hover:opacity-75">
                Cookies
              </Link>
            </li>
          </ul>

          <p className="mt-8 text-xs text-gray-500">
            &copy; 2023. Tororo Drone Services. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default footer