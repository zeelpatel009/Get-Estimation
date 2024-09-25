import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black py-4">
      <div className="container mx-auto max-w-[1600px] flex justify-between items-center px-4">
        <div>
          <Image src={logo.src} width={195} height={74} alt="Logo" />
        </div>
        <nav className="hidden lg:flex space-x-8 font-Archivo text-lg">
          <Link href="#" className="hover:text-yellow text-white">
            Home
          </Link>
          <Link href="#" className="hover:text-yellow text-white">
            How It Works
          </Link>
          <Link href="#" className="hover:text-yellow text-white">
            Industries
          </Link>
          <Link href="#" className="hover:text-yellow text-white">
            Blog
          </Link>
          <Link href="#" className="hover:text-yellow text-white">
            Contact Us
          </Link>
        </nav>
        <div className="hidden lg:block">
          <Link
            href="#"
            className="bg-yellow hover:bg-yellow-500 text-black font-semibold py-22 px-37 rounded-full"
          >
            Get Estimate Now
          </Link>
        </div>

        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded text-yellow border-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0z" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="lg:hidden bg-black mt-4 px-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="#" className="hover:text-yellow text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow text-white">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow text-white">
                Industries
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="bg-yellow hover:bg-yellow-500 text-black font-semibold py-4 px-6 rounded-full"
              >
                Get Estimate Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;


