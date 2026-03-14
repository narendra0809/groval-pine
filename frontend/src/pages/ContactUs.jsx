import contactImg from "../assets/contact/contact-us.jpg";
import uploadImg from "../assets/contact/upload.svg";
import upArrow from "../assets/contact/up-arrow.svg";
import phone from "../assets/contact/phone.svg";
import mail from "../assets/contact/mail.svg";
import location from "../assets/contact/location.svg";
const ContactUs = () => {
  return (
    <div className="flex gap-8 my-14">
      <div className="flex-1 bg-[#EFE9E4] rounded-[30px] py-6 px-8">
        <div
          style={{
            fontFamily: "Tomato Grotesk",
          }}
          className="max-sm:text-center justify-start text-2xl sm:text-5xl font-semibold"
        >
          <span className="text-zinc-800">
            Get in touch with us <br />
            to{" "}
          </span>
          <span className="text-primary">
            GROW{" "}
            <span className="justify-start text-zinc-800 text-lg sm:text-xl font-semibold ">
              Drop us a line!
            </span>{" "}
          </span>
        </div>
        <form className="mt-10 flex flex-col gap-8 max-sm:text-sm">
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name..."
              className="block w-full rounded-[12px] border border-[#33333380]  px-4 py-3  placeholder:text-secondary focus:outline-none focus:border-primary"
            />
            <label
              htmlFor="name"
              className="absolute -top-3.5 left-4  bg-[#EFE9E4] text-primary pointer-events-none select-none"
            >
              Name*
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="email"
              placeholder="Enter Your Email..."
              className="block w-full rounded-[12px] border border-[#33333380]  px-4 py-3  placeholder:text-secondary focus:outline-none focus:border-primary"
            />
            <label
              htmlFor="email"
              className="absolute -top-3.5 left-4  bg-[#EFE9E4] text-primary pointer-events-none select-none"
            >
              E-mail*
            </label>
          </div>
          <div className="relative">
            <textarea
              type="text"
              id="message"
              placeholder="Message..."
              className="block w-full rounded-[12px] border border-[#33333380]  px-4 py-3  placeholder:text-secondary focus:outline-none focus:border-primary"
            />
            <label
              htmlFor="message"
              className="absolute -top-3.5 left-4  bg-[#EFE9E4] text-primary pointer-events-none select-none"
            >
              Message*
            </label>
          </div>
          <div className="self-stretch h-32 p-5 rounded-xl border-2 border-dashed border-stone-400 inline-flex flex-col justify-center items-center gap-1">
            <div className="flex flex-col items-center gap-2 justify-center">
              <img src={uploadImg} alt="" width={40} height={40} />
              <button
                type="submit"
                className="cursor-pointer text-sm font-medium font-['DM_Sans'] leading-snug"
              >
                Upload file
              </button>
            </div>
            <input type="file" hidden />
          </div>
          <button className="mt-5 cursor-pointer self-stretch px-2.5 py-4 bg-primary rounded-[10px] inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-sm sm:text-lg font-medium font-['Tomato_Grotesk'] leading-snug">
              Submit
            </div>
          </button>
        </form>
      </div>
      <div className="flex-1 hidden md:block">
        <div className="relative h-full">
          <img
            src={contactImg}
            alt="contact"
            className="h-full rounded-[30px]"
          />
          <p className="absolute top-5 right-10 flex gap-2">
            <img src={upArrow} alt="uparrow" />
            <span className="text-white text-5xl font-semibold">
              Contact Us
            </span>
          </p>
          <div className="absolute bottom-0 w-full p-5">
            <div className="flex flex-col gap-7  backdrop-blur-sm p-5 rounded-[20px]">
              <div>
                <div className="flex items-center gap-3">
                  <span>
                    <img src={mail} alt="mail" />
                  </span>
                  <a
                    href="mailto:info@grovolpine.com"
                    className="text-white text-xl font-medium hover:underline"
                  >
                    info@grovolpine.com
                  </a>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span>
                    <img src={phone} alt="phone" />
                  </span>
                  <a
                    href="tel:+919893309179"
                    className="text-white text-xl font-medium hover:underline"
                  >
                    +91 98933 09179
                  </a>
                  <span className="text-white"> | </span>
                  <a
                    href="tel:+919300099179"
                    className="text-white text-xl font-medium hover:underline"
                  >
                    +91 93000 99179
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span>
                    <img src={phone} alt="phone" />
                  </span>
                  <a
                    href="tel:+79816894046"
                    className="text-white text-xl font-medium hover:underline"
                  >
                    +7 981 689 40 46
                  </a>
                  <span className="text-white"> | </span>
                  <a
                    href="tel:+48726299146"
                    className="text-white text-xl font-medium hover:underline"
                  >
                    +48 726 299 146
                  </a>
                </div>
                {/* <div className="flex items-center gap-3">
                  <span>
                    <img src={mail} alt="mail" />
                  </span>
                  <p className="text-white text-xl font-medium">
                    grovolpine@gmail.com
                  </p>
                </div> */}
              </div>
              <div className="flex flex-col gap-4">
                {/* Factory Address */}
                <div className="flex items-start gap-3">
                  <img src={location} alt="location" />
                  <a
                    href="https://maps.google.com/?q=654/2/2 Opp Metro Pillar 502 Main Rohtak Road Mundka Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl font-medium hover:underline"
                  >
                    <span className="font-semibold">Factory:</span> 654/2/2, Opp. Metro Pillar
                    502, Main Rohtak Road, Village Mundka, Delhi - 110041
                  </a>
                </div>

                {/* Registered Office */}
                <div className="flex items-start gap-3">
                  <img src={location} alt="location" />
                  <a
                    href="https://maps.google.com/?q=M-37 Veena Nagar Indore 452010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl font-medium hover:underline"
                  >
                    <span className="font-semibold">Regd. Office:</span> M-37, Veena Nagar,
                    Indore - 452010, Madhya Pradesh, India
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
