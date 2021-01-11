import React from 'react'
import { Link } from 'react-router-dom';
import style from './Productpage.module.css';

const Productpage = ({props, products}) => {
    const product = products.find(x => Number(x._id) === Number(props.match.params.id))
    console.log(products);
    return (
        <div>
            <div className={style.backpage}>
                <Link to="/">Back to Homepage</Link>
            </div>
            <div className={style.details}>
                <div className={style.detailsImage}>
                    <img className={style.detailsImageIm} src={product.image} alt="product" />
                </div>
                <div className={style.detailsInfo}>
                    <ul className={style.detailsInfoUl}>
                        <li className={style.detailsInfoLi}>
                            <h4>{product.name}</h4>
                        </li>
                        <li className={style.detailsInfoLi}>
                            <b>{product.price}</b>
                        </li>
                        <li className={style.detailsInfoLi}>
                            <b>{product.category}</b>
                        </li>
                        <li className={style.detailsInfoLi}>
                            <b>{product.brand}</b>
                        </li>
                    </ul>
                </div>
                <div className={style.detailsAction}>
                    <ul className={style.detailsActionUl}>
                        <li className={style.detailsActionLi}>
                            Price: ${product.price}
                        </li>
                        <li className={style.detailsActionLi}>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li>
                        <li className={style.detailsActionLi}>
                            <button className={style.button}>
                                Add Cart
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Productpage
