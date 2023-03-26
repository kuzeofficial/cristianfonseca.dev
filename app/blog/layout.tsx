import { OGBlog } from "=>/utils/og";
export const metadata = OGBlog;

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
