"use client";

import BusinessDetails from "@/components/business-details/business-details";
import Dashboard, {
  BusinessDetailedInfo,
} from "@/components/businesses/businesses";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [businesses, setBusinesses] = useState<BusinessDetailedInfo[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState(-1);

  return (
    <div className="">
      <nav className="mb-[10px] flex items-center justify-center gap-[20px] px-10 bg-neutral-900 py-4 font-bold text-3xl">
        <span>Atlas</span> | <span>Little Portugal</span>
      </nav>
      <main className="mb-[0px]">
        <BusinessDetails
          setSelectedBusiness={setSelectedBusiness}
          visible={selectedBusiness !== -1}
          {...((businesses.find((b) => b.id === selectedBusiness) ||
            {}) as BusinessDetailedInfo)}
        />
        <Dashboard
          businesses={businesses}
          setBusinesses={setBusinesses}
          setSelectedBusiness={setSelectedBusiness}
        />
      </main>
      <footer className="flex items-center justify-center text-neutral-500 mt-[50px] mb-[40px]">
        <div className="flex flex-col gap-1 text-right mr-4">
          <p className="">SomewhatMay and BasraAC © 2025</p>
          <p className="">Bits and Bites Hackathon 2025</p>
        </div>
        <div className="flex flex-col gap-1 text-left">
          <Link
            className="underline"
            href="https://github.com/SomewhatMay/Bits-and-Bites"
          >
            GitHub
          </Link>
          <Link href="https://github.com/SomewhatMay/Bits-and-Bites">
            <span className="underline">Backend</span> with Vercel and Flask.py
          </Link>
        </div>
      </footer>
    </div>
  );
}
