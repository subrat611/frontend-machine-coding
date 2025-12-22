import InfiniteList from "./components/infinite-list";
// import InfinitePaginationSimple from "./components/infinite-pagination-simple";
import { fetchProducts } from "./queries";

function App() {
  return (
    <div>
      {/* <InfinitePaginationSimple /> */}
      <InfiniteList
        fetchFn={fetchProducts}
        rederItem={(item) => <ProductCard {...item} />}
      />
    </div>
  );
}

export default App;
