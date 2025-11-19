import { useState } from "react";

interface StarRatingProps {
  maxStars?: number;
}

const ControlledStarRating = ({ maxStars = 5 }: StarRatingProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  //  const displayRating = hover > 0 ? hover : rating;

  const handleClick = (value: number) => {
    setRating(value);
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

        const isFilled = starValue <= hover || starValue <= rating;
        // const isFilled = displayRating >= starValue;

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

export default ControlledStarRating;
