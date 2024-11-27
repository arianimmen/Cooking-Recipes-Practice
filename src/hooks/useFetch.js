import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useFetch(url, query) {
  const key = "3bd40bb0846b4eab815046212e0dfb5b";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await axios.get(
          `https://api.spoonacular.com/recipes/${query}?apiKey=${key}`
        );
        setData(data);
      } catch (err) {
        setData([]);
        toast.error(err?.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url, query]);
  return { data, isLoading };
}

export default useFetch;
