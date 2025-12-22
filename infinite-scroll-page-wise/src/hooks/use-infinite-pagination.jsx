import { useState } from "react";

const useInfinitePagination = ({ fetchFn }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(0);

  return { products, hasMore, loading, error };
};

export default useInfinitePagination;
