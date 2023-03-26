import Image from "next/image";
import Link from "next/link";
import {
  ArrowBendDownRightIcon,
  FilePdfIcon,
  TrendUpIcon,
} from "=>/components/IconBase/IconBase";
export const Hero = () => {
  return (
    <section>
      <div className="flex flex-col-reverse mt-12 sm:items-center sm:mt-20 sm:flex-row">
        <div className="flex flex-col w-full">
          <h1 className="mb-1 text-3xl font-extrabold tracking-tight text-black sm:text-5xl dark:text-white">
            Cristian Fonseca
          </h1>
          <h2 className="flex flex-row items-center mb-4 text-gray-700 dark:text-gray-200">
            Full Stack Developer at Evaluar
            <TrendUpIcon className="w-4 h-4 ml-1 text-gray-700 dark:text-gray-200" />
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Building projects from zero to faster web, with frameworks like
            serverless, React / Next.js.
          </p>
        </div>
        <div className="flex items-start ">
          <div className="flex flex-col w-[100px] h-[100px] justify-start transform transition-all bg-gradient-to-r p-1 from-support-20 to-support-50 rounded-full mb-8 sm:mb-0 mr-auto">
            <Image
              src="/images/65286318.webp"
              width={92}
              height="92"
              quality={100}
              className="object-cover rounded-full aspect-square"
              placeholder="blur"
              blurDataURL="/images/65286318.webp"
              alt="Cristian Fonseca, with glasses, smiling and curly hair."
            />
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <Link
          href="/data/CV.pdf"
          className="flex relative overflow-hidden flex-row items-center p-2 font-medium  transition-all ease-out border rounded-lg cursor-pointer text-md text-support-50 hover:bg-secondary-10 border-secondary-20 hover:text-support-60 dark:hover:bg-transparent dark:border-primary-80 dark:hover:border-primary-70 group"
        >
          <FilePdfIcon className="w-6 h-6 mr-2" />
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 dark:bg-white bg-black opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">See CV</span>
          <span className="inline-block align-middle transition-transform transform group-hover:translate-x-1">
            <ArrowBendDownRightIcon className="w-6 h-4" />
          </span>
        </Link>
      </div>
    </section>
  );
};
