import { useParams } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout";
import CategoryProductItem from "../categoryProductItem/CategoryProductItem";
import styles from "./categorydetails.module.css";

function CategoryDetails() {
  const { name } = useParams();
  return (
    <HomeLayout>
      <div className={styles.category_details_container}>
        <div className={styles.category_details_hero}>
          <h2>{name}</h2>
          <p>
            Gain access to various renewable energy solutions and energy saving
            equipments
          </p>
          <div className={styles.category_box}>
            <span>Category</span>
            <select name="" id="">
              <option>Solar Panel</option>
            </select>
          </div>
        </div>
        <div className={styles.category_product_flex}>
          <CategoryProductItem />
          <CategoryProductItem />
          <CategoryProductItem />
          <CategoryProductItem />
          <CategoryProductItem />
        </div>
      </div>
    </HomeLayout>
  );
}

export default CategoryDetails;
