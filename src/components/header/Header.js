import Link from "next/link";
import LoginAuthBlock from "../loginAuthBlock/LoginAuthBlock";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Favorites from "../favorites/Favorites";

const Header = () => {
  const [loginAuthBlockIsVisible, setLoginAuthBlockIsVisible] = useState(false);
  const [favoriteDisplay, setFavoriteDisplay] = useState(false);
  const inFavoriteLength = useSelector((state) => state.favoriteMovie.favorites.length);
  useEffect(() => {
    if (inFavoriteLength > 0) {
      setFavoriteDisplay(true)
    } else {
      setFavoriteDisplay(false)
    }
  }, [inFavoriteLength, favoriteDisplay])
  const loginAuthHandler = () => {
    setLoginAuthBlockIsVisible(previouseState => !previouseState)
  }
  return (
    <header className="header">
      <Link className="header__logo" href="/" title="Домашняя страница">
        <img src="/assets/logo.svg" alt="Логотип сайта" />
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="" href="/constructionPage/ConstructionPage">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" /></svg>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/constructionPage/ConstructionPage">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" /></svg>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/constructionPage/ConstructionPage">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" /></svg>
            </Link>
          </li>
        </ul>
      </nav>
      <Favorites favoriteDisplay={favoriteDisplay} inFavoriteLength={inFavoriteLength}></Favorites>
      <button
        onClick={loginAuthHandler}
        className="header__button">
        <img src="/assets/user.png" alt="avatar" />
      </button>
      <LoginAuthBlock loginAuthBlockIsVisible={loginAuthBlockIsVisible}></LoginAuthBlock>
    </header>
  )
}


export default Header;