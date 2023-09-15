// import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Component/Card/Card";
// import Cart from "./Component/Cart/Cart";

function App() {


  return (
    <>
      <h1 className="font-bold text-3xl pt-16 pb-12 text-center">
        Course Registration
      </h1>

      <Card></Card>
      {/* <Cart></Cart> */}
    </>
  );
}

export default App;
