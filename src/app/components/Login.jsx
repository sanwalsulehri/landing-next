'use client'

import React from 'react'
import Logo from '../../../public/logo.svg'
import Image from 'next/image'

const Login = ({signInhandler}) => {
  return (
    <>
    <div className="flex fixed top-0 left-0 min-h-screen w-full h-full z-[999999999999999] items-center px-4 justify-center">
        <div onClick={signInhandler} className="fixed z-[20] w-full h-full bg-black/60 top-0 left-0"></div>
   

        <div className="xl:grid xl:grid-cols-12 rounded-2xl overflow-hidden absolute top-1/2 -translate-y-1/2 z-[999] bg-white w-[97%] sm:w-fit xl:w-[95%] mx-auto h-fit xl:h-[95%]">
  <div className="flex flex-1 xl:col-span-5 flex-col justify-center py-12 xl:flex-none px-4 sm:px-20 xl:w-auto xl:px-24">
    <div className="md:mx-auto md:max-w-sm w-full sm:w-96">
      <div>
        <Image className="h-10 w-auto" src={Logo} alt="Your Company" />
        <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
       
      </div>

      <div className="mt-10">
        <div>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
              <div className="mt-2">
                <input type="email" name="email" id="email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
              <div className="mt-2">
                <input type="password" name="password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input id="remember-me" name="remember-me" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                    <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                      <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <label for="remember-me" className="block text-sm/6 text-gray-900">Remember me</label>
              </div>

              <div className="text-sm/6">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>
        </div>

       
      </div>
    </div>
  </div>
  <div className="relative hidden xl:col-span-7 overflow-hidden flex-1 xl:block">
    <img className="absolute inset-0 size-full object-cover" src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="" />
  </div>
</div>


    </div>
   

    </>
  )
}

export default Login;