import React, { useState } from "react";
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "../img/lightormekalogo.png"
import { PiFacebookLogoThin, PiInstagramLogoThin } from "react-icons/pi";
import navigation from "../data/navigation";

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [navBack, setNavBack] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 128) {
            setNavBack(true);
        }
        else {
            setNavBack(false);
        }

    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className="navigation bg-amber-400 sticky top-0 z-40">
            <div className= 'navbar w-full sticky top-0 z-40 h-20 bg-amber-400 text-black transition duration-500  ease-out '
                >
                <header className="absolute inset-x-0 top-0">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className=" lg:flex-1 flex items-center justify-center">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Ormeka</span>
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12 drop-shadow-2xl">
                            {navigation.map((item) => (
                                <div key={item.name} className="div hover:border-b-2 hover:border-stone-900 h-10">
                                    <a key={item.name} href={item.href} className="text-lg font-light leading-6">
                                        {item.name}
                                    </a>
                                </div>

                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <div className="social flex justify-between">
                                <a target="_blank" rel="noopener noreferrer"
                                 href="">
                                  <PiFacebookLogoThin className="h-10 w-10 bg-none text-black" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer"
                                 href="https://www.instagram.com/ormeka_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                   <PiInstagramLogoThin className="h-10 w-10 bg-none text-black" /> 
                                </a>
                                
                            </div>

                        </div>
                    </nav>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-stone-900/10">
                            <div className="flex items-center justify-between">
                                <a href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Ormeka</span>
                                    <img
                                        className="h-16 w-auto"
                                        src={logo}
                                        alt="ormeka inşaat"
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-stone-500"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Menüyü Kapat</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-stone-500/10">
                                    <div className="space-y-2 py-6 drop-shadow-xl ">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-xl font-light  leading-7 text-white hover:bg-amber-400"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>

                </header>



            </div>
        </div>
    );
}
export default Navbar;