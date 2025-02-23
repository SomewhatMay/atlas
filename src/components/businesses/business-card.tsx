import Image from "next/image";
import { BusinessOverviewInfo } from "./businesses";
import getDefaultLogo from "@/utils/get-default-logo";

type BusinessCardProps = BusinessOverviewInfo & {
  setSelectedBusiness: (id: number) => void;
};

export default function BusinessCard({
  id,
  name,
  type,
  image,
  address,
  setSelectedBusiness,
}: BusinessCardProps) {
  if (name == "none") return <></>;

  const defaultLogo = getDefaultLogo(name);
  const displayName = name.length > 30 ? `${name.slice(0, 27)}...` : name;

  return (
    <button
      onClick={() => setSelectedBusiness(id)}
      className="rounded-lg group p-4 flex flex-col items-stretch justify-start text-center bg-neutral-800 hover:scale-105 transition-all cursor-pointer"
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-lg">
        {image?.startsWith("http") ? (
          <Image
            alt={name + " logo"}
            className="w-full scale-110 group-hover:scale-100 aspect-square mx-auto object-cover transition-all"
            src={image}
            width={400}
            height={400}
          />
        ) : (
          <div className="w-full h-full bg-neutral-700 transition-all scale-110 text-white font-bold text-6xl text-center">
            <span className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
              {defaultLogo}
            </span>
          </div>
        )}
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-[80%] transition-all"></div>
        <span className="absolute left-1/2 translate-x-[-50%] bottom-[-50%] group-hover:bottom-1 w-full text-center text-white opacity-0 group-hover:opacity-100 transition-all">
          Click to learn more
        </span>
      </div>

      <div className="flex flex-col gap-1 mx-auto select-none mt-3">
        <h2 className="text-lg font-bold select-none">{displayName}</h2>
        {type !== "none" && <p className="text-sm font-bold">{type}</p>}
        {address !== "none" && <p className="text-sm">{address}</p>}
      </div>
    </button>
  );
}
