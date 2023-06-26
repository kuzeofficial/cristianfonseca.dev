import { SpinnerIcon } from "=>/components/IconBase/IconBase";
export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full mt-40 h-full">
      <SpinnerIcon size={40} className="animate-spin" />;
    </div>
  );
}
