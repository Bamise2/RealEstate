import Filter from "../components/Filter";
import { listData } from "../lib/dummyData";
import HouseCard from "../components/Housecard";
import Map from "../components/Map";

export default function List() {


  return (
    <div className="flex h-[calc(100dvh-100px)]">
      <div className="basis-3/5 overflow-y-scroll pb-12">
        <div className="flex flex-col pr-14 gap-14">
          <Filter />
          {listData.map((item) => (
            <HouseCard key={item.id} item={item}/>
          ))}
        </div>
      </div>
      <div className="basis-2/5 h-full justify-end bg-[#fcf5f3]">
          <Map items={listData}/>
      </div>
    </div>
  );
}
