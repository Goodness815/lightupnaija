import userimg from "../../../assets/userimg.png";
import "./reviews.css";

function ReviewsItem() {
  return (
    <div className="reviews-item">
      <p>
        Lorem ipsum dolor sit amet consectetur. Adipiscing risus viverra donec
        at a in ac lorem bibendum. Facilisi imperdiet non nunc quis congue
        rhoncus. Molestie leo arcu suspendisse eget. Proin malesuada ornare et
        dignissim.
      </p>
      <div className="review-users">
        <img src={userimg} alt="profile" />
        <div className="review-user-details">
          <h3>Raymond Thual</h3>
          <p>Lorem ipsum dolor sit</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewsItem;
