type BusinessDetailsProps = {
  visible: boolean;
  image: string;
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
    <div className="absolute top-0 left-0 bottom-0 right-0 z-10 w-full h-full">
      <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black opacity-50" />
      <div className="w-full aspect-[16/9] mx-[10%] bg-white z-20"></div>
    </div>
  );
}
