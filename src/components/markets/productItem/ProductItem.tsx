import styles from "./productitem.module.css";

function ProductItem() {
  return (
    <div className={styles.product_item_container}>
      <img
        src="https://www.esi-africa.com/wp-content/uploads/2021/03/Nigeria-Rural-Electrification-Agency-1.jpg"
        alt="product"
      />
      <h3>POWERMAX 10KVA (Monthly)</h3>
      <h5>#236,600</h5>
    </div>
  );
}

export default ProductItem;
