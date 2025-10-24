# Grid with incremental values

## Question

Generate grid of size N with incremental values, whose value changes differently on click.

- Accept an number `N` as input and generate a grid of `N * N` size.
- The grid functions with following logic.
  - On clicking an empty cell fill it with `max(existingNumbers) + 1`.
  - On clicking a non-empty cell update it with `max(existingNumbers)`.

### Expectations

- Well-structured and modular React component(s)
- Optimal state management (useState/useEffect, etc.)
- Efficient computation of the maximum value
- Clean UI and minimal re-rendering
- Bonus for explanations and performance considerations
