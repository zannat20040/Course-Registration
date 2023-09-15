import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Component/Card/Card";

function App() {
  const [allCourse, setallCourse] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setallCourse(data));
  }, []);

  return (
    <>
      <h1 className="font-bold text-3xl pt-16 pb-12 text-center">
        Course Registration
      </h1>

      <div className="main-container container mx-auto flex flex-wrap md:flex-nowrap o justify-center gap-6 ">
        <div className="card-container grid w-full md:grid-cols-1 md:w-1/2 lg:grid-cols-3 gap-5 lg:w-fit">
          {allCourse.map((data) => (
         
            <Card
              image={data.image}
              title={data.title}
              description={data.description}
              price={data.price}
              credit={data.credit_hours}
            ></Card>
          ))}
        </div>

        <div className="cart-container w-full md:w-1/2 lg:w-1/3">
          <div className="card w-auto bg-base-100 rounded-lg">
            <div className="p-6">
              <h2 className="text-sky-500 text-lg font-bold mb-4">
                Credit Hour Remaining 7 hr
              </h2>
              <hr />
              <h2 className="card-title mt-4 font-bold text-xl">Course Name</h2>

              <ul className="course-list my-5">
                <li className="text-gray-400 leading-8">
                  <span>1</span> Introduction to c programming
                </li>
                <li className="text-gray-400 leading-8">
                  <span>2</span> Introduction to c programming
                </li>
              </ul>
              <hr />
              <div className="card-actions1">
                <p className="py-4 font-medium ">Total Credit Hour : 13</p>
              </div>
              <hr />
              <div className="card-actions2">
                <h4 className="mt-4 text-lg  font-semibold">
                  Total Price : 48000 USD
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
