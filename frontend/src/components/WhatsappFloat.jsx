import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloat = () => {
    return (
        <a
            href="https://wa.me/919893309179"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-white p-3 rounded-full shadow-xl hover:scale-110 transition"
        >
            <FaWhatsapp className="text-[#25D366] text-3xl" />
        </a>
    );
};

export default WhatsappFloat;