import Image from "next/image";
import { BusinessOverviewInfo } from "./businesses";

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
  return (
    <button
      onClick={() => setSelectedBusiness(id)}
      className="rounded-lg group p-4 flex-col items-center justify-center text-center bg-neutral-800 hover:scale-105 transition-all cursor-pointer"
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-lg">
        <Image
          alt={name}
          className="w-full scale-110 group-hover:scale-100 aspect-square mx-auto object-cover transition-all"
          src={image}
          width={400}
          height={400}
        />
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-[80%] transition-all"></div>
        <span className="absolute left-1/2 translate-x-[-50%] bottom-[-50%] group-hover:bottom-1 w-full text-center text-white opacity-0 group-hover:opacity-100 transition-all">
          Click to learn more
        </span>
      </div>

      <div className="flex flex-col mx-auto select-none mt-3">
        <h2 className="text-lg font-bold select-none">{name}</h2>
        <p>{type}</p>
        <p>{address}</p>
      </div>
    </button>
  );
}
