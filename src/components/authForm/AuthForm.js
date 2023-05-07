
const AuthForm = () => {
  return (
    <form className='auth-form'>
      <h2 className="title-h2">Login</h2>
      <input
        className="auth-form__input"
        type="text"
        placeholder="Email address" />
      <input
        className="auth-form__input"
        type="password"
        placeholder="Password" />
      <button className="auth-form__button">Login to your account</button>
      <p className="auth-form__description">Don't have an account? <span>Sign Up</span></p>
    </form>
  )
}


export default AuthForm;