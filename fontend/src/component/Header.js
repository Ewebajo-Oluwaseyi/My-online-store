import React from 'react';
import {Link} from 'react-router-dom'
import style from './Header.module.css';

function Header() {
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open")
    };
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
    };
    return (
    <div>
        <header className="header">
            <div>
                <button onClick={openMenu} className={style.button}>
                    &#9776;
                </button>
                <Link className={style.a} to="/">My Online Store</Link>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Caterogy</h3>
            <button className={style.close} onClick={closeMenu}>X</button>
            <ul>
                <li><a href="index.html">Shoes</a></li>
                <li><a href="index.html">Shits</a></li>
                <li><a href="index.html">Trousers</a></li>
                <li><a href="index.html">Watchs</a></li>
            </ul>
        </aside>
    </div>
    )
}

export default Header;
