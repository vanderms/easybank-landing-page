interface Props {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export const FeatureCard: React.FC<Props> = (props) => {
  return (
    <article className="flex flex-col items-center xl:items-start xl:pb-2">
      <img src={props.icon} alt="" className="w-[4.5rem] h-[4.5rem]" />
      <h3 className="mt-6 title-sm text-center text-neutral-800 xl:text-left xl:mt-10">{props.title}</h3>
      <div className="mt-4 body-md text-neutral-500 text-center xl:text-left xl:mt-[1.625rem]">{props.children}</div>
    </article>
  );
};
