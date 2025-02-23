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

type BusinessDetailedInfo = {
  id: number;
  name: string;
  type: string;
  address: string;
  image: string;

  website: string;
  description: string;
  phone: string;
};

export default function Businesses() {
  const testing = true;
  const [businesses, setBusinesses] = useState<BusinessDetailedInfo[]>([]);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!testing) {
      // fetch("http://127.0.0.1:5000/api/businesses")
      //   .then((response) => response.json())
      //   .then((data: BusinessDetailedInfo[]) => setBusinesses(data))
      //   .catch((error) => {
      //     console.log("Error:", error);
      //   });
    }

    async function fetchHello() {
      try {
        fetch("https://bitsandbitesvercel.vercel.app/api/hello", {
          mode: "cors",
        })
          .then((response: any) => {
            console.log(response);
          })
          .catch((error) => {
            console.log("Error:", error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [attempt]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6 mb-4">Businesses</h1>
      <div className="px-[10%]">
        <hr />
      </div>
      {/* Businesses Grid */}
      {testing && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-fr mt-6 px-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <BusinessCard
              id={index}
              key={index}
              name="Test Restaurant"
              type="Restaurant"
              address="123 Anywhere St."
              image="https://i.ibb.co/ZRw1G4B6/360-F-345059232-CPie-T8-RIWOUk4-Jq-Bkk-Wk-IETYAkmz2b75.webp"
            />
          ))}
        </div>
      )}
      {!testing && businesses.length !== 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr mt-6 px-6">
          {businesses.map((business) => (
            <BusinessCard
              id={business.id}
              key={business.id}
              name={business.name}
              type={business.type}
              address={business.address}
              image={business.image}
            />
          ))}
        </div>
      )}
      {!testing && businesses.length === 0 && (
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
    </div>
  );
}
