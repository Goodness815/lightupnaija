import ReviewsItem from "./ReviewsItem";
import "./reviews.css";

function Reviews() {
  return (
    <div className="reviews-container">
      <div className="reviews-inner">
        <div className="reviews-top">
          <h5>
            Reviews <span></span>
          </h5>
          <h2>What our customers are saying</h2>
        </div>
        <div className="reviews-bottom">
          <ReviewsItem />
          <ReviewsItem />
          <ReviewsItem />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
