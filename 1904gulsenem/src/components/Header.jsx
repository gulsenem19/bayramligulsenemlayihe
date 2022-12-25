import { Link } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";

//mport logoSvg from '../assets/img/pizza-logo.svg';
function Header() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            {/*<img width="38" src={logoSvg} alt="Pizza logo" />*/}
            <img
              src=" data:image/jpeg;base64,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  "
              width="50"
              alt="Pizza logo"
            />
            <div>
              <h1>Меню пиццы</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{items.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
