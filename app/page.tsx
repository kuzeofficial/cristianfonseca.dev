import Footer from "=>/components/Footer";
import Hero from "=>/components/Hero";
import Portfolio from "=>/components/Portofolio";
import Posts from "=>/components/Posts";
import { getAllFilesMetadata } from "=>/lib/mdx";

const Home = async () => {
  const metadata = await getPosts();
  const croppedMetadata = metadata.slice(0, 3);
  return (
    <div>
      <Hero />
      <Portfolio />
      <Posts posts={croppedMetadata} />
      <Footer />
    </div>
  );
};

export default Home;

async function getPosts(): Promise<Frontmatter[]> {
  const data = await getAllFilesMetadata();
  return data;
}
