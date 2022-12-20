import React from 'react'
import { Outlet, Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center bg-[#111827]">
      <h1 class="text-9xl font-extrabold text-yellow-600 tracking-widest">
        404
      </h1>
      <div class="bg-white px-2 text-sm text-gray-900 p-2 rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5">
        <a class="relative inline-block text-sm font-medium text-yellow-600 group active:text-yellow-600 focus:outline-none focus:ring">
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-yellow-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative block px-8 py-3 text-gray-900 bg-yellow-600 border-none border-current">
            <Link to={`/`}>Go Home</Link>
          </span>
        </a>
      </button>
    </main>
  );
}

export default NotFound