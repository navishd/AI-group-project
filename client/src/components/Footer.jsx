import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* Logo + description */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="/">
            <img
              src={assets.logo}
              alt="Logo"
              className="h-10 w-auto"
            />
          </a>
          <p className="text-sm/7 mt-6">
            Experience the future of content creation with Quick AI. <br/>From crafting articles to generating blog titles, we make your ideas come alive.
          </p>
        </div>

        {/* Company links */}
        <div className="flex flex-col lg:items-center lg:justify-center">
          <div className="flex flex-col text-sm space-y-2.5">
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <a className="hover:text-slate-600 transition" href="#">
              About us
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Careers
              <span className="text-xs text-white bg-indigo-600 rounded-md ml-2 px-2 py-1">
                We’re hiring!
              </span>
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Contact us
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Privacy policy
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-5">
            Subscribe to our newsletter
          </h2>
          <div className="text-sm space-y-6 max-w-sm">
            <p>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-indigo-50">
              <input
                className="focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 py-2 rounded px-2"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-primary px-4 py-2 text-white rounded cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <p className="py-4 text-center border-t mt-6 border-slate-200">
        Copyright 2025 ©{" "}
        <a href="https://prebuiltui.com" className="hover:underline">
          GreatStack
        </a>{" "}
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
