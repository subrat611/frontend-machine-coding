import useInfinitePagination from "../hooks/use-infinite-pagination";

const InfiniteList = ({ fetchFn, rederItem }) => {
  const { products, hasMore, loading, error } = useInfinitePagination({
    fetchFn,
  });

  return <div>{rederItem()}</div>;
};

export default InfiniteList;
