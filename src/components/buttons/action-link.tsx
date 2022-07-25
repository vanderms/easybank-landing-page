import React from "react";

export const ActionLink: React.FC<{ href: string; children: React.ReactNode }> = (
  props
) => {
  return (
    <a
      href={props.href}
      className="h-11 px-8 [background:var(--primary-gradient)] text-[0.875rem] grid place-items-center text-neutral-50 rounded-full font-bold hover:opacity-50"
    >
      {props.children}
    </a>
  );
};
