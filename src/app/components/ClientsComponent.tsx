export default function ClientsComponent() {
  return (
    <div className="h-full w-full bg-gray-900 py-24 flex flex-col relative isolate overflow-hidden">
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <h2 className="text-5xl font-semibold tracking-tight text-gray-50 sm:text-7xl text-center w-full">
        Clientes
      </h2>
      <div className="flex flex-wrap gap-8 mx-auto px-6 lg:px-8 pt-12 max-w-full justify-center">
        <img
          alt="Client1"
          src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg"
          //   width={158}
          //   height={48}
          className="h-12 lg:h-16 w-auto object-contain"
        />
        <img
          alt="Client2"
          src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg"
          //   width={158}
          //   height={48}
          className="h-12 lg:h-16 w-auto object-contain"
        />
        <img
          alt="Client3"
          src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg"
          //   width={158}
          //   height={48}
          className="h-12 lg:h-16 w-auto object-contain"
        />
        <img
          alt="Client4"
          src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg"
          //   width={158}
          //   height={48}
          className="h-12 lg:h-16 w-auto object-contain"
        />
        <img
          alt="Client5"
          src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg"
          //   width={158}
          //   height={48}
          className="h-12 lg:h-16 w-auto object-contain"
        />
      </div>
    </div>
  );
}
