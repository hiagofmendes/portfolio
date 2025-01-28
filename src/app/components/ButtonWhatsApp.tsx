import { FaWhatsapp } from "react-icons/fa";

export default function ButtonWhatsApp() {
  return (
    <button className="fixed right-5 bottom-5 z-20 rounded-full bg-green-600 w-16 h-16 justify-center items-center flex">
      <a
        target="blank"
        href="https://api.whatsapp.com/send?phone=5511999999999&text=Olá%20SXTech!%20Gostaria%20de%20saber%20mais%20informações."
        className=""
      >
        <span className="sr-only">Whatsapp</span>
        <FaWhatsapp className="text-gray-50 hover:scale-110" size={44} />
      </a>
    </button>
  );
}
