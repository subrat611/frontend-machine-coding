import { useState } from "react";

interface StarRatingProps {
  maxStars?: number;
  rating?: number;
  onChange?: (value: number) => void;
}

const StarRating = ({ maxStars = 5, rating, onChange }: StarRatingProps) => {
  const isControlled = rating !== undefined;

  const [internalRating, setInternalRating] = useState(0);
  const [hover, setHover] = useState(0);

  const currentRating = isControlled ? rating! : internalRating;
  const displayRating = hover > 0 ? hover : currentRating;

  const handleClick = (value: number) => {
    if (isControlled) {
      onChange?.(value);
    } else {
      setInternalRating(value);
    }
  };

  const handleMouseEnter = (value: number) => {
    setHover(value);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div>
      {Array.from({ length: maxStars }).map((_, index) => {
        const starValue = index + 1;

        const isFilled = displayRating >= starValue;

        return (
          <span
            key={index}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            style={{
              cursor: "pointer",
              fontSize: "32px",
              color: isFilled ? "gold" : "#ccc",
            }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
