"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";

const MdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="font-bold text-4xl text-black dark:text-white" {...props} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2
      className="font-semibold text-3xl text-black dark:text-white"
      {...props}
    />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3
      className="font-semibold text-2xl text-black dark:text-white"
      {...props}
    />
  ),
  h4: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h4 className="font-medium text-xl text-black dark:text-white" {...props} />
  ),
  h5: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h5 className="font-medium text-lg text-black dark:text-white" {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="text-base text-black dark:text-white" {...props} />
  ),
  Image: (props: React.HTMLProps<HTMLImageElement>) => (
    <Image
      src={props.src ?? ""}
      width={600}
      quality={100}
      height={600}
      className="w-full object-cover rounded-xl"
      loading="lazy"
      alt=""
    />
  ),
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <pre
      className="mb-4 mt-6 text-gray-600 dark:text-gray-300 px-4 max-h-[650px] overflow-x-auto rounded-lg border border-white/[8%] bg-primary-20/70 py-4 dark:bg-white/[5%]"
      style={{ overflowX: "scroll" }}
      {...props}
    />
  ),
  br: (props: React.HTMLProps<HTMLBRElement>) => <br {...props} />,
  Card: (props: React.HTMLProps<HTMLDivElement>) => (
    <div
      className="p-4 rounded-lg shadow-sm  dark:bg-white/[5%] bg-primary-10/70"
      {...props}
    />
  ),
};

export function MdxContent({
  source,
}: {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}) {
  return <MDXRemote {...source} components={MdxComponents} />;
}
