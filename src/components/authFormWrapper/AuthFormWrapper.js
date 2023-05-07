
const AuthFormWrapper = ({ children }) => {
  return (
    <div className="form-wrapper">
      <div className="form-wrapper__inner">
      {children}
      </div>
    </div>
  )
}


export default AuthFormWrapper;