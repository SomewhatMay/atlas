import Image from "next/image";
import { BusinessOverviewInfo } from "./businesses";

type BusinessCardProps = BusinessOverviewInfo;

export default function BusinessCard({
  id,
  name,
  type,
  image,
  address,
}: BusinessCardProps) {
  return (
    <button className="rounded-lg group p-4 flex-col items-center justify-center text-center bg-neutral-800 hover:scale-105 transition-all cursor-pointer">
      <div className="relative w-full aspect-square overflow-hidden rounded-lg">
        <Image
          alt={name}
          className="w-full scale-110 group-hover:scale-100 aspect-square mx-auto object-cover transition-all"
          src={image}
          width={100}
          height={100}
        />
        <span className="absolute left-1/2 translate-x-[-50%] bottom-[-50%] group-hover:bottom-[0.5px] w-full text-center text-black opacity-0 group-hover:opacity-50 transition-all">
          Click to learn more
        </span>
      </div>

      <div className="flex flex-col mx-auto mt-3 select-none">
        <h2 className="text-lg font-bold select-none">{name}</h2>
        <p>{type}</p>
        <p>{address}</p>
      </div>
    </button>
  );
}
