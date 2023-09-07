import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const footer = () => {
  return (
<footer className="bg-green-500">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="lg:grid lg:grid-cols-2">
      <div
        class=" py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
      >
        <div className="block">
        <Link href="/" className="">
          <Image src="/logo.png" alt="drone logo" width="50" height="50"/>
        </Link>
        </div>

        <div className="mt-8 space-y-4 lg:mt-0">
          <span class="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>

          <div>
            <h2 class="text-2xl font-medium text-gray-900">Request a Demo</h2>

            <p class="mt-4 max-w-lg text-gray-500">
            Experience the future of aerial services with Tororo Drone Services - your trusted partner for drone technology solutions, setting new heights in innovation and excellence.
            </p>
          </div>

          <form class="mt-6 w-full">
            <label for="UserEmail" class="sr-only"> Email </label>

            <div
              class="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="info@tororodrone.com"
                class="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
              />

              <button
                class="mt-1 w-full rounded bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="py-8 lg:py-16 lg:pe-16">
        <div class="hidden text-teal-600 lg:block">
       
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p class="font-medium text-gray-900">Services</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Special Events
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Sporting Events
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Live Broadcast
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Marathons
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                Live Feed Surveillance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-medium text-gray-900">Company</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  About
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Meet the Team
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Accounts Review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-medium text-gray-900">Helpful Links</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 border-t border-gray-100 pt-8">
          <ul class="flex flex-wrap gap-4 text-xs">
            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Cookies
              </a>
            </li>
          </ul>

          <p class="mt-8 text-xs text-gray-500">
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