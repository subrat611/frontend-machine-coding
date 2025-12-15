# Implement Button-Based Pagination in Vanilla JavaScript

Build a small web application that displays a paginated list of products. The focus is on implementing pagination logic from scratch without any external libraries.

## Requirements

- Fetch the products from: `https://dummyjson.com/products?limit=100`
- Display the products in a list/grid view.
- Show only 10 products per page.

- You must implement: `Previous`, `Page number`, `Next` button

- Clicking a page number should update the displayed products.
- Clicking Next should move to the next page (if available)
- Clicking Previous should move to the previous page (if available).
- The current page must be visually highlighted.

**Edge Case Handling**

- Disable the Previous button on page 1.
- Disable the Next button on the last page.
- Prevent navigating beyond available pages.
- Pagination should still work even if:
  - API returns fewer than 100 products
  - API is slow
  - API fails (show an error message)

## If time allows (not mandatory):

- Add “Go to First Page” and “Go to Last Page”.
- Add keyboard navigation (← → arrows).
- Add loading indicator while fetching.
- Make pagination reusable (separate logic from UI).
