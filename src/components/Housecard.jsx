import { Link } from "react-router-dom";

const iconSize = "h-[16px] w-[16px]"

export default function Housecard({ item }) {
  return (
    <div className="flex gap-5">
      <Link to={`/${item.id}`} className="basis-2/5 h-[200px]">
        <img
          src={item.images}
          alt="House Image"
          className="rounded-lg w-full h-full object-cover"
        />
      </Link>
      <div className="flex basis-3/5 justify-between flex-col gap-2.5">
        <h1>
          <Link to={`/${item.id}`} className="inline-block font-bold text-xl text-[#444] transition transform duration-500 ease-in-out hover:scale-105 hover:text-black">{item.title}</Link>
        </h1>
        <p className="flex items-center gap-2">
          <img src="/pin.png" alt="address icon" className={`${iconSize}`}/>
          <span>{item.address}</span>
        </p>
        <p>$ {item.price}</p>
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex items-center">
              <img src="/bed.png" alt="bed icon" className={`${iconSize}`}/>
              <span>{item.bedroom} bedroom </span>
            </div>
            <div className="flex items-center">
              <img src="/bath.png" alt="bath icon" className={`${iconSize}`}/>
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="flex items-center ">
            <div>
              <img src="/save.png" alt="bookmark icon" className={`${iconSize}`}/>
            </div>
            <div>
              <img src="/chat.png" alt="chat icon" className={`${iconSize}`}/>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
