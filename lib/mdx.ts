import { promises as fs } from "fs";
import path from "path";

const root = process.cwd()
import { serialize } from "next-mdx-remote/serialize"

export const getFiles = () => {
  return fs.readdir(path.join(root, "public/data/md"))
}

export const getFileBySlug = async ({slug} : {slug: string}) => {
  const raw =  await fs.readFile(path.join(root, "public/data/md", `${slug}`), "utf-8")

  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });
  const frontmatter = serialized.frontmatter as Frontmatter
  return {
    frontmatter,
    serialized,
  };
}

export const getAllFilesMetadata = async () => {
  const files = await getFiles()
  const arrayOfMetadata = files.map(async (postSlug) => {
    const { frontmatter } =  await getFileBySlug({slug: postSlug})
    return {
      ...frontmatter,
      slug: postSlug.replace(".mdx", ""),
    }
  })
  return Promise.all(arrayOfMetadata)
  // return files.reduce((allPosts, postSlug) => {
  //   const { frontmatter } =  getFileBySlug({slug: postSlug})
  //   return {
  //     ...frontmatter,
  //     slug: postSlug.replace(".mdx", ""),
  //   }
  // })
}
