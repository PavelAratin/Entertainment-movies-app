
const LoginAuthBlock = ({ loginAuthBlockIsVisible }) => {
  return (
    <ul className={`login-auth-list ${loginAuthBlockIsVisible ? 'active' : ''}`}>
      <li className="login-auth-list__item">
        <button className="login-auth-list__button">Login</button>
      </li>
      <li className="login-auth-list__item">
        <button className="login-auth-list__button">Auth</button>
      </li>
    </ul>
  )
}


export default LoginAuthBlock;