import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container-fluid mx-0 p-3 text-bg-dark mt-5 d-flex flex-column align-items-center flex-lg-row justify-content-lg-around bottom-0">
      <div className="mb-2">
        {/* <a
          href="https://www.linkedin.com/in/nickelcy-francois-7bba72366/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FaLinkedin size={26} className="socials s1" />
        </a> */}
        {/* <a
          href="https://github.com/nickelcy"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <SiGithub size={30} className="socials s2" />
        </a> */}
        {/* <a
          href="https://youtube.com/@nickelcyfrancois"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FaYoutube size={30} className="socials s3" />
        </a> */}
        <a
          href="https://www.instagram.com/trade_guyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FaInstagram size={26} className="rounded-3 socials s4" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61577090506600"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FaFacebook size={26} className="rounded-3 socials s1" />
        </a>
        <a
          href="https://www.tiktok.com/@tradeguyz"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FaTiktok size={26} className="rounded-3 socials s2" />
        </a>
      </div>
      <p className="text-center px-3 small mb-0">
        Copyright&copy; 2025. Design & Maintained by N. Francois
      </p>
    </footer>
  );
};

export default Footer;
