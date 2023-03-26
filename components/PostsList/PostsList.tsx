"use client";
import { PostCard } from "=>/components/PostCard/PostCard";
import { SearchBar } from "=>/components/SearchBar/SearchBar";
import { useState } from "react";
type PropsType = {
  currentPostsMetadata: Frontmatter[];
};
export const PostsList = ({ currentPostsMetadata }: PropsType) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = currentPostsMetadata.filter((post: Frontmatter) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <div>
      <SearchBar setSearch={setSearchValue} />
      <div className="grid grid-cols-1 justify-center max-w-[640px] w-full">
        {!searchValue &&
          currentPostsMetadata &&
          currentPostsMetadata.map((frontMatter: Frontmatter) => (
            <PostCard {...frontMatter} key={frontMatter.slug} />
          ))}
        {searchValue &&
          filteredBlogPosts &&
          filteredBlogPosts.map((post: Frontmatter) => (
            <PostCard key={post.slug} {...post} />
          ))}
        {searchValue && !filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
      </div>
    </div>
  );
};
