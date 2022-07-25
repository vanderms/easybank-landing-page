import { useId } from "react";
import { BlogCard } from "../cards/blog";
import ImageConfetti from "@/assets/image-confetti.jpg";
import ImageCurrency from "@/assets/image-currency.jpg";
import ImagePlane from "@/assets/image-plane.jpg";
import ImageRestaurant from "@/assets/image-restaurant.jpg";

export function LatestArticlesSection() {
  const title = useId();

  return (
    <section aria-labelledby={title} className="mt-[5.5rem] xl:mt-[4.5625rem]">
      <div className="outer-container">
        <div className="inner-container">
          <h2 id={title} className="title-md text-neutral-800 text-center xl:text-left">
            Latest Articles
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 justify-center md:grid-cols-2 xl:grid-cols-4 xl:mt-10 xl:gap-[1.875rem]">
            <li>
              <BlogCard
                title="Receive money in any currency with no fees"
                thumbnail={ImageCurrency}
                author="Claire Robinson"
              >
                <p>
                  The world is getting smaller and we&apos;re becoming more mobile. So why
                  should you be forced to only receive money in a single …
                </p>
              </BlogCard>
            </li>
            <li>
              <BlogCard
                title="Treat yourself without worrying about money"
                thumbnail={ImageRestaurant}
                author="Wilson Hutton"
              >
                Our simple budgeting feature allows you to separate out your spending and
                set realistic limits each month. That means you …
              </BlogCard>
            </li>
            <li>
              <BlogCard
                title="Take your Easybank card wherever you go"
                thumbnail={ImagePlane}
                author="Wilson Hutton"
              >
                We want you to enjoy your travels. This is why we don&apos;t charge any fees
                on purchases while you&apos;re abroad. We&apos;ll even show you …
              </BlogCard>
            </li>
            <li>
              <BlogCard
                title="Our invite-only Beta accounts are now live!"
                thumbnail={ImageConfetti}
                author="Claire Robinson"
              >
                After a lot of hard work by the whole team, we&apos;re excited to launch our
                closed beta. It&apos;s easy to request an invite through the site ...
              </BlogCard>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
