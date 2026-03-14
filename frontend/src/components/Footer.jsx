import pineLogo from "../assets/pineLogo.png";
import phoneLogo from "../assets/ic_baseline-phone.svg";
import mailLogo from "../assets/uiw_mail.svg";
import whatsLogo from "../assets/ri_whatsapp-fill.svg";

const phoneGroups = [
  ["+7 981 689 40 46", "+48 726 299 146"],
  ["+91 98933 09179", "+91 93000 99179"],
];

const Footer = () => {
  return (
    <footer className="bg-secondary rounded-3xl px-6 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="hidden md:block">
          <img src={pineLogo} alt="Grovol Pine logo" className="h-20" />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-secondary text-sm md:text-base">

          {/* Phones */}
          <div className="flex flex-col md:flex-row gap-4">
            {phoneGroups.map((group, i) => (
              <div key={i} className="flex items-center gap-2">
                <img src={phoneLogo} alt="phone" className="w-5 h-5" />
                <div className="flex gap-2">
                  {group.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="hover:underline"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <img src={mailLogo} alt="email" className="w-5 h-5" />
            <a
              href="mailto:info@grovolpine.com "
              className="text-lg hover:underline"
            >
              info@grovolpine.com
            </a>
          </div>
        </div>

        {/* Social / Contact Icons */}
        <div className="flex gap-3">
          <a
            href="mailto:info@grovolpine.com "
            className="bg-dark rounded-full p-2 hover:scale-105 transition"
          >
            <img src={mailLogo} alt="mail" className="w-6 h-6" />
          </a>

          <a
            href="https://wa.me/919893309179"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark rounded-full p-2 hover:scale-105 transition"
          >
            <img src={whatsLogo} alt="whatsapp" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;