import { useState } from "react";
import Image from "next/image";
import logo from "/public/images/logo1.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-black pt-4 ">
      <div className="container mx-auto max-w-[1600px] py-20 px-4">
        <div>
          <div className="flex max-md:flex-col gap-7">
            <div>
              <div className="max-w-420">
                <div className="w-198 h-74">
                  <Image src={logo} alt="Logo" />
                </div>
                <div className="text-white text-lg font-normal my-4 max-xl:text-sm  max-lg:text-sm">
                  <p>
                    Open source is source code that is made freely available for
                    possible modification and redistribution. Products include
                    permission to use the source code, design documents, or
                    content of the product.
                  </p>
                </div>
                <div className="flex flex-row gap-5">
                  <div className="rounded-full bg-yellow h-62 w-62 flex justify-center items-center p-3 max-xl:h-12 max-xl:w-12 max-lg:h-10 max-lg:w-10">
                    <Image src={instagram} alt="insta" />
                  </div>
                  <div className="rounded-full bg-yellow h-62 w-62 flex justify-center items-center p-3 max-xl:h-12 max-xl:w-12 max-lg:h-10 max-lg:w-10">
                    <Image src={facebook} alt="facebook" />
                  </div>
                  <div className="rounded-full bg-yellow h-62 w-62 flex justify-center items-center p-3 max-xl:h-12 max-xl:w-12 max-lg:h-10 max-lg:w-10">
                    <Image src={twitter} alt="twitter" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-130 pl-68  max-xl:gap-20 max-xl:pl-8  max-lg:gap-16 max-lg:pl-7 max-lg:pr-12 max-md:flex-col max-lg:block max-md:px-0">
                <div className="flex justify-between gap-24 max-md:mt-12 max-sm:block max-sm:justify-around max-lg:gap-0 max-md:justify-between max-md:gap-28 max-xl:gap-12">
                  <div className="text-white">
                    <h3 className="font-bold text-2xl font-inter mb-6 max-xl:text-lg max-lg:text-base">
                      Explore
                    </h3>
                    <ul className="flex flex-col gap-6">
                      <li>
                        <a
                          href="#"
                          className="hover:underline text-sm font-normal font-inter max-xl:text-xs max-xl:leading-none"
                        >
                          Go pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:underline text-sm font-normal font-inter max-xl:text-xs max-xl:leading-none"
                        >
                          Explore Designs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:underline text-sm font-normal font-inter max-xl:text-xs max-xl:leading-none"
                        >
                          Create Designs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:underline text-sm font-normal font-inte max-xl:text-xs max-xl:leading-noner"
                        >
                          Playoffs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="text-white">
                    <h3 className="font-bold text-2xl font-inter mb-6  max-xl:text-lg max-lg:text-base">
                      Innovate
                    </h3>
                    <ul className="flex flex-col gap-6">
                      <li>
                        <a
                          href="#"
                          className="hover:underline text-sm font-normal font-inter max-xl:text-xs max-xl:leading-none"
                        >
                          Tags
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:underline text-sm font-normal font-inter max-xl:text-xs max-xl:leading-none "
                        >
                          API
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:underline text-sm font-normal font-inter max-xl:text-xs max-xl:leading-none"
                        >
                          Places
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:underline text-sm font-normal font-inter max-xl:text-xs max-xl:leading-none"
                        >
                          Creative Markets
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="text-white max-sm:mt-12">
                    <h3 className="font-bold text-2xl font-inter mb-6  max-xl:text-lg max-lg:text-base">
                      About
                    </h3>
                    <ul className="flex flex-col gap-6">
                      <li>
                        <a
                          href="#"
                          className="hover:underline text-sm font-normal font-inter max-xl:text-xs max-xl:leading-none"
                        >
                          Community
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:underline text-sm font-normal font-inter max-xl:text-xs max-xl:leading-none"
                        >
                          Designers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:underline text-sm font-normal font-inter max-xl:text-xs max-xl:leading-none"
                        >
                          Support
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:underline text-sm font-normal font-inter max-xl:text-xs max-xl:leading-none"
                        >
                          Terms of Service
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="max-w-382 max-md:block max-md:m-auto max-lg:mt-14 max-sm:mt-10 max-md:mt-20">
                  <span className="text-26 text-white mb-2 font-bold font-inter max-xl:text-base max-lg:text-base">
                    Subscribe for the Latest Insights
                  </span>
                  <p className="text-lg text-grayscale font-Archivo font-normal mb-4 max-xl:text-base leading-none max-lg:text-sm">
                    Get exclusive content and updates on industry trends and
                    estimations.
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-8 py-4 bg-white rounded-full w-full mb-4 font-Archivo text-lg font-normal text-grayscale max-xl:text-sm max-xl:p-3 max-lg:p-3 max-lg:text-xs"
                  />
                  <button className="rounded-full bg-yellow text-black py-4 px-6 font-Archivo text-base font-medium max-xl:text-sm max-xl:p-3 max-lg:p-3 max-lg:text-xs">
                    Subscribe Newsletter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grayscale1 text-sm py-2 ">
        <div className="container mx-auto flex justify-between max-lg:block">
          <p className="font-inter font-normal text-base max-lg:text-center">
            Copyright © 2024 Get Estimation | All rights reserved.
          </p>
          <div className="space-x-4 font-inter font-normal text-base max-lg:text-center">
            <a href="#" className="hover:underline ">
              Terms and conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:underline ">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              2024© Get Estimation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
