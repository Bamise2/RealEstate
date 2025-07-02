export default function Filter() {
const item = "flex flex-col gap-2 text-base"
const input ="xl:w-[10  0px] p-[10px] border w-[70px] #e0e0e0 rounded-md"
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-light">Search results for: </h1>
      <label htmlFor="location" className={item}>
        Location
        <input
          type="text"
          name="location"
          id="location"
          placeholder="City Location"
          className="border p-3 rounded-md"
        />
      </label>
      <div className="flex justify-between h-[80px]">
        <div > 
          <label htmlFor="Type" className={item}>
            Type
            <select name="type" id="type" className={input}>
                <option value="">any</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
            </select>
          </label>
        </div>
        <div> 
          <label htmlFor="Property" className={item}>
            Property
            <select name="property" id="property" className={input}>
                <option value="">any</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
            </select>
          </label>
        </div>
        <div> 
          <label htmlFor="Min Price" className={item}>
            Min Price
            <input
              type="number"
              name="minPrice"
              min={0}
              max={10000000}
              step={1000}
              placeholder="any"
              className={input}
            />
          </label>
        </div>
        <div> 
          <label htmlFor="Max Price" className={item}>
            Max Price
            <input
              type="number"
              name="maxPrice"
              min={0}
              max={10000000}
              step={1000}
              placeholder="any"
              className={input}
            />
          </label>
        </div>
        <div> 
          <label htmlFor="bedroom" className={item}>
            Bedroom
            <input
              type="number"
              name="bedroom"
              min={1}
              max={7}
              placeholder="any"
              className={input}
            />
          </label>
        </div>
        <button className="bg-amber-300 cursor-pointer w-[120px] p-[10px] border-0 place-items-center ">
            <img src="/search.png" alt="search button image" className="h-[24px] w-[24px]"/>
        </button>
      </div>
    </div>
  );
}
