import React from "react";
import Toolbar from "../UI/Toolbar/Toolbar";
// import classes from'./Layput.module.css'

function Layout(props) {
  return (
    <div>
      <Toolbar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
