"use client";
type PropsType = {
  setSearch: (value: string) => void;
};
export const SearchBar = ({ setSearch }: PropsType) => {
  return (
    <div className="relative w-full mb-4">
      <input
        aria-label="Search a post"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search a post"
        className="block w-full px-4 py-2 border border-gray-200 rounded-md bg-primary-10 text-primary-90 dark:border-primary-90/60 focus:ring-blue-500 focus:border-blue-500 dark:bg-primary-90/50 dark:text-gray-100"
      />
      <svg
        className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};
