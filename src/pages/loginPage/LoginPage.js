// import { useState } from "react";
//
import AuthFormWrapper from "@/components/authFormWrapper/AuthFormWrapper";
import Logo from "@/components/logo/Logo";
// import AuthForm from "@/components/authForm/AuthForm";
import LoginForm from "@/components/loginForm/loginForm";
const AuthPage = () => {
  return (
    <AuthFormWrapper>
      <Logo inAuth="logo__auth"></Logo>
      {/* <AuthForm></AuthForm> */}
      <LoginForm></LoginForm>
    </AuthFormWrapper>
  )
}


export default AuthPage;