import { useId } from "react";

export function HeroSection() {
  const title = useId();

  return (
    <section aria-labelledby={title}>
      <h1 id={title}></h1>
    </section>
  );
}
