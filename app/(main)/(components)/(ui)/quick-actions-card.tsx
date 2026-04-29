import Image from "next/image";
import Link from "next/link";

export default function QuickActionsCard({
  image,
  label,
  description,
  link,
}: {
  image: string;
  label: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="flex flex-col w-52 h-52 bg-white border shadow-md hover:scale-105 transition border-gray-300 space-y-2 rounded-2xl items-center justify-center p-6">
        <Image src={image} alt="" width={30} height={30} className="" />
        <span className="text-md text-center font-semibold">{label}</span>
        <div className="text-center">{description}</div>
      </div>
    </Link>
  );
}
