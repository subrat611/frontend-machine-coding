# Build a Reusable Star Rating Component (React + TypeScript preferred)

## Problem Statement

You are required to build a reusable, accessible, interactive Star Rating component/widget in React. The component should allow users to view, select, and update a rating value.

You will integrate this component inside a small demo page.

## Requirements

- Display Stars

  - The component should render N stars (default = 5).
  - Each star can be in one of these states:
    - Filled (selected)
    - Empty (not selected)
    - (Bonus: Half-filled state if you want extra edge-case handling)

- When the user hovers over a star, all stars up to that `index` should highlight temporarily.
- When hover ends, the stars should return to the previously selected rating.
- When the user clicks a star, that becomes the final selected rating.
- The selected rating should persist visually.

## Additional

### Controlled + Uncontrolled Support

The component should support:

- Internal state (uncontrolled): If no rating prop is passed.

```js
<StarRating defaultRating={2} />
```

- External state (controlled): If a rating prop is passed along with onChange.

```js
<StarRating rating={3} onChange={setRating} />
```

If both rating and defaultRating are missing: The widget starts with a rating of 0.

### Accessibility Requirements

You must make your component accessible:

- Each star should be keyboard focusable.
- Users should be able to select rating using:

  - Enter
  - Space
  - Arrow keys (Left/Right)

- Provide ARIA attributes:

  - role="radiogroup"
  - role="radio" for each star
  - aria-checked
  - aria-label

### Reusability Requirements

- Multiple instances must work independently.
- Should work inside forms, modals, lists, etc.
- Should support controlled + uncontrolled usage.
