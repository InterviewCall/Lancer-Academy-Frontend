import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-white rounded-xl shadow-sm pl-4 pr-10 py-10 mt-28">
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-8 border-gray-200 pb-8">

        <div className="hidden justify-start gap-6 text-gray-700 text-3xl my-6 max-md:flex">
        <FaFacebookF className="hover:text-black cursor-pointer" />
        <FaInstagram className="hover:text-black cursor-pointer" />
        <FaYoutube className="hover:text-black cursor-pointer" />
        <FaLinkedinIn className="hover:text-black cursor-pointer" />
        <FaXTwitter className="hover:text-black cursor-pointer" />
        <FaTiktok className="hover:text-black cursor-pointer" />
      </div>

        {/* Programs */}
        <div>
          <h3 className="font-semibold text-[#1a1a1a] mb-4 text-xl">Programs</h3>
          <ul className="space-y-2 text-[#7f7f7f] text-lg">
            <li>Intermediate Software Engineering Program (7 months)</li>
            <li>Advanced Software Engineering Program (4 months)</li>
          </ul>
        </div>

        <div className="w-full h-0.5 bg-gray-200 max-md:block hidden"></div>

        {/* Why Lancrs Academy */}
        <div>
          <h3 className="font-semibold text-[#1a1a1a] mb-4 text-xl">
            Why Lancrs Academy
          </h3>
          <ul className="space-y-2 text-[#7f7f7f] text-lg">
            <li>Learn from real industry professionals</li>
            <li>One-on-one support & personalized guidance</li>
            <li>Flexible and transparent payment options</li>
            <li>Job-ready curriculum built for modern tech roles</li>
            <li>1000+ students trained across our ecosystem</li>
            <li>Outcomes-focused training</li>
            <li>Student success stories</li>
          </ul>

          <div className="w-full h-0.5 bg-gray-200 max-md:block hidden mt-8"></div>

          <div className="mt-4 text-lg text-gray-800 max-md:hidden block">
            <p>
              <span className="font-semibold text-[#1a1a1a]">support@academy.lancrs.com</span>{" "}
              <br />
              <span className="text-[#7f7f7f]">For all student questions</span>
            </p>
            <p className="mt-3">
              <span className="font-semibold text-[#1a1a1a] underline"><a href="tel:6295797609">+91-6295797609</a></span> <br />
              <span className="text-[#7f7f7f]">11am–7:30pm IST, Mon–Sat</span>
            </p>
          </div>
        </div>

        {/* About Lancrs Academy */}
        <div>
          <h3 className="font-semibold text-[#1a1a1a] mb-4 text-xl">
            About Lancrs Academy
          </h3>
          <ul className="space-y-2 text-[#7f7f7f] text-lg">
            <li>About us</li>
            <li>FAQ</li>
            <li>Support</li>
            <li>Careers</li>
            <li>Partnership for Colleges & Universities</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-0.5 bg-gray-200 max-md:block hidden"></div>

      <div className="mt-7 text-lg text-gray-800 max-md:block hidden">
        <p>
          <span className="font-semibold text-[#1a1a1a]">support@academy.lancrs.com</span>{" "}
          <br />
          <span className="text-[#7f7f7f]">For all student questions</span>
        </p>
        <p className="mt-3">
          <span className="font-semibold text-[#1a1a1a] underline"><a href="tel:6295797609">+91-6295797609</a></span> <br />
          <span className="text-[#7f7f7f]">11am–7:30pm IST, Mon–Sat</span>
        </p>
      </div>

      <div className="w-full h-0.5 bg-gray-200 max-md:block hidden mt-7"></div>

      {/* Middle Section - Social Icons */}
      <div className="flex justify-start gap-6 text-gray-700 text-3xl my-6 max-md:hidden">
        <FaFacebookF className="hover:text-black cursor-pointer" />
        <FaInstagram className="hover:text-black cursor-pointer" />
        <FaYoutube className="hover:text-black cursor-pointer" />
        <FaLinkedinIn className="hover:text-black cursor-pointer" />
        <FaXTwitter className="hover:text-black cursor-pointer" />
        <FaTiktok className="hover:text-black cursor-pointer" />
      </div>

      {/* Bottom Section */}
      <div className="justify-between items-center text-lg text-[#7f7f7f] border-gray-200 pt-4">
        <div className="flex flex-col sm:flex-row w-full justify-between sm:items-center my-6 gap-4">
          <a href="#">Terms of use</a>
          <a href="#">Code of Conduct</a>
          <a href="#">Regulatory Information</a>
          <a href="#">Referral program</a>
          <a href="#">Privacy policy</a>
          <a href="#">Manage cookies</a>
        </div>

        <div className="w-full h-0.5 bg-gray-200 max-md:block hidden mt-9"></div>

        <div className="sm:flex justify-between items-center mt-10">
          <div>© Lancrs Academy, 2025</div>
          <div>India</div>
        </div>
      </div>
    </footer>
  );
}
