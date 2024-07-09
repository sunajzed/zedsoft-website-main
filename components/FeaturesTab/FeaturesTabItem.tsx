import React from "react";
import Image from "next/image";
import { FeatureTab } from "@/types/featureTab";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-19">
      <div className="md:w-1/2">
        <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
          {title}
        </h2>
        <p className="mb-5">{desc1}</p>
        <p className="w-11/12">{desc2}</p>
      </div>
      <div className="relative mx-auto hidden md:block aspect-[562/366] max-w-full md:max-w-[550px] w-full md:w-1/2">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="dark:hidden"
        />
        <Image
          src={imageDark}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="hidden dark:block"
        />
      </div>
    </div>
  );
};

export default FeaturesTabItem;
