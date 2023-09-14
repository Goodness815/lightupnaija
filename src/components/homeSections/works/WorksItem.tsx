import workimg from "../../../assets/works.png";

interface WorksItemProps {
  row: Boolean;
}

function WorksItem({ row }: WorksItemProps) {
  return (
    <div
      className="works-item"
      style={{ flexDirection: row ? "row-reverse" : "row" }}
    >
      <div className="works-item-left">
        <img src={workimg} alt="work" />
      </div>
      <div className="works-item-right">
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Vel sed duis pulvinar nisl
          fusce vitae ac et commodo. Sit velit sagittis id sed lobortis eget
          eget. Malesuada aliquam tellus non pretium eget et sit. Habitant
          tortor ornare morbi odio. Lorem adipiscing vitae risus dolor ut vitae.
          Posuere mattis mattis porttitor duis nisl integer pellentesque.
          Dignissim dolor erat purus dolor. Enim adipiscing vestibulum eget
          massa tortor netus. Sed ut urna aliquet facilisis. Faucibus pharetra
          gravida pellentesque aliquam at vel
        </p>
        <button>View Project</button>
      </div>
    </div>
  );
}

export default WorksItem;
