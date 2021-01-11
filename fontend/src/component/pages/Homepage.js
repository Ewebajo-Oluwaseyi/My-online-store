import React from 'react';
import {Link} from 'react-router-dom'
import style from './Homepage.module.css';

const Homepage = ({products}) => {
    console.log(products);
    return (
        <div>
            <ul className={style.products}>
                {products.map(product => 
                    <li key={product._id} className={style.productsLi}>
                        <div className={style.product}>
                            <Link to={'/product/'+product._id}>
                                <img className={style.productImage} src={product.image} alt="product"/>
                            </Link>
                            <div className={style.productName}>
                                <Link to={'/product/'+product._id}>{product.name}</Link>
                            </div>
                            <div className={style.brand}>{product.brand}</div>
                            <div className={style.price}>{product.price}</div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Homepage
