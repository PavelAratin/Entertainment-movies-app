import AuthFormWrapper from "@/components/authFormWrapper/AuthFormWrapper";
import Logo from "@/components/logo/Logo";
import AuthForm from "@/components/authForm/AuthForm";
const AuthPage = () => {
  return (
    <AuthFormWrapper>
      <Logo inAuth="logo__auth"></Logo>
      <AuthForm></AuthForm>
    </AuthFormWrapper>
  )
}


export default AuthPage;