import { Link } from "react-router-dom";
import ProductItem from "../productItem/ProductItem";
import styles from "./marketcategory.module.css";

function MarketCategory({ title }: any) {
  return (
    <div className={styles.category_container}>
      <div className={styles.category_top}>
        <h2>{title}</h2>
        <Link to={`/category/${title}`}>
          <button>{">"}</button>
        </Link>
      </div>
      <div className={styles.category_bottom}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default MarketCategory;
