"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const navigation = [
  { name: "Sobre", url: "hero" },
  { name: "Serviços", url: "services" },
  { name: "Projetos", url: "projects" },
  { name: "Contato", url: "" },
];

export default function HeadeComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="inset-x-0 top-0 z-50 bg-gray-900 shadow-lg fixed">
      <div className="w-auto flex flex-row mx-8 my-2 justify-between">
        <div className="w-[50%] flex justify-center">
          <div className="flex items-center lg:w-[50%] w-full">
            <a href="#" className="-m-1.5 p-1.5 items-center flex">
              <span className="sr-only">SX-Tech</span>
              <img
                alt="SX"
                src="/img/LogoSX3.jpeg"
                className="h-12 w-auto rounded-full hover:scale-110"
              />
            </a>
          </div>
          <div></div>
        </div>
        <div className="mr-0 pt-4 lg:max-w-2xl lg:pl-8 lg:pr-0 pb-2 flex-row flex w-full justify-end lg:justify-normal">
          <nav aria-label="Global" className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 rounded-md p-2.5 text-gray-50 lg:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
            <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
              {navigation.map((item) => (
                <Link
                  to={item.url}
                  activeClass="active"
                  key={item.name}
                  href={item.url}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-sm/6 font-semibold hover:scale-110 text-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/img/LogoSX.jpg"
                className="h-12 w-auto rounded-full hover:scale-110"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    to={item.url}
                    activeClass="active"
                    key={item.name}
                    href={item.url}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="-mx-3  block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-50 hover:bg-gray-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
