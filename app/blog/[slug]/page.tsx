import { getFileBySlug } from "=>/lib/mdx";
import { MdxContent } from "./mdx-content";
import Image from "next/image";

const Post = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const source = await getFileBySlug({ slug: params.slug });
  return (
    <>
      <h1 className="mt-12 mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        {source.frontmatter.title}
      </h1>
      <div className="flex justify-between">
        <div className="flex items-center gap-4 mb-8">
          <Image
            width={40}
            height={40}
            className="rounded-full w-10 h-10 object-cover"
            src={source.frontmatter.avatar || ""}
            alt={source.frontmatter.author}
          />
          <div className="flex flex-col">
            <span className="font-medium text-gray-700 dark:text-gray-200">
              {source.frontmatter.author}
            </span>
            <div className="flex text-gray-700 dark:text-gray-200">
              <span className=" text-xs ">Published at:</span>
              <p className="font-light text-xs">
                &nbsp;{source.frontmatter.publishedAt}
              </p>
            </div>
          </div>
        </div>
        <div>
          {source.frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="border mr-2 px-2 py-0.5 rounded-full shadow-sm text-xs border-blue-500 text-blue-500 "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <MdxContent source={source.serialized} />
    </>
  );
};

export default Post;
