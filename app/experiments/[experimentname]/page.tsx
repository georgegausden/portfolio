"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { experimentData } from "../experimentData";


export default function ExperimentProject() {

  const pathname = usePathname();
  const experimentName = pathname.substring(pathname.lastIndexOf("/") + 1);
  const experiment = experimentData.find(
    (exp) => exp.title.toLowerCase().replace(/\s+/g, "") === experimentName
  );

    

  return (
    <div>
      {/* add a link to the previous pages, so the user can decide to navigate back one page or two */}
      <Link href="/" className="text-xl text-black w-full hover:underline">
        {pathname}
      </Link>

      <div className="flex pt-10">
        <iframe
          width={"70%"}
          height={800}
          src={experiment?.link}
          loading="lazy"
          className="w-full max-w-[50%]"
        ></iframe>

        <div className="pl-10">
          <h1 className="text-xl">{experiment?.title}</h1>
          <p className="pt-10">{experiment?.longDescription}</p>
        </div>
      </div>
    </div>
  );
}
