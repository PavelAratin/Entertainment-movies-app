import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const router = useRouter();
 
  const submitFormHandler = (e) => {
    e.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, inputNameValue, inputPasswordValue)
    .then(({user}) => {      
      console.log("авторизованный пользователь",user);
      router.push('/')
      
    })
    .catch((error) => {
      console.log('Пользователь не зарегистрирован в системе',error)
    });
  }
  return (
    <form
      onSubmit={submitFormHandler}
      className='auth-form'>
      <h2 className="title-h2">Login</h2>
      <input
        value={inputNameValue}
        onChange={(e) => setInputNameValue(e.target.value)}
        className="auth-form__input"
        type="text"
        placeholder="Email address" />
      <input
        value={inputPasswordValue}
        onChange={(e) => setInputPasswordValue(e.target.value)}
        className="auth-form__input"
        type="password"
        placeholder="Password" />
      <button className="auth-form__button">Login to your account</button>
      <p className="auth-form__description">Don't have an account?
        <Link href="/authPage/AuthPage">Sign Up</Link></p>
    </form>
  )
}


export default LoginForm;