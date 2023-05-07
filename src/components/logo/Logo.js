import Link from "next/link";
const Logo = ({inHeader,inAuth}) => {
  return (
    <Link className={`logo ${inHeader ? inHeader : ''} ${inAuth ? inAuth : ''}`} href="/" title="Домашняя страница">
      <img src="/assets/logo.svg" alt="Логотип сайта" />
    </Link>
  )
}


export default Logo;