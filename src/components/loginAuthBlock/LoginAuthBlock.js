import Link from "next/link";
const LoginAuthBlock = ({ loginAuthBlockIsVisible }) => {
  return (
    <ul className={`login-auth-list ${loginAuthBlockIsVisible ? 'active' : ''}`}>
      <li className="login-auth-list__item">
        <Link href='authPage/AuthPage' className="login-auth-list__link">Login</Link>
      </li>
      <li className="login-auth-list__item">
        <Link href='authPage/AuthPage' className="login-auth-list__link">Auth</Link>
      </li>
    </ul>
  )
}


export default LoginAuthBlock;