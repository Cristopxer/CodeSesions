import styles from "./Product.module.css";
const Product = (props) => {
  return (    
      <div className={styles.product}>
        <div className={styles.product__photo}>          
            <img
              src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png"
              alt="green apple slice"
            />          
        </div>
        <div className={styles.product__info}>
          <div className={styles.title}>
            <h1>Delicious Apples</h1>
          </div>
          <div className={styles.price}>
            R$ <span>7.93</span>
          </div>
          <div className={styles.description}>                      
            <p>Apples are nutricious
            Apples may be good for weight loss
            Apples may be good for bone health
            They're linked to a lowest risk of diabetes</p>            
          </div>
          <button className={styles.buybtn}>ADD TO CART</button>
        </div>
      </div>    
  );
};
export default Product;
