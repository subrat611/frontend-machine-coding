// Force a number to stay within a minimum and maximum range.
const calculateClampedValue = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

const ProgressBar = ({
  max = 100,
  value,
  variants = "default",
  renderLabel = null,
}) => {
  const isIndeterminate = value === null || value === undefined;
  const safeMax = max > 0 ? max : 100;

  const clampedValue = isIndeterminate
    ? 0
    : calculateClampedValue(value, 0, safeMax);

  const percentage = isIndeterminate
    ? 0
    : Math.round((clampedValue / safeMax) * 100);

  return (
    <div>
      {renderLabel && !isIndeterminate && renderLabel(percentage)}
      <div className="progress-outer">
        <div
          className={`progress-inner ${variants}`}
          style={{
            width: isIndeterminate ? "100%" : `${percentage}%`,
          }}
          role="progressbar"
          aria-valuenow={isIndeterminate ? undefined : clampedValue}
          aria-valuemin="0"
          aria-valuemax={safeMax}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
