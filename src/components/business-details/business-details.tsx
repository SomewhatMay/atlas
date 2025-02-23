import Image from "next/image";
import { BusinessDetailedInfo } from "../businesses";
import Link from "next/link";

type BusinessDetailsProps = BusinessDetailedInfo & {
  visible: boolean;
  setSelectedBusiness: (id: number) => void;
};

export default function BusinessDetails({
  visible,
  image,
  name,
  type,
  address,
  phone,
  website,
  business_url,
  setSelectedBusiness,
}: BusinessDetailsProps) {
  if (visible === false) return <></>;

  if (website && !website.startsWith("https")) website = "https://" + website;

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 z-10 w-full h-full flex justify-center items-center`}
    >
      <button
        onClick={() => setSelectedBusiness(-1)}
        className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black opacity-50"
      />
      <div className="w-[80%] max-w-[600px] mx-[10%] rounded-lg px-[30px] pt-[30px] pb-[30px] overflow-hidden bg-neutral-900 shadow-md text-white flex flex-col items-center absolute p-4">
        {image ? (
          <div className="mx-auto w-full max-h-[50%]">
            <Image
              src={image}
              className="w-full aspect-auto h-full max-h-[300px] object-cover rounded-lg"
              width={1024}
              height={1024}
              alt={name}
            />
          </div>
        ) : (
          <div></div>
        )}
        <h1 className="text-3xl font-bold mt-5">{name}</h1>
        <p className="mt-1">{type}</p>
        <div className="grid grid-cols-2 gap-4 text-center mt-4">
          {[
            ["Address", address],
            ["Phone", phone],
          ].map((item, index) => (
            <div className="bg-neutral-800 rounded-lg p-2 px-4" key={index}>
              {item[0]}: {item[1]}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 justify-between mt-5">
          {website && (
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="border px-4 border-white rounded-lg p-2 transition-all hover:bg-white hover:scale-105 hover:text-black"
            >
              View Business Website
            </Link>
          )}

          {business_url && (
            <Link
              href={business_url}
              target="_blank"
              rel="noopener noreferrer"
              className="border px-4 border-white rounded-lg p-2 transition-all hover:bg-white hover:scale-105 hover:text-black"
            >
              View On Google Maps
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
