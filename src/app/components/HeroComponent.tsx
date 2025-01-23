import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function HeroSection() {
  return (
    <div className=" bg-gray-900" id="hero">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 bg-inherit lg:w-full lg:max-w-2xl">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform lg:block"
          >
            <polygon points="0,0 90,0 50,100 0,100" className="fill-gray-900" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto  max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-gray-300 text-5xl font-semibold tracking-tight sm:text-7xl">
                Olá! Me chamo Guilherme
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://github.com/hiagofmendes"
                  target="blank"
                  className="rounded-md flex flex-row gap-2 items-center bg-purple-600 py-3 text-gray-50 hover:bg-purple-500 transition-all px-3.5 text-base font-bold"
                >
                  Github
                  <FaGithub size={"18px"} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hiago-mendes-0b5752262/"
                  target="blank"
                  className="rounded-md flex flex-row gap-2 items-center bg-purple-600 py-3 text-gray-50 hover:bg-purple-500 transition-all px-3.5 text-base font-bold"
                >
                  Linkedin
                  <FaLinkedin size={"18px"} />
                </a>
                <a
                  href="https://www.instagram.com/sxtech.softwares/"
                  target="blank"
                  className="rounded-md flex flex-row gap-2 items-center bg-purple-600 py-3 text-gray-50 hover:bg-purple-500 transition-all px-3.5 text-base font-bold"
                >
                  Instagram
                  <FaInstagram size={"18px"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
        />
      </div>
    </div>
  );
}
