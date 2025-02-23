"use client";

import { useEffect, useState } from "react";
import BusinessCard from "./business-card";

export type BusinessOverviewInfo = {
  id: number;
  name: string;
  type: string;
  address: string;
  image: string;
};

export type BusinessDetailedInfo = {
  id: number;
  name: string;
  type: string;
  address: string;
  image: string;

  website: string;
  business_url: string;
  phone: string;
};

type BusinessesProps = {
  setSelectedBusiness: (id: number) => void;
  setBusinesses: (businesses: BusinessDetailedInfo[]) => void;
  businesses: BusinessOverviewInfo[];
};

export default function Businesses({
  setSelectedBusiness,
  setBusinesses,
  businesses,
}: BusinessesProps) {
  const testing = false;

  const [attempt, setAttempt] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      fetch("https://bitsandbitesvercel.vercel.app/api/send_scraped_json")
        .then((response) => response.json())
        .then((data: BusinessDetailedInfo[]) => {
          console.log(data);
          setBusinesses(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error:", error);
          setLoading(false);
        });
    }

    if (!testing) {
      fetchData();
    }
  }, [attempt]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6 mb-4">Businesses</h1>
      <div className="px-[10%]">
        <hr />
      </div>
      {/* Businesses Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 auto-rows-fr mt-6 px-6">
        {testing &&
          Array.from({ length: 8 }).map((_, index) => (
            <BusinessCard
              setSelectedBusiness={setSelectedBusiness}
              id={index}
              key={index}
              name="Test Restaurant"
              type="Restaurant"
              address="123 Anywhere St."
              image="https://i.ibb.co/ZRw1G4B6/360-F-345059232-CPie-T8-RIWOUk4-Jq-Bkk-Wk-IETYAkmz2b75.webp"
            />
          ))}
        {!testing &&
          businesses.length !== 0 &&
          businesses.map((business) => (
            <BusinessCard
              setSelectedBusiness={setSelectedBusiness}
              id={business.id}
              key={business.id}
              name={business.name}
              type={business.type}
              address={business.address}
              image={business.image}
            />
          ))}
        {!testing && businesses.length === 0 && !loading && (
          <div className="text-center text-lg mt-6 flex flex-col justify-center items-center">
            <span>Unable to load businesses!</span>
            <button
              onClick={() => setAttempt(attempt + 1)}
              className="py-1 px-3 mt-4 border rounded-lg b-2 max-w-[200px] transition-all hover:bg-white hover:text-black hover:scale-110"
            >
              Try Again
            </button>
          </div>
        )}
        {loading && (
          <div className="text-center text-lg mt-6 flex flex-col justify-center items-center">
            <svg
              className="animate-spin h-5 w-5 text-white mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>

            <span>Loading Businesses...</span>
          </div>
        )}
      </div>
    </div>
  );
}
