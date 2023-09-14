import WorksItem from "./WorksItem";
import "./works.css";

function Works() {
  return (
    <div className="works-container">
      <div className="works-inner">
        <div className="works-top">
          <h2>Our Works</h2>

          <span>{">"}</span>
        </div>
        <div className="works-bottom">
          <WorksItem row={false} />
          <WorksItem row={true} />
          <WorksItem row={false} />
        </div>
      </div>
    </div>
  );
}

export default Works;
