document.addEventListener("DOMContentLoaded", function () {
  let products = [];
  const dataPerPage = 10;
  let currPage = 1;

  const fetchProducts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=100`);

      if (!res.ok) throw new Error("Product Fetch failed");
      const json = await res.json();

      products = json.products || [];

      currPage = Math.min(
        currPage,
        Math.max(1, Math.ceil(products.length / dataPerPage))
      );
      render();
    } catch (error) {}
  };

  const render = () => {
    renderProducts();
    renderPagination();
  };

  const renderProducts = () => {
    const productsContainer = document.querySelector(".products");
    const start = (currPage - 1) * dataPerPage;
    const slice = products.slice(start, start + dataPerPage);

    if (slice.length === 0) {
      productsContainer.textContent = "No Products Found";
      return;
    }
  };

  const renderPagination = () => {};

  fetchProducts();
});
