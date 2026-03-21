import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <span className="loading loading-ring loading-lg"></span>
          <p className="mt-4 text-gray-500">Loading...</p>
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};
