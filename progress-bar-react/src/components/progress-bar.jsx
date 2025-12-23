const ProgressBar = ({
  max = 100,
  value,
  variants = "default",
  renderLabel = null,
}) => {
  return (
    <div>
      {renderLabel && renderLabel(value)}
      <div className="progress-outer">
        <div
          className={`progress-inner ${variants}`}
          style={{
            width: `${value >= max ? max : value}%`,
          }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax={max}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
