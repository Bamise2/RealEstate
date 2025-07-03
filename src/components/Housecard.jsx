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
      <div className="flex basis-3/5  flex-col gap-5">
        <h1>
          <Link to={`/${item.id}`} className="inline-block font-bold text-xl text-[#444] transition transform duration-500 ease-in-out hover:scale-105 hover:text-black">{item.title}</Link>
        </h1>
        <p className="flex items-center gap-2 text-sm text-[#888]">
          <img src="/pin.png" alt="address icon" className={`${iconSize}`}/>
          <span>{item.address}</span>
        </p>
        <p className="bg-amber-200 text-xl font-semibold max-w-fit rounded-lg p-2">$ {item.price}</p>
        <div className="flex justify-between gap-2.5">
          <div className="flex gap-5">
            <div className="flex items-center gap-2 bg-[whitesmoke] p-2 rounded-md">
              <img src="/bed.png" alt="bed icon" className={`${iconSize}`}/>
              <span>{item.bedroom} bedroom </span>
            </div>
            <div className="flex items-center gap-2 bg-[whitesmoke] p-2 rounded-md">
              <img src="/bath.png" alt="bath icon" className={`${iconSize}`}/>
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="border py-2 px-1 rounded-md cursor-pointer hover:bg-[lightgray]">
              <img src="/save.png" alt="bookmark icon" className={`${iconSize}`}/>
            </div>
            <div className="border py-2 px-1 rounded-md cursor-pointer hover:bg-[lightgray]">
              <img src="/chat.png" alt="chat icon" className={`${iconSize}`}/>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
