import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      console.log("error ", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}