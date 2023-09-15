import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
export default function Card() {
  const [allCourse, setallCourse] = useState([]);
  const [clickCourse, setClickCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setallCourse(data));
  }, []);

  const addCourse = (data) => {
    const isFind = clickCourse.find((item) => item.id === data.id);

    if (isFind) {
      return alert("booked");
    } 
    else {
      const newCredit = totalCredit + data.credit_hours;
      const newCreditRemaining = creditRemaining - data.credit_hours;
      const newPrice = totalPrice+ data.price 

      if (newCreditRemaining < 0) {
        return alert("no credit");
      } 
      else {
        setTotalCredit(newCredit);
        setCreditRemaining(newCreditRemaining);
        setClickCourse([...clickCourse, data]);
        setTotalPrice(newPrice)
      }
    }
  };

  return (
    <div className="main-container container mx-auto flex flex-wrap md:flex-nowrap o justify-center gap-6 ">
      <div className="card-container grid w-full md:grid-cols-1 md:w-1/2 lg:grid-cols-3 gap-5 lg:w-fit">
        {allCourse.map((data) => (
          <div
            className="card w-auto bg-white border-0 p-3 rounded-lg "
            key={data.id}
          >
            <figure>
              <img src={data.image} alt="album" className="rounded-lg w-full" />
            </figure>
            <div className="card-body px-0 pb-0 justify-between">
              <h2 className="card-title font-bold">{data.title}</h2>
              <p className="text-gray-400 flex-grow-0">{data.description}</p>
              <div className="credit-&-price flex mt-2 text-lg lg:text-sm xl:text-lg">
                <p className="text-gray-400 flex items-center">
                  <span>
                    <img
                      src="https://i.ibb.co/WG1zz9r/dollar-sign-1.png"
                      alt=""
                    />
                  </span>
                  Price: <span>{data.price}</span>
                </p>
                <p className="text-gray-400 flex items-center flex-grow-0">
                  <span>
                    <img src="https://i.ibb.co/6wqPskd/Frame.png" alt="" />
                  </span>
                  Credit: <span>{data.credit_hours} hr</span>
                </p>
              </div>
              <div className="card-actions justify-end">
                <button
                  className="btn bg-sky-500 text-white w-full mt-3"
                  onClick={() => addCourse(data)}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-container w-full md:w-1/2 lg:w-1/3">
        <Cart
          clickCourse={clickCourse}
          creditRemaining={creditRemaining}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
        ></Cart>
      </div>
    </div>
  );
}
