import { PostsList } from "=>/components/PostsList/PostsList";
import { getAllFilesMetadata } from "=>/lib/mdx";

const Blog = async () => {
  const currentPostsMetadata = await getAllFilesMetadata();
  return (
    <>
      <h3 className="px-2 mt-12 mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Blog Posts
      </h3>
      <PostsList currentPostsMetadata={currentPostsMetadata} />
    </>
  );
};
export default Blog;

async function getPosts(): Promise<Frontmatter[]> {
  const data = await getAllFilesMetadata();
  return data;
}
