import Image from "next/image";

type BusinessDetailsProps = {
  visible: boolean;
  image?: string;
  name: string;
  type: string;
  address: string;
};

export default function BusinessDetails({
  visible,
  image,
  name,
  type,
  address,
}: BusinessDetailsProps) {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 z-10 w-full h-full flex justify-center items-center">
      <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black opacity-50" />
      <div className="w-[80%] max-w-[1000px] h-[80%] mx-[10%] bg-neutral-900 shadow-md text-black absolute rounded-lg p-4">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p>{type}</p>
        <p>{address}</p>
        {image ? (
          <Image src={image} width={100} height={100} alt={name} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
