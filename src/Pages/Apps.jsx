import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import AppError from "./AppError";
import { CiSearch } from "react-icons/ci";

const Apps = () => {
  const [apps, loading, error] = useApps(); // ✅ include loading & error
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();

  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  
  if (loading) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
        <p className="mt-4 text-gray-500">Loading apps...</p>
      </div>
    );
  }

  
  if (error) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center text-red-500">
        Failed to load apps 😢
      </div>
    );
  }

  
  if (searchedApps.length === 0) {
    return <AppError backTo="/apps" />;
  }

  
  return (
    <div className="px-4 md:px-10">
      
      <div>
        <h1 className="text-center font-bold text-4xl mt-20">
          Our All Applications
        </h1>

        <p className="text-center mt-6 text-gray-500">
          Explore all apps developed by us. We code for millions 🚀
        </p>

        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10">
          <p className="font-bold">({searchedApps.length}) Apps Found</p>

          <label className="input input-bordered flex items-center gap-2 w-full md:w-72">
            <CiSearch />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search apps..."
              className="w-full"
            />
          </label>
        </div>
      </div>

      
      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {searchedApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
