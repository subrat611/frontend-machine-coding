# Progress Bar

Build a reusable and configurable progress bar component that can be used across different parts of web application.

The component should visually represent the progress of a task and handle dynamic updates, edge cases, and accessibility concerns.

## Functional Requirements

- The component accept:
  - A numeric value `value` represent the progress.
  - A `max` value (default to 100).
  - A `label` show left top of the bar.
- The component support customization:
  - sizes (small, medium, large).
  - variants (default, success, warning, error).
- The component should accessible via ARIA attributes:
  - `role="progressbar"`
  - `aria-valuenow`
  - `aria-valuemin`
  - `aria-valuemax`

## Non-Functional Requirements

- Must be reusable and config driven.
- Avoid unnecessary re-renders.

## Bonus

- Add animated transition using `requestAnimationFrame`.
- Write a small hook: `useProgress()`

## Follow-Up Questions (Interviewer May Ask)

- How would you optimize this if progress updates every 100ms?

  > If progress updates every 100ms, I avoid heavy React re-renders.
  > First, I let CSS handle interpolation using transitions.
  > For high-frequency or real-time updates, I decouple animation from React and use requestAnimationFrame with refs.
  > I also prefer transform-based animations to avoid layout recalculations.

- How would you expose this component as part of a design system?
- How would you test this component?
- How would you support server-driven progress?

## The first v1 component (commit 0) - Issues

1. Percentage calculation is wrong

```js
width: `${value >= max ? max : value}%`;
```

This assumes: max = 100 always, value is already a percentage.

```md
value = 30
max = 120
// width becomes 30% (should be 25%)
```

2. Label uses raw value, not percentage

```md
renderLabel(value)

But label says:
Uploading... 30%

That’s misleading if max !== 100.
```

3. No clamping for negative values

`value = -20 → width = -20%` (This breaks layout.)

4. Indeterminate state missing

- What happens if progress is unknown?

5. Accessibility not fully correct

`aria-valuenow={value}`

Should be:

- Clamped value
- Omitted in indeterminate mode
