import Logo from "@/assets/logo-white.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { GrPinterest } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { ActionLink } from "../buttons/action-link";

export function Footer() {
  return (
    <footer className="mt-[5.5rem] bg-neutral-800 text-neutral-50 py-10 xl:mt-20 xl:py-12">
      <div className="outer-container">
        <div className="inner-container grid grid-cols-1 gap-8 xl:grid-cols-[9.625rem,1fr,13.75rem] xl:gap-[8.1875rem]">
          <div className="flex flex-col items-center gap-8 xl:items-start xl:gap-[3.4375rem]">
            <a href="/#" aria-label="Homepage">
              <img src={Logo} alt="" />
            </a>
            <ul className="flex items-center gap-4 xl:gap-0 xl:w-full xl:justify-between">
              <li>
                <a
                  href="http://www.facebook.com"
                  aria-label="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare className="w-6 h-6 hover:text-primary xl:w-5 xl:h-5" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.youtube.com"
                  aria-label="youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiYoutubeFill className="w-6 h-6 hover:text-primary xl:w-5 xl:h-5" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.twitter.com"
                  aria-label="twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-6 h-6 hover:text-primary xl:w-5 xl:h-5" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.pinterest.com"
                  aria-label="pinterest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrPinterest className="w-6 h-6 hover:text-primary xl:w-5 xl:h-5" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.instagram"
                  aria-label="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-6 h-6 hover:text-primary xl:w-5 xl:h-5" />
                </a>
              </li>
            </ul>
          </div>
          <ul className="text-[0.9375rem] text-center leading-[1.625rem] flex flex-col gap-2 xl:flex-row xl:gap-[1.875rem] xl:text-left">
            <li>
              <ul className="flex flex-col gap-2 xl:w-[10rem]">
                <li>
                  <a href="/#" className="hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/#" className="hover:text-primary">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/#" className="hover:text-primary">
                    Blog
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="/#" className="hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/#" className="hover:text-primary">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="flex flex-col gap-6 items-center xl:items-end">
            <ActionLink href="/#">Request Invite</ActionLink>
            <p className="text-[0.9375rem] leading-[1.625rem] opacity-50 tracking-[-0.234375px;]">
              © Easybank. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
