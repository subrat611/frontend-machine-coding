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
- How would you expose this component as part of a design system?
- How would you test this component?
- How would you support server-driven progress?
