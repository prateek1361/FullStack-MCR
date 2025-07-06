import { useState, useEffect } from "react";

const useFetch = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((rawData) => {
        if (Array.isArray(rawData)) {
          const normalizedData = rawData.map((item) => ({
            ...item,
            id: item._id?.$oid || item._id || item.id,
            price: parseInt(item.price?.$numberInt || item.price),
            rating: parseInt(item.rating),
          }));
          setData(normalizedData);
        } else {
          // Single object (like job details)
          const item = rawData;
          const normalizedItem = {
            ...item,
            id: item._id?.$oid || item._id || item.id,
            price: parseInt(item.price?.$numberInt || item.price),
            rating: parseInt(item.rating),
          };
          setData(normalizedItem);
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error, setData };
};

export default useFetch;
