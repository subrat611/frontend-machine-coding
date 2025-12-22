import { useCallback, useEffect, useRef, useState } from "react";

const MAX_ITEMS_PER_PAGE = 10;

const InfinitePaginationSimple = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const observer = useRef();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const controller = new AbortController();

    const { signal } = controller;

    const fetchProducts = async () => {
      try {
        const skip = (page - 1) * MAX_ITEMS_PER_PAGE;

        const res = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${skip}`,
          { signal }
        );
        const data = await res.json();
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setHasMore(
          data.products.length > 0 &&
            products.length + data.products.length < data.total
        );
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, [page]);

  const lastEleRef = useCallback(
    (node) => {
      if (isLoading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  console.log(isLoading);

  return (
    <div className="container">
      {products.map((product, index) => {
        const { title, description, id } = product;
        const isLastItem = products.length === index + 1;

        return (
          <div
            key={id}
            className="product-card"
            ref={isLastItem ? lastEleRef : null}
          >
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );
      })}
      {isLoading && <h3>Loading...</h3>}
    </div>
  );
};

export default InfinitePaginationSimple;
