import { useState } from "react";
import Link from "next/link";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/firebase";

// авторизация новых полдьзователей в firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AuthForm = () => {
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [selectedFile, setSelectFile] = useState(null);
  const submitFormHandler = (e) => {
    e.preventDefault()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, inputNameValue, inputPasswordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log('userCredential', userCredential)
      })
      .catch((error) => {
        console.log('error', error);
      });

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + selectedFile.name);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile, {
      customeMetadata: {
        id: selectedFile.name
      }
    });
  }
  const uploadFileHandler = (e) => {
    setSelectFile(e.target.files[0])
  }

  return (
    <form
      onSubmit={submitFormHandler}
      className='auth-form'>
      <h2 className="title-h2">Auth</h2>
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
      <input
        onChange={uploadFileHandler}
        accept="image/*,.png,.jpg,.gif,.web"
        type="file" />
      <button
        className="auth-form__button"
      >Create to your account
      </button>
      <p className="auth-form__description">Do you have an account?
        <Link href="/loginPage/LoginPage">Login</Link></p>
    </form>
  )
}


export default AuthForm;