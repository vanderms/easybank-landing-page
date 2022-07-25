interface Props {
  title: string;
  author: string;
  thumbnail: string;
  children: React.ReactNode;
}

export const BlogCard: React.FC<Props> = (props) => {
  return (
    <article className="max-w-[25rem] bg-neutral-50 rounded-md overflow-hidden mx-auto">
      <div className="w-full">
        <div className="relative w-full pb-[61.16%] xl:pb-[78.4313725%]">
          <img
            src={props.thumbnail}
            alt=""
            className="absolute top-0 left-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="px-8 py-6 xl:px-6 xl:pt-[1.5625rem] xl:pb-[1.5rem]">
        <p className="text-[0.625rem] leading-[1.125rem] text-neutral-500">
          By {props.author}
        </p>
        <h3 className="mt-2 title-xs text-neutral-800">{props.title}</h3>
        <div className="mt-2 body-sm text-neutral-500">{props.children}</div>
      </div>
    </article>
  );
};
