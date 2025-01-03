import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#1f1f1f] p-[20px] footer">
      <div className="flex flex-wrap justify-between">
        {/* Footer Column 1 */}
        <div className="flex-1 m-[10px] min-w-[200px]">
          <h4 className="text-gray-400 font-bold mb-[10px]">Fit Kayo</h4>
          <p className="my-[5px] text-white">
            A108 Adam Street <br />
            New York, NY 535022
          </p>
          <p className="text-white">
            Phone: +1 5589 55488 55 <br />
            Email: info@example.com
          </p>
        </div>

        {/* Footer Column 2 */}
        <div className="footer-col text-white mr-36 mt-3">
          <h5 className="footer-title text-gray-400 font-bold">Useful Links</h5>
          <div className="footer-links">
            <p>
              <span className="green">.</span> Home
            </p>
            <p>
              <span className="green">.</span> About Us
            </p>
            <p>
              <span className="green">.</span> Services
            </p>
            <p>
              <span className="green">.</span> Terms of Service
            </p>
          </div>
        </div>

        {/* Footer Column 3 */}
        <div className="footer-col mr-28 mt-3">
          <h5 className="footer-title text-gray-400 font-bold">Our Services</h5>
          <div className="footer-links text-white">
            <p>
              <span className="green">.</span> Workout
            </p>
            <p>
              <span className="green">.</span> Diet
            </p>
            <p>
              <span className="green">.</span> Personal Consultants
            </p>
            <p>
              <span className="green">.</span> Shopping
            </p>
          </div>
        </div>

        {/* Footer Column 4 */}
        <div className="footer-col mt-2">
          <h5 className="footer-title text-gray-400 font-bold">Follow Us</h5>
          <p className="mt-2 text-white">
            Cras fermentum odio eu feugiat lide par naso <br /> tierra videa
            magna derita valies
          </p>
          <div className="social-icons flex gap-3 mt-6">
            <span className="text-white">
              <FaFacebookF />
            </span>
            <span className="text-white">
              <FaXTwitter />
            </span>
            <span className="text-white">
              <FaWhatsapp />
            </span>
            <span className="text-white">
              <FaYoutube />
            </span>
            <span className="text-white">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
