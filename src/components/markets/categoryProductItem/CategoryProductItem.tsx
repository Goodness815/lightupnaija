import styles from "./categoryproductitem.module.css";

function CategoryProductItem() {
  return (
    <div className={styles.category_product_item}>
      <img
        src="https://cdn11.bigcommerce.com/s-x3ki4mm/images/stencil/1280x1280/products/2846/3878/Mercury_260W_24V_PolyCrystalline_Panels__93968.1621506897.jpg?c=2?imbypass=on"
        alt=""
      />
      <div className={styles.category_item_text}>
        <h2>Lorem ipsum </h2>
        <p>
          Description: Lorem ipsum dolor sit amet consectetur. Nibh scelerisque
          pretium lorem fermentum augue pellentesque faucibus dignissim.
        </p>
        <p>Price: #220,000</p>
        <div className={styles.category_item_button_flex}>
          <button>View Details</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryProductItem;
