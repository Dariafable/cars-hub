"use client";

import React from "react";
import Image from "next/image";
import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { fetchCars } from "@/utils/api";

const Home = () => {
  const [allData, setAllData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchAllData = async () => {
      const cars = await fetchCars();

      if (cars) {
        setAllData(cars);
      }
      setIsLoading(false);
    };
    fetchAllData();
  }, []);

  const isDataEmpty = !Array.isArray(allData) || allData.length < 1 || !allData;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
        {isLoading && (
          <div className="home__loading-container">
            <h2 className="text-black text-xl font-bold">Loading...</h2>
          </div>
        )}
        {!isLoading && isDataEmpty && (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
        {!isLoading && !isDataEmpty && (
          <div className="home__cars-wrapper">
            {allData.map((car) => (
              <CarCard /* key needed */ car={car} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
