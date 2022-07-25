import { useId } from "react";
import { FeatureCard } from "../cards/feature";
import IconApi from "@/assets/icon-api.svg";
import IconBudgeting from "@/assets/icon-budgeting.svg";
import IconOnBoarding from "@/assets/icon-onboarding.svg";
import IconOnline from "@/assets/icon-online.svg";

export function FeaturesSection() {
  const title = useId();

  return (
    <section
      aria-labelledby={title}
      className="relative z-10 bg-neutral-200 py-16 mt-[5.5rem] xl:pt-[5.5625rem] xl:pb-[6.3125rem] xl:mt-[-7.25rem]"
    >
      <div className="outer-container">
        <div className="inner-container">
          <header className="max-w-[27.9375rem] mx-auto xl:max-w-[39.6875rem] xl:mx-0">
            <h2 id={title} className="title-md text-center text-neutral-800 xl:text-left">
              Why choose Easybank?
            </h2>
            <p className="body-xl text-neutral-500 text-center mt-4 xl:text-left">
              We leverage Open Banking to turn your bank account into your financial hub.
              Control your finances like never before.
            </p>
          </header>
          <ul className="mt-14 flex flex-col gap-8 max-w-[27.9375rem] mx-auto xl:mx-0 xl:max-w-none xl:flex-row xl:mt-[4.5rem] xl:gap-[1.875rem] ">
            <li>
              <FeatureCard title="Online Banking" icon={IconOnline}>
                Our modern web and mobile applications allow you to keep track of your
                finances wherever you are in the world.
              </FeatureCard>
            </li>
            <li>
              <FeatureCard title="Simple Budgeting" icon={IconBudgeting}>
                See exactly where your money goes each month. Receive notifications when
                you&apos;re close to your hitting limits.
              </FeatureCard>
            </li>
            <li>
              <FeatureCard title="Fast Onboarding" icon={IconOnBoarding}>
                We don&apos;t do branches. Open your account in minutes online and start
                taking control of your finances right away.
              </FeatureCard>
            </li>
            <li>
              <FeatureCard title="Open API" icon={IconApi}>
                Manage your savings, investments, pension, and much more from one account.
                Tracking your money has never been easier.
              </FeatureCard>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
