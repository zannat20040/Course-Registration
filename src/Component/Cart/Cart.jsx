export default function Cart({ clickCourse, totalCredit, creditRemaining,totalPrice }) {
//   console.log(clickCourse);
  return (
    <div className="card w-auto bg-base-100 rounded-lg">
      <div className="p-6">
        <h2 className="text-sky-500 text-lg font-bold mb-4">
          Credit Hour Remaining {creditRemaining} hr
        </h2>
        <hr />
        <h2 className="card-title mt-4 font-bold text-xl">Course Name</h2>

        <ul className="course-list my-5">
          {clickCourse.map((data, index) => (
            <li className="text-gray-400 leading-8">
              <span>{index + 1}</span> {data.title}
            </li>
          ))}
        </ul>

        <hr />
        <div className="card-actions1">
          <p className="py-4 font-medium ">Total Credit Hour : {totalCredit}</p>
        </div>
        <hr />
        <div className="card-actions2">
          <h4 className="mt-4 text-lg  font-semibold">
            Total Price :{totalPrice} USD
          </h4>
        </div>
      </div>
    </div>
  );
}
