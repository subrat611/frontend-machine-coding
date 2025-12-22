import useInfinitePagination from "../hooks/use-infinite-pagination";

const InfiniteList = ({ fetchFn, rederItem }) => {
  const {} = useInfinitePagination({ fetchFn });

  return <div>InfiniteList</div>;
};

export default InfiniteList;
