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
    <footer className="w-full sm:w-7/10 bg-white rounded-xl shadow-sm px-8 py-10 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-8 border-gray-200 pb-8">
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">Programs</h3>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li>Part-time AI Automation bootcamp</li>
            <li>Part-time AI & Machine Learning bootcamp</li>
            <li>Part-time BI Analytics bootcamp</li>
            <li>Part-time Cyber Security bootcamp</li>
            <li>Part-time Quality Assurance bootcamp</li>
            <li>Part-time Software Engineering bootcamp</li>
            <li>Part-time UX/UI Design bootcamp</li>
            <li>Free Intro to SQL</li>
            <li>Can’t decide? Take a career quiz!</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">
            Why TripleTen
          </h3>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li>Real industry experts</li>
            <li>One-on-one support</li>
            <li>Flexible payment options</li>
            <li>1000+ successful graduates</li>
            <li>2025 Outcomes report</li>
            <li>Comparison</li>
            <li>Student reviews</li>
          </ul>

          <div className="mt-4 text-lg text-gray-800">
            <p>
              <span className="font-semibold">press@tripleten.com</span> <br />
              For all media inquiries
            </p>
            <p className="mt-3">
              <span className="font-semibold">support@tripleten.com</span> <br />
              For all your questions
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">
            About TripleTen
          </h3>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li>About</li>
            <li>FAQ</li>
            <li>Support</li>
            <li>Careers</li>
            <li>Podcast</li>
            <li>For universities</li>
            <li>Site map</li>
          </ul>

          <div className="mt-4 text-lg text-gray-800">
            <p>
              <span className="font-semibold">+1 (800) 738-4461</span> <br />
              8am–8pm ET, Mon–Thu <br />
              9am–6pm ET, Fri–Sun
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section - Social Icons */}
      <div className="flex justify-start gap-6 text-gray-700 text-3xl my-6">
        <FaFacebookF className="hover:text-black cursor-pointer" />
        <FaInstagram className="hover:text-black cursor-pointer" />
        <FaYoutube className="hover:text-black cursor-pointer" />
        <FaLinkedinIn className="hover:text-black cursor-pointer" />
        <FaXTwitter className="hover:text-black cursor-pointer" />
        <FaTiktok className="hover:text-black cursor-pointer" />
      </div>

      {/* Bottom Section */}
      <div className="justify-between items-center text-lg text-gray-500 border-gray-200 pt-4">
        <div className="flex flex-col sm:flex-row w-full justify-between sm:items-center my-6 gap-4">
          <a href="#">Terms of use</a>
          <a href="#">Code of Conduct</a>
          <a href="#">Regulatory Information</a>
          <a href="#">Referral program</a>
          <a href="#">Privacy policy</a>
          <a href="#">Manage cookies</a>
        </div>

        <div className="sm:flex justify-between items-center  mt-10">
          <div>© TripleTen, 2025</div>
          <div>299 South Main, Suite 1300, Salt Lake City, UT 84101</div>
        </div>
      </div>
    </footer>
  );
}
