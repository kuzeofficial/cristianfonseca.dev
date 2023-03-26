import Link from "next/link";
import { formatDate } from "=>/utils/date";

export const PostCard = ({ title, slug, publishedAt }: Frontmatter) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="flex flex-col justify-between md:flex-row w-full px-2 py-2 rounded-lg cursor-pointer dark:hover:bg-primary-90 hover:bg-primary-10 transition-all  mb-[2px]">
        <h4 className="w-full sm:w-[458px] mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
          {title}
        </h4>
        <p className="w-[150px] mb-4 text-sm text-left text-gray-500 md:text-right md:mb-0">
          {formatDate({ date: publishedAt, format: "MMMM DD, YYYY" })}
        </p>
      </div>
      {/* <p className="text-gray-600 dark:text-gray-400">{description}</p> */}
    </Link>
  );
};
