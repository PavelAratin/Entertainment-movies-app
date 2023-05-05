import React from "react";
import Header from "../header/Header";
import Form from "../form/Form";

const Layout = ({ children }) => {
  return (
    <div className="site-container">
      <Header></Header>
      <main>
        <Form></Form>
        {children}
      </main>
    </div>
  )
}


export default Layout;