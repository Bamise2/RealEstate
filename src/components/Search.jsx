import { useState } from "react";

const types = ["buy", "rent"];

export default function Search() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val)=>{
    setQuery(prev => ({...prev, type:val}))
  }

  return (
    <div className="w-full">
      <div>
        {types.map((type, index) => (
          <button 
          key={type}
          onClick={()=>switchType(type)}
          className={`border px-9 py-4 cursor-pointer font-semibold text-2xl capitalize border-b-0  ${query.type === type ? "bg-black text-white" : "bg-white"}
          ${index ==0 ? "rounded-tl-lg":"rounded-tr-lg border-l-0"}`}
          >{type}</button>
        ))}
      </div>
      <form action="post" className="flex-col lg:flex-row flex justify-between lg:border border-[#999] h-16 gap-5">
        <input
          type="text"
          name="location"
          id="location"
          placeholder="City Location"
          className="border border-[#999] lg:border-0  outline-0 lg:px-4 basis-1/3 p-5"
        />
        <input
          type="number"
          name="minPrice"
          id="minPrice"
          placeholder="Min Price"
          min={0}
          max={10000000}
          step={100}
          className="border border-[#999] lg:border-0  outline-0 lg:px-4 basis-1/3 p-5"
        />
        <input
          type="number"
          name="maxPrice"
          id="maxPrice"
          placeholder="Max Price"
          min={0}
          max={10000000}
          className="border border-[#999] lg:border-0  outline-0 lg:px-4 basis-1/3 p-5"
        />
        <button className="cursor-pointer bg-amber-300 lg:w-[100px] p-2.5 flex items-center justify-center ">
          <img src="/search.png" alt="search button"/>
        </button>   
      </form>
    </div>
  );
}
