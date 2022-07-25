import { MdOutlineMenu } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import Logo from "@/assets/logo.svg";
import { useState } from "react";
import { ActionLink } from "../buttons/action-link";

const LinkHoverBorder = () => (
  <span className="hidden absolute left-0 bottom-0 w-full h-1 [background:var(--primary-gradient)]"></span>
);

export function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <nav className="h-16 w-full xl:h-20">
      <div className="fixed w-full top-0 left-0 z-[98] h-16 bg-neutral-50 xl:h-20">
        <div className="inner-container h-16 flex items-center justify-between xl:h-20">
          <a href="/#" aria-label="Homepage">
            <img src={Logo} alt="" />
          </a>
          <button aria-label="open menu" onClick={toggleSidebar} className="xl:hidden">
            {sidebarOpen ? (
              <RiCloseLine className="text-neutral-800 w-5 h-5" />
            ) : (
              <MdOutlineMenu className="text-neutral-800 w-5 h-5" />
            )}
          </button>
          <div
            className={`fixed z-[99] w-[min(87.2%,20.4375rem)] right-[6.4%] bg-neutral-50 py-8 rounded ${
              sidebarOpen ? "top-[5.5rem] transition-all duration-300" : "top-[-100vh]"
            } xl:contents  
          `}
          >
            <ul
              className={`flex flex-col items-center w-full text-center text-neutral-800 gap-6 
              text-[1.125rem] [&_a]:tracking-[-0.138462px] 
              xl:flex-row xl:w-max xl:gap-[1.875rem] xl:h-20 xl:text-[0.875rem]
              xl:text-neutral-500 xl:ml-3
              xl:[&_li]:h-full xl:[&_li]:grid xl:[&_li]:place-items-center xl:[&_li]:relative
              xl:[&_a:hover]:text-neutral-800 xl:[&_a:hover~span]:block          
              `}
            >
              <li>
                <a href="/#" onClick={closeSidebar}>
                  Home
                </a>
                <LinkHoverBorder />
              </li>
              <li>
                <a href="/#" onClick={closeSidebar}>
                  About
                </a>
                <LinkHoverBorder />
              </li>
              <li>
                <a href="/#" onClick={closeSidebar}>
                  Contact
                </a>
                <LinkHoverBorder />
              </li>
              <li>
                <a href="/#" onClick={closeSidebar}>
                  Blog
                </a>
                <LinkHoverBorder />
              </li>
              <li>
                <a href="/#" onClick={closeSidebar}>
                  Careers
                </a>
                <LinkHoverBorder />
              </li>
            </ul>
          </div>
          <div className="hidden xl:block">
            <ActionLink href="/#">Request Invite</ActionLink>
          </div>
        </div>
      </div>
      {sidebarOpen && (
        <div
          className={"fixed z-[97] [background:var(--backdrop-gradient)] inset-0 xl:hidden"}
          onClick={closeSidebar}
        ></div>
      )}
    </nav>
  );
}
