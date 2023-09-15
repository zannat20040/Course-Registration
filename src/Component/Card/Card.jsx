
export default function Card({image,title,description,price,credit}) {

  return (
    <div className="card w-auto bg-white border-0 p-3 rounded-lg ">
      <figure>
        <img
          src={image}
          alt="album"
          className="rounded-lg w-full"
        />
      </figure>
      <div className="card-body px-0 pb-0 justify-between">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-gray-400 flex-grow-0">
          {description}
        </p>
        <div className="credit-&-price flex mt-2 text-lg lg:text-sm xl:text-lg">
          <p className="text-gray-400 flex items-center">
            <span>
              <img src="https://i.ibb.co/WG1zz9r/dollar-sign-1.png" alt="" />
            </span>{" "}
            Price: <span>{price}</span>
          </p>
          <p className="text-gray-400 flex items-center flex-grow-0">
            <span>
              <img src="https://i.ibb.co/6wqPskd/Frame.png" alt="" />
            </span>
            Credit: <span>{credit} hr</span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-sky-500 text-white w-full mt-3">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
