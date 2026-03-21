import axios from "axios";
import { useEffect, useState } from "react";
import { useLoading } from "../Context/LoadingContext";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);

    axios
      .get("/AppsData.json")
      .then((res) => setApps(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return [apps];
};

export default useApps;
