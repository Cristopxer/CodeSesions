import styles  from "./Sales.module.css";
import Product from '../Product/Product';

const Sales = (props) => {
  return (
    <>
      <div className={styles.Sales}>
        <Product/>
      </div>
    </>
  );
};
export default Sales;
