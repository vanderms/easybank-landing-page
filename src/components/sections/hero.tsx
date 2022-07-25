import { useId } from "react";
import { ActionLink } from "../buttons/action-link";
import BgIntroMobile from "@/assets/bg-intro-mobile.svg";
import BgIntroDesktop from "@/assets/bg-intro-desktop.svg";
import BgImage from "@/assets/image-mockups.png";

export function HeroSection() {
  const title = useId();

  return (
    <section aria-labelledby={title}>
      <div className="outer-container overflow-hidden">
        <div className="inner-container grid xl:grid-cols-[27.9375rem,1fr] xl:gap-7">
          <div className="w-full h-0 relative  pb-[85.9327217%] xl:order-1 xl:pb-[122.6771654%]">
            <picture className="absolute bottom-0 left-[calc(50%-50vw)] right-[calc(50%-50vw)] xl:left-0 xl:bottom-auto xl:top-0">
              <source media="(min-width:74rem )" srcSet={BgIntroDesktop} />
              <img
                src={BgIntroMobile}
                alt=""
                className=" max-w-none w-full  xl:left-0 xl:w-[50.125rem] xl:h-[43.5rem] bottom-0"
              />
            </picture>
            <div className="absolute z-20 bottom-0 left-0 right-0 xl:left-[11.4375rem] xl:right-[calc(50%-50vw)]">
              <img src={BgImage} alt="" />
            </div>
          </div>
          <header className="mt-10 flex justify-center xl:mt-[10.625rem] xl:justify-start">
            <div className="max-w-[27.9375rem]">
              <h1 id={title} className="text-center title-xl text-neutral-800 xl:text-left">
                Next generation digital banking
              </h1>
              <p className="body-xl mt-4 text-center text-neutral-500 xl:text-left xl:mt-6">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and much more.
              </p>
              <div className="mt-8 flex justify-center xl:justify-start xl:mt-[2.25rem]">
                <ActionLink href="/#">Request Invite</ActionLink>
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
}
