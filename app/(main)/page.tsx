import Image from "next/image";
import Link from "next/link";
import { quickActionsData } from "./(data)/home-actions-data";
import QuickActionsCard from "./(components)/(ui)/quick-actions-card";
import ImageMultiSelect from "./dashboard/(components)/image-multi-select";

export default function DashboardHome() {
  return (
    <div className="flex flex-col pb-6 space-y-4 ">
      <div className="bg-primary flex flex-col sm:space-y-0 space-y-6 sm:flex-row items-center p-8 justify-between">
        <div className="flex flex-col rounded-b-2xl space-y-3">
          <h3 className="text-md text-white font-bold">
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <div className="text-gray-300 w-full sm:w-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
            doloribus, alias, sit itaque illum eos earum impedit nesciunt rem
            corporis ea facilis. Tempore asperiores, at quis officiis assumenda
            ducimus. Laudantium?
          </div>
          <Link href="/login" target="_blank">
            <button className="cursor-pointer w-full sm:w-30 bg-white px-2 py-1 rounded">
              Se connecter
            </button>
          </Link>
        </div>

        <div>
          <Image
            src="/lmb-admin-logo.svg"
            className=""
            alt=""
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="max-w-7xl flex md:h-200 h-full flex-col mx-auto px-8 space-y-4">
        <h3 className="text-xl font-semibold">Actions Rapides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
          {quickActionsData.map((data, i) => (
            <QuickActionsCard
              key={i}
              link={data.link}
              image={data.image}
              label={data.label}
              description={data.description}
            ></QuickActionsCard>
          ))}
        </div>
      </div>
    </div>
  );
}
